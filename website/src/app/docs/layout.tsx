import * as React from "react";
import { css } from "@pigment-css/react";

import { SidebarProvider } from "@/src/components/lab/sidebar";
import { GlobalSidebar } from "@/src/components/sidebar";
import { GlobalTopbar } from "@/src/components/topbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <SidebarProvider>
      <GlobalTopbar />
      <div
        className={css({
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          paddingTop: "65px",
        })}
      >
        <GlobalSidebar />
        <main
          className={css({
            boxSizing: "border-box",
            display: "flex",
            flex: "1 1 0",
            minWidth: 0,
            paddingInlineEnd: "calc((100vw - 1440px) / 2)",
            "@media (min-width: 768px)": {
              paddingInlineStart: "max(calc((100vw - 1440px) / 2 + 272px), 272px)",
            },
          })}
        >
          <div
            className={css({
              boxSizing: "border-box",
              marginInline: "auto",
              maxWidth: "90rem",
              minWidth: 0,
              paddingBlock: "calc(var(--spacing-unit) * 12)",
              paddingInline: "calc(var(--spacing-unit) * 4)",
              position: "relative",
              width: "100%",
              "@media (min-width: 768px)": {
                paddingInline: "calc(var(--spacing-unit) * 8)",
              },
            })}
          >
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
