"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import { MenuIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { useSidebarContext } from "@/src/components/lab/sidebar";
import { ThemeSwitch } from "./theme-switch";

export function GlobalTopbar(): React.JSX.Element {
  const isMobile = useIsMobile();
  const sidebar = useSidebarContext();

  return (
    <header
      className={css({
        boxSizing: "border-box",
        backgroundColor: "hsl(var(--color-background))",
        borderBottom: "1px solid hsl(var(--color-border))",
        left: 0,
        display: "flex",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: "var(--zIndex-sticky)",
      })}
    >
      <div
        className={css({
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          height: "64px",
          marginInline: "auto",
          paddingBlock: "calc(var(--spacing-unit) * 2.5)",
          paddingInline: "calc(var(--spacing-unit) * 2)",
          position: "relative",
          width: "90rem",
          "@media (min-width: 768px)": {
            paddingInline: "calc(var(--spacing-unit) * 8)",
          },
        })}
      >
        <div>
          {isMobile ? (
            <IconButton
              onClick={() => {
                sidebar.setOpenMobile(!sidebar.openMobile);
              }}
              variant="ghost"
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
