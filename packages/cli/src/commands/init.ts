import fs from "node:fs/promises";
import path from "node:path";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";

import { addTheme } from "@/src/utils/add-theme";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import {
  type Config,
  type RawConfig,
  CONFIG_FILE,
  DEFAULT_COLOR,
  DEFAULT_COMPONENTS,
  DEFAULT_HOOKS,
  DEFAULT_LIB,
  PIGMENT_CONFIG_FILE,
  THEME_FILE,
  rawConfigSchema,
  resolveConfigPaths,
} from "@/src/utils/get-config";
import { logger } from "@/src/utils/logger";
import { spinner } from "@/src/utils/spinner";
import { updateDependencies } from "@/src/utils/updaters/update-dependencies";

export const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  silent: z.boolean(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install common dependencies")
  .option(
    "-c, --cwd <cwd>",
    "the working directory. defaults to the current directory.",
    process.cwd()
  )
  .option("-y, --yes", "skip confirmation prompt.", true)
  .option("-d, --defaults,", "use default configuration.", false)
  .option("-f, --force", "force overwrite of existing configuration.", false)
  .option("-s, --silent", "mute output.", false)
  .action(async (opts: Record<string, string>): Promise<void> => {
    try {
      const options = initOptionsSchema.parse({
        cwd: path.resolve(opts.cwd),
        ...opts,
      });

      await runInit(options);

      logger.log(
        `${highlighter.success("Success!")} Project initialization completed. You may now add components.`
      );
      logger.log(
        `\n${highlighter.warn("Warning!")} You should import pigment css file in the root layout and pigment.config.ts in the setup.\n`
      );
    } catch (error) {
      handleError(error);
    }
  });

export async function runInit(options: z.infer<typeof initOptionsSchema>): Promise<void> {
  const rawConfig = await promptForConfig();
  const config = await resolveConfigPaths(options.cwd, rawConfig);

  if (!options.yes) {
    const { proceed } = await prompts({
      type: "confirm",
      name: "proceed",
      message: `Write configuration to ${highlighter.info(CONFIG_FILE)}. Proceed?`,
      initial: true,
    });

    if (!proceed) {
      process.exit(0);
    }
  }

  // Write the configuration file
  const configSpinner = spinner(`Writing ${CONFIG_FILE}.`).start();
  const configPath = path.resolve(options.cwd, CONFIG_FILE);
  await fs.writeFile(configPath, JSON.stringify(rawConfig, null, 2), "utf8");
  configSpinner.succeed();

  // Write theme file
  const themeSpinner = spinner(`Writing ${THEME_FILE}.`).start();
  const themePath = path.resolve(options.cwd, THEME_FILE);
  await fs.writeFile(
    themePath,
    `const theme = {};

export default theme;    
`,
    "utf8"
  );
  themeSpinner.succeed();

  // Write the Pigment configuration file
  const pigmentConfigSpinner = spinner(`Writing ${PIGMENT_CONFIG_FILE}.`).start();
  const pigmentConfigPath = path.resolve(options.cwd, PIGMENT_CONFIG_FILE);
  let pigmentConfig: string;

  if (config.framework === "nextjs") {
    pigmentConfig = `import { extendTheme } from "@pigment-css/nextjs-plugin";

import theme from "./theme";

const config = {
  theme: extendTheme(theme),
};

export default config;    
`;
  } else if (config.framework === "vite") {
    pigmentConfig = `import { extendTheme } from "@pigment-css/vite-plugin";

    import theme from "./theme";
    
    const config = {
      theme: extendTheme(theme),
    };
    
    export default config;    
    `;
  } else {
    throw new Error(`Unsupported framework: ${config.framework}`);
  }

  await fs.writeFile(pigmentConfigPath, pigmentConfig, "utf8");
  pigmentConfigSpinner.succeed();

  // Install common dependencies
  const dependencies: string[] = ["@pigment-css/react"];

  if (config.framework === "nextjs") {
    dependencies.push("@pigment-css/nextjs-plugin");
  } else if (config.framework === "vite") {
    dependencies.push("@pigment-css/vite-plugin");
  } else {
    throw new Error(`Unsupported framework: ${config.framework}`);
  }

  await updateDependencies(dependencies, config, {
    silent: options.silent,
  });

  await addTheme(config, {
    overwrite: true,
    silent: options.silent,
  });
}

async function promptForConfig(defaultConfig: Config | null = null): Promise<RawConfig> {
  const options = await prompts([
    {
      type: "select",
      name: "framework",
      message: `What ${highlighter.info("framework")} are you using?`,
      choices: [
        { title: "Next.js", value: "nextjs" },
        { title: "Vite", value: "vite" },
      ],
      initial: 0,
    },
    {
      type: "toggle",
      name: "typescript",
      message: `Would you like to use ${highlighter.info("TypeScript")} (recommended)?`,
      initial: defaultConfig?.tsx ?? true,
      active: "yes",
      inactive: "no",
    },
    {
      type: "toggle",
      name: "srcDir",
      message: `Is your source code located in a ${highlighter.info("src")} directory?`,
      initial: defaultConfig?.srcDir ?? false,
      active: "yes",
      inactive: "no",
    },
    // {
    //   type: "text",
    //   name: "theme",
    //   message: `Where is your ${highlighter.info("theme.ts")} located?`,
    //   initial: "./",
    // },
    // {
    //   type: "text",
    //   name: "pigmentConfig",
    //   message: `Where is your ${highlighter.info("pigment.config.ts")} located?`,
    //   initial: "./",
    // },
    {
      type: "text",
      name: "lib",
      message: `Configure the import alias for ${highlighter.info("lib")}:`,
      initial: (_, values) => {
        const value = defaultConfig?.aliases["lib"] ?? DEFAULT_LIB;

        return values.srcDir && !value.startsWith("@/src")
          ? value.replace(/^@\//, "@/src/")
          : value;
      },
    },
    {
      type: "text",
      name: "hooks",
      message: `Configure the import alias for ${highlighter.info("hooks")}:`,
      initial: (_, values) => {
        const value = defaultConfig?.aliases["hooks"] ?? DEFAULT_HOOKS;

        return values.srcDir && !value.startsWith("@/src")
          ? value.replace(/^@\//, "@/src/")
          : value;
      },
    },
    {
      type: "text",
      name: "components",
      message: `Configure the import alias for ${highlighter.info("components")}:`,
      initial: (_, values) => {
        const value = defaultConfig?.aliases["components"] ?? DEFAULT_COMPONENTS;

        return values.srcDir && !value.startsWith("@/src")
          ? value.replace(/^@\//, "@/src/")
          : value;
      },
    },
  ]);

  return rawConfigSchema.parse({
    $schema: "https://lotru-ui.com/registry/alpha/schema.json",
    framework: options.framework ?? "nextjs",
    color: DEFAULT_COLOR,
    srcDir: options.srcDir,
    tsx: options.typescript,
    aliases: {
      lib: options.lib,
      hooks: options.hooks,
      components: options.components,
    },
  });
}
