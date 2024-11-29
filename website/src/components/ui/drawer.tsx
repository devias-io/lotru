"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";

const Drawer = (props: React.ComponentPropsWithoutRef<typeof Primitives.Root>) => {
  return <Primitives.Root {...props} />;
};
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof Primitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitives.Trigger>
>(({ ...props }, ref) => {
  return <Primitives.Trigger ref={ref} {...props} />;
});
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerClose = React.forwardRef<
  React.ElementRef<typeof Primitives.Close>,
  React.ComponentPropsWithoutRef<typeof Primitives.Close>
>(({ ...props }, ref) => {
  return <Primitives.Close ref={ref} {...props} />;
});
DrawerClose.displayName = "DrawerClose";

const DrawerOverlay = styled(Primitives.Backdrop, {
  name: "DrawerOverlay",
  slot: "overlay",
})({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof Primitives.Popup> {
  side: "left" | "right";
}

const DrawerContent = styled(Primitives.Popup, {
  name: "DialogContent",
  slot: "content",
})<DrawerContentProps>({
  backgroundColor: "hsl(var(--color-surface))",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  bottom: 0,
  boxShadow: "var(--shadow-xl)",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  maxWidth: "calc(var(--drawer-max-width, 560px) - calc(var(--spacing-unit) * 2))",
  opacity: 0,
  outline: "none",
  position: "fixed",
  top: 0,
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "transform, opacity",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
  "&[data-state='open']": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "&[data-entering]": {
    opacity: 0,
  },
  variants: [
    {
      props: { side: "left" },
      style: {
        left: 0,
        transform: "translateX(-100%)",
        "&[data-entering]": {
          transform: "translateX(-100%)",
        },
      },
    },
    {
      props: { side: "right" },
      style: {
        right: 0,
        transform: "translateX(100%)",
        "&[data-entering]": {
          transform: "translateX(100%)",
        },
      },
    },
  ],
});

const DrawerHeaderRoot = styled("div", {
  name: "DrawerHeader",
  slot: "header",
})({
  alignItems: "center",
  borderBottom: "1px solid hsl(var(--color-border))",
  display: "flex",
  justifyContent: "space-between",
  padding: "calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 5)",
});

const DrawerHeader = React.forwardRef<
  React.ElementRef<typeof DrawerHeaderRoot>,
  React.ComponentPropsWithoutRef<typeof DrawerHeaderRoot>
>(({ children, className, ...props }, ref) => {
  return (
    <DrawerHeaderRoot ref={ref} className={className} {...props}>
      {children}
      <Primitives.Close
        render={
          <IconButton variant="ghost">
            <XIcon />
          </IconButton>
        }
      />
    </DrawerHeaderRoot>
  );
});

const DrawerBody = styled("div", {
  name: "DrawerBody",
  slot: "body",
})({
  flex: "1 1 auto",
  overflow: "auto",
  padding: "calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 5)",
});

const DrawerTitle = styled(Primitives.Title)({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-lg)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-semibold)",
  margin: 0,
});

const DrawerFooter = styled("div", {
  name: "DrawerFooter",
  slot: "footer",
})({
  borderTop: "1px solid hsl(var(--color-border))",
  display: "flex",
  justifyContent: "flex-end",
  padding: "calc(var(--spacing-unit) * 4) calc(var(--spacing-unit) * 5)",
});

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerTitle,
};
