import { existsSync, promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { rimraf } from "rimraf";
import { Project, ScriptKind, type SourceFile } from "ts-morph";

import { colors } from "./default/colors";
import { hooks } from "./default/hooks";
import { blocks } from "./default/blocks";
import { examples } from "./default/examples";
import { ui } from "./default/ui";
import { type RegistryComponent, type RegistryIndex, registryComponentSchema } from "./schema";
import { themePreset } from "./default/theme-preset";

const REGISTRY_PATH = path.join(process.cwd(), "../website/public/registry/alpha/default");

const project = new Project({
  compilerOptions: {},
});

async function createTempFile(filename: string): Promise<string> {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "lotru-"));
  return path.join(dir, filename);
}

function transformImport(sourceFile: SourceFile): SourceFile {
  const importDeclarations = sourceFile.getImportDeclarations();

  for (const importDeclaration of importDeclarations) {
    let moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    if (moduleSpecifier.match(/^@\/src\/lib/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/src\/lib\//, "@/lib/");
    }

    if (moduleSpecifier.match(/^@\/src\/hooks/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/src\/hooks\//, "@/hooks/");
    }

    if (moduleSpecifier.match(/^@\/src\/components/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/src\/components\//, "@/components/");
    }

    importDeclaration.setModuleSpecifier(moduleSpecifier);
  }

  return sourceFile;
}

async function buildContentComponents(): Promise<void> {
  const components: RegistryComponent[] = [...ui, ...examples];

  const targetPath = path.join(process.cwd(), "../website/src/__registry__");

  if (existsSync(targetPath)) {
    rimraf.sync(targetPath);
  }

  await fs.mkdir(targetPath, { recursive: true });

  let content = `// @ts-nocheck
// This file is autogenerated
// Do not edit this file directly.
import * as React from "react";

export const index: Record<
  string,
  {
    id: string;
    name: string;
    description: string;
    type: string;
    files: {
      path: string;
    }[];
    component?: React.LazyExoticComponent<() => React.JSX.Element>;
  }
> = {`;

  for (const component of components) {
    let componentPath;

    if (component.id.startsWith("examples/")) {
      componentPath = `@/src/components/${component.id}`;

      if (component.files?.length) {
        const files = component.files.map((file) => ({
          path: file.path,
        }));

        if (files?.length) {
          componentPath = `@/src/components/${files[0].path}`;
        }
      }
    }

    content += `
  "${component.id}": {
    id: "${component.id}",
    name: "${component.name}",
    description: "${component.description ?? ""}",
    files: [${component.files?.map((file) => {
      return `{
      path: "${file.path}",
    }`;
    })}],
    ${componentPath ? `component: React.lazy(() => import("${componentPath}"))` : ""}
  },`;
  }

  content += `
};
`;

  await fs.writeFile(path.join(targetPath, "index.ts"), content);
}

async function buildComponentsIndex(): Promise<void> {
  const components: RegistryComponent[] = [...ui, ...examples, ...blocks];

  const groupped = new Map<"ui" | "examples" | "blocks", RegistryIndex>();

  for (const component of components) {
    const type = component.id.split("/")[0] as "ui" | "examples" | "blocks";

    if (!groupped.has(type)) {
      groupped.set(type, []);
    }

    groupped.get(type)!.push({
      id: component.id,
      name: component.name,
    });
  }

  for (const [type, content] of groupped) {
    const tagetPath = path.join(REGISTRY_PATH, type);

    if (!existsSync(path.join(tagetPath))) {
      await fs.mkdir(tagetPath, { recursive: true });
    }

    const filePath = path.join(tagetPath, "/index.json");

    rimraf.sync(filePath);

    await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf8");
  }
}

async function buildComponents(): Promise<void> {
  const components = [...ui, ...examples, ...blocks];

  const groupped = new Map<"ui" | "examples" | "blocks", RegistryComponent[]>();

  for (const component of components) {
    const type = component.id.split("/")[0] as "ui" | "examples" | "blocks";

    if (!groupped.has(type)) {
      groupped.set(type, []);
    }

    groupped.get(type)!.push(component);
  }

  for (const [type, components] of groupped) {
    const targetPath = path.join(REGISTRY_PATH, type);

    if (!existsSync(targetPath)) {
      await fs.mkdir(targetPath, { recursive: true });
    }

    for (const component of components) {
      let files: {
        path: string;
        content: string;
      }[] = [];

      if (component.files) {
        const result = await Promise.all(
          component.files.map(async (file) => {
            const filePath = path.join(process.cwd(), "../website/src/components", file.path);
            const content: string = await fs.readFile(filePath, "utf8");

            const tempFile = await createTempFile(file.path);
            let sourceFile = project.createSourceFile(tempFile, content, {
              scriptKind: ScriptKind.TSX,
            });

            sourceFile = transformImport(sourceFile);

            return {
              path: file.path,
              content: sourceFile.getText(),
            };
          }),
        );

        files = result.filter(Boolean) as typeof files;
      }

      const content = registryComponentSchema.parse({ ...component, files });
      const filePath = path.join(targetPath, `${component.id.replace(`${type}/`, "")}.json`);

      rimraf.sync(filePath);

      await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf8");
    }
  }
}

async function buildHooksIndex(): Promise<void> {
  const targetPath = path.join(REGISTRY_PATH, "hooks");

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  const content = hooks.map((hook) => ({ id: hook.id, name: hook.name }));
  const filePath = path.join(targetPath, "/index.json");

  rimraf.sync(filePath);

  await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf8");
}

async function buildHooks(): Promise<void> {
  const targetPath = path.join(REGISTRY_PATH, "hooks");

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  for (const hook of hooks) {
    let files: {
      path: string;
      content: string;
    }[] = [];

    if (hook.files) {
      const result = await Promise.all(
        hook.files.map(async (file) => {
          const filePath = path.join(process.cwd(), "../website/src", file.path);
          const content: string = await fs.readFile(filePath, "utf8");

          const tempFile = await createTempFile(file.path);
          let sourceFile = project.createSourceFile(tempFile, content, {
            scriptKind: ScriptKind.TSX,
          });

          sourceFile = transformImport(sourceFile);

          return {
            path: file.path,
            content: sourceFile.getText(),
          };
        }),
      );

      files = result.filter(Boolean) as typeof files;
    }

    const content = registryComponentSchema.parse({ ...hook, files });
    const fileName = `${hook.id.replace("hooks/", "")}.json`;
    const filePath = path.join(targetPath, fileName);

    rimraf.sync(filePath);

    await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf8");
  }
}

async function buildColorsIndex(): Promise<void> {
  const targetPath = path.join(REGISTRY_PATH, "colors");

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  const content = colors.map((color) => ({ id: color.id, name: color.name }));
  const filePath = path.join(targetPath, "/index.json");

  rimraf.sync(filePath);

  await fs.writeFile(filePath, JSON.stringify(content, null, 2), "utf8");
}

async function buildColors(): Promise<void> {
  const targetPath = path.join(REGISTRY_PATH, "colors");

  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true });
  }

  for (const color of colors) {
    const fileName = `${color.id.replace("colors/", "")}.json`;
    const filePath = path.join(targetPath, fileName);

    rimraf.sync(filePath);

    await fs.writeFile(filePath, JSON.stringify(color, null, 2), "utf8");
  }
}

async function buildThemePreset(): Promise<void> {
  const filePath = path.join(REGISTRY_PATH, "theme-preset.json");

  rimraf.sync(filePath);

  await fs.writeFile(filePath, JSON.stringify(themePreset, null, 2), "utf8");
}

async function main(): Promise<void> {
  await buildContentComponents();

  await buildComponentsIndex();
  await buildComponents();

  await buildHooksIndex();
  await buildHooks();

  await buildColorsIndex();
  await buildColors();

  await buildThemePreset();
}

main()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
  });
