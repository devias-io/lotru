"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { css } from "@pigment-css/react";

import { Logo } from "@/src/components/logo";
import {
  Sidebar,
  SidebarBody,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebarContext,
} from "@/src/components/lab/sidebar";

import { groups } from "./config";

export function GlobalSidebar(): React.JSX.Element {
  const { setOpenMobile } = useSidebarContext();
  const pathname = usePathname();

  return (
    <Sidebar side="left">
      <SidebarContent>
        <SidebarHeader
          className={css({
            alignItems: "flex-start",
            borderBottom: "1px solid hsl(var(--color-border))",
            boxSizing: "border-box",
            display: "none",
            flexDirection: "column",
            flexShrink: 0,
            height: "64px",
            justifyContent: "center",
            paddingBlock: "calc(var(--spacing-unit) * 4)",
            "@media (min-width: 768px)": {
              display: "flex",
            },
          })}
        >
          <Link href="/" prefetch={false}>
            <Logo />
          </Link>
        </SidebarHeader>
        <SidebarBody>
          {groups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <SidebarMenuItem key={item.label}>
                        <Link
                          className={css({
                            display: "flex",
                            flexGrow: 1,
                            textDecoration: "none",
                          })}
                          href={item.href}
                          prefetch={false}
                          onClick={() => setOpenMobile(false)}
                        >
                          <SidebarMenuButton active={active} as="div">
                            {item.label}
                          </SidebarMenuButton>
                        </Link>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarBody>
      </SidebarContent>
    </Sidebar>
  );
}
