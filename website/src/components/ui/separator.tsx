import * as React from "react";
import { Separator as Primitive } from "@base-ui-components/react/separator";
import { styled } from "@pigment-css/react";

const SeparatorRoot = styled(Primitive, {
  name: "SeparatorRoot",
  slot: "root",
})<
  React.ComponentProps<typeof Primitive> & {
    orientation: "vertical" | "horizontal";
  }
>({
  backgroundColor: "hsl(var(--color-border))",
  boxSizing: "border-box",
  flexShrink: 0,
  variants: [
    {
      props: { orientation: "horizontal" },
      style: {
        height: "1px",
        width: "var(--size-full)",
      },
    },
    {
      props: { orientation: "vertical" },
      style: {
        height: "var(--size-full)",
        width: "1px",
      },
    },
  ],
});

const Separator = ({
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> & {
  orientation?: "vertical" | "horizontal";
}) => <SeparatorRoot orientation={orientation} {...props} />;
Separator.displayName = "Separator";

export { Separator };
