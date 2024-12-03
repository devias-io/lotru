import * as React from "react";
import * as Primitives from "@base_ui/react/Tooltip";
import { styled } from "@pigment-css/react";

const HoverCardProvider = Primitives.Provider;

const HoverCard = Primitives.Root;

const HoverCardTrigger = Primitives.Trigger;

const HoverCardPositioner = Primitives.Positioner;

const HoverCardContent = styled(Primitives.Popup, {
  name: "HoverCardContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  maxWidth: "var(--size-md)",
  outline: "none",
  padding: "calc(var(--size-unit) * 4)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-popover)",
});

const HoverCardArrow = styled(Primitives.Arrow)({
  backgroundColor: "hsl(var(--color-surface))",
  height: "10px",
  transform: "rotate(45deg)",
  width: "10px",
  zIndex: "var(--zIndex-hide)",
  "&[data-side='top']": {
    bottom: "-5px",
  },
  "&[data-side='right']": {
    left: "-5px",
  },
  "&[data-side='bottom']": {
    top: "-5px",
  },
  "&[data-side='left']": {
    right: "-5px",
  },
});

export { HoverCardProvider, HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger, HoverCardPositioner };
