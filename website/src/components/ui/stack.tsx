import * as React from "react";

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
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
>(({ alignItems, children, direction = "column", flexWrap, gap = 0, justifyContent, style, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      alignItems,
      display: "flex",
      flexDirection: direction,
      flexWrap,
      gap: `calc(var(--spacing-unit) * ${gap})`,
      justifyContent,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
));
Stack.displayName = "Stack";
