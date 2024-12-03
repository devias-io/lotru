import * as React from "react";
import * as Primitives from "@base_ui/react/Tooltip";
import { styled } from "@pigment-css/react";

const HoverCardProvider = Primitives.Provider;

const HoverCard = Primitives.Root;

const HoverCardArrow = Primitives.Arrow;

const HoverCardContent = styled(Primitives.Popup, {
  name: "HoverCardContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-md)",
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  outline: "none",
  padding: "calc(var(--size-unit) * 4)",
  zIndex: "var(--zIndex-popover)",
  width: "calc(var(--size-unit) * 64)",
  maxWidth: "calc(100% - var(--size-unit) * 4)",
});

const HoverCardTrigger = Primitives.Trigger;

const HoverCardPositioner = Primitives.Positioner;

export { HoverCardProvider, HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger, HoverCardPositioner };
