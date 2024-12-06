import * as React from "react";
import * as Primitives from "@base_ui/react/Slider";
import { styled } from "@pigment-css/react";

const SliderRoot = styled(Primitives.Root, {
  name: "SliderRoot",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
  userSelect: "none",
  touchAction: "none",
  position: "relative",
});

const SliderTrack = styled(Primitives.Track, {
  name: "SliderTrack",
  slot: "track",
})<React.ComponentProps<typeof Primitives.Track>>({
  backgroundColor: "hsl(var(--color-muted))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 2)",
  overflow: "hidden",
  position: "relative",
  width: "var(--size-full)",
});

const SliderIndicator = styled(Primitives.Indicator, {
  name: "SliderIndicator",
  slot: "indicator",
})<React.ComponentProps<typeof Primitives.Indicator>>({
  backgroundColor: "hsl(var(--color-primary))",
});

const SliderThumb = styled(Primitives.Thumb, {
  name: "SliderThumb",
  slot: "thumb",
})<React.ComponentProps<typeof Primitives.Thumb>>({
  backgroundColor: "hsl(var(--color-background))",
  border: "2px solid hsl(var(--color-primary))",
  borderRadius: "var(--borderRadius-full)",
  boxSizing: "border-box",
  display: "block",
  height: "calc(var(--size-unit) * 5)",
  width: "calc(var(--size-unit) * 5)",
  "&:focus-visible": {
    "--ring-offset-width": "2px",
    "--ring-offset-color": "hsl(var(--color-background))",
    "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
    "--ring-width": "2px",
    "--ring-color": "hsl(var(--color-ring))",
    "--ring-shadow": "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
    boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
    outline: "none",
  },
  "&[data-disabled]": {
    cursor: "not-allowed",
  },
} as React.CSSProperties);

const Slider = (props: React.ComponentProps<typeof Primitives.Root>) => (
  <SliderRoot {...props}>
    <Primitives.Control>
      <SliderTrack>
        <SliderIndicator />
      </SliderTrack>
      <SliderThumb />
    </Primitives.Control>
  </SliderRoot>
);
Slider.displayName = "Slider";

export { Slider };
