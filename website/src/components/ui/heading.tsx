import * as React from "react";
import { styled } from "@pigment-css/react";

interface HeadingRootProps extends React.ComponentPropsWithoutRef<"h1"> {
  level: "h1" | "h2" | "h3";
}

const HeadingRoot = styled("h1", {
  name: "Heading",
  slot: "root",
})<HeadingRootProps>({
  boxSizing: "border-box",
  fontFamily: "var(--fontFamily-sans)",
  margin: 0,
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

interface HeadingProps extends React.ComponentPropsWithoutRef<"h1"> {
  level?: "h1" | "h2" | "h3";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      children,
      /**
       * The heading level which specifies which heading element is used.
       */
      level = "h1",
      ...props
    }: HeadingProps,
    ref
  ) => {
    const Component = level || "h1";

    return (
      <HeadingRoot as={Component} ref={ref} level={level} {...props}>
        {children}
      </HeadingRoot>
    );
  }
);
Heading.displayName = "Heading";

export { Heading };
