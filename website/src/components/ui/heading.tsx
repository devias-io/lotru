import * as React from "react";
import { styled } from "@pigment-css/react";

const HeadingRoot = styled("h1", {
  name: "HeadingRoot",
  slot: "root",
})<
  React.ComponentProps<"h1"> & {
    level: "h1" | "h2" | "h3";
  }
>({
  boxSizing: "border-box",
  fontFamily: "var(--fontFamily-sans)",
  marginBlock: 0,
  variants: [
    {
      props: { level: "h1" },
      style: {
        fontSize: "var(--fontSize-3xl)",
        fontWeight: "var(--fontWeight-semibold)",
        lineHeight: "var(--lineHeight-relaxed)",
      },
    },
    {
      props: { level: "h2" },
      style: {
        fontSize: "var(--fontSize-2xl)",
        fontWeight: "var(--fontWeight-semibold)",
        lineHeight: "var(--lineHeight-normal)",
      },
    },
    {
      props: { level: "h3" },
      style: {
        fontSize: "var(--fontSize-xl)",
        fontWeight: "var(--fontWeight-semibold)",
        lineHeight: "var(--lineHeight-tight)",
      },
    },
  ],
});

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1"> & {
    level?: "h1" | "h2" | "h3";
  }
>(
  (
    {
      /**
       * The heading level which specifies which heading element is used.
       */
      level = "h1",
      ...props
    },
    ref
  ) => <HeadingRoot as={level} ref={ref} level={level} {...props} />
);
Heading.displayName = "Heading";

export { Heading };
