import * as React from "react";
import * as Primitives from "@base_ui/react/Checkbox";
import { styled } from "@pigment-css/react";
import { CheckIcon, MinusIcon } from "lucide-react";

const CheckboxRoot = styled(Primitives.Root, {
  name: "CheckboxRoot",
  slot: "root",
})({
  alignItems: "center",
  border: "1px solid hsl(var(--color-border))",
  backgroundColor: "hsl(var(--color-backgroundSubtle))",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 5)",
  justifyContent: "center",
  margin: 0,
  outline: "none",
  padding: 0,
  transitionDuration: "var(--duration-fast)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  width: "calc(var(--size-unit) * 5)",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-background))",
  },
  "&:focus-visible": {
    outline: "2px solid hsl(var(--color-ring))",
    outlineOffset: "2px",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    backgroundColor: "hsl(var(--color-backgroundDisabled))",
    border: "1px solid hsl(var(--color-border))",
  },
  "&[data-state='checked']": {
    backgroundColor: "hsl(var(--color-primary))",
    border: "none",
  },
  "&[data-state='checked']:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-primary) / 80%)",
  },
  "&[data-state='checked'][data-disabled]": {
    backgroundColor: "hsl(var(--color-backgroundDisabled))",
    border: "1px solid hsl(var(--color-border))",
  },
});

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
    color: "hsl(var(--color-foregroundDisabled))",
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
