import * as React from "react";
import { css } from "@pigment-css/react";

import { SidebarProvider } from "@/src/components/lab/sidebar";
import { GlobalTopbar } from "@/src/components/topbar";
import { GlobalSidebar } from "@/src/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <SidebarProvider>
      <div
        className={css({
          boxSizing: "border-box",
          "@media (min-width: 768px)": {
            display: "grid",
            gridTemplateColumns: "272px 1fr",
          },
        })}
      >
        <div>
          <GlobalSidebar />
        </div>
        <div>
          <GlobalTopbar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
