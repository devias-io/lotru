import * as React from "react";
import * as Primitives from "@base_ui/react/Progress";
import { styled } from "@pigment-css/react";

const ProgressRoot = Primitives.Root;

const ProgressTrack = styled(Primitives.Track, {
  name: "ProgressTrack",
  slot: "track",
})<React.ComponentProps<typeof Primitives.Track>>({
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
})<React.ComponentProps<typeof Primitives.Indicator>>({
  backgroundColor: "hsl(var(--color-primary))",
  boxSizing: "border-box",
  position: "absolute",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "width",
  transitionTimingFunction: "var(--easing-default)",
});

const Progress = (props: React.ComponentProps<typeof Primitives.Root>) => (
  <ProgressRoot {...props}>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </ProgressRoot>
);
Progress.displayName = "Progress";

export { Progress };
