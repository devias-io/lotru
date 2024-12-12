import * as React from "react";
import { styled } from "@pigment-css/react";

const TextRoot = styled("p", {
  name: "TextRoot",
  slot: "root",
})<
  React.ComponentProps<"p"> & {
    fontFamily?: "sans" | "mono";
    fontSize?:
      | "2xs"
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
      | "7xl"
      | "8xl"
      | "9xl";
    fontWeight?: "regular" | "medium" | "semibold" | "bold";
    lineHeight?: "normal" | "tight" | "none";
  }
>({
  boxSizing: "border-box",
  marginBlock: 0,
  variants: [
    {
      props: { fontSize: "xs" },
      style: { fontSize: "var(--fontSize-xs)" },
    },
    {
      props: { fontSize: "sm" },
      style: { fontSize: "var(--fontSize-sm)" },
    },
    {
      props: { fontSize: "md" },
      style: { fontSize: "var(--fontSize-md)" },
    },
    {
      props: { fontSize: "lg" },
      style: { fontSize: "var(--fontSize-lg)" },
    },
    {
      props: { fontSize: "xl" },
      style: { fontSize: "var(--fontSize-xl)" },
    },
    {
      props: { fontSize: "2xl" },
      style: { fontSize: "var(--fontSize-2xl)" },
    },
    {
      props: { fontSize: "3xl" },
      style: { fontSize: "var(--fontSize-3xl)" },
    },
    {
      props: { fontSize: "4xl" },
      style: { fontSize: "var(--fontSize-4xl)" },
    },
    {
      props: { fontSize: "5xl" },
      style: { fontSize: "var(--fontSize-5xl)" },
    },
    {
      props: { fontSize: "6xl" },
      style: { fontSize: "var(--fontSize-6xl)" },
    },
    {
      props: { fontSize: "7xl" },
      style: { fontSize: "var(--fontSize-7xl)" },
    },
    {
      props: { fontSize: "8xl" },
      style: { fontSize: "var(--fontSize-8xl)" },
    },
    {
      props: { fontSize: "9xl" },
      style: { fontSize: "var(--fontSize-9xl)" },
    },
    {
      props: { fontWeight: "regular" },
      style: { fontWeight: "var(--fontWeight-regular)" },
    },
    {
      props: { fontWeight: "medium" },
      style: { fontWeight: "var(--fontWeight-medium)" },
    },
    {
      props: { fontWeight: "semibold" },
      style: { fontWeight: "var(--fontWeight-semibold)" },
    },
    {
      props: { fontWeight: "bold" },
      style: { fontWeight: "var(--fontWeight-bold)" },
    },
    {
      props: { fontFamily: "sans" },
      style: { fontFamily: "var(--fontFamily-sans)" },
    },
    {
      props: { fontFamily: "mono" },
      style: { fontFamily: "var(--fontFamily-mono)" },
    },
    {
      props: { lineHeight: "none" },
      style: { lineHeight: "var(--lineHeight-none)" },
    },
    {
      props: { lineHeight: "tight" },
      style: { lineHeight: "var(--lineHeight-tight)" },
    },
    {
      props: { lineHeight: "normal" },
      style: { lineHeight: "var(--lineHeight-normal)" },
    },
  ],
});

const Text = ({
  as = "p",
  ...props
}: React.ComponentProps<"p"> & {
  /**
   * The wrapper element to use.
   */
  as?: "p" | "span" | "div";
  /**
   * The text's font family.
   */
  fontFamily?: "sans" | "mono";
  /**
   * The text's size.
   */
  fontSize?:
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  /**
   * The text's font weight.
   */
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  /**
   * The text's line height.
   */
  lineHeight?: "normal" | "tight" | "none";
}) => <TextRoot as={as} {...props} />;
Text.displayName = "Text";

export { Text };
