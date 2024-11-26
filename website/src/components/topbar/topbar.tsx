"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import { GithubIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

import { IconButton } from "@/src/components/ui/icon-button";
import { Stack } from "@/src/components/ui/stack";
import { useSidebarContext } from "@/src/components/lab/sidebar";
import { Logo } from "@/src/components/logo";

import { ThemeSwitch } from "./theme-switch";

export function GlobalTopbar(): React.JSX.Element {
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
        <Stack alignItems="center" direction="row" gap={3}>
          <IconButton
            className={css({
              "@media (min-width: 768px)": {
                display: "none",
              },
            })}
            onClick={() => {
              sidebar.setOpenMobile(!sidebar.openMobile);
            }}
            variant="ghost"
          >
            <MenuIcon />
          </IconButton>
          <Link
            className={css({
              display: "inline-flex",
            })}
            href="/"
            prefetch={false}
          >
            <Logo />
          </Link>
        </Stack>
        <Stack alignItems="center" justifyContent="flex-end" direction="row" gap={3}>
          <ThemeSwitch />
          <a href="https://github.com/devias-io/lotru" target="_blank">
            <IconButton variant="ghost">
              <GithubIcon />
            </IconButton>
          </a>
        </Stack>
      </div>
    </header>
  );
}
