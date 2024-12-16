"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import { GithubIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";
import { Stack } from "@/src/components/ui/stack";
import { MobileNav } from "@/src/components/mobile-nav";
import { Nav } from "@/src/components/nav";
import { ThemeSwitch } from "@/src/components/theme-switch";

export function Topbar(): React.JSX.Element {
  return (
    <header
      className={css({
        backgroundColor: "hsl(var(--color-background))",
        borderBlockEnd: "1px solid hsl(var(--color-border))",
        boxSizing: "border-box",
        flexShrink: 0,
        left: 0,
        position: "sticky",
        top: 0,
        width: "var(--size-full)",
        zIndex: "50",
      })}
    >
      <div
        className={css({
          alignItems: "center",
          boxSizing: "border-box",
          display: "flex",
          height: "calc(var(--size-unit) * 14)",
          marginInline: "auto",
          paddingInline: "calc(var(--size-unit) * 4)",
          "@media (min-width: 1800px)": {
            maxWidth: "1536px",
            paddingInline: "calc(var(--size-unit) * 8)",
          },
        })}
      >
        <Nav />
        <MobileNav />
        <Stack
          alignItems="center"
          className={css({
            flexGrow: 1,
          })}
          justifyContent="flex-end"
          direction="row"
          gap={3}
        >
          <ThemeSwitch />
          <a href="https://github.com/devias-io/lotru" target="_blank" rel="noreferrer">
            <IconButton variant="ghost">
              <GithubIcon />
            </IconButton>
          </a>
        </Stack>
      </div>
    </header>
  );
}
