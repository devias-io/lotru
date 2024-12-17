import fs from "fs-extra";
import { loadConfig } from "tsconfig-paths";
import { z } from "zod";

import { highlighter } from "@/src/utils/highlighter";
import { resolveImport } from "@/src/utils/resolve-import";

export const CONFIG_FILE = "lotru.config.json";
export const PIGMENT_CONFIG_FILE = "pigment.config.ts";
export const THEME_FILE = "theme.ts";

export const DEFAULT_COLOR = "neutral";
export const DEFAULT_COMPONENTS = "@/components";
export const DEFAULT_LIB = "@/lib";
export const DEFAULT_HOOKS = "@/hooks";

export const rawConfigSchema = z
  .object({
    $schema: z.string().optional(),
    framework: z.string(),
    color: z.string(),
    srcDir: z.coerce.boolean().default(false),
    tsx: z.coerce.boolean().default(true),
    aliases: z.object({
      lib: z.string().optional(),
      hooks: z.string().optional(),
      components: z.string().optional(),
    }),
  })
  .strict();

export type RawConfig = z.infer<typeof rawConfigSchema>;

export const configSchema = rawConfigSchema.extend({
  resolvedPaths: z.object({
    cwd: z.string(),
    lib: z.string(),
    hooks: z.string(),
    components: z.string(),
  }),
});

export type Config = z.infer<typeof configSchema>;

export async function getConfig(cwd: string): Promise<Config | null> {
  const config = await getRawConfig(cwd);

  if (!config) {
    return null;
  }

  return await resolveConfigPaths(cwd, config);
}

export async function resolveConfigPaths(cwd: string, config: RawConfig): Promise<Config> {
  const tsConfig = loadConfig(cwd);

  if (tsConfig.resultType === "failed") {
    throw new Error(
      `Failed to load ${config.tsx ? "tsconfig" : "jsconfig"}.json. ${
        tsConfig.message ?? ""
      }`.trim()
    );
  }

  return configSchema.parse({
    ...config,
    resolvedPaths: {
      cwd,
      lib: await resolveImport(config.aliases.lib ?? DEFAULT_LIB, tsConfig),
      hooks: await resolveImport(config.aliases.hooks ?? DEFAULT_HOOKS, tsConfig),
      components: await resolveImport(config.aliases.components ?? DEFAULT_COMPONENTS, tsConfig),
    },
  });
}

export async function getRawConfig(cwd: string): Promise<RawConfig | null> {
  try {
    const result = await fs.readJson(`${cwd}/${CONFIG_FILE}`);

    if (!result) {
      return null;
    }

    return rawConfigSchema.parse(result);
  } catch (error) {
    const configPath = `${cwd}/${CONFIG_FILE}`;

    throw new Error(`Invalid configuration found in ${highlighter.info(configPath)}.`);
  }
}
