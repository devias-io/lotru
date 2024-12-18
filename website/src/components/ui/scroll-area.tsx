import * as React from "react";
import { ScrollArea as Primitive } from "@base-ui-components/react/scroll-area";
import { css, styled } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";

const ScrollArea = ({
  children,
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof Primitive.Root> & {
  orientation?: React.ComponentProps<typeof Primitive.Scrollbar>["orientation"];
}) => {
  return (
    <Primitive.Root
      className={cn(css({ boxSizing: "border-box" }), className as string)}
      {...props}
    >
      <Primitive.Viewport
        className={css({
          boxSizing: "border-box",
          height: "var(--size-full)",
          overscrollBehavior: "contain",
        })}
      >
        {children}
        <Scrollbar orientation={orientation}>
          <Thumb />
        </Scrollbar>
      </Primitive.Viewport>
    </Primitive.Root>
  );
};

const Scrollbar = styled(Primitive.Scrollbar, {
  name: "Scrollbar",
  slot: "scrollbar",
})<React.ComponentProps<typeof Primitive.Scrollbar>>({
  borderRadius: "inherit",
  boxSizing: "border-box",
  display: "flex",
  opacity: 0,
  padding: "1px",
  touchAction: "none",
  transitionDelay: "var(--duration-fast)",
  transitionDuration: "var(--duration-fast)",
  transitionProperty: "opacity",
  transitionTimingFunction: "var(--easing-default)",
  userSelect: "none",
  "&[data-hovering], &[data-scrolling]": {
    opacity: 1,
    transitionDuration: "var(--duration-faster)",
    transitionDelay: "0ms",
  },
  "&[data-orientation='horizontal']": {
    height: "calc(var(--size-unit) * 2)",
  },
  "&[data-orientation='vertical']": {
    width: "calc(var(--size-unit) * 2)",
  },
});

const Thumb = styled(Primitive.Thumb, {
  name: "Thumb",
  slot: "thumb",
})<React.ComponentProps<typeof Primitive.Thumb>>({
  backgroundColor: "hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  "&[data-orientation='horizontal']": {
    height: "var(--size-full)",
  },
  "&[data-orientation='vertical']": {
    width: "var(--size-full)",
  },
});

export { ScrollArea };
