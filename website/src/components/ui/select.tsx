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
  background: "none",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  outline: "none",
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
  variants: [
    {
      props: { size_: "sm" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
      },
    },
    {
      props: { size_: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { size_: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
      },
    },
    {
      props: { size_: "xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
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
