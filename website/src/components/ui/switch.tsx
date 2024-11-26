import * as React from "react";
import * as Primitives from "@base_ui/react/Switch";
import { styled } from "@pigment-css/react";

const SwitchRoot = styled(Primitives.Root, {
  name: "Switch",
  slot: "root",
})({
  borderColor: "hsl(var(--color-border))",
  borderRadius: "calc(var(--size-unit) * 2.5)",
  borderStyle: "solid",
  borderWidth: "1px",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-block",
  height: "calc(var(--size-unit) * 5)",
  overflow: "hidden",
  padding: 0,
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color, border-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 9)",
  "&[data-disabled]": {
    backgroundColor: "hsl(var(--color-backgroundDisabled))",
    cursor: "not-allowed",
  },
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-backgroundSubtleHover))",
    borderColor: "hsl(var(--color-borderStrong))",
  },
  "&:focus-visible": {},
  "&[data-state='checked']:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primaryBackground))",
    borderColor: "transparent",
  },
  "&[data-state='checked']:not([data-disabled]):hover": {
    backgroundColor: "hsl(var(--color-primaryBackground) / 80%)",
  },
  "&[data-state='unchecked']:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-backgroundSubtle))",
  },
  "&[data-state='unchecked']:not([data-disabled]):hover": {
    backgroundColor: "hsl(var(--color-background))",
  },
});

const SwitchThumb = styled(Primitives.Thumb, {
  name: "SwitchThumb",
  slot: "thumb",
})({
  backgroundColor: "hsl(var(--color-background))",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "50%",
  boxShadow: "var(--shadow-xs)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 4)",
  left: "1px",
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "left",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 4)",
  "&[data-state='checked']": {
    left: "calc(calc(var(--size-unit) * 5) - 2px)",
  },
});

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchRoot> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchRoot>, SwitchProps>((props, ref) => (
  <SwitchRoot ref={ref} {...props}>
    <SwitchThumb />
  </SwitchRoot>
));
Switch.displayName = "Switch";

export { Switch };

export type { SwitchProps };
