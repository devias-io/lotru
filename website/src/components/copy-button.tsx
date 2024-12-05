"use client";

import * as React from "react";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { css } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";
import { IconButton } from "@/src/components/ui/icon-button";

export async function copyToClipboard(value: string): Promise<void> {
  navigator.clipboard.writeText(value);
}

export interface CopyButtonProps extends React.ComponentProps<typeof IconButton> {
  value: string;
  src?: string;
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  ...props
}: CopyButtonProps): React.JSX.Element {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <IconButton
      className={cn("", className)}
      onClick={() => {
        copyToClipboard(value);
        setHasCopied(true);
      }}
      variant={variant}
      {...props}
    >
      <span
        className={css({
          borderWidth: 0,
          clip: "rect(0, 0, 0, 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          whiteSpace: "nowrap",
          width: "1px",
        })}
      >
        Copy
      </span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </IconButton>
  );
}
