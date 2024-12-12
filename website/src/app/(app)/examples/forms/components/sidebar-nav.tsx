"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import { Stack } from "@/src/components/ui/stack";
import { ShieldIcon, UserIcon } from "lucide-react";

const items = [
  {
    title: "Profile",
    href: "/examples/forms",
    icon: UserIcon,
  },
  {
    title: "Security",
    href: "/examples/forms/security",
    icon: ShieldIcon,
  },
];

export function SidebarNav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <Stack gap={2}>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button
            as="div"
            className={css({
              justifyContent: "flex-start",
              textAlign: "left",
              width: "var(--size-full)",
            })}
            variant={pathname === item.href ? "solid" : "ghost"}
          >
            <item.icon />
            {item.title}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
