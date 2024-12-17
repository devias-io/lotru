"use client";

import * as React from "react";
import { Menu as Primitive } from "@base-ui-components/react/menu";
import { styled } from "@pigment-css/react";

const DropdownMenu = (props: React.ComponentProps<typeof Primitive.Root>) => (
  <Primitive.Root {...props} />
);
DropdownMenu.displayName = "DropdownMenu";

const DropdownMenuTrigger = (props: React.ComponentProps<typeof Primitive.Trigger>) => (
  <Primitive.Trigger {...props} />
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

const DropdownMenuPortal = (props: React.ComponentProps<typeof Primitive.Portal>) => (
  <Primitive.Portal {...props} />
);
DropdownMenuPortal.displayName = "DropdownMenuPortal";

const DropdownMenuPositioner = (props: React.ComponentProps<typeof Primitive.Positioner>) => (
  <Primitive.Positioner {...props} />
);
DropdownMenuPositioner.displayName = "DropdownMenuPositioner";

const DropdownMenuContent = styled(Primitive.Popup, {
  name: "DropdownMenuContent",
  slot: "content",
})<React.ComponentProps<typeof Primitive.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-md)",
  boxSizing: "border-box",
  minWidth: "8rem",
  padding: "var(--spacing-unit)",
  zIndex: "var(--zIndex-popover)",
  "&:focus-visible": {
    outline: "none",
  },
});

const DropdownMenuLabel = styled("div", {
  name: "DropdownMenuLabel",
  slot: "label",
})<React.ComponentProps<"div">>({
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const DropdownMenuItem = styled(Primitive.Item, {
  name: "DropdownMenuItem",
  slot: "item",
})<React.ComponentProps<typeof Primitive.Item>>({
  alignItems: "center",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  fontSize: "var(--fontSize-sm)",
  gap: "calc(var(--spacing-unit) * 2)",
  lineHeight: "var(--lineHeight-tight)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
  position: "relative",
  userSelect: "none",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 10%)",
  },
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "& svg": {
    flexShrink: 0,
    fontSize: "1rem",
    height: "1rem",
    pointerEvents: "none",
    width: "1rem",
  },
});

const DropdownMenuShortcut = styled("span", {
  name: "DropdownMenuShortcut",
  slot: "shortcut",
})<React.ComponentProps<"span">>({
  boxSizing: "border-box",
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-xs)",
  marginInlineStart: "auto",
});

const DropdownMenuSeparator = styled(Primitive.Separator, {
  name: "MenuSeparator",
  slot: "separator",
})<React.ComponentProps<typeof Primitive.Separator>>({
  backgroundColor: "hsl(var(--color-border))",
  boxSizing: "border-box",
  height: "1px",
  marginBlock: "var(--spacing-unit)",
  marginInline: "calc(var(--spacing-unit) * -1)",
});

const DropdownMenuGroup = Primitive.Group;

const DropdownMenuGroupLabel = styled(Primitive.GroupLabel, {
  name: "MenuGroupLabel",
  slot: "groupLabel",
})<React.ComponentProps<typeof Primitive.GroupLabel>>({
  boxSizing: "border-box",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuGroupLabel,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
};
