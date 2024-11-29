import * as React from "react";
import { styled } from "@pigment-css/react";

const TextareaRoot = styled("textarea", {
  name: "TextareaRoot",
  slot: "root",
})({
  appearance: "none",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-md)",
  height: "calc(var(--size-unit) * 10)",
  maxWidth: "var(--size-xs)",
  minWidth: "calc(var(--size-unit) * 10)",
  paddingBlock: "calc(var(--spacing-unit) * 2)",
  paddingInline: "calc(var(--spacing-unit) * 3)",
  position: "relative",
  width: "var(--size-full)",
  "&:focus-visible": {
    borderColor: "hsl(var(--color-ring))",
    outline: "3px solid hsl(var(--color-ring) / 20%)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  '&[data-field="invalid"]': {
    borderColor: "hsl(var(--color-danger))",
  },
  '&[data-field="invalid"]:focus-visible': {
    outline: "3px solid hsl(var(--color-danger) / 24%)",
  },
  "&::placeholder": {
    color: "hsl(var(--color-mutedForeground))",
  },
  "&::placeholder:disabled": {
    color: "hsl(var(--color-mutedForeground))",
  },
});

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return <TextareaRoot ref={ref} {...props} />;
});

export { Textarea };

export type { TextareaProps };
