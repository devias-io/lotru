"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { css } from "@pigment-css/react";

import { groups } from "@/src/config/docs";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/lab/sidebar";

export function DocsSidebarNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div>
      {groups.map((group) => (
        <SidebarGroup key={group.title}>
          <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item) => {
                const active = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.title}>
                    <Link
                      className={css({
                        display: "flex",
                        flexGrow: 1,
                        textDecoration: "none",
                      })}
                      href={item.href}
                      prefetch={false}
                    >
                      <SidebarMenuButton active={active} as="div">
                        {item.title}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </div>
  );
}
