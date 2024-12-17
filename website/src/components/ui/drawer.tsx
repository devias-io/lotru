"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";

const Drawer = (props: React.ComponentProps<typeof Primitives.Root>): React.JSX.Element => (
  <Primitives.Root {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = (props: React.ComponentProps<typeof Primitives.Trigger>) => (
  <Primitives.Trigger {...props} />
);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerClose = (props: React.ComponentProps<typeof Primitives.Close>) => (
  <Primitives.Close {...props} />
);
DrawerClose.displayName = "DrawerClose";

const DrawerOverlay = styled(Primitives.Backdrop, {
  name: "DrawerOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitives.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const DrawerContent = styled(Primitives.Popup, {
  name: "DrawerContent",
  slot: "content",
})<
  React.ComponentProps<typeof Primitives.Popup> & {
    side: "bottom" | "top";
  }
>({
  backgroundColor: "hsl(var(--color-surface))",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  insetInlineEnd: 0,
  insetInlineStart: 0,
  position: "fixed",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "transform",
  transitionTimingFunction: "var(--easing-default)",
  willChange: "transform",
  zIndex: "var(--zIndex-modal)",
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-state='open']": {
    transform: "translateY(0)",
  },
  "&[data-entering]": {},
  variants: [
    {
      props: { side: "bottom" },
      style: {
        borderTopLeftRadius: "var(--borderRadius-lg)",
        borderTopRightRadius: "var(--borderRadius-lg)",
        insetBlockEnd: 0,
        marginBlockStart: "calc(var(--spacing-unit) * 24)",
        transform: "translateY(100%)",
        "&[data-entering]": {
          transform: "translateY(100%)",
        },
      },
    },
    {
      props: { side: "top" },
      style: {
        borderBottomLeftRadius: "var(--borderRadius-lg)",
        borderBottomRightRadius: "var(--borderRadius-lg)",
        insetBlockStart: 0,
        marginBlockEnd: "calc(var(--spacing-unit) * 24)",
        transform: "translateY(-100%)",
        "&[data-entering]": {
          transform: "translateY(-100%)",
        },
      },
    },
  ],
});

const DrawerHeader = styled("div", {
  name: "DrawerHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
  padding: "calc(var(--spacing-unit) * 4)",
  textAlign: "center",
  "@media (min-width: 768px)": {
    textAlign: "left",
  },
});

const DrawerTitle = styled(Primitives.Title, {
  name: "DrawerTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitives.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const DrawerDescription = styled(Primitives.Description, {
  name: "DrawerDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitives.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  marginBlock: 0,
});

const DrawerFooter = styled("div", {
  name: "DrawerFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
  marginBlockStart: "auto",
  padding: "calc(var(--spacing-unit) * 4)",
});

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
};
