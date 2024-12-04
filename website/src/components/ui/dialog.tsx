import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";

const Dialog = Primitives.Root;

const DialogTrigger = Primitives.Trigger;

const DialogClose = Primitives.Close;

const DialogOverlay = styled(Primitives.Backdrop, {
  name: "DialogOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitives.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const DialogContent = styled(Primitives.Popup, {
  name: "DialogContent",
  slot: "content",
})<React.ComponentProps<typeof Primitives.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-xl)",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 4)",
  left: "50%",
  maxWidth: "var(--size-lg)",
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
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

const DialogTitle = styled(Primitives.Title, {
  name: "DialogTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitives.Title>>({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-lg)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const DialogDescription = styled(Primitives.Description, {
  name: "DialogDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitives.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
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
