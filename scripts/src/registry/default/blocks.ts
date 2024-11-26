import type { RegistryComponent } from "../schema";

export const blocks: RegistryComponent[] = [
  {
    id: "blocks/stats-01",
    name: "Stats",
    dependencies: ["lucide-react"],
    registryDependencies: ["ui/card", "ui/icon-button", "ui/text", "hooks/use-mobile"],
    files: [
      {
        path: "blocks/stats-01.tsx",
      },
    ],
  },
];
