import path from "node:path";
import { existsSync, promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import deepmerge from "deepmerge";
import objectToString from "stringify-object";
import {
  type ArrayLiteralExpression,
  type ObjectLiteralExpression,
  type PropertyAssignment,
  type SourceFile,
  type VariableStatement,
  Project,
  ScriptKind,
  SyntaxKind,
} from "ts-morph";
import { z } from "zod";

import { type Config, THEME_FILE } from "@/src/utils/get-config";
import { highlighter } from "@/src/utils/highlighter";
import { registryPigmentSchema } from "@/src/utils/registry/schema";
import { spinner } from "@/src/utils/spinner";

export async function updatePigmentConfig(
  pigmentConfig: z.infer<typeof registryPigmentSchema>["config"] | undefined,
  config: Config,
  opt: {
    silent?: boolean;
  }
): Promise<void> {
  if (!pigmentConfig) {
    return;
  }

  const options = {
    silent: false,
    ...opt,
  };

  const themeFilePath = path.resolve(config.resolvedPaths.cwd, THEME_FILE);
  const themeFileRelativePath = path.relative(config.resolvedPaths.cwd, THEME_FILE);
  const themeSpinner = spinner(`Updating ${highlighter.info(themeFileRelativePath)}`, {
    silent: options.silent,
  }).start();

  if (!existsSync(themeFilePath)) {
    themeSpinner.fail();
    throw new Error(`Theme file not found at ${highlighter.info(themeFileRelativePath)}.`);
  }

  const input = await fs.readFile(themeFilePath, "utf8");
  const output = await transformTheme(input, pigmentConfig.theme ?? {}, config);
  await fs.writeFile(themeFilePath, output, "utf8");
  themeSpinner.succeed();
}

async function transformTheme(
  input: string,
  theme: Record<string, unknown>,
  config: Config
): Promise<string> {
  const sourceFile = await createThemeSourceFile(input, config);

  const configObject = getConfigObject(sourceFile);

  // We couldn't find the config object, so we return the input as is.
  if (!configObject) {
    return input;
  }

  await deepMergeObjectLiteral(configObject, theme);

  return sourceFile.getFullText();
}

async function createThemeSourceFile(input: string, config: Config | null): Promise<SourceFile> {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "lotru-"));
  const resolvedPath = THEME_FILE;
  const tempFile = path.join(dir, `lotru-${path.basename(resolvedPath)}`);

  const project = new Project({
    compilerOptions: {},
  });

  const sourceFile = project.createSourceFile(tempFile, input, {
    // Note: .js and .mjs can still be valid for TS projects.
    // We can't infer TypeScript from config.tsx.
    scriptKind: path.extname(resolvedPath) === ".ts" ? ScriptKind.TS : ScriptKind.JS,
  });

  return sourceFile;
}

function getConfigObject(sourceFile: SourceFile): ObjectLiteralExpression | null {
  const defaultExportSymbol = sourceFile.getDefaultExportSymbol();

  if (!defaultExportSymbol) {
    return null;
  }

  const exportAssignment = defaultExportSymbol
    .getDeclarations()[0]
    ?.asKind(SyntaxKind.ExportAssignment);

  if (!exportAssignment) {
    return null;
  }

  const expression = exportAssignment.getExpression();

  // Case 1: Direct Object Literal Export
  if (expression.getKind() === SyntaxKind.ObjectLiteralExpression) {
    return expression as ObjectLiteralExpression;
  }

  // Case 2: Exporting a Variable
  if (expression.getKind() === SyntaxKind.Identifier) {
    const variableName = expression.getText();
    const variableDeclaration = sourceFile.getVariableDeclarationOrThrow(variableName);
    return variableDeclaration
      .getInitializerOrThrow()
      ?.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
  }

  return null;
}

