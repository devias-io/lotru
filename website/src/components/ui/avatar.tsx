import * as React from "react";
import { styled } from "@pigment-css/react";
import * as Primitives from "@radix-ui/react-avatar";

const AvatarRoot = styled(Primitives.Root, {
  name: "AvatarRoot",
  slot: "root",
})<
  React.ComponentProps<typeof Primitives.Root> & {
    size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
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
        "--avatar-size": "calc(var(--size-unit) * 14)",
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

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarRoot>,
  React.ComponentPropsWithoutRef<typeof Primitives.Root> & {
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
    variant?: "rounded" | "squared";
  }
>(({ children, size = "md", variant = "rounded", ...props }, ref) => (
  <AvatarRoot ref={ref} size={size} variant={variant} {...props}>
    {children}
  </AvatarRoot>
));
Avatar.displayName = "Avatar";

const AvatarImage = styled(Primitives.Image, {
  name: "AvatarImage",
  slot: "image",
})<React.ComponentProps<typeof Primitives.Image>>({
  height: "var(--size-full)",
  objectFit: "cover",
  width: "var(--size-full)",
});

const AvatarFallback = styled(Primitives.Fallback, {
  name: "AvatarFallback",
  slot: "fallback",
})<React.ComponentProps<typeof Primitives.Fallback>>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-muted))",
  color: "hsl(var(--color-mutedForeground))",
  display: "flex",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "calc(var(--avatar-size) / 2.5)",
  height: "var(--size-full)",
  justifyContent: "center",
  width: "var(--size-full)",
});

export { Avatar, AvatarFallback, AvatarImage };
