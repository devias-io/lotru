import { type Config } from "@/src/utils/get-config";
import { resolveRegistryComponentsTree } from "@/src/utils/registry";
import { spinner } from "@/src/utils/spinner";
import { updateDependencies } from "@/src/utils/updaters/update-dependencies";
import { updateFiles } from "@/src/utils/updaters/update-files";
import { updatePigmentConfig } from "@/src/utils/updaters/update-pigment-config";

export async function addComponents(
  components: string[],
  config: Config,
  opts: {
    overwrite?: boolean;
    silent?: boolean;
  }
): Promise<void> {
  const options = {
    overwrite: false,
    silent: false,
    ...opts,
  };

  const treeSpinner = spinner(`Checking registry.`, {
    silent: options.silent,
  }).start();

  const tree = await resolveRegistryComponentsTree(components, config);

  treeSpinner.succeed();

  await updateDependencies(tree.dependencies, config, {
    silent: options.silent,
  });

  await updateDependencies(tree.devDependencies, config, {
    dev: true,
    silent: options.silent,
  });

  await updateFiles(tree.files, config, {
    overwrite: options.overwrite,
    silent: options.silent,
  });

  await updatePigmentConfig(tree.pigment?.config, config, {
    silent: options.silent,
  });
}
