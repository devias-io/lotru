import * as React from "react";
import { Accordion as Primitive } from "@base-ui-components/react/accordion";
import { css, styled } from "@pigment-css/react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/src/lib/cn";

const Accordion = styled(Primitive.Root, {
  name: "Accordion",
  slot: "root",
})<React.ComponentProps<typeof Primitive.Root>>({
  boxSizing: "border-box",
});

const AccordionItem = styled(Primitive.Item, {
  name: "AccordionItem",
  slot: "item",
})<React.ComponentProps<typeof Primitive.Item>>({
  borderBlockEnd: "1px solid hsl(var(--color-border))",
  boxSizing: "border-box",
});

const AccordionTrigger = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) => {
  return (
    <Primitive.Header className={css({ boxSizing: "border-box", display: "flex", margin: 0 })}>
      <Primitive.Trigger
        className={cn(
          css({
            alignItems: "center",
            appearance: "none",
            backgroundColor: "transparent",
            border: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            display: "flex",
            flexGrow: 1,
            fontFamily: "inherit",
            fontSize: "var(--fontSize-sm)",
            fontWeight: "var(--fontWeight-medium)",
            gap: "calc(var(--size-unit) * 2)",
            justifyContent: "space-between",
            paddingBlock: "calc(var(--size-unit) * 4)",
            paddingInline: 0,
            textAlign: "start",
            "&:focus-visible": {
              "--ring-offset-width": "2px",
              "--ring-offset-color": "hsl(var(--color-background))",
              "--ring-offset-shadow": "0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
              "--ring-width": "2px",
              "--ring-color": "hsl(var(--color-ring))",
              "--ring-shadow":
                "0 0 0 calc(var(--ring-offset-width) + var(--ring-width)) var(--ring-color)",
              boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)",
              outline: "none",
            },
            "&:hover": {
              textDecoration: "underline",
            },
          } as React.CSSProperties),
          className as string
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={css({
            boxSizing: "border-box",
            color: "hsl(var(--color-mutedForeground))",
            flexShrink: 0,
            height: "calc(var(--size-unit) * 4)",
            transitionDuration: "var(--duration-normal)",
            transitionProperty: "opacity, transform",
            transitionTimingFunction: "var(--easing-default)",
            width: "calc(var(--size-unit) * 4)",
            "[data-panel-open]": {
              transform: "rotate(180deg) scale(1.1)",
            },
          })}
        />
      </Primitive.Trigger>
    </Primitive.Header>
  );
};
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Panel>) => {
  return (
    <Primitive.Panel
      className={cn(
        css({
          boxSizing: "border-box",
          fontSize: "var(--fontSize-sm)",
          height: "var(--accordion-panel-height)",
          overflow: "hidden",
          transitionDuration: "var(--duration-fast)",
          transitionProperty: "height",
          transitionTimingFunction: "var(--easing-default)",
          "&[data-starting-style], &[data-ending-style]": {
            height: 0,
          },
        }),
        className as string
      )}
      {...props}
    >
      <div
        className={css({
          paddingBlockEnd: "calc(var(--size-unit) * 4)",
        })}
      >
        {children}
      </div>
    </Primitive.Panel>
  );
};
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
