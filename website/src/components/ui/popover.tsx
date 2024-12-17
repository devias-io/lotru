import * as React from "react";
import { Popover as Primitive } from "@base-ui-components/react/popover";
import { styled } from "@pigment-css/react";

const Popover = Primitive.Root;

const PopoverTrigger = Primitive.Trigger;

const PopoverPositioner = Primitive.Positioner;

const PopoverContent = styled(Primitive.Popup, {
  name: "PopoverContent",
  slot: "content",
})<React.ComponentProps<typeof Primitive.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  maxWidth: "var(--size-md)",
  padding: "calc(var(--size-unit) * 4)",
  position: "relative",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-popover)",
  "&:focus-visible": {
    outline: "none",
  },
});

const PopoverArrow = styled(Primitive.Arrow, {
  name: "PopoverArrow",
  slot: "arrow",
})<React.ComponentProps<typeof Primitive.Arrow>>({
  backgroundColor: "hsl(var(--color-surface))",
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

export { Popover, PopoverTrigger, PopoverPositioner, PopoverContent, PopoverArrow };
