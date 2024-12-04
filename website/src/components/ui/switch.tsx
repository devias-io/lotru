import * as React from "react";
import * as Primitives from "@base_ui/react/Switch";
import { styled } from "@pigment-css/react";

const SwitchRoot = styled(Primitives.Root, {
  name: "SwitchRoot",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
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
    "--ring-offset-width": "2px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "2px",
    "--ring-color": "hsl(var(--color-ring))",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
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
} as React.CSSProperties);

const SwitchThumb = styled(Primitives.Thumb, {
  name: "SwitchThumb",
  slot: "thumb",
})<React.ComponentProps<typeof Primitives.Thumb>>({
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

const Switch = React.forwardRef<React.ElementRef<typeof Primitives.Root>, React.ComponentProps<typeof Primitives.Root>>(
  (props, ref) => (
    <SwitchRoot ref={ref} {...props}>
      <SwitchThumb />
    </SwitchRoot>
  )
);
Switch.displayName = "Switch";

export { Switch };
