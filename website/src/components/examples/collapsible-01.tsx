import * as React from "react";
import { css } from "@pigment-css/react";
import { ChevronsUpDownIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import { IconButton } from "@/src/components/ui/icon-button";
import { Text } from "@/src/components/ui/text";

export default function AccordionExample(): React.JSX.Element {
  return (
    <Collapsible
      className={css({
        border: "1px solid hsl(var(--color-border))",
        borderRadius: "var(--borderRadius-md)",
        maxWidth: "200px",
        paddingBlock: "calc(var(--size-unit) * 2)",
        paddingInlineEnd: "calc(var(--size-unit) * 2)",
        paddingInlineStart: "calc(var(--size-unit) * 4)",
        width: "var(--size-full)",
      })}
    >
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        })}
      >
        <Text fontSize="sm" fontWeight="medium">
          Recovery keys
        </Text>
        <CollapsibleTrigger
          render={
            <IconButton variant="ghost" size="sm">
              <ChevronsUpDownIcon />
            </IconButton>
          }
        />
      </div>
      <CollapsibleContent
        className={css({
          height: "var(--collapsible-panel-height)",
          overflow: "hidden",
          transitionDuration: "var(--duration-fast)",
          transitionProperty: "height",
          transitionTimingFunction: "var(--easing-default)",
          "&[data-starting-style], &[data-ending-style]": {
            height: 0,
          },
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            fontSize: "var(--fontSize-sm)",
            gap: "var(--size-unit)",
          })}
        >
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
