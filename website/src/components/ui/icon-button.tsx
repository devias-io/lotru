import * as React from "react";
import { keyframes, styled } from "@pigment-css/react";
import { LoaderCircleIcon } from "lucide-react";

const spinKeyFrames = keyframes({
  from: { transform: "rotate(0)" },
  to: { transform: "rotate(360deg)" },
});

interface IconButtonRootProps extends React.ComponentPropsWithoutRef<"button"> {
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant: "solid" | "outline" | "ghost";
}

const IconButtonRoot = styled("button", {
  name: "IconButton",
  slot: "root",
})<IconButtonRootProps>(({ theme }) => ({
  alignItems: "center",
  appearance: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  outline: "none",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-fit)",
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
        backgroundColor: "hsl(var(--color-foreground))",
        border: "none",
        color: "hsl(var(--color-background))",
        ...theme.applyStyles("dark", {
          backgroundColor: "hsl(220 9% 94%)",
        }),
        "&:hover": {
          backgroundColor: "hsl(240 5% 25%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(0 0% 100%)",
          }),
        },
        "&:active": {
          backgroundColor: "hsl(240 5% 35%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(220 9% 94%)",
          }),
        },
        "&:disabled": {
          backgroundColor: "hsl(var(--color-backgroundDisabled))",
          color: "hsl(var(--color-foregroundDisabled))",
        },
      },
    },
    {
      props: { variant: "outline" },
      style: {
        backgroundColor: "hsl(0 0% 100%)",
        borderColor: "hsl(var(--color-border))",
        borderStyle: "solid",
        borderWidth: "1px",
        color: "hsl(var(--color-foreground))",
        ...theme.applyStyles("dark", {
          backgroundColor: "hsl(230 7% 16%)",
        }),
        "&:hover": {
          backgroundColor: "hsl(240 5% 96%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(223 6% 22%)",
          }),
        },
        "&:active": {
          backgroundColor: "hsl(240 5% 90%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(218 6% 25%)",
          }),
        },
        "&:disabled": {
          backgroundColor: "hsl(var(--color-backgroundDisabled))",
          color: "hsl(var(--color-foregroundDisabled))",
        },
      },
    },
    {
      props: { variant: "ghost" },
      style: {
        backgroundColor: "transparent",
        border: "none",
        color: "hsl(var(--color-foreground))",
        "&:hover": {
          backgroundColor: "hsl(240 5% 96%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(240 5% 15%)",
          }),
        },
        "&:active": {
          backgroundColor: "hsl(240 5% 90%)",
          ...theme.applyStyles("dark", {
            backgroundColor: "hsl(240 5% 20%)",
          }),
        },
        "&:focus-visible": {
          backgroundColor: "hsl(240 5% 96%)",
        },
        "&:disabled": {
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
        minWidth: "calc(var(--size-unit) * 8)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 9)",
        fontSize: "var(--fontSize-sm)",
        minWidth: "calc(var(--size-unit) * 9)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-sm)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 10)",
        minWidth: "calc(var(--size-unit) * 10)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2)",
        height: "calc(var(--size-unit) * 11)",
        minWidth: "calc(var(--size-unit) * 11)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-md)",
        gap: "calc(var(--spacing-unit) * 2.5)",
        height: "calc(var(--size-unit) * 12)",
        minWidth: "calc(var(--size-unit) * 12)",
      },
    },
    {
      props: { size: "2xl" },
      style: {
        fontSize: "var(--fontSize-lg)",
        gap: "calc(var(--spacing-unit) * 3)",
        height: "calc(var(--size-unit) * 16)",
        minWidth: "calc(var(--size-unit) * 16)",
      },
    },
  ],
}));

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "solid" | "outline" | "ghost";
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
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
       * The button's size.
       */
      size = "md",
      /**
       * The button's style.
       */
      variant = "solid",
      ...props
    }: IconButtonProps,
    ref
  ) => {
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
      <IconButtonRoot ref={ref} variant={variant} size={size} disabled={disabled || isLoading} {...props}>
        {renderInner()}
      </IconButtonRoot>
    );
  }
);
IconButton.displayName = "IconButton";

export { IconButton };
