import { promises as fs } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { Project, ScriptKind, SourceFile } from "ts-morph";

import { type Config } from "@/src/utils/get-config";

export type TransformOpts = {
  filename: string;
  input: string;
  config: Config;
};

export type Transformer<Output = SourceFile> = (
  opts: TransformOpts & {
    sourceFile: SourceFile;
  }
) => Promise<Output>;

const project = new Project({
  compilerOptions: {},
});

async function createTempFile(filename: string): Promise<string> {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "lotru-"));
  return path.join(dir, filename);
}

export async function transform(opts: TransformOpts, transformers: Transformer[] = []) {
  const tempFile = await createTempFile(opts.filename);
  const sourceFile = project.createSourceFile(tempFile, opts.input, {
    scriptKind: ScriptKind.TSX,
  });

  for (const transformer of transformers) {
    await transformer({ sourceFile, ...opts });
  }

  return sourceFile.getText();
}

export async function transformImport({
  sourceFile,
  config,
}: TransformOpts & {
  sourceFile: SourceFile;
}): Promise<SourceFile> {
  const importDeclarations = sourceFile.getImportDeclarations();

  for (const importDeclaration of importDeclarations) {
    let moduleSpecifier = importDeclaration.getModuleSpecifierValue();

    if (config.aliases.lib && moduleSpecifier.match(/^@\/lib/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/lib/, config.aliases.lib);
    }

    if (config.aliases.hooks && moduleSpecifier.match(/^@\/hooks/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/hooks/, config.aliases.hooks);
    }

    if (config.aliases.components && moduleSpecifier.match(/^@\/components/)) {
      moduleSpecifier = moduleSpecifier.replace(/^@\/components/, config.aliases.components);
    }

    importDeclaration.setModuleSpecifier(moduleSpecifier);
  }

  return sourceFile;
}
