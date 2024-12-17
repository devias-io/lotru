"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { css, styled } from "@pigment-css/react";

import { groups } from "@/src/config/docs";

const SidebarGroup = styled("div", {
  name: "MenuGroup",
  slot: "group",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
  paddingBlock: "calc(var(--spacing-unit) * 3)",
});

const SidebarGroupLabel = styled("div", {
  name: "MenuGroupLabel",
  slot: "label",
})<React.ComponentProps<"div">>({
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "var(--spacing-unit)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const SidebarGroupContent = styled("div", {
  name: "MenuGroupContent",
  slot: "content",
})<React.ComponentProps<"div">>({});

const SidebarMenu = styled("div", {
  name: "SidebarMenu",
  slot: "menu",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
});

const SidebarMenuItem = styled("div", {
  name: "SidebarMenuItem",
  slot: "item",
})<React.ComponentProps<"div">>({
  display: "flex",
});

const SidebarMenuButton = styled("button", {
  name: "SidebarMenuButton",
  slot: "button",
})<React.ComponentProps<"button"> & { active?: boolean }>({
  appearance: "none",
  background: "transparent",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  cursor: "pointer",
  flexGrow: 1,
  fontSize: "var(--fontSize-sm)",
  paddingBlock: "var(--spacing-unit)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
  textAlign: "start",
  textDecoration: "none",
  width: "var(--size-full)",
  "&:hover:not(:disabled)": {
    color: "hsl(var(--color-foreground))",
  },
  "&:disabled": {
    color: "hsl(var(--color-mutedForeground))",
    cursor: "not-allowed",
  },
  variants: [
    {
      props: { active: true },
      style: {
        backgroundColor: "hsl(var(--color-muted))",
        fontWeight: "var(--fontWeight-medium)",
      },
    },
  ],
});

export function DocsSidebarNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div>
      {groups.map((group, index) => (
        <SidebarGroup key={index}>
          {group.title ? <SidebarGroupLabel>{group.title}</SidebarGroupLabel> : null}
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item, index) => {
                const active = pathname === item.href;

                return (
                  <SidebarMenuItem key={index}>
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
