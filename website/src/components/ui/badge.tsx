import * as React from "react";
import { styled } from "@pigment-css/react";

interface BadgeRootProps extends React.ComponentPropsWithoutRef<"span"> {
  rounded: boolean;
  size: "sm" | "md" | "lg";
  variant: "solid" | "subtle" | "outline";
}

const BadgeRoot = styled("span", {
  name: "BadgeRoot",
  slot: "root",
})<BadgeRootProps>({
  alignItems: "center",
  boxSizing: "border-box",
  display: "inline-flex",
  fontFamily: "var(--fontFamily-sans)",
  fontWeight: "var(--fontWeight-medium)",
  gap: "var(--spacing-unit)",
  variants: [
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
    {
      props: { variant: "solid" },
      style: {
        backgroundColor: "hsl(var(--color-foreground))",
        color: "hsl(var(--color-background))",
      },
    },
    {
      props: { variant: "subtle" },
      style: {
        backgroundColor: "hsl(var(--color-backgroundSubtle))",
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
  ],
});

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "subtle" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
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
    }: BadgeProps,
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
