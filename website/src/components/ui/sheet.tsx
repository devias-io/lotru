"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

const Sheet = (props: React.ComponentProps<typeof Primitives.Root>): React.JSX.Element => (
  <Primitives.Root {...props} />
);
Sheet.displayName = "Sheet";

const SheetTrigger = (props: React.ComponentProps<typeof Primitives.Trigger>) => (
  <Primitives.Trigger {...props} />
);
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = (props: React.ComponentProps<typeof Primitives.Close>) => (
  <Primitives.Close {...props} />
);
SheetClose.displayName = "SheetClose";

const SheetOverlay = styled(Primitives.Backdrop, {
  name: "SheetOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitives.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const SheetContent = styled(Primitives.Popup, {
  name: "SheetContent",
  slot: "content",
})<
  React.ComponentProps<typeof Primitives.Popup> & {
    side: "left" | "right";
  }
>({
  backgroundColor: "hsl(var(--color-surface))",
  bottom: 0,
  boxShadow: "var(--shadow-xl)",
  boxSizing: "border-box",
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  maxWidth: "70%",
  opacity: 0,
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  top: 0,
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "transform, opacity",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-state='open']": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "&[data-entering]": {
    opacity: 0,
  },
  "@media (min-width: 768px)": {
    maxWidth: "var(--size-sm)",
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

const SheetHeaderRoot = styled("div", {
  name: "SheetHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

const SheedHeaderClose = styled("button", {
  name: "SheetHeaderClose",
  slot: "close",
})<React.ComponentProps<"button">>({
  appearance: "none",
  background: "none",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "inherit",
  cursor: "pointer",
  opacity: 0.7,
  padding: 0,
  position: "absolute",
  right: "calc(var(--spacing-unit) * 4)",
  top: "calc(var(--spacing-unit) * 4)",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  "&:hover:not(:disabled)": {
    opacity: 1,
  },
  "& svg": {
    height: "calc(var(--size-unit) * 4)",
    width: "calc(var(--size-unit) * 4)",
  },
});

const SheetHeader = ({ children, ...props }: React.ComponentProps<typeof SheetHeaderRoot>) => (
  <SheetHeaderRoot {...props}>
    {children}
    <Primitives.Close
      render={
        <SheedHeaderClose>
          <XIcon />
        </SheedHeaderClose>
      }
    />
  </SheetHeaderRoot>
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = styled(Primitives.Title, {
  name: "SheetTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitives.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const SheetDescription = styled(Primitives.Description, {
  name: "SheetDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitives.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  marginBlock: 0,
});

const SheetFooter = styled("div", {
  name: "SheetFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "flex-end",
});

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
};
