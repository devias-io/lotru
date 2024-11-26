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
  height: "1.25rem",
  justifyContent: "center",
  margin: 0,
  outline: "none",
  padding: 0,
  width: "1.25rem",
});

const CheckboxIndicator = styled(Primitives.Indicator, {
  name: "CheckboxIndicator",
  slot: "indicator",
})({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-background))",
  borderColor: "hsl(var(--color-border))",
borderStyle: "solid",
borderWidth: "1px",
  borderRadius: "4px",
  color: "hsl(var(--color-foregroundOnColor))",
  display: "flex",
  height: "14px",
  justifyContent: "center",
  transition: "background-color 200ms, border-color 200ms",
  width: "14px",
  "&:hover": {
    backgroundColor: "hsl(var(--color-backgroundHover))",
    borderColor: "hsl(var(--color-borderStrong))",
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px var(--color-borderInteractive)",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.4,
  },
  "&[data-state='checked']": {
    backgroundColor: "hsl(var(--color-backgroundInteractive))",
  },
  "&[data-state='checked']:hover": {
    backgroundColor: "hsl(var(--color-backgroundInteractiveHover))",
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
