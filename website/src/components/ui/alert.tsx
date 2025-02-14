import * as React from "react";
import { css, styled } from "@pigment-css/react";
import { XIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";

const AlertRoot = styled("div", {
  name: "AlertRoot",
  slot: "root",
})<React.ComponentProps<"div">>({
  alignItems: "flex-start",
  border: "1px solid hsl(var(--color-border))",
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
})<React.ComponentProps<"div">>({
  alignItems: "center",
  display: "flex",
  fontSize: "var(--fontSize-lg)",
  justifyContent: "center",
  "& svg": {
    flexShrink: 0,
    fontSize: "1em",
    height: "1em",
    width: "1em",
  },
});

const AlertContent = styled("div", {
  name: "AlertContent",
  slot: "content",
})<React.ComponentProps<"div">>({
  display: "grid",
  gap: "var(--spacing-unit)",
  flexGrow: 1,
});

const AlertTitle = styled("p", {
  name: "AlertTitle",
  slot: "title",
})<React.ComponentProps<"p">>({
  fontWeight: "var(--fontWeight-medium)",
  lineHeight: "var(--lineHeight-none)",
  marginBlock: 0,
});

const AlertDescription = styled("p", {
  name: "AlertTitle",
  slot: "title",
})<React.ComponentProps<"p">>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  marginBlock: 0,
});

const Alert = ({
  children,
  /**
   * Whether the alert is dismissible
   */
  dismissible = false,
  /**
   * The callback called on dismiss click
   */
  onDismiss,
  ...props
}: React.ComponentProps<"div"> & {
  dismissible?: boolean;
  onDismiss?: () => void;
}) => (
  <AlertRoot {...props}>
    {children}
    {dismissible && (
      <IconButton size="xs" variant="ghost" onClick={onDismiss}>
        <XIcon
          className={css({
            color: "hsl(var(--color-mutedForeground))",
          })}
        />
      </IconButton>
    )}
  </AlertRoot>
);
Alert.displayName = "Alert";

export { Alert, AlertIcon, AlertContent, AlertTitle, AlertDescription };
