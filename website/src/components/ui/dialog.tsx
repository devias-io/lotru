import * as React from "react";
import * as Primitives from "@base_ui/react/Dialog";
import { styled } from "@pigment-css/react";

const Dialog = (props: React.ComponentPropsWithoutRef<typeof Primitives.Root>) => {
  return <Primitives.Root {...props} />;
};
Dialog.displayName = "Dialog";

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof Primitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitives.Trigger>
>(({ ...props }, ref) => {
  return <Primitives.Trigger ref={ref} {...props} />;
});

const DialogOverlay = styled(Primitives.Backdrop, {
  name: "DialogOverlay",
  slot: "overlay",
})({
  backgroundColor: "hsl(var(--color-overlay))",
  inset: 0,
  position: "fixed",
  zIndex: "var(--zIndex-overlay)",
});

const DialogContent = styled(Primitives.Popup, {
  name: "DialogContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-xl)",
  left: "50%",
  padding: "calc(var(--spacing-unit) * 4)",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "var(--zIndex-modal)",
});

const DialogTitle = styled(Primitives.Title, {
  name: "DialogTitle",
  slot: "title",
})({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-lg)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-medium)",
  margin: 0,
});

const DialogDescription = styled(Primitives.Description, {
  name: "DialogDescription",
  slot: "description",
})({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-compact)",
  margin: 0,
});

const DialogClose = React.forwardRef<
  React.ElementRef<typeof Primitives.Close>,
  React.ComponentPropsWithoutRef<typeof Primitives.Close>
>(({ ...props }, ref) => {
  return <Primitives.Close ref={ref} {...props} />;
});

export { Dialog, DialogTrigger, DialogOverlay, DialogContent, DialogClose, DialogTitle, DialogDescription };
