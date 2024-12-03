import * as React from "react";
import * as Primitives from "@base_ui/react/Popover";
import { styled } from "@pigment-css/react";

const Popover = Primitives.Root;

const PopoverTrigger = Primitives.Trigger;

const PopoverPositioner = Primitives.Positioner;

const PopoverContent = styled(Primitives.Popup, {
  name: "PopoverContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  outline: "none",
  padding: "calc(var(--size-unit) * 4)",
  zIndex: "var(--zIndex-popover)",
  position: "relative",
});

const PopoverArrow = styled(Primitives.Arrow)({
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

export { Popover, PopoverTrigger, PopoverPositioner, PopoverContent, PopoverArrow };
