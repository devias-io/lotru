"use client";

import * as React from "react";
import { Dialog as Primitive } from "@base-ui-components/react/dialog";
import { styled } from "@pigment-css/react";

const Drawer = (props: React.ComponentProps<typeof Primitive.Root>): React.JSX.Element => (
  <Primitive.Root {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = (props: React.ComponentProps<typeof Primitive.Trigger>) => (
  <Primitive.Trigger {...props} />
);
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerClose = (props: React.ComponentProps<typeof Primitive.Close>) => (
  <Primitive.Close {...props} />
);
DrawerClose.displayName = "DrawerClose";

const DrawerOverlay = styled(Primitive.Backdrop, {
  name: "DrawerOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitive.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const DrawerContent = styled(Primitive.Popup, {
  name: "DrawerContent",
  slot: "content",
  shouldForwardProp: (prop) => prop !== "side",
})<
  React.ComponentProps<typeof Primitive.Popup> & {
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
  "&[data-open]": {
    transform: "translateY(0)",
  },
  variants: [
    {
      props: { side: "bottom" },
      style: {
        borderTopLeftRadius: "var(--borderRadius-lg)",
        borderTopRightRadius: "var(--borderRadius-lg)",
        insetBlockEnd: 0,
        marginBlockStart: "calc(var(--spacing-unit) * 24)",
        transform: "translateY(100%)",
        "&[data-starting-style], &[data-ending-style]": {
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
        "&[data-starting-style], &[data-ending-style]": {
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
    textAlign: "start",
  },
});

const DrawerTitle = styled(Primitive.Title, {
  name: "DrawerTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitive.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const DrawerDescription = styled(Primitive.Description, {
  name: "DrawerDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitive.Description>>({
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
