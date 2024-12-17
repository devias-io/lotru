import * as React from "react";
import { Progress as Primitive } from "@base-ui-components/react/progress";
import { styled } from "@pigment-css/react";

const ProgressRoot = Primitive.Root;

const ProgressTrack = styled(Primitive.Track, {
  name: "ProgressTrack",
  slot: "track",
})<React.ComponentProps<typeof Primitive.Track>>({
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 3)",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-full)",
});

const ProgressIndicator = styled(Primitive.Indicator, {
  name: "ProgressIndicator",
  slot: "indicator",
})<React.ComponentProps<typeof Primitive.Indicator>>({
  backgroundColor: "hsl(var(--color-primary))",
  boxSizing: "border-box",
  position: "absolute",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "width",
  transitionTimingFunction: "var(--easing-default)",
});

const Progress = (props: React.ComponentProps<typeof Primitive.Root>) => (
  <ProgressRoot {...props}>
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </ProgressRoot>
);
Progress.displayName = "Progress";

export { Progress };
