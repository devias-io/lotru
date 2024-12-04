import * as React from "react";
import { styled } from "@pigment-css/react";

const TextRoot = styled("p", {
  name: "TextRoot",
  slot: "root",
})<
  React.ComponentPropsWithoutRef<"p"> & {
    family: "sans" | "mono";
    leading: "normal" | "tight" | "none";
    size: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    weight: "regular" | "medium" | "semibold" | "bold";
  }
>({
  boxSizing: "border-box",
  marginBlock: 0,
  variants: [
    {
      props: { size: "xs" },
      style: {
        fontSize: "var(--fontSize-xs)",
      },
    },
    {
      props: { size: "sm" },
      style: {
        fontSize: "var(--fontSize-sm)",
      },
    },
    {
      props: { size: "md" },
      style: {
        fontSize: "var(--fontSize-md)",
      },
    },
    {
      props: { size: "lg" },
      style: {
        fontSize: "var(--fontSize-lg)",
      },
    },
    {
      props: { size: "xl" },
      style: {
        fontSize: "var(--fontSize-xl)",
      },
    },
    {
      props: { size: "2xl" },
      style: {
        fontSize: "var(--fontSize-2xl)",
      },
    },
    {
      props: { size: "3xl" },
      style: {
        fontSize: "var(--fontSize-3xl)",
      },
    },
    {
      props: { size: "4xl" },
      style: {
        fontSize: "var(--fontSize-4xl)",
      },
    },
    {
      props: { size: "5xl" },
      style: {
        fontSize: "var(--fontSize-5xl)",
      },
    },
    {
      props: { size: "6xl" },
      style: {
        fontSize: "var(--fontSize-6xl)",
      },
    },
    {
      props: { size: "7xl" },
      style: {
        fontSize: "var(--fontSize-7xl)",
      },
    },
    {
      props: { size: "8xl" },
      style: {
        fontSize: "var(--fontSize-8xl)",
      },
    },
    {
      props: { size: "9xl" },
      style: {
        fontSize: "var(--fontSize-9xl)",
      },
    },
    {
      props: { weight: "regular" },
      style: {
        fontWeight: "var(--fontWeight-regular)",
      },
    },
    {
      props: { weight: "medium" },
      style: {
        fontWeight: "var(--fontWeight-medium)",
      },
    },
    {
      props: { weight: "semibold" },
      style: {
        fontWeight: "var(--fontWeight-semibold)",
      },
    },
    {
      props: { weight: "bold" },
      style: {
        fontWeight: "var(--fontWeight-bold)",
      },
    },
    {
      props: { family: "sans" },
      style: {
        fontFamily: "var(--fontFamily-sans)",
      },
    },
    {
      props: { family: "mono" },
      style: {
        fontFamily: "var(--fontFamily-mono)",
      },
    },
    {
      props: { leading: "normal" },
      style: {
        lineHeight: "var(--lineHeight-normal)",
      },
    },
    {
      props: { leading: "tight" },
      style: {
        lineHeight: "var(--lineHeight-tight)",
      },
    },
    {
      props: { leading: "none" },
      style: {
        lineHeight: "var(--lineHeight-none)",
      },
    },
  ],
});

const Text = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p"> & {
    as?: "p" | "span" | "div";
    family?: "sans" | "mono";
    leading?: "normal" | "tight" | "none";
    size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
    weight?: "regular" | "medium" | "semibold" | "bold";
  }
>(
  (
    {
      /**
       * The wrapper element to use.
       */
      as = "p",
      /**
       * The text's font family.
       */
      family = "sans",
      /**
       * The text's line height.
       */
      leading = "normal",
      /**
       * The text's size.
       */
      size = "md",
      /**
       * The text's font weight.
       */
      weight = "regular",
      ...props
    },
    ref
  ) => <TextRoot as={as} ref={ref} size={size} weight={weight} family={family} leading={leading} {...props} />
);
Text.displayName = "Text";

export { Text };
