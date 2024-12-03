import * as React from "react";
import * as Primitives from "@base_ui/react/Popover";
import { styled } from "@pigment-css/react";

const Popover = Primitives.Root;

const PopoverTrigger = Primitives.Trigger;

const PopoverPositioner = Primitives.Positioner;

const PopoverContent = styled(Primitives.Popup)({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  filter: "drop-shadow(rgba(0, 10, 20, .2) 0px 2px 4px)",
  padding: ".5rem 1rem",
  position: "relative",
  "&:focus-visible": {
    outline: "none",
  },
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

const PopoverTitle = styled(Primitives.Title)({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-md)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-medium)",
  marginBlock: 0,
});

const PopoverDescription = styled(Primitives.Description)({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-compact)",
  marginBlock: 0,
});

export { Popover, PopoverTrigger, PopoverPositioner, PopoverContent, PopoverArrow, PopoverTitle, PopoverDescription };
