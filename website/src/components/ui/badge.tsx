import * as React from "react";
import { styled } from "@pigment-css/react";

const BadgeRoot = styled("span", {
  name: "BadgeRoot",
  slot: "root",
})<
  React.ComponentProps<"span"> & {
    rounded: boolean;
    size: "sm" | "md" | "lg";
    variant: "solid" | "subtle" | "outline";
  }
>({
  alignItems: "center",
  boxSizing: "border-box",
  display: "inline-flex",
  fontFamily: "var(--fontFamily-sans)",
  fontWeight: "var(--fontWeight-medium)",
  gap: "var(--spacing-unit)",
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
      props: { variant: "solid" },
      style: {
        backgroundColor: "hsl(var(--color-primary))",
        color: "hsl(var(--color-primaryForeground))",
      },
    },
    {
      props: { variant: "subtle" },
      style: {
        backgroundColor: "hsl(var(--color-muted))",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "hsl(var(--color-border))",
        color: "hsl(var(--color-foreground))",
      },
    },
    {
      props: { variant: "outline" },
      style: {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "hsl(var(--color-border))",
        color: "hsl(var(--color-foreground))",
      },
    },
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-xs)",
        height: "calc(var(--size-unit) * 5)",
        paddingInline: "calc(var(--spacing-unit) * 2)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-xs)",
        height: "calc(var(--size-unit) * 6)",
        paddingInline: "calc(var(--spacing-unit) * 2.5)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 7)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { rounded: false },
      style: {
        borderRadius: "var(--borderRadius-md)",
      },
    },
    {
      props: { rounded: true },
      style: {
        borderRadius: "var(--borderRadius-full)",
      },
    },
  ],
} as React.CSSProperties);

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span"> & {
    rounded?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "subtle" | "outline";
  }
>(
  (
    {
      children,
      /**
       * The size of the badge
       */
      size = "md",
      /**
       * The border radius of the badge
       */
      rounded = true,
      /**
       * The color of the badge
       */
      variant = "solid",
      ...props
    },
    ref
  ) => {
    return (
      <BadgeRoot ref={ref} size={size} rounded={rounded} variant={variant} {...props}>
        {children}
      </BadgeRoot>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
