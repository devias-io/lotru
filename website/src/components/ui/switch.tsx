import * as React from "react";
import * as Primitives from "@base_ui/react/Switch";
import { styled } from "@pigment-css/react";

const SwitchRoot = styled(Primitives.Root, {
  name: "Switch",
  slot: "root",
})({
  backgroundColor: "hsl(var(--color-muted))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "calc(var(--size-unit) * 2.5)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-block",
  height: "calc(var(--size-unit) * 5)",
  flexShrink: 0,
  padding: 0,
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 9)",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-background))",
  },
  "&:focus-visible": {
    outline: "2px solid hsl(var(--color-ring))",
    outlineOffset: "2px",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&[data-state='checked']": {
    backgroundColor: "hsl(var(--color-primary))",
    border: "none",
  },
  "&[data-state='checked']:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 80%)",
  },
  "&[data-state='checked'][data-disabled]": {
    backgroundColor: "hsl(var(--color-muted))",
    border: "1px solid hsl(var(--color-border))",
  },
});

const SwitchThumb = styled(Primitives.Thumb, {
  name: "SwitchThumb",
  slot: "thumb",
})({
  backgroundColor: "hsl(var(--color-background))",
  border: "1px solid hsl(var(--color-border))",
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
