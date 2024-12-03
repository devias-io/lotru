import * as React from "react";
import * as Primitives from "@base_ui/react/Tooltip";
import { styled } from "@pigment-css/react";

const TooltipProvider = Primitives.Provider;

const Tooltip = Primitives.Root;

const TooltipArrow = Primitives.Arrow;

const TooltipContent = styled(Primitives.Popup, {
  name: "TooltipContent",
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
  paddingBlock: "calc(var(--size-unit) * 1.5)",
  paddingInline: "calc(var(--size-unit) * 3)",
});

const TooltipTrigger = Primitives.Trigger;

const TooltipPositioner = Primitives.Positioner;

export { TooltipProvider, Tooltip, TooltipArrow, TooltipContent, TooltipTrigger, TooltipPositioner };
