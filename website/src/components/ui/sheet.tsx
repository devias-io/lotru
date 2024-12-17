"use client";

import * as React from "react";
import { Dialog as Primitive } from "@base-ui-components/react/dialog";
import { styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

const Sheet = (props: React.ComponentProps<typeof Primitive.Root>): React.JSX.Element => (
  <Primitive.Root {...props} />
);
Sheet.displayName = "Sheet";

const SheetTrigger = (props: React.ComponentProps<typeof Primitive.Trigger>) => (
  <Primitive.Trigger {...props} />
);
SheetTrigger.displayName = "SheetTrigger";

const SheetClose = (props: React.ComponentProps<typeof Primitive.Close>) => (
  <Primitive.Close {...props} />
);
SheetClose.displayName = "SheetClose";

const SheetOverlay = styled(Primitive.Backdrop, {
  name: "SheetOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitive.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const SheetContent = styled(Primitive.Popup, {
  name: "SheetContent",
  slot: "content",
})<
  React.ComponentProps<typeof Primitive.Popup> & {
    side: "left" | "right";
  }
>({
  backgroundColor: "hsl(var(--color-surface))",
  boxShadow: "var(--shadow-xl)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  insetBlockEnd: 0,
  insetBlockStart: 0,
  maxWidth: "70svw",
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
  "&:focus-visible": {
    outline: "none",
  },
  "&[data-open]": {
    opacity: 1,
    transform: "translateX(0)",
  },
  "&[data-starting-style], &[data-ending-style]": {
    opacity: 0,
  },
  "@media (min-width: 768px)": {
    maxWidth: "var(--size-sm)",
  },
  variants: [
    {
      props: { side: "left" },
      style: {
        insetInlineStart: 0,
        transform: "translateX(-100%)",
        "&[data-starting-style], &[data-ending-style]": {
          transform: "translateX(-100%)",
        },
      },
    },
    {
      props: { side: "right" },
      style: {
        insetInlineEnd: 0,
        transform: "translateX(100%)",
        "&[data-starting-style], &[data-ending-style]": {
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
  insetBlockStart: "calc(var(--spacing-unit) * 4)",
  insetInlineEnd: "calc(var(--spacing-unit) * 4)",
  opacity: 0.7,
  padding: 0,
  position: "absolute",
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
    <Primitive.Close
      render={
        <SheedHeaderClose>
          <XIcon />
        </SheedHeaderClose>
      }
    />
  </SheetHeaderRoot>
);
SheetHeader.displayName = "SheetHeader";

const SheetTitle = styled(Primitive.Title, {
  name: "SheetTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitive.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const SheetDescription = styled(Primitive.Description, {
  name: "SheetDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitive.Description>>({
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
