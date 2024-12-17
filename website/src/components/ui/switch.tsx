import * as React from "react";
import { Switch as Primitive } from "@base-ui-components/react/switch";
import { styled } from "@pigment-css/react";

const SwitchRoot = styled(Primitive.Root, {
  name: "SwitchRoot",
  slot: "root",
})<React.ComponentProps<typeof Primitive.Root>>({
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
  "&[data-checked]": {
    backgroundColor: "hsl(var(--color-primary))",
    border: "none",
  },
  "&[data-checked]:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 80%)",
  },
} as React.CSSProperties);

const SwitchThumb = styled(Primitive.Thumb, {
  name: "SwitchThumb",
  slot: "thumb",
})<React.ComponentProps<typeof Primitive.Thumb>>({
  backgroundColor: "hsl(var(--color-background))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "50%",
  boxShadow: "var(--shadow-xs)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 4)",
  insetInlineStart: "1px",
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "inset-inline-start",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 4)",
  "&[data-checked]": {
    insetInlineStart: "calc(calc(var(--size-unit) * 5) - 2px)",
  },
});

const Switch = (props: React.ComponentProps<typeof Primitive.Root>) => (
  <SwitchRoot {...props}>
    <SwitchThumb />
  </SwitchRoot>
);
Switch.displayName = "Switch";

export { Switch };
