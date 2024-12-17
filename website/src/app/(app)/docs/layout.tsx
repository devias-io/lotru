import * as React from "react";
import { css } from "@pigment-css/react";

import { DocsSidebarNav } from "@/src/components/docs-sidebar-nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div
      className={css({
        boxSizing: "border-box",
        marginInline: "auto",
        "@media (min-width: 768px)": {
          paddingInline: "calc(var(--size-unit) * 8)",
        },
        "@media (min-width: 1800px)": {
          maxWidth: "1536px",
        },
      })}
    >
      <div
        className={css({
          "@media (min-width: 768px)": {
            alignItems: "flex-start",
            display: "grid",
            gridTemplateColumns: "240px minmax(0, 1fr)",
          },
        })}
      >
        <aside
          className={css({
            borderInlineEnd: "1px solid hsl(var(--color-border))",
            boxSizing: "border-box",
            display: "none",
            height: "calc(100vh - calc(var(--size-unit) * 14))",
            insetBlockStart: "calc(var(--size-unit) * 14)",
            insetInlineStart: 0,
            position: "sticky",
            zIndex: "30",
            "@media (min-width: 768px)": {
              display: "block",
            },
          })}
        >
          <div
            className={css({
              boxSizing: "border-box",
              height: "var(--size-full)",
              overflow: "auto",
              paddingBlock: "calc(var(--size-unit) * 8)",
              paddingInlineEnd: "calc(var(--size-unit) * 4)",
              scrollbarWidth: "none",
            })}
          >
            <DocsSidebarNav />
          </div>
        </aside>
        {children}
      </div>
    </div>
  );
}
