import * as React from "react";
import * as Primitives from "@base_ui/react/Switch";
import { styled } from "@pigment-css/react";

const SwitchRoot = styled(Primitives.Root, {
  name: "Switch",
  slot: "root",
})(({ theme }) => ({
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "24px",
  boxShadow: "inset 0px 1px 1px rgba(0, 0, 0, .05)",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "inline-block",
  height: "18px",
  padding: 0,
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "all",
  transitionTimingFunction: "var(--easing-default)",
  width: "32px",
  overflow: "hidden",
  position: "relative",
  "&[data-disabled]": {
    cursor: "not-allowed",
    opacity: 0.4,
  },
  "&:hover:not([data-disabled])": {
    backgroundColor: "hsl(var(--color-backgroundSubtleHover))",
    borderColor: "hsl(var(--color-borderStrong))",
  },
  "&:focus-visible": {
    boxShadow: "0 0 0 3px hsl(var(--color-borderInteractive))",
  },
  "&[data-state='checked']": {
    backgroundColor: "hsl(var(--color-backgroundInteractive))",
    border: "none",
  },
  "&[data-state='checked']:not([data-disabled]):hover": {
    backgroundColor: "hsl(var(--color-backgroundInteractiveHover))",
  },
  "&[data-state='unchecked']:not([data-disabled])": {
    backgroundColor: "hsl(220 13% 91%)",
    ...theme.applyStyles("dark", {
      backgroundColor: "hsl(220 13% 30%)",
    }),
  },
  "&[data-state='unchecked']:not([data-disabled]):hover": {
    backgroundColor: "hsl(216 12% 86%)",
    ...theme.applyStyles("dark", {
      backgroundColor: "hsl(216 12% 35%)",
    }),
  },
  "&:before": {
    content: '""',
    display: "block",
    height: "var(--size-full)",
    position: "absolute",
    width: "var(--size-full)",
    left: 0,
    top: 0,
    boxShadow:
      "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(3, 7, 18, .04) 0px 1px 1px 0px inset, rgba(3, 7, 18, .04) 0px 2px 4px 0px inset, rgba(3, 7, 18, .06) 0px 0px 0px .5px inset, rgba(3, 7, 18, .02) 0px 0px 8px 0px inset, rgba(3, 7, 18, .04) 0px 2px 4px 0px",
  },
}));

const SwitchThumb = styled(Primitives.Thumb, {
  name: "SwitchThumb",
  slot: "thumb",
})({
  backgroundColor: "hsl(var(--color-foregroundOnColor))",
  borderColor: "hsl(var(--color-border))",
  borderStyle: "solid",
  borderWidth: "1px",
  borderRadius: "16px",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, .1)",
  boxSizing: "border-box",
  display: "block",
  height: "14px",
  left: "2px",
  position: "relative",
  transitionDuration: "var(--duration-normal)",
  transitionProperty: "all",
  transitionTimingFunction: "var(--easing-default)",
  width: "14px",
  "&[data-state='checked']": {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, .3)",
    left: "16px",
  },
});

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchRoot> {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchRoot>, SwitchProps>((props, ref) => (
  <SwitchRoot ref={ref} {...props}>
    <SwitchThumb />
  </SwitchRoot>
));
Switch.displayName = "Switch";

export { Switch };

export type { SwitchProps };
