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
        label: "Drawer",
        href: "/docs/components/drawer",
      },
      {
        label: "Field",
        href: "/docs/components/field",
      },
      {
        label: "Input",
        href: "/docs/components/input",
      },
      {
        label: "Heading",
        href: "/docs/components/heading",
      },
      {
        label: "Icon Button",
        href: "/docs/components/icon-button",
      },
      {
        label: "Menu",
        href: "/docs/components/menu",
      },
      {
        label: "Popover",
        href: "/docs/components/popover",
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

function startsWithMatch(href: string): (pathname: string) => boolean {
  return (pathname: string) => pathname.startsWith(href);
}

function exactMatch(href: string): (pathname: string) => boolean {
  return (pathname: string) => pathname === href;
}
