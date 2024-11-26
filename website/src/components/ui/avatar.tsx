import * as React from "react";
import { styled } from "@pigment-css/react";
import * as Primitives from "@radix-ui/react-avatar";

interface AvatarRootProps extends React.ComponentPropsWithoutRef<typeof Primitives.Root> {
  size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  variant: "rounded" | "squared";
}

const AvatarRoot = styled(Primitives.Root, {
  name: "AvatarRoot",
  slot: "root",
})<AvatarRootProps>({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-backgroundSubtle))",
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
      } as React.CSSProperties,
    },
    {
      props: { size: "xs" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 6)",
      } as React.CSSProperties,
    },
    {
      props: { size: "sm" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 7)",
      } as React.CSSProperties,
    },
    {
      props: { size: "md" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 8)",
      } as React.CSSProperties,
    },
    {
      props: { size: "lg" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 10)",
      } as React.CSSProperties,
    },
    {
      props: { size: "xl" },
      style: {
        "--avatar-size": "calc(var(--size-unit) * 12)",
      } as React.CSSProperties,
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
});

const AvatarImage = styled(Primitives.Image, {
  name: "AvatarImage",
  slot: "image",
})({
  height: "var(--size-full)",
  objectFit: "cover",
  width: "var(--size-full)",
});

const AvatarFallback = styled(Primitives.Fallback, {
  name: "AvatarFallback",
  slot: "fallback",
})({
  alignItems: "center",
  backgroundColor: "hsl(var(--color-backgroundSubtle))",
  color: "hsl(var(--color-foregroundSubtle))",
  display: "flex",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "calc(var(--avatar-size) / 2.5)",
  height: "var(--size-full)",
  justifyContent: "center",
  width: "var(--size-full)",
});

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof Primitives.Root> {
  src?: string;
  fallback: string;
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "rounded" | "squared";
}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarRoot>, AvatarProps>(
  ({ src, fallback, size = "md", variant = "rounded", ...props }: AvatarProps, ref) => (
    <AvatarRoot ref={ref} size={size} variant={variant} {...props}>
      {src ? <AvatarImage src={src} /> : <AvatarFallback>{fallback}</AvatarFallback>}
    </AvatarRoot>
  )
);
Avatar.displayName = "Avatar";

export { Avatar };
