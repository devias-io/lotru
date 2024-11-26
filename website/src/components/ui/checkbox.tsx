import * as React from "react";
import * as Primitives from "@base_ui/react/Checkbox";
import { styled } from "@pigment-css/react";
import { CheckIcon, MinusIcon } from "lucide-react";

const CheckboxRoot = styled(Primitives.Root, {
  name: "CheckboxRoot",
  slot: "root",
})({
  alignItems: "center",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 5)",
  justifyContent: "center",
  margin: 0,
  outline: "none",
  padding: 0,
  width: "calc(var(--size-unit) * 5)",
});

const CheckboxIndicator = styled(Primitives.Indicator, {
  name: "CheckboxIndicator",
  slot: "indicator",
})({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-backgroundSubtle))",
  borderColor: "hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-sm)",
  borderStyle: "solid",
  borderWidth: "1px",
  boxShadow: "var(--shadow-xs)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  display: "flex",
  flexShrink: 0,
  height: "calc(var(--size-unit) * 5)",
  justifyContent: "center",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color, border-color",
  transitionTimingFunction: "var(--easing-normal)",
  width: "calc(var(--size-unit) * 5)",
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-background))",
    borderColor: "hsl(var(--color-borderStrong))",
  },
  "&:focus-visible": {},
  "&[data-disabled]": {
    backgroundColor: "hsl(var(--color-backgroundDisabled))",
    color: "hsl(var(--color-foregroundDisabled))",
    cursor: "not-allowed",
  },
  "&[data-state='checked']": {
    backgroundColor: "hsl(var(--color-primaryBackground))",
    color: "hsl(var(--color-primaryForeground))",
  },
  "&[data-state='checked']:hover": {
    backgroundColor: "hsl(var(--color-primaryBackground) / 80%)",
  },
  '&[data-state="unchecked"] svg': {
    display: "none",
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
