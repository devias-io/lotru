import * as React from "react";
import { css } from "@pigment-css/react";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/text";
import { SidebarNav } from "@/src/app/(app)/examples/forms/components/sidebar-nav";
import { Stack } from "@/src/components/ui/stack";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "300px 1fr",
      })}
    >
      <aside
        className={css({
          backgroundColor: "hsl(var(--color-muted))",
          borderInlineEnd: "1px solid hsl(var(--color-border))",
        })}
      >
        <Stack
          className={css({
            paddingBlock: "calc(var(--spacing-unit) * 3)",
            paddingInline: "calc(var(--spacing-unit) * 6)",
          })}
          gap={1}
        >
          <div>
            <Button className={css({ paddingInline: 0 })} size="sm" variant="link">
              <ArrowLeftIcon />
              Back
            </Button>
          </div>
          <Text fontSize="xl" fontWeight="medium">
            Account Settings
          </Text>
          <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
            Mange your personal information.
          </Text>
        </Stack>
        <div
          className={css({
            borderBlockEnd: "1px dashed hsl(var(--color-border))",
            marginInline: "calc(var(--spacing-unit) * 6)",
          })}
        />
        <div
          className={css({
            paddingBlock: "calc(var(--spacing-unit) * 3)",
            paddingInline: "calc(var(--spacing-unit) * 6)",
          })}
        >
          <SidebarNav />
        </div>
      </aside>
      <div className={css({ padding: "calc(var(--spacing-unit) * 6)" })}>{children}</div>
    </div>
  );
}
