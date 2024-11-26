import { z } from "zod";

export const registryFileSchema = z.object({
  path: z.string(),
  content: z.string().optional(),
});

export const registryPigmentSchema = z.object({
  config: z
    .object({
      theme: z.record(z.string(), z.unknown()).optional(),
    })
    .optional(),
});

export const registryComponentSchema = z.object({
  id: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryFileSchema).optional(),
  pigment: registryPigmentSchema.optional(),
});

export type RegistryComponent = z.infer<typeof registryComponentSchema>;

export const registryColorSchema = registryComponentSchema.extend({
  tokens: z.record(z.string(), z.unknown()),
});

export type RegistryColor = z.infer<typeof registryColorSchema>;

export const registryThemePresetSchema = registryComponentSchema.extend({
  tokens: z.record(z.string(), z.unknown()),
});

export type RegistryThemePreset = z.infer<typeof registryThemePresetSchema>;

export const registryIndexSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string().optional(),
  })
);

export type RegistryIndex = z.infer<typeof registryIndexSchema>;

export const registryComponentsTreeSchema = z.object({
  dependencies: z.array(z.string()).optional(),
  devDependencies: z.array(z.string()).optional(),
  registryDependencies: z.array(z.string()).optional(),
  files: z.array(registryFileSchema).optional(),
  pigment: registryPigmentSchema.optional(),
});
