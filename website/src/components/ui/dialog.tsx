import * as React from "react";
import { Dialog as Primitive } from "@base-ui-components/react/dialog";
import { styled } from "@pigment-css/react";

const Dialog = Primitive.Root;

const DialogTrigger = Primitive.Trigger;

const DialogClose = Primitive.Close;

const DialogOverlay = styled(Primitive.Backdrop, {
  name: "DialogOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitive.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const DialogContent = styled(Primitive.Popup, {
  name: "DialogContent",
  slot: "content",
})<React.ComponentProps<typeof Primitive.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-xl)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 4)",
  insetBlockStart: "50%",
  insetInlineStart: "50%",
  maxWidth: "var(--size-lg)",
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "opacity, transform",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
  "&[data-open]": {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)",
  },
  "&[data-starting-style], &[data-ending-style]": {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)",
  },
});

const DialogHeader = styled("div", {
  name: "DialogHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-unit)",
});

const DialogFooter = styled("div", {
  name: "DialogFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  display: "flex",
  justifyContent: "flex-end",
  gap: "calc(var(--spacing-unit) * 2)",
});

const DialogTitle = styled(Primitive.Title, {
  name: "DialogTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitive.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const DialogDescription = styled(Primitive.Description, {
  name: "DialogDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitive.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-compact)",
  marginBlock: 0,
});

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
};
