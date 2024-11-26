import * as React from "react";
import { styled } from "@pigment-css/react";

const StackRoot = styled("div", {
  name: "Stack",
  slot: "root",
})({
  display: "flex",
  flexDirection: "var(--direction)" as "row" | "column",
  gap: "var(--gap)",
});

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The alignment of the stack.
   */
  alignItems?: React.CSSProperties["alignItems"];
  /**
   * The direction of the stack.
   */
  direction?: React.CSSProperties["flexDirection"];
  /**
   * The flex-wrap property of the stack.
   */
  flexWrap?: React.CSSProperties["flexWrap"];
  /**
   * The space between each child element.
   */
  gap?: number;
  /**
   * The justify-content property of the stack.
   */
  justifyContent?: React.CSSProperties["justifyContent"];
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ alignItems, children, direction = "column", flexWrap, gap = 0, justifyContent, style, ...props }, ref) => {
    return (
      <StackRoot
        ref={ref}
        style={
          {
            "--gap": `calc(var(--spacing-unit) * ${gap})`,
            "--direction": direction,
            alignItems,
            flexWrap,
            justifyContent,
            ...style,
          } as React.CSSProperties
        }
        {...props}
      >
        {children}
      </StackRoot>
    );
  }
);
Stack.displayName = "Stack";
