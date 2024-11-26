import * as React from "react";
import * as Primitives from "@base_ui/react/Popover";
import { styled } from "@pigment-css/react";

const Popover = Primitives.Root;

const PopoverTrigger = Primitives.Trigger;

const PopoverPositioner = Primitives.Positioner;

const PopoverContent = styled(Primitives.Popup)({
  backgroundColor: "hsl(var(--color-background))",
  borderColor: "hsl(var(--color-border))",
borderStyle: "solid",
borderWidth: "1px",
  borderRadius: "var(--borderRadius-md)",
  filter: "drop-shadow(rgba(0, 10, 20, .2) 0px 2px 4px)",
  outline: "none",
  padding: ".5rem 1rem",
  position: "relative",
});

const PopoverArrow = styled(Primitives.Arrow)({
  backgroundColor: "hsl(var(--color-background))",
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

const PopoverTitle = styled(Primitives.Title)({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-md)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-medium)",
  margin: 0,
});

const PopoverDescription = styled(Primitives.Description)({
  color: "hsl(var(--color-foregroundSubtle))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-compact)",
  margin: 0,
});

export { Popover, PopoverTrigger, PopoverPositioner, PopoverContent, PopoverArrow, PopoverTitle, PopoverDescription };
