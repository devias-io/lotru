import * as React from "react";
import { css } from "@pigment-css/react";

import { SidebarNav } from "@/src/app/(app)/examples/forms/components/sidebar-nav";

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
          borderRight: "1px solid hsl(var(--color-border))",
          padding: "calc(var(--spacing-unit) * 3)",
        })}
      >
        <SidebarNav />
      </aside>
      <div className={css({ padding: "calc(var(--spacing-unit) * 6)" })}>{children}</div>
    </div>
  );
}
