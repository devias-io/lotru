import * as React from "react";
import * as Primitives from "@base_ui/react/Separator";
import { styled } from "@pigment-css/react";

interface SeparatorRootProps {
  orientation: "vertical" | "horizontal";
}

const SeparatorRoot = styled(Primitives.Root, {
  name: "SeparatorRoot",
  slot: "root",
})<SeparatorRootProps>({
  backgroundColor: "hsl(var(--color-border))",
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

interface SeparatorProps extends React.ComponentPropsWithoutRef<"div"> {
  orientation?: "vertical" | "horizontal";
}

const Separator = React.forwardRef<HTMLHRElement, SeparatorProps>(({ orientation = "horizontal", ...props }, ref) => {
  return <SeparatorRoot ref={ref} orientation={orientation} {...props} />;
});
Separator.displayName = "Separator";

export { type SeparatorProps, Separator };
