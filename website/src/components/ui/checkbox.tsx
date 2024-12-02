import * as React from "react";
import * as Primitives from "@base_ui/react/Checkbox";
import { styled } from "@pigment-css/react";
import { CheckIcon, MinusIcon } from "lucide-react";

const CheckboxRoot = styled(Primitives.Root, {
  name: "CheckboxRoot",
  slot: "root",
})({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 5)",
  justifyContent: "center",
  padding: 0,
  transitionDuration: "var(--duration-fast)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 5)",
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

const CheckboxIndicator = styled(Primitives.Indicator, {
  name: "CheckboxIndicator",
  slot: "indicator",
})({
  alignItems: "center",
  display: "none",
  justifyContent: "center",
  '&[data-state="checked"]': {
    display: "inline-flex",
  },
  '&[data-state="checked"]:not([data-disabled])': {
    color: "hsl(var(--color-primaryForeground))",
  },
  '&[data-state="checked"][data-disabled]': {
    color: "hsl(var(--color-mutedForeground))",
  },
  "& svg": {
    flexShrink: 0,
    fontSize: "1.1em",
    height: "1.1em",
    width: "1.1em",
  },
});

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxRoot> {
  intermediate?: boolean;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxRoot>, CheckboxProps>(
  (
    {
      /**
       * Whether the checkbox is in an indeterminate state
       */
      indeterminate = false,
      ...props
    }: CheckboxProps,
    ref
  ) => (
    <CheckboxRoot ref={ref} {...props}>
      <CheckboxIndicator>{indeterminate ? <MinusIcon /> : <CheckIcon />}</CheckboxIndicator>
    </CheckboxRoot>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
