import * as React from "react";
import { styled } from "@pigment-css/react";

const TextareaRoot = styled("textarea", {
  name: "TextareaRoot",
  slot: "root",
})({
  appearance: "none",
  background: "none",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  minHeight: "60px",
  outline: "none",
  padding: "6px 8px",
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "border-color, box-shadow",
  transitionTimingFunction: "var(--easing-default)",
  width: "var(--size-full)",
  "&:disabled": {
    backgroundColor: "hsl(var(--color-input-backgroundDisabled))",
    color: "hsl(var(--color-foregroundDisabled))",
    cursor: "not-allowed",
    "&::placeholder": {
      color: "hsl(var(--color-foregroundDisabled))",
    },
  },
  "&:focus-visible": {
    borderColor: "hsl(var(--color-borderStrong))",
    '&[data-field="invalid"]': {
      borderColor: "hsl(var(--color-borderStrong))",
    },
  },
  '&[data-field="invalid"]': {},
  "&::placeholder": {
    color: "hsl(var(--color-foregroundMuted))",
  },
});

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <TextareaRoot ref={ref} {...props} />;
});

export { Textarea };

export type { TextareaProps };
