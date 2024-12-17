"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";
import { Button } from "@/src/components/ui/button";

export function CodeBlockWrapper({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  return (
    <div
      className={cn(
        css({
          overflow: "hidden",
          position: "relative",
          "& pre": {
            borderRadius: 0,
            marginBlock: 0,
            maxHeight: "650px",
            paddingBlockEnd: "100px",
          },
        }),
        !isOpened && css({ maxHeight: "calc(var(--spacing-unit) * 32)" }),
        className
      )}
      {...props}
    >
      <div className={isOpened ? css({ overflow: "auto" }) : css({ overflow: "hidden" })}>
        {children}
      </div>
      <div
        className={cn(
          css({
            alignItems: "center",
            background: "linear-gradient(0, hsl(0 0% 0% / 90%), hsl(0 0% 0% / 30%))",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            padding: "calc(var(--spacing-unit) * 2)",
            position: "absolute",
          }),
          isOpened
            ? css({
                height: "calc(var(--size-unit) * 13)",
                insetBlockEnd: 0,
                insetInlineEnd: 0,
                insetInlineStart: 0,
              })
            : css({ inset: 0 })
        )}
      >
        <Button
          className={css({
            backgroundColor: "hsl(0 0% 100%)",
            color: "hsl(0 0% 0%)",
          })}
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          size="sm"
        >
          {isOpened ? "Collapse" : "Expand"}
        </Button>
      </div>
    </div>
  );
}
