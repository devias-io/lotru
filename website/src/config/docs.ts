export interface Group {
  label: string;
  items: Item[];
}

export interface Item {
  label: string;
  href: string;
  match?: (pathname: string) => boolean;
}

export const groups: Group[] = [
  {
    label: "Getting Started",
    items: [
      {
        label: "Introduction",
        href: "/docs",
      },
    ],
  },
  {
    label: "Components",
    items: [
      {
        label: "Alert",
        href: "/docs/components/alert",
      },
      {
        label: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        label: "Badge",
        href: "/docs/components/badge",
      },
      {
        label: "Button",
        href: "/docs/components/button",
      },
      {
        label: "Card",
        href: "/docs/components/card",
      },
      {
        label: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        label: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        label: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
      },
      {
        label: "Field",
        href: "/docs/components/field",
      },
      {
        label: "Hover Card",
        href: "/docs/components/hover-card",
      },
      {
        label: "Icon Button",
        href: "/docs/components/icon-button",
      },
      {
        label: "Input",
        href: "/docs/components/input",
      },
      {
        label: "Popover",
        href: "/docs/components/popover",
      },
      {
        label: "Progress",
        href: "/docs/components/progress",
      },
      {
        label: "Prompt",
        href: "/docs/components/prompt",
      },
      {
        label: "Radio",
        href: "/docs/components/radio",
      },
      {
        label: "Select",
        href: "/docs/components/select",
      },
      {
        label: "Separator",
        href: "/docs/components/separator",
      },
      {
        label: "Sheet",
        href: "/docs/components/sheet",
      },
      {
        label: "Slider",
        href: "/docs/components/slider",
      },
      {
        label: "Switch",
        href: "/docs/components/switch",
      },
      {
        label: "Table",
        href: "/docs/components/table",
      },
      {
        label: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        label: "Text",
        href: "/docs/components/text",
      },
      {
        label: "Textarea",
        href: "/docs/components/textarea",
      },
      {
        label: "Tooltip",
        href: "/docs/components/tooltip",
      },
    ],
  },
];
