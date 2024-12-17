import { existsSync, promises as fs } from "node:fs";
import path, { basename } from "node:path";
import prompts from "prompts";
import { z } from "zod";

import { Config } from "@/src/utils/get-config";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { RegistryComponent, registryFileSchema } from "@/src/utils/registry/schema";
import { spinner } from "@/src/utils/spinner";
import { transform, transformImport } from "@/src/utils/transformer";

function getRegistryItemFileTargetPath(
  file: z.infer<typeof registryFileSchema>,
  config: Config,
  override?: string
) {
  if (override) {
    return override;
  }

  if (file.path.startsWith("lib/")) {
    return config.resolvedPaths.lib;
  }

  if (file.path.startsWith("hooks/")) {
    return config.resolvedPaths.hooks;
  }

  if (file.path.startsWith("ui/")) {
    return path.join(config.resolvedPaths.components, "ui");
  }

  if (file.path.startsWith("examples/")) {
    return path.join(config.resolvedPaths.components, "examples");
  }

  if (file.path.startsWith("blocks/")) {
    return path.join(config.resolvedPaths.components, "blocks");
  }

  return config.resolvedPaths.components;
}

export async function updateFiles(
  files: RegistryComponent["files"],
  config: Config,
  opts: {
    overwrite?: boolean;
    force?: boolean;
    silent?: boolean;
  }
): Promise<void> {
  if (!files?.length) {
    return;
  }

  const options = {
    overwrite: false,
    force: false,
    silent: false,
    ...opts,
  };

  const filesCreatedSpinner = spinner(`Updating files.`, {
    silent: options.silent,
  }).start();

  const filesCreated = [];
  const filesUpdated = [];
  const filesSkipped = [];

  for (const file of files) {
    if (!file.content) {
      continue;
    }

    const targetDir = getRegistryItemFileTargetPath(file, config);
    const fileName = basename(file.path);
    const filePath = path.join(targetDir, fileName);

    const existingFile = existsSync(filePath);

    if (existingFile && !options.overwrite) {
      filesCreatedSpinner.stop();

      const { overwrite } = await prompts({
        type: "confirm",
        name: "overwrite",
        message: `The file ${highlighter.info(
          fileName
        )} already exists. Would you like to overwrite?`,
        initial: false,
      });

      if (!overwrite) {
        filesSkipped.push(path.relative(config.resolvedPaths.cwd, filePath));
        continue;
      }

      filesCreatedSpinner.start();
    }

    const content = await transform(
      {
        filename: fileName,
        input: file.content,
        config,
      },
      [transformImport]
    );

    if (!existsSync(targetDir)) {
      await fs.mkdir(targetDir, { recursive: true });
    }

    await fs.writeFile(filePath, content, "utf-8");

    existingFile
      ? filesUpdated.push(path.relative(config.resolvedPaths.cwd, filePath))
      : filesCreated.push(path.relative(config.resolvedPaths.cwd, filePath));
  }

  const hasUpdatedFiles = filesCreated.length || filesUpdated.length;

  if (!hasUpdatedFiles && !filesSkipped.length) {
    filesCreatedSpinner.info("No files updated.");
  }

  if (filesCreated.length) {
    filesCreatedSpinner.succeed(
      `Created ${filesCreated.length} ${filesCreated.length === 1 ? "file" : "files"}:`
    );

    if (!options.silent) {
      for (const file of filesCreated) {
        logger.log(`  - ${file}`);
      }
    }
  } else {
    filesCreatedSpinner.stop();
  }

  if (filesUpdated.length) {
    spinner(`Updated ${filesUpdated.length} ${filesUpdated.length === 1 ? "file" : "files"}:`, {
      silent: options.silent,
    }).info();

    if (!options.silent) {
      for (const file of filesUpdated) {
        logger.log(`  - ${file}`);
      }
    }
  }

  if (filesSkipped.length) {
    spinner(`Skipped ${filesSkipped.length} ${filesUpdated.length === 1 ? "file" : "files"}:`, {
      silent: options.silent,
    }).info();

    if (!options.silent) {
      for (const file of filesSkipped) {
        logger.log(`  - ${file}`);
      }
    }
  }

  if (!options.silent) {
    logger.break();
  }
}
