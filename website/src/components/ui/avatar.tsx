import * as React from "react";
import { styled } from "@pigment-css/react";
import * as Primitive from "@radix-ui/react-avatar";

const AvatarRoot = styled(Primitive.Root, {
  name: "AvatarRoot",
  slot: "root",
})<
  React.ComponentProps<typeof Primitive.Root> & {
    size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    variant: "rounded" | "squared";
  }
>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  display: "flex",
  flex: "0 0 auto",
  height: "var(--avatar-size)",
  justifyContent: "center",
  overflow: "hidden",
  width: "var(--avatar-size)",
  variants: [
    {
      props: { size: "2xs" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 5)",
      },
    },
    {
      props: { size: "xs" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 6)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 8)",
      },
    },
    {
      props: { size: "md" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 10)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 12)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 16)",
      },
    },
    {
      props: { size: "2xl" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 20)",
      },
    },
    {
      props: { variant: "rounded" },
      style: {
        borderRadius: "var(--borderRadius-full)",
      },
    },
    {
      props: { variant: "squared" },
      style: {
        borderRadius: "var(--borderRadius-md)",
      },
    },
  ],
} as React.CSSProperties);

const Avatar = ({
  children,
  size = "md",
  variant = "rounded",
  ...props
}: React.ComponentProps<typeof Primitive.Root> & {
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  variant?: "rounded" | "squared";
}) => (
  <AvatarRoot size={size} variant={variant} {...props}>
    {children}
  </AvatarRoot>
);
Avatar.displayName = "Avatar";

const AvatarImage = styled(Primitive.Image, {
  name: "AvatarImage",
  slot: "image",
})<React.ComponentProps<typeof Primitive.Image>>({
  height: "var(--size-full)",
  objectFit: "cover",
  width: "var(--size-full)",
});

const AvatarFallback = styled(Primitive.Fallback, {
  name: "AvatarFallback",
  slot: "fallback",
})<React.ComponentProps<typeof Primitive.Fallback>>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  color: "hsl(var(--color-mutedForeground))",
  display: "flex",
  fontSize: "calc(var(--avatar-size) / 2.5)",
  height: "var(--size-full)",
  justifyContent: "center",
  width: "var(--size-full)",
});

export { Avatar, AvatarFallback, AvatarImage };
