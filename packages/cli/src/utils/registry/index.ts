import { HttpsProxyAgent } from "https-proxy-agent";
import fetch from "node-fetch";
import { z } from "zod";
import deepmerge from "deepmerge";

import { highlighter } from "@/src/utils/highlighter";
import { type Config } from "@/src/utils/get-config";
import {
  type RegistryColor,
  type RegistryComponent,
  type RegistryIndex,
  RegistryThemePreset,
  registryColorSchema,
  registryComponentSchema,
  registryComponentsTreeSchema,
  registryIndexSchema,
  registryThemePresetSchema,
} from "./schema";

const REGISTRY_URL = process.env.REGISTRY_URL ?? "https://lotru-ui.com/registry/alpha/default";

const agent = process.env.https_proxy ? new HttpsProxyAgent(process.env.https_proxy) : undefined;

function isUrl(path: string): boolean {
  try {
    new URL(path);
    return true;
  } catch (error) {
    return false;
  }
}

function getRegistryUrl(path: string): string {
  if (isUrl(path)) {
    const url = new URL(path);
    return url.toString();
  }

  return `${REGISTRY_URL}/${path}`;
}

async function fetchRegistryComponents(paths: string[]): Promise<RegistryComponent[]> {
  const results = await Promise.all(
    paths.map(async (path) => {
      const url = getRegistryUrl(path);
      const response = await fetch(url, { agent });

      if (!response.ok) {
        const errorMessages: { [key: number]: string } = {
          400: "Bad request",
          401: "Unauthorized",
          403: "Forbidden",
          404: "Not found",
          500: "Internal server error",
        };

        if (response.status === 401) {
          throw new Error(
            `You are not authorized to access the component at ${highlighter.info(
              url
            )}.\nIf this is a remote registry, you may need to authenticate.`
          );
        }

        if (response.status === 404) {
          throw new Error(
            `The component at ${highlighter.info(
              url
            )} was not found.\nIt may not exist at the registry. Please make sure it is a valid component.`
          );
        }

        if (response.status === 403) {
          throw new Error(
            `You do not have access to the component at ${highlighter.info(
              url
            )}.\nIf this is a remote registry, you may need to authenticate or a token.`
          );
        }

        const result = await response.json();
        const message =
          result && typeof result === "object" && "error" in result
            ? result.error
            : response.statusText || errorMessages[response.status];
        throw new Error(`Failed to fetch from ${highlighter.info(url)}.\n${message}`);
      }

      return response.json();
    })
  );

  return results as RegistryComponent[];
}

export async function resolveRegistryIndex(): Promise<RegistryIndex> {
  const [result] = await fetchRegistryComponents(["ui/index.json"]);

  return registryIndexSchema.parse(result);
}

export async function resolveRegistryThemeColors(name: string): Promise<RegistryColor> {
  const [result] = (await fetchRegistryComponents([`colors/${name}.json`])) as RegistryColor[];

  return registryColorSchema.parse(result);
}

export async function resolveRegistryThemePreset(): Promise<RegistryThemePreset> {
  const [result] = (await fetchRegistryComponents([`theme-preset.json`])) as RegistryThemePreset[];

  return registryThemePresetSchema.parse(result);
}

export async function resolveRegistryDependencies(url: string): Promise<string[]> {
  const visited = new Set<string>();
  const payload: string[] = [];

  async function resolveDependencies(url_: string): Promise<void> {
    const url = getRegistryUrl(isUrl(url_) ? url_ : `/${url_}.json`);

    if (visited.has(url)) {
      return;
    }

    visited.add(url);

    try {
      const [result] = (await fetchRegistryComponents([url])) as unknown[];
      const item = registryComponentSchema.parse(result);
      payload.push(url);

      if (item.registryDependencies) {
        for (const dependency of item.registryDependencies) {
          await resolveDependencies(dependency);
        }
      }
    } catch (error) {
      console.error(`Error fetching or parsing registry item at ${url_}:`, error);
    }
  }

  await resolveDependencies(url);

  return Array.from(new Set(payload));
}

export async function resolveRegistryComponentsTree(
  components: string[],
  _: Config
): Promise<z.infer<typeof registryComponentsTreeSchema>> {
  const registryDependencies: string[] = [];

  for (const component of components) {
    const itemRegistryDependencies = await resolveRegistryDependencies(component);
    registryDependencies.push(...itemRegistryDependencies);
  }

  const uniqueRegistryDependencies = Array.from(new Set(registryDependencies));
  const componentsRaw = await fetchRegistryComponents(uniqueRegistryDependencies);
  const components_ = z.array(registryComponentSchema).parse(componentsRaw);

  const dependencies = components_.reduce(
    (acc, component) => {
      return acc.concat(component.dependencies ?? []);
    },
    [] as NonNullable<RegistryComponent["dependencies"]>
  );

  const devDependencies = components_.reduce(
    (acc, component) => {
      return acc.concat(component.devDependencies ?? []);
    },
    [] as NonNullable<RegistryComponent["devDependencies"]>
  );

  const files = components_.reduce(
    (acc, component) => {
      return acc.concat(component.files ?? []);
    },
    [] as NonNullable<RegistryComponent["files"]>
  );

  let pigment: NonNullable<RegistryComponent["pigment"]> = {};

  components_.forEach((component) => {
    pigment = deepmerge(pigment, component.pigment ?? {});
  });

  return registryComponentsTreeSchema.parse({
    dependencies,
    devDependencies,
    files,
    pigment,
  });
}
