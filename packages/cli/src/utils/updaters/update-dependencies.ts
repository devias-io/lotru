import { execa } from "execa";
import prompts from "prompts";

import { Config } from "@/src/utils/get-config";
import { getPackageInfo } from "@/src/utils/get-package-info";
import { getPackageManager } from "@/src/utils/get-package-manager";
import { logger } from "@/src/utils/logger";
import { RegistryComponent } from "@/src/utils/registry/schema";
import { spinner } from "@/src/utils/spinner";

export async function updateDependencies(
  dependencies: RegistryComponent["dependencies"],
  config: Config,
  opts: {
    dev?: boolean;
    silent?: boolean;
  }
): Promise<void> {
  dependencies = Array.from(new Set(dependencies));

  if (!dependencies?.length) {
    return;
  }

  const options = {
    dev: false,
    silent: false,
    ...opts,
  };

  const dependenciesSpinner = spinner(`Installing ${options.dev ? "devDependencies" : "dependencies"}.`, {
    silent: options.silent,
  }).start();

  const packageManager = await getPackageManager(config.resolvedPaths.cwd);

  // Offer to use --force or --legacy-peer-deps if using React 19 with npm.
  let flag = "";

  if (isUsingReact19(config) && packageManager === "npm") {
    dependenciesSpinner.stopAndPersist();

    logger.warn(
      "\nIt looks like you are using React 19.\nSome packages may fail to install due to peer dependency issues in npm.\n"
    );

    const confirmation = await prompts([
      {
        type: "select",
        name: "flag",
        message: "How would you like to proceed?",
        choices: [
          { title: "Use --force", value: "force" },
          { title: "Use --legacy-peer-deps", value: "legacy-peer-deps" },
        ],
      },
    ]);

    if (confirmation) {
      flag = confirmation.flag;
    }
  }

  dependenciesSpinner.start();

  await execa(
    packageManager,
    [
      packageManager === "npm" ? "install" : "add",
      options.dev ? "-D" : "",
      ...(packageManager === "npm" && flag ? [`--${flag}`] : []),
      ...dependencies,
    ],
    {
      cwd: config.resolvedPaths.cwd,
    }
  );

  dependenciesSpinner.succeed();
}

function isUsingReact19(config: Config) {
  const packageInfo = getPackageInfo(config.resolvedPaths.cwd);

  if (!packageInfo?.dependencies?.react) {
    return false;
  }

  return /^(?:\^|~)?19(?:\.\d+)*(?:-.*)?$/.test(packageInfo.dependencies.react);
}
