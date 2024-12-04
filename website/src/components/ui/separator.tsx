import * as React from "react";
import * as Primitives from "@base_ui/react/Separator";
import { styled } from "@pigment-css/react";

const SeparatorRoot = styled(Primitives.Root, {
  name: "SeparatorRoot",
  slot: "root",
})<
  React.ComponentProps<typeof Primitives.Root> & {
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

const Separator = React.forwardRef<
  HTMLHRElement,
  React.ComponentPropsWithoutRef<"div"> & {
    orientation?: "vertical" | "horizontal";
  }
>(({ orientation = "horizontal", ...props }, ref) => <SeparatorRoot ref={ref} orientation={orientation} {...props} />);
Separator.displayName = "Separator";

export { Separator };
