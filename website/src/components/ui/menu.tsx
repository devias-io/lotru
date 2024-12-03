"use client";

import * as Primitives from "@base_ui/react/Menu";
import { styled } from "@pigment-css/react";

const Menu = Primitives.Root;

const MenuTrigger = Primitives.Trigger;

const MenuPositioner = styled(Primitives.Positioner, {
  name: "MenuPositioner",
  slot: "positioner",
})({
  outline: "none",
});

const MenuContent = styled(Primitives.Popup, {
  name: "MenuContent",
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
  zIndex: "50",
});

const MenuLabel = styled("div", {
  name: "MenuLabel",
  slot: "label",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const MenuItem = styled(Primitives.Item, {
  name: "MenuItem",
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

const MenuShortcut = styled("span", {
  name: "MenuShortcut",
  slot: "shortcut",
})({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-xs)",
  marginInlineStart: "auto",
});

const MenuSeparator = styled(Primitives.Separator, {
  name: "MenuSeparator",
  slot: "separator",
})({
  backgroundColor: "hsl(var(--color-muted))",
  height: "1px",
  marginBlock: "var(--spacing-unit)",
  marginInline: "calc(var(--spacing-unit) * -1)",
});

const MenuGroup = Primitives.Group;

const MenuGroupLabel = styled(Primitives.GroupLabel, {
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
  Menu,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuLabel,
  MenuPositioner,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
};
