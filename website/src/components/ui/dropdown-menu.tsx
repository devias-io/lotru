"use client";

import * as Primitives from "@base_ui/react/Menu";
import { styled } from "@pigment-css/react";

const DropdownMenu = Primitives.Root;

const DropdownMenuTrigger = Primitives.Trigger;

const DropdownMenuPositioner = styled(Primitives.Positioner, {
  name: "DropdownMenuPositioner",
  slot: "positioner",
})({
  outline: "none",
});

const DropdownMenuContent = styled(Primitives.Popup, {
  name: "DropdownMenuContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  minWidth: "8rem",
  outline: "none",
  padding: "var(--spacing-unit)",
  zIndex: "var(--zIndex-popover)",
});

const DropdownMenuLabel = styled("div", {
  name: "DropdownMenuLabel",
  slot: "label",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const DropdownMenuItem = styled(Primitives.Item, {
  name: "DropdownMenuItem",
  slot: "item",
})({
  alignItems: "center",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  gap: "calc(var(--spacing-unit) * 2)",
  lineHeight: "var(--lineHeight-tight)",
  outline: "none",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
  position: "relative",
  userSelect: "none",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 10%)",
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
})({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-xs)",
  marginInlineStart: "auto",
});

const DropdownMenuSeparator = styled(Primitives.Separator, {
  name: "MenuSeparator",
  slot: "separator",
})({
  backgroundColor: "hsl(var(--color-border))",
  height: "1px",
  marginBlock: "var(--spacing-unit)",
  marginInline: "calc(var(--spacing-unit) * -1)",
});

const DropdownMenuGroup = Primitives.Group;

const DropdownMenuGroupLabel = styled(Primitives.GroupLabel, {
  name: "MenuGroupLabel",
  slot: "groupLabel",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
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
  DropdownMenuPositioner,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
};
