import * as React from "react";
import * as Primitives from "@base_ui/react/Tabs";
import { styled } from "@pigment-css/react";

const Tabs = styled(Primitives.Root, {
  name: "Tabs",
  slot: "root",
})({});

const TabsList = styled(Primitives.List, {
  name: "TabsList",
  slot: "list",
})({
  display: "flex",
  alignItems: "center",
  gap: "calc(var(--spacing-unit) * 2)",
});

const TabsTrigger = styled(Primitives.Tab, {
  name: "TabsTrigger",
  slot: "trigger",
})({
  alignItems: "center",
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "var(--borderRadius-full)",
  color: "hsl(var(--color-mutedForeground))",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  justifyContent: "center",
  padding: "var(--spacing-unit) calc(var(--spacing-unit) * 2.5)",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "color",
  transitionTimingFunction: "var(--easing-default)",
  "&:hover:not([data-disabled])": {
    color: "hsl(var(--color-foreground))",
  },
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
    color: "hsl(var(--color-mutedForeground))",
    cursor: "not-allowed",
  },
  "&[data-selected]": {
    backgroundColor: "hsl(var(--color-background))",
    boxShadow: "var(--shadow-md)",
    color: "hsl(var(--color-foreground))",
  },
} as React.CSSProperties);

const TabsContent = styled(Primitives.Panel, {
  name: "TabsContent",
  slot: "content",
})({
  outline: "none",
});

const TabsIndicator = Primitives.Indicator;

export { Tabs, TabsTrigger, TabsList, TabsContent, TabsIndicator };
