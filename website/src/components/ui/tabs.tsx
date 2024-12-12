import * as React from "react";
import * as Primitives from "@base_ui/react/Tabs";
import { styled } from "@pigment-css/react";

const Tabs = Primitives.Root;

const TabsList = styled(Primitives.List, {
  name: "TabsList",
  slot: "list",
})<React.ComponentProps<typeof Primitives.List>>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-mutedForeground))",
  display: "inline-flex",
  height: "calc(var(--size-unit) * 10)",
  justifyContent: "center",
  padding: "var(--spacing-unit)",
  position: "relative",
});

const TabsTrigger = styled(Primitives.Tab, {
  name: "TabsTrigger",
  slot: "trigger",
})<React.ComponentProps<typeof Primitives.Tab>>({
  alignItems: "center",
  appearance: "none",
  background: "none",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "inherit",
  cursor: "pointer",
  display: "flex",
  fontFamily: "inherit",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  height: "calc(var(--size-unit) * 8)",
  justifyContent: "center",
  lineHeight: "var(--lineHeight-tight)",
  paddingBlock: "calc(var(--spacing-unit) * 1.5)",
  paddingInline: "calc(var(--spacing-unit) * 3)",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "all",
  transitionTimingFunction: "var(--easing-default)",
  whiteSpace: "nowrap",
  "&:focus-visible": {
    "--ring-offset-width": "2px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "2px",
    "--ring-color": "hsl(var(--color-ring))",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&[data-selected]": {
    backgroundColor: "hsl(var(--color-background))",
    boxShadow: "var(--shadow-sm)",
    color: "hsl(var(--color-foreground))",
  },
} as React.CSSProperties);

const TabsContent = styled(Primitives.Panel, {
  name: "TabsContent",
  slot: "content",
})<React.ComponentProps<typeof Primitives.Panel>>({
  boxSizing: "border-box",
  marginBlockStart: "calc(var(--spacing-unit) * 2)",
  "&:focus-visible": {
    outline: "none",
  },
});

const TabsIndicator = styled(Primitives.Indicator, {
  name: "TabsIndicator",
  slot: "indicator",
})<React.ComponentProps<typeof Primitives.Indicator>>({
  backgroundColor: "hsl(var(--color-primary))",
  borderRadius: "var(--borderRadius-md)",
  bottom: "var(--active-tab-bottom)",
  height: "2px",
  left: "var(--active-tab-left)",
  position: "absolute",
  right: "var(--active-tab-right)",
});

export { Tabs, TabsTrigger, TabsList, TabsContent, TabsIndicator };
