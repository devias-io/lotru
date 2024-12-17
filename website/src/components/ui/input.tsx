import * as React from "react";
import { styled } from "@pigment-css/react";

const InputRoot = styled("input", {
  name: "InputRoot",
  slot: "root",
})<
  Omit<React.ComponentProps<"input">, "size"> & {
    size: "sm" | "md" | "lg" | "xl";
  }
>({
  appearance: "none",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "inherit",
  fontFamily: "inherit",
  maxWidth: "var(--size-xs)",
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
  variants: [
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 8)",
        minWidth: "calc(var(--size-unit) * 8)",
        paddingBlock: "calc(var(--spacing-unit) * 1.5)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-sm)",
        },
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingBlock: "calc(var(--spacing-unit) * 2)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-sm)",
        },
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingBlock: "calc(var(--spacing-unit) * 2.5)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-lg)",
        },
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingBlock: "calc(var(--spacing-unit) * 3)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
        "@media (min-width: 768px)": {
          fontSize: "var(--fontSize-lg)",
        },
      },
    },
  ],
} as React.CSSProperties);

const Input = ({
  size = "md",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & {
  size?: "sm" | "md" | "lg" | "xl";
}) => <InputRoot size={size} {...props} />;
Input.displayName = "Input";

export { Input };
