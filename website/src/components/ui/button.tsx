import * as React from "react";
import { keyframes, styled } from "@pigment-css/react";
import { LoaderCircleIcon } from "lucide-react";

const spinKeyFrames = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

const ButtonRoot = styled("button", {
  name: "ButtonRoot",
  slot: "root",
})<
  React.ComponentProps<"button"> & {
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "solid" | "outline" | "ghost";
  }
>({
  alignItems: "center",
  appearance: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  flexShrink: 0,
  fontFamily: "var(--fontFamily-sans)",
  fontWeight: "var(--fontWeight-medium)",
  justifyContent: "center",
  overflow: "hidden",
  position: "relative",
  userSelect: "none",
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
    pointerEvents: "none",
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
      props: { size: "xs" },
      style: {
        fontSize: "var(--fontSize-xs)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 8)",
        lineHeight: "var(--lineHeight-tighter)",
        minWidth: "calc(var(--size-unit) * 8)",
        paddingBlock: "calc(var(--spacing-unit) * 1)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 9)",
        fontSize: "var(--fontSize-sm)",
        lineHeight: "var(--lineHeight-tight)",
        minWidth: "calc(var(--size-unit) * 9)",
        paddingBlock: "calc(var(--spacing-unit) * 1.5)",
        paddingInline: "calc(var(--spacing-unit) * 3.5)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-sm)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 10)",
        lineHeight: "var(--lineHeight-tight)",
        minWidth: "calc(var(--size-unit) * 10)",
        paddingBlock: "calc(var(--spacing-unit) * 2)",
        paddingInline: "calc(var(--spacing-unit) * 4)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 11)",
        lineHeight: "var(--lineHeight-normal)",
        minWidth: "calc(var(--size-unit) * 11)",
        paddingInline: "calc(var(--spacing-unit) * 4.5)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2.5)",
        height: "calc(var(--size-unit) * 12)",
        lineHeight: "var(--lineHeight-normal)",
        minWidth: "calc(var(--size-unit) * 12)",
        paddingBlock: "calc(var(--spacing-unit) * 2.5)",
        paddingInline: "calc(var(--spacing-unit) * 5)",
      },
    },
    {
      props: { size: "2xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        gap: "calc(var(--spacing-unit) * 3)",
        height: "calc(var(--size-unit) * 16)",
        lineHeight: "var(--lineHeight-relaxed)",
        minWidth: "calc(var(--size-unit) * 16)",
        paddingBlock: "calc(var(--spacing-unit) * 3)",
        paddingInline: "calc(var(--spacing-unit) * 7)",
      },
    },
  ],
} as React.CSSProperties);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> & {
    isLoading?: boolean;
    loadingText?: React.ReactNode;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    variant?: "solid" | "outline" | "ghost";
  }
>(
  (
    {
      children,
      /**
       * Whether the button is disabled.
       */
      disabled,
      /**
       * Whether to show a loading spinner.
       */
      isLoading = false,
      /**
       * The text to show when the button is loading.
       */
      loadingText,
      /**
       * The button's size.
       */
      size = "md",
      /**
       * The button's style.
       */
      variant = "solid",
      ...props
    },
    ref
  ) => {
    const renderInner = () => {
      if (isLoading) {
        return (
          <React.Fragment>
            <LoaderCircleIcon
              style={{
                animation: `${spinKeyFrames} 1s linear infinite`,
              }}
            />
            {loadingText}
          </React.Fragment>
        );
      }

      return children;
    };

    return (
      <ButtonRoot
        ref={ref}
        disabled={disabled || isLoading}
        size={size}
        variant={variant}
        {...props}
      >
        {renderInner()}
      </ButtonRoot>
    );
  }
);
Button.displayName = "Button";

export { Button };
