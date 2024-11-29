import * as React from "react";
import { styled } from "@pigment-css/react";

interface SelectRootProps extends Omit<React.ComponentPropsWithoutRef<"select">, "size"> {
  size_: "sm" | "md" | "lg" | "xl";
}

const SelectRoot = styled("select", {
  name: "SelectRoot",
  slot: "root",
})<SelectRootProps>({
  appearance: "none",
  backgroundColor: "var(--color-background)",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  position: "relative",
  maxWidth: "var(--size-xs)",
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
  variants: [
    {
      props: { size_: "sm" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingBlock: "calc(var(--spacing-unit) * 1.5)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
      },
    },
    {
      props: { size_: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingBlock: "calc(var(--spacing-unit) * 2)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { size_: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingBlock: "calc(var(--spacing-unit) * 2.5)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
      },
    },
    {
      props: { size_: "xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingBlock: "calc(var(--spacing-unit) * 3)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
      },
    },
  ],
});

interface SelectProps extends Omit<React.ComponentPropsWithoutRef<"select">, "size"> {
  size?: "sm" | "md" | "lg" | "xl";
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ size = "md", ...props }, ref) => {
  return <SelectRoot ref={ref} size_={size} {...props} />;
});

export { Select };
