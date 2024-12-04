"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";
import { Button } from "@/src/components/ui/button";

export function CodeBlockWrapper({
  children,
  className,
  style,
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
        className
      )}
      style={{
        ...(!isOpened && {
          maxHeight: "calc(var(--spacing-unit) * 32)",
        }),
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          ...(isOpened ? { overflow: "auto" } : { overflow: "hidden" }),
        }}
      >
        {children}
      </div>
      <div
        className={css({
          alignItems: "center",
          background: "linear-gradient(0, hsl(0 0% 0% / 90%), hsl(0 0% 0% / 30%))",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          padding: "calc(var(--spacing-unit) * 2)",
          position: "absolute",
        })}
        style={{
          ...(isOpened ? { bottom: 0, left: 0, right: 0, height: "calc(var(--size-unit) * 13)" } : { inset: 0 }),
        }}
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
          variant="solid"
        >
          {isOpened ? "Collapse" : "Expand"}
        </Button>
      </div>
    </div>
  );
}
