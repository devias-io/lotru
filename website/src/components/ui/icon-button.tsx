import * as React from "react";
import { keyframes, styled } from "@pigment-css/react";
import { LoaderCircleIcon } from "lucide-react";

const spinKeyFrames = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

const IconButtonRoot = styled("button", {
  name: "IconButtonRoot",
  slot: "root",
})<
  React.ComponentProps<"button"> & {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    variant: "solid" | "outline" | "ghost" | "danger";
  }
>({
  alignItems: "center",
  appearance: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: "var(--lineHeight-none)",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-fit)",
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
    width: "1.1em",
  },
  variants: [
    {
      props: { variant: "solid" },
      style: {
        backgroundColor: "hsl(var(--color-primary))",
        border: "none",
        color: "hsl(var(--color-primaryForeground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover:not(:disabled)": {
          backgroundColor: "hsl(var(--color-primary) / 80%)",
        },
        "&:active": {
          backgroundColor: "hsl(var(--color-primary))",
        },
      },
    },
    {
      props: { variant: "outline" },
      style: {
        backgroundColor: "transparent",
        border: "1px solid hsl(var(--color-border))",
        color: "hsl(var(--color-foreground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover:not(:disabled)": {
          backgroundColor: "hsl(var(--color-primary) / 10%)",
        },
        "&:active": {
          backgroundColor: "transparent",
        },
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        backgroundColor: "transparent",
        border: "none",
        color: "hsl(var(--color-foreground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover:not(:disabled)": {
          backgroundColor: "hsl(var(--color-primary) / 10%)",
        },
        "&:active": {
          backgroundColor: "transparent",
        },
      },
    },
    {
      props: { variant: "danger" },
      style: {
        backgroundColor: "hsl(var(--color-danger))",
        border: "none",
        color: "hsl(var(--color-dangerForeground))",
        transitionDuration: "var(--duration-normal)",
        transitionProperty: "background-color",
        transitionTimingFunction: "var(--easing-default)",
        "&:hover:not(:disabled)": {
          backgroundColor: "hsl(var(--color-danger) / 80%)",
        },
        "&:active": {
          backgroundColor: "hsl(var(--color-danger))",
        },
      },
    },
    {
      props: { size: "xs" },
      style: {
        fontSize: "var(--fontSize-xs)",
        height: "calc(var(--size-unit) * 7)",
        minWidth: "calc(var(--size-unit) * 7)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 8)",
        minWidth: "calc(var(--size-unit) * 8)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-sm)",
        height: "calc(var(--size-unit) * 9)",
        minWidth: "calc(var(--size-unit) * 9)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
      },
    },
  ],
} as React.CSSProperties);

const IconButton = ({
  children,
  disabled,
  isLoading = false,
  size = "md",
  variant = "solid",
  ...props
}: React.ComponentProps<"button"> & {
  /**
   * Whether to show a loading spinner.
   */
  isLoading?: boolean;
  /**
   * The button's size.
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * The button's style.
   */
  variant?: "solid" | "outline" | "ghost" | "danger";
}) => {
  const renderInner = () => {
    if (isLoading) {
      return (
        <LoaderCircleIcon
          style={{
            animation: `${spinKeyFrames} 1s linear infinite`,
          }}
        />
      );
    }

    return children;
  };

  return (
    <IconButtonRoot variant={variant} size={size} disabled={disabled || isLoading} {...props}>
      {renderInner()}
    </IconButtonRoot>
  );
};
IconButton.displayName = "IconButton";

export { IconButton };
