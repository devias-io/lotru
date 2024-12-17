import * as React from "react";
import { Tooltip as Primitive } from "@base-ui-components/react/tooltip";
import { styled } from "@pigment-css/react";

const TooltipProvider = Primitive.Provider;

const Tooltip = Primitive.Root;

const TooltipTrigger = Primitive.Trigger;

const TooltipPositioner = Primitive.Positioner;

const TooltipContent = styled(Primitive.Popup, {
  name: "TooltipContent",
  slot: "content",
})<React.ComponentProps<typeof Primitive.Popup>>({
  backgroundColor: "hsl(var(--color-primary))",
  borderRadius: "var(--borderRadius-md)",
  color: "hsl(var(--color-primaryForeground))",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  fontSize: "var(--fontSize-xs)",
  lineHeight: "var(--lineHeight-tight)",
  outline: "none",
  paddingBlock: "calc(var(--size-unit) * 1.5)",
  paddingInline: "calc(var(--size-unit) * 3)",
  zIndex: "var(--zIndex-popover)",
});

const TooltipArrow = styled(Primitive.Arrow, {
  name: "TooltipArrow",
  slot: "arrow",
})<React.ComponentProps<typeof Primitive.Arrow>>({
  backgroundColor: "hsl(var(--color-primary))",
  height: "10px",
  transform: "rotate(45deg)",
  width: "10px",
  zIndex: "var(--zIndex-hide)",
  "&[data-side='top']": {
    insetBlockEnd: "-5px",
  },
  "&[data-side='right']": {
    insetInlineStart: "-5px",
  },
  "&[data-side='bottom']": {
    insetBlockStart: "-5px",
  },
  "&[data-side='left']": {
    insetInlineEnd: "-5px",
  },
});

export {
  TooltipProvider,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  TooltipPositioner,
};
