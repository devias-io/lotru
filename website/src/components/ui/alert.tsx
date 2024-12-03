"use client";

import * as React from "react";
import { css, styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";

const AlertRoot = styled("div", {
  name: "AlertRoot",
  slot: "root",
})({
  alignItems: "flex-start",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "var(--borderRadius-lg)",
  boxSizing: "border-box",
  display: "flex",
  gap: "calc(var(--spacing-unit) * 3)",
  padding: "calc(var(--spacing-unit) * 4)",
  width: "var(--size-full)",
});

const AlertIcon = styled("div", {
  name: "AlertIcon",
  slot: "icon",
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "var(--fontSize-lg)",
  "& svg": {
    color: "hsl(var(--color-foreground))",
    flexShrink: 0,
    fontSize: "1.1em",
    height: "1.1em",
    width: "1.1em",
  },
});

const AlertContent = styled("div", {
  name: "AlertContent",
  slot: "content",
})({
  flexGrow: 1,
});

const AlertTitle = styled("p", {
  name: "AlertTitle",
  slot: "title",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-md)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-medium)",
  margin: 0,
});

const AlertDescription = styled("p", {
  name: "AlertTitle",
  slot: "title",
})({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  margin: 0,
});

interface AlertProps extends React.ComponentPropsWithoutRef<"div"> {
  dismissible?: boolean;
  variant?: "error" | "success" | "warning" | "info";
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  {
    children,
    /**
     * Whether the alert is dismissible
     */
    dismissible = false,
    /**
     * The variant of the alert
     */
    variant = "info",
    ...props
  }: AlertProps,
  ref
) {
  const [dismissed, setDismissed] = React.useState<boolean>(false);

  const handleDismiss = (): void => {
    setDismissed(true);
  };

  if (dismissed) {
    return null;
  }

  return (
    <AlertRoot ref={ref} {...props}>
      {children}
      {dismissible && (
        <IconButton size="xs" variant="ghost" onClick={handleDismiss}>
          <XIcon
            className={css({
              color: "hsl(var(--color-mutedForeground))",
            })}
          />
        </IconButton>
      )}
    </AlertRoot>
  );
});

export { type AlertProps, Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
