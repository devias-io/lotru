import type { RegistryComponent } from "../schema";

export const ui: RegistryComponent[] = [
  {
    id: "ui/alert",
    name: "Alert",
    dependencies: ["lucide-react"],
    registryDependencies: ["ui/icon-button"],
    files: [
      {
        path: "ui/alert.tsx",
      },
    ],
  },
  {
    id: "ui/avatar",
    name: "Avatar",
    dependencies: ["@radix-ui/react-avatar"],
    files: [
      {
        path: "ui/avatar.tsx",
      },
    ],
  },
  {
    id: "ui/badge",
    name: "Badge",
    files: [
      {
        path: "ui/badge.tsx",
      },
    ],
  },
  {
    id: "ui/button",
    name: "Button",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/button.tsx",
      },
    ],
  },
  {
    id: "ui/card",
    name: "Card",
    files: [
      {
        path: "ui/card.tsx",
      },
    ],
  },
  {
    id: "ui/checkbox",
    name: "Checkbox",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/checkbox.tsx",
      },
    ],
  },
  {
    id: "ui/dialog",
    name: "Dialog",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/dialog.tsx",
      },
    ],
  },
  {
    id: "ui/drawer",
    name: "Drawer",
    dependencies: ["@base_ui/react", "lucide-react"],
    registryDependencies: ["ui/icon-button"],
    files: [
      {
        path: "ui/drawer.tsx",
      },
    ],
  },
  {
    id: "ui/field",
    name: "Field",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/field.tsx",
      },
    ],
  },
  {
    id: "ui/heading",
    name: "Heading",
    files: [
      {
        path: "ui/heading.tsx",
      },
    ],
  },
  {
    id: "ui/icon-button",
    name: "Icon-button",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/icon-button.tsx",
      },
    ],
  },
  {
    id: "ui/input",
    name: "Input",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/input.tsx",
      },
    ],
  },
  {
    id: "ui/popover",
    name: "Popover",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/popover.tsx",
      },
    ],
  },
  {
    id: "ui/prompt",
    name: "Prompt",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/prompt.tsx",
      },
    ],
  },
  {
    id: "ui/radio",
    name: "Radio",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/radio.tsx",
      },
    ],
  },
  {
    id: "ui/select",
    name: "Select",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/select.tsx",
      },
    ],
  },
  {
    id: "ui/stack",
    name: "Stack",
    files: [
      {
        path: "ui/stack.tsx",
      },
    ],
  },
  {
    id: "ui/switch",
    name: "Switch",
    dependencies: ["@base_ui/react"],
    files: [
      {
        path: "ui/switch.tsx",
      },
    ],
  },
  {
    id: "ui/tabs",
    name: "Tabs",
    files: [
      {
        path: "ui/tabs.tsx",
      },
    ],
  },
  {
    id: "ui/table",
    name: "Table",
    files: [
      {
        path: "ui/table.tsx",
      },
    ],
  },
  {
    id: "ui/text",
    name: "Text",
    files: [
      {
        path: "ui/text.tsx",
      },
    ],
  },
  {
    id: "ui/textarea",
    name: "Textarea",
    files: [
      {
        path: "ui/textarea.tsx",
      },
    ],
  },
];
