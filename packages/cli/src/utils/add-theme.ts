import deepmerge from "deepmerge";

import type { Config } from "@/src/utils/get-config";
import { resolveRegistryThemeColors, resolveRegistryThemePreset } from "@/src/utils/registry";
import { updatePigmentConfig } from "@/src/utils/updaters/update-pigment-config";

export async function addTheme(
  config: Config,
  options: { overwrite: boolean; silent: boolean }
): Promise<void> {
  const themePreset = await resolveRegistryThemePreset();
  const themeColors = await resolveRegistryThemeColors(config.color);

  await updatePigmentConfig(
    {
      theme: deepmerge(themePreset.tokens, {
        colorSchemes: themeColors.tokens,
      }),
    },
    config,
    {
      silent: options.silent,
    }
  );
}
