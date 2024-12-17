import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, styled } from "@pigment-css/react";
import { MenuIcon } from "lucide-react";

import { groups } from "@/src/config/docs";
import { IconButton } from "@/src/components/ui/icon-button";
import { Drawer, DrawerContent, DrawerOverlay } from "@/src/components/ui/drawer";

const DrawerGroup = styled("div", {
  name: "MenuGroup",
  slot: "group",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
  paddingBlock: "calc(var(--spacing-unit) * 3)",
});

const DrawerGroupLabel = styled("div", {
  name: "MenuGroupLabel",
  slot: "label",
})<React.ComponentProps<"div">>({
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "var(--spacing-unit)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const DrawerGroupContent = styled("div", {
  name: "MenuGroupContent",
  slot: "content",
})<React.ComponentProps<"div">>({});

const DrawerMenu = styled("div", {
  name: "DrawerMenu",
  slot: "menu",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
});

const DrawerMenuItem = styled("div", {
  name: "DrawerMenuItem",
  slot: "item",
})<React.ComponentProps<"div">>({
  display: "flex",
});

const DrawerMenuButton = styled("button", {
  name: "DrawerMenuButton",
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
      style: {},
    },
  ],
});

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
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerOverlay />
        <DrawerContent className={css({ maxHeight: "60svh" })} side="bottom">
          <div className={css({ overflowY: "auto", padding: "calc(var(--spacing-unit) * 6)" })}>
            {[
              {
                items: [
                  { title: "Home", href: "/" },
                  { title: "Documentation", href: "/docs" },
                  { title: "Components", href: "/docs/components/alert" },
                ],
              },
              ...groups,
            ].map((group, index) => (
              <DrawerGroup key={index}>
                {group.title ? <DrawerGroupLabel>{group.title}</DrawerGroupLabel> : null}
                <DrawerGroupContent>
                  <DrawerMenu>
                    {group.items.map((item, index) => {
                      const active = pathname === item.href;

                      return (
                        <DrawerMenuItem key={index}>
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
                            <DrawerMenuButton active={active} as="div">
                              {item.title}
                            </DrawerMenuButton>
                          </Link>
                        </DrawerMenuItem>
                      );
                    })}
                  </DrawerMenu>
                </DrawerGroupContent>
              </DrawerGroup>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}
