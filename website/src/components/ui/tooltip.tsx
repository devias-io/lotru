import * as React from "react";
import * as Primitives from "@base_ui/react/Tooltip";
import { styled } from "@pigment-css/react";

const TooltipProvider = Primitives.Provider;

const Tooltip = Primitives.Root;

const TooltipTrigger = Primitives.Trigger;

const TooltipPositioner = Primitives.Positioner;

const TooltipContent = styled(Primitives.Popup, {
  name: "TooltipContent",
  slot: "content",
})<React.ComponentProps<typeof Primitives.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  color: "hsl(var(--color-foreground))",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  outline: "none",
  paddingBlock: "calc(var(--size-unit) * 1.5)",
  paddingInline: "calc(var(--size-unit) * 3)",
  zIndex: "var(--zIndex-popover)",
});

const TooltipArrow = styled(Primitives.Arrow, {
  name: "TooltipArrow",
  slot: "arrow",
})<React.ComponentProps<typeof Primitives.Arrow>>({
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

export { TooltipProvider, Tooltip, TooltipArrow, TooltipContent, TooltipTrigger, TooltipPositioner };
