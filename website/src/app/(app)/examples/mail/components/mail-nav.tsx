import * as React from "react";
import type { LucideIcon } from "lucide-react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";

export interface MailNavProps {
  items: {
    title: string;
    label?: string;
    icon: LucideIcon;
    variant: "solid" | "ghost";
  }[];
}

export function MailNav({ items }: MailNavProps): React.JSX.Element {
  return (
    <nav
      className={css({
        display: "grid",
        gap: "var(--spacing-unit)",
        paddingBlock: "calc(var(--spacing-unit) * 4)",
        paddingInline: "calc(var(--spacing-unit) * 3)",
      })}
    >
      {items.map((item) => (
        <Button
          key={item.title}
          className={css({
            justifyContent: "flex-start",
            textAlign: "start",
            width: "var(--size-full)",
          })}
          variant={item.variant}
        >
          <item.icon />
          {item.title}
          {item.label ? <span className={css({ marginLeft: "auto" })}>{item.label}</span> : null}
        </Button>
      ))}
    </nav>
  );
}
