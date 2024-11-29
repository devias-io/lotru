import * as React from "react";
import { styled } from "@pigment-css/react";

interface InputRootProps extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size_: "sm" | "md" | "lg" | "xl";
}

const InputRoot = styled("input", {
  name: "InputRoot",
  slot: "root",
})<InputRootProps>({
  appearance: "none",
  background: "none",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  position: "relative",
  width: "var(--size-full)",
  "&:focus-visible": {
    borderColor: "hsl(var(--color-borderStrong))",
    outline: "3px solid hsl(var(--color-ring))",
  },
  "&:disabled": {
    backgroundColor: "hsl(var(--color-input-backgroundDisabled))",
    color: "hsl(var(--color-foregroundDisabled))",
    cursor: "not-allowed",
  },
  '&[data-field="invalid"]:focus-visible': {
    borderColor: "hsl(var(--color-danger))",
    outline: "3px solid hsl(var(--color-danger) / 24%)",
  },
  "&::placeholder": {
    color: "hsl(var(--color-foregroundMuted))",
  },
  "&::placeholder:disabled": {
    color: "hsl(var(--color-foregroundDisabled))",
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

interface InputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  size?: "sm" | "md" | "lg" | "xl";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ size = "md", ...props }, ref) => {
  return <InputRoot ref={ref} size_={size} {...props} />;
});

export { Input };
