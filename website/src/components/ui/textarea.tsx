import * as React from "react";
import { styled } from "@pigment-css/react";

const TextareaRoot = styled("textarea", {
  name: "TextareaRoot",
  slot: "root",
})<React.ComponentProps<"textarea">>({
  appearance: "none",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "inherit",
  fontFamily: "inherit",
  height: "calc(var(--size-unit) * 10)",
  maxWidth: "var(--size-xs)",
  minWidth: "calc(var(--size-unit) * 10)",
  paddingBlock: "calc(var(--spacing-unit) * 2)",
  paddingInline: "calc(var(--spacing-unit) * 3)",
  position: "relative",
  width: "var(--size-full)",
  "&:focus-visible": {
    "--ring-offset-width": "0px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "3px",
    "--ring-color": "hsl(var(--color-ring) / 20%)",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    borderColor: "hsl(var(--color-ring))",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "&[data-invalid]": {
    borderColor: "hsl(var(--color-danger))",
  },
  "&[data-invalid]:focus-visible": {
    "--ring-color": "hsl(var(--color-danger) / 20%)",
  },
  "&::placeholder": {
    color: "hsl(var(--color-mutedForeground))",
  },
  "&::placeholder:disabled": {
    color: "hsl(var(--color-mutedForeground))",
  },
  "@media (min-width: 768px)": {
    fontSize: "var(--fontSize-sm)",
  },
} as React.CSSProperties);

const Textarea = (props: React.ComponentProps<"textarea">) => <TextareaRoot {...props} />;
Textarea.displayName = "Textarea";

export { Textarea };
