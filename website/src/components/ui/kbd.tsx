import * as React from "react";

import { styled } from "@pigment-css/react";

const KbdRoot = styled("kbd", {
  name: "KbdRoot",
  slot: "root",
})<
  React.ComponentProps<"kbd"> & {
    size: "sm" | "md" | "lg";
  }
>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-sm)",
  boxSizing: "border-box",
  boxShadow: "0 2px 0 0 hsl(var(--color-border)), 0 0 0 1px hsl(var(--color-border))",
  display: "inline-flex",
  fontFamily: "var(--fontFamily-mono)",
  fontWeight: "var(--fontWeight-medium)",
  whiteSpace: "pre",
  variants: [
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-xs)",
        lineHeight: "var(--lineHeight-tighter)",
        minHeight: "calc(var(--spacing-unit) * 5)",
        paddingBlock: "calc(var(--spacing-unit) * 0.5)",
        paddingInline: "calc(var(--spacing-unit) * 0.5)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-sm)",
        lineHeight: "var(--lineHeight-tight)",
        minHeight: "calc(var(--spacing-unit) * 6)",
        paddingBlock: "calc(var(--spacing-unit) * 0.5)",
        paddingInline: "calc(var(--spacing-unit) * 1)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-md)",
        lineHeight: "var(--lineHeight-normal)",
        minHeight: "calc(var(--spacing-unit) * 7)",
        paddingBlock: "calc(var(--spacing-unit) * 0.5)",
        paddingInline: "calc(var(--spacing-unit) * 1.5)",
      },
    },
  ],
});

const Kbd = ({
  size = "md",
  ...props
}: React.ComponentProps<"kbd"> & {
  size?: "sm" | "md" | "lg";
}) => <KbdRoot size={size} {...props} />;
Kbd.displayName = "Kbd";

export { Kbd };