async function deepMergeObjectLiteral(
  configObject: ObjectLiteralExpression,
  pigmentConfig: any
): Promise<void> {
  // Nest all spread properties.
  nestSpreadProperties(configObject);

  const configObjectString = configObject.getText();
  const parsedConfigObject = await parseObjectLiteral(configObjectString);
  const result = deepmerge(parsedConfigObject, pigmentConfig, {
    arrayMerge: (_, src) => src,
  });
  const resultString = objectToString(result)
    .replace(/\'\.\.\.(.*)\'/g, "...$1") // Remove quote around spread element
    .replace(/\'\"/g, "'") // Replace `\" with "
    .replace(/\"\'/g, "'") // Replace `\" with "
    .replace(/\'\[/g, "[") // Replace `[ with [
    .replace(/\]\'/g, "]") // Replace `] with ]
    .replace(/\'\\\'/g, "'") // Replace `\' with '
    .replace(/\\\'/g, "'") // Replace \' with '
    .replace(/\\\'\'/g, "'")
    .replace(/\'\'/g, "'");
  configObject.replaceWithText(resultString);

  // Unnest all spread properties.
  unnestSpreadProperties(configObject);
}

function nestSpreadProperties(obj: ObjectLiteralExpression): void {
  const properties = obj.getProperties();

  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.isKind(SyntaxKind.SpreadAssignment)) {
      const spreadAssignment = prop.asKindOrThrow(SyntaxKind.SpreadAssignment);
      const spreadText = spreadAssignment.getExpression().getText();

      // Replace spread with a property assignment
      obj.insertPropertyAssignment(i, {
        // Need to escape the name with " so that deepmerge doesn't mishandle the key
        name: `"___${spreadText.replace(/^\.\.\./, "")}"`,
        initializer: `"...${spreadText.replace(/^\.\.\./, "")}"`,
      });

      // Remove the original spread assignment
      spreadAssignment.remove();
    } else if (prop.isKind(SyntaxKind.PropertyAssignment)) {
      const propAssignment = prop.asKindOrThrow(SyntaxKind.PropertyAssignment);
      const initializer = propAssignment.getInitializer();

      if (initializer && initializer.isKind(SyntaxKind.ObjectLiteralExpression)) {
        // Recursively process nested object literals
        nestSpreadProperties(initializer.asKindOrThrow(SyntaxKind.ObjectLiteralExpression));
      } else if (initializer && initializer.isKind(SyntaxKind.ArrayLiteralExpression)) {
        nestSpreadElements(initializer.asKindOrThrow(SyntaxKind.ArrayLiteralExpression));
      }
    }
  }
}

function nestSpreadElements(arr: ArrayLiteralExpression): void {
  const elements = arr.getElements();
  for (let j = 0; j < elements.length; j++) {
    const element = elements[j];
    if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
      // Recursive check on objects within arrays
      nestSpreadProperties(element.asKindOrThrow(SyntaxKind.ObjectLiteralExpression));
    } else if (element.isKind(SyntaxKind.ArrayLiteralExpression)) {
      // Recursive check on nested arrays
      nestSpreadElements(element.asKindOrThrow(SyntaxKind.ArrayLiteralExpression));
    } else if (element.isKind(SyntaxKind.SpreadElement)) {
      const spreadText = element.getText();
      // Spread element within an array
      arr.removeElement(j);
      arr.insertElement(j, `"${spreadText}"`);
    }
  }
}

function unnestSpreadProperties(obj: ObjectLiteralExpression): void {
  const properties = obj.getProperties();

  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.isKind(SyntaxKind.PropertyAssignment)) {
      const propAssignment = prop as PropertyAssignment;
      const initializer = propAssignment.getInitializer();

      if (initializer && initializer.isKind(SyntaxKind.StringLiteral)) {
        const value = initializer.asKindOrThrow(SyntaxKind.StringLiteral).getLiteralValue();
        if (value.startsWith("...")) {
          obj.insertSpreadAssignment(i, { expression: value.slice(3) });
          propAssignment.remove();
        }
      } else if (initializer?.isKind(SyntaxKind.ObjectLiteralExpression)) {
        unnestSpreadProperties(initializer as ObjectLiteralExpression);
      } else if (initializer && initializer.isKind(SyntaxKind.ArrayLiteralExpression)) {
        unnsetSpreadElements(initializer.asKindOrThrow(SyntaxKind.ArrayLiteralExpression));
      }
    }
  }
}

function unnsetSpreadElements(arr: ArrayLiteralExpression): void {
  const elements = arr.getElements();
  for (let j = 0; j < elements.length; j++) {
    const element = elements[j];
    if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
      // Recursive check on objects within arrays
      unnestSpreadProperties(element.asKindOrThrow(SyntaxKind.ObjectLiteralExpression));
    } else if (element.isKind(SyntaxKind.ArrayLiteralExpression)) {
      // Recursive check on nested arrays
      unnsetSpreadElements(element.asKindOrThrow(SyntaxKind.ArrayLiteralExpression));
    } else if (element.isKind(SyntaxKind.StringLiteral)) {
      const spreadText = element.getText();
      // check if spread element
      const spreadTest = /(?:^['"])(\.\.\..*)(?:['"]$)/g;
      if (spreadTest.test(spreadText)) {
        arr.removeElement(j);
        arr.insertElement(j, spreadText.replace(spreadTest, "$1"));
      }
    }
  }
}

async function parseObjectLiteral(objectLiteralString: string): Promise<any> {
  const sourceFile = await createThemeSourceFile(`const obj = ${objectLiteralString}`, null);

  const statement = sourceFile.getStatements()[0];
  if (statement?.getKind() === SyntaxKind.VariableStatement) {
    const declaration = (statement as VariableStatement).getDeclarationList()?.getDeclarations()[0];
    const initializer = declaration.getInitializer();
    if (initializer?.isKind(SyntaxKind.ObjectLiteralExpression)) {
      return await parseObjectLiteralExpression(initializer);
    }
  }

  throw new Error("Invalid input: not an object literal");
}

function parseObjectLiteralExpression(node: ObjectLiteralExpression): any {
  const result: any = {};
  for (const property of node.getProperties()) {
    if (property.isKind(SyntaxKind.PropertyAssignment)) {
      const name = property.getName().replace(/\'/g, "");
      if (property.getInitializer()?.isKind(SyntaxKind.ObjectLiteralExpression)) {
        result[name] = parseObjectLiteralExpression(
          property.getInitializer() as ObjectLiteralExpression
        );
      } else if (property.getInitializer()?.isKind(SyntaxKind.ArrayLiteralExpression)) {
        result[name] = parseArrayLiteralExpression(
          property.getInitializer() as ArrayLiteralExpression
        );
      } else {
        result[name] = parseValue(property.getInitializer());
      }
    }
  }
  return result;
}

function parseArrayLiteralExpression(node: ArrayLiteralExpression): any[] {
  const result: any[] = [];
  for (const element of node.getElements()) {
    if (element.isKind(SyntaxKind.ObjectLiteralExpression)) {
      result.push(
        parseObjectLiteralExpression(element.asKindOrThrow(SyntaxKind.ObjectLiteralExpression))
      );
    } else if (element.isKind(SyntaxKind.ArrayLiteralExpression)) {
      result.push(
        parseArrayLiteralExpression(element.asKindOrThrow(SyntaxKind.ArrayLiteralExpression))
      );
    } else {
      result.push(parseValue(element));
    }
  }
  return result;
}

function parseValue(node: any): any {
  switch (node.getKind()) {
    case SyntaxKind.StringLiteral:
      return node.getText();
    case SyntaxKind.NumericLiteral:
      return Number(node.getText());
    case SyntaxKind.TrueKeyword:
      return true;
    case SyntaxKind.FalseKeyword:
      return false;
    case SyntaxKind.NullKeyword:
      return null;
    case SyntaxKind.ArrayLiteralExpression:
      return node.getElements().map(parseValue);
    case SyntaxKind.ObjectLiteralExpression:
      return parseObjectLiteralExpression(node);
    default:
      return node.getText();
  }
}
