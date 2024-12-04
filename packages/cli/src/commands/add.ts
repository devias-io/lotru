import path from "node:path";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";

import { addComponents } from "@/src/utils/add-components";
import { getConfig } from "@/src/utils/get-config";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { resolveRegistryIndex } from "@/src/utils/registry";

export const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  all: z.boolean(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  silent: z.boolean(),
});

export const add = new Command()
  .name("add")
  .description("add a component to your project")
  .argument("[components...]", "the components to add or a url to the component.")
  .option("-a, --all", "install all ui components.", false)
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option("-s, --silent", "mute output.", false)
  .action(async (components: string[], opts: Record<string, string>): Promise<void> => {
    try {
      const options = addOptionsSchema.parse({
        components,
        cwd: path.resolve(opts.cwd),
        ...opts,
      });

      const config = await getConfig(options.cwd);

      if (!config) {
        throw new Error(`Failed to read config at ${highlighter.info(options.cwd)}.`);
      }

      if (options.all) {
        const allComponents = await resolveRegistryIndex();
        options.components = allComponents.map((component) => component.id);
      } else if (!options.components?.length) {
        const selectedComponents = await promptComponentSelection();
        options.components = selectedComponents;
      }

      if (!options.components?.length) {
        logger.warn("No components selected. Exiting.");
        logger.break();
        process.exit(1);
      }

      await addComponents(options.components, config, {
        overwrite: options.overwrite,
        silent: options.silent,
      });
    } catch (error) {
      handleError(error);
    }
  });

async function promptComponentSelection(): Promise<string[]> {
  const allComponents = await resolveRegistryIndex();

  const { components } = await prompts([
    {
      type: "multiselect",
      name: "components",
      message: "Which components would you like to add?",
      choices: allComponents.map((component) => ({
        title: component.id,
        value: component.id,
        selected: true,
      })),
    },
  ]);

  return components;
}
