import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css } from "@pigment-css/react";
import { MenuIcon } from "lucide-react";

import { groups } from "@/src/config/docs";
import { IconButton } from "@/src/components/ui/icon-button";
import { Sheet, SheetContent, SheetOverlay } from "@/src/components/ui/sheet";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/lab/sidebar";

export function MobileNav(): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  return (
    <React.Fragment>
      <IconButton
        className={css({
          "@media (min-width: 768px)": {
            display: "none",
          },
        })}
        onClick={() => {
          setOpen(true);
        }}
        variant="ghost"
      >
        <MenuIcon />
      </IconButton>
      <Sheet onOpenChange={setOpen} open={open}>
        <SheetOverlay />
        <SheetContent
          className={css({ maxWidth: "300px", overflow: "hidden", padding: 0 })}
          side="left"
        >
          <div className={css({ overflowY: "auto", padding: "calc(var(--spacing-unit) * 6)" })}>
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
                            onClick={() => {
                              setOpen(false);
                            }}
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
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
}
