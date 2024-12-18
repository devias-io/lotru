export interface Group {
  title?: string;
  items: Item[];
}

export interface Item {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  items?: Item[];
  match?: (pathname: string) => boolean;
}

export const groups: Group[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "CLI",
        href: "/docs/cli",
      },
      {
        title: "Figma",
        href: "/docs/figma",
      },
      {
        title: "Changelog",
        href: "/docs/changelog",
      },
    ],
  },
  {
    title: "Installation",
    items: [
      {
        title: "Next.js",
        href: "/docs/installation/next",
      },
      {
        title: "Vite",
        href: "/docs/installation/vite",
      },
      {
        title: "Manual",
        href: "/docs/installation/manual",
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
      },
      {
        title: "Alert",
        href: "/docs/components/alert",
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
      },
      {
        title: "Button",
        href: "/docs/components/button",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
      },
      {
        title: "Dialog",
        href: "/docs/components/dialog",
      },
      {
        title: "Drawer",
        href: "/docs/components/drawer",
      },
      {
        title: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
      },
      {
        title: "Field",
        href: "/docs/components/field",
      },
      {
        title: "Hover Card",
        href: "/docs/components/hover-card",
      },
      {
        title: "Icon Button",
        href: "/docs/components/icon-button",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Kbd",
        href: "/docs/components/kbd",
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
      },
      {
        title: "Progress",
        href: "/docs/components/progress",
      },
      {
        title: "Prompt",
        href: "/docs/components/prompt",
      },
      {
        title: "Radio",
        href: "/docs/components/radio",
      },
      {
        title: "Scroll Area",
        href: "/docs/components/scroll-area",
      },
      {
        title: "Select",
        href: "/docs/components/select",
      },
      {
        title: "Separator",
        href: "/docs/components/separator",
      },
      {
        title: "Sheet",
        href: "/docs/components/sheet",
      },
      {
        title: "Slider",
        href: "/docs/components/slider",
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
      },
      {
        title: "Table",
        href: "/docs/components/table",
      },
      {
        title: "Tabs",
        href: "/docs/components/tabs",
      },
      {
        title: "Text",
        href: "/docs/components/text",
      },
      {
        title: "Textarea",
        href: "/docs/components/textarea",
      },
      {
        title: "Tooltip",
        href: "/docs/components/tooltip",
      },
    ],
  },
];
