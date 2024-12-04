import * as React from "react";
import * as Primitives from "@base_ui/react/Tooltip";
import { styled } from "@pigment-css/react";

const HoverCardProvider = (
  props: React.ComponentProps<typeof Primitives.Provider>
): React.JSX.Element => <Primitives.Provider {...props} />;
HoverCardProvider.displayName = "HoverCardProvider";

const HoverCard = React.forwardRef<
  React.ElementRef<typeof Primitives.Root>,
  React.ComponentPropsWithoutRef<typeof Primitives.Root>
>((props, ref) => <Primitives.Root ref={ref} {...props} />);
HoverCard.displayName = "HoverCard";

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof Primitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitives.Trigger>
>((props, ref) => <Primitives.Trigger ref={ref} {...props} />);
HoverCardTrigger.displayName = "HoverCardTrigger";

const HoverCardPositioner = React.forwardRef<
  React.ElementRef<typeof Primitives.Positioner>,
  React.ComponentPropsWithoutRef<typeof Primitives.Positioner>
>((props, ref) => <Primitives.Positioner ref={ref} {...props} />);
HoverCardPositioner.displayName = "HoverCardPositioner";

const HoverCardContent = styled(Primitives.Popup, {
  name: "HoverCardContent",
  slot: "content",
})<React.ComponentProps<typeof Primitives.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  filter: "drop-shadow(0px 2px 4px hsl(0 0% 0% / 6%))",
  maxWidth: "var(--size-md)",
  padding: "calc(var(--size-unit) * 4)",
  position: "relative",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-popover)",
  "&:focus-visible": {
    outline: "none",
  },
});

const HoverCardArrow = styled(Primitives.Arrow, {
  name: "HoverCardArrow",
  slot: "arrow",
})<React.ComponentProps<typeof Primitives.Arrow>>({
  backgroundColor: "hsl(var(--color-surface))",
  height: "10px",
  transform: "rotate(45deg)",
  width: "10px",
  zIndex: "var(--zIndex-hide)",
  "&[data-side='top']": {
    bottom: "-5px",
  },
  "&[data-side='right']": {
    left: "-5px",
  },
  "&[data-side='bottom']": {
    top: "-5px",
  },
  "&[data-side='left']": {
    right: "-5px",
  },
});

export {
  HoverCardProvider,
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardPositioner,
};
