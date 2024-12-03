import * as React from "react";
import * as Primitives from "@base_ui/react/Progress";
import { styled } from "@pigment-css/react";

const ProgressRoot = styled(Primitives.Root, {
  name: "ProgressRoot",
  slot: "root",
})({});

const ProgressTrack = styled(Primitives.Track, {
  name: "ProgressTrack",
  slot: "track",
})({
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 3)",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-full)",
});

const ProgressIndicator = styled(Primitives.Indicator, {
  name: "ProgressIndicator",
  slot: "indicator",
})({
  backgroundColor: "hsl(var(--color-primary))",
  boxSizing: "border-box",
  position: "absolute",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "width",
  transitionTimingFunction: "var(--easing-default)",
});

type ProgressProps = React.ComponentPropsWithoutRef<typeof Primitives.Root>;

const Progress = React.forwardRef<React.ElementRef<typeof ProgressRoot>, ProgressProps>(({ ...props }, ref) => {
  return (
    <ProgressRoot ref={ref} {...props}>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressRoot>
  );
});

export { type ProgressProps, Progress };
