import * as React from "react";
import { styled } from "@pigment-css/react";
import { Toggle as Primitive } from "@base-ui-components/react/toggle";

const ToggleRoot = styled(Primitive, {
  name: "Toggle",
  slot: "root",
})<
  React.ComponentProps<typeof Primitive> & {
    size: "sm" | "md" | "lg";
    variant: "outline" | "ghost";
  }
>({
  alignItems: "center",
  appearance: "none",
  backgroundColor: "transparent",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  gap: "calc(var(--space-md) * 2)",
  justifyContent: "center",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "background-color",
  transitionTimingFunction: "var(--easing-default)",
  whiteSpace: "nowrap",
  "&:hover:not(:disabled):not([data-pressed])": {
    backgroundColor: "hsl(var(--color-muted))",
    color: "hsl(var(--color-mutedForeground))",
  },
  "&[data-pressed]": {
    backgroundColor: "hsl(var(--color-muted))",
    color: "hsl(var(--color-foreground))",
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
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
  "& svg": {
    flexShrink: 0,
    fontSize: "1.1em",
    height: "1.1em",
    pointerEvents: "none",
    width: "1.1em",
  },
  variants: [
    {
      props: { variant: "outline" },
      style: {
        border: "1px solid hsl(var(--color-border))",
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        border: "none",
      },
    },
    {
      props: { size: "sm" },
      style: {
        height: "calc(var(--size-unit) * 8)",
        minWidth: "calc(var(--size-unit) * 8)",
        paddingInline: "calc(var(--spacing-unit) * 1.5)",
      },
    },
    {
      props: { size: "md" },
      style: {
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingInline: "calc(var(--spacing-unit) * 2)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingInline: "calc(var(--spacing-unit) * 2)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
      },
    },
  ],
} as React.CSSProperties);

const Toggle = ({
  size = "md",
  variant = "ghost",
  ...props
}: React.ComponentProps<typeof Primitive> & {
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "ghost";
}) => {
  return <ToggleRoot size={size} variant={variant} {...props} />;
};

export { Toggle };
