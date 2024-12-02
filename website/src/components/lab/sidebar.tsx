"use client";

import * as React from "react";
import { css, styled } from "@pigment-css/react";

import { Drawer, DrawerOverlay, DrawerContent } from "@/src/components/ui/drawer";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { cn } from "@/src/lib/cn";

type SidebarContextValue = {
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

export const useSidebarContext = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};

type SidebarProviderProps = React.PropsWithChildren<{}>;

export function SidebarProvider({ children }: SidebarProviderProps): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ openMobile: open, setOpenMobile: setOpen }}>{children}</SidebarContext.Provider>
  );
}

const SidebarContent = styled("div", {
  name: "SidebarContent",
  slot: "content",
})({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  height: "var(--size-full)",
  position: "relative",
});

const SidebarHeader = styled("div", {
  name: "SidebarHeader",
  slot: "header",
})({
  backgroundColor: "hsl(var(--color-surface))",
  left: 0,
  position: "sticky",
  top: 0,
  width: "var(--size-full)",
});

const SidebarBody = styled("div", {
  name: "SidebarBody",
  slot: "body",
})({
  backgroundColor: "hsl(var(--color-surface))",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "calc(var(--spacing-unit) * 4)",
  overflowY: "auto",
});

const SidebarFooter = styled("div", {
  name: "SidebarFooter",
  slot: "footer",
})({
  backgroundColor: "hsl(var(--color-surface))",
  bottom: 0,
  left: 0,
  position: "sticky",
  width: "var(--size-full)",
});

const SidebarGroup = styled("div", {
  name: "MenuGroup",
  slot: "group",
})({
  display: "flex",
  flexDirection: "column",
  paddingBlock: "calc(var(--spacing-unit) * 3)",
});

const SidebarGroupLabel = styled("div", {
  name: "MenuGroupLabel",
  slot: "label",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
});

const SidebarGroupContent = styled("div", {
  name: "MenuGroupContent",
  slot: "content",
})({});

const SidebarMenu = styled("div", {
  name: "SidebarMenu",
  slot: "menu",
})({
  display: "flex",
  flexDirection: "column",
});

const SidebarMenuItem = styled("div", {
  name: "SidebarMenuItem",
  slot: "item",
})({
  display: "flex",
});

const SidebarMenuButton = styled("button", {
  name: "SidebarMenuButton",
  slot: "button",
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>({
  appearance: "none",
  background: "transparent",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-mutedForeground))",
  cursor: "pointer",
  flexGrow: 1,
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  paddingBlock: "calc(var(--spacing-unit) * 2)",
  paddingInline: 0,
  textAlign: "left",
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
        color: "hsl(var(--color-foreground))",
      },
    },
  ],
});

interface SidebarProps extends React.ComponentPropsWithoutRef<"aside"> {
  children: React.ReactNode;
  side?: "left" | "right";
}

function Sidebar({ children, className, side = "left" }: SidebarProps): React.JSX.Element {
  const isMobile = useIsMobile();
  const { openMobile, setOpenMobile } = useSidebarContext();

  if (isMobile) {
    return (
      <Drawer onOpenChange={setOpenMobile} open={openMobile}>
        <DrawerOverlay />
        <DrawerContent className={css({ maxWidth: "300px", overflow: "hidden" })} side={side}>
          <div className={css({ overflowY: "auto" })}>{children}</div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <aside
      className={cn(
        className,
        css({
          backgroundColor: "hsl(var(--color-surface))",
          boxSizing: "border-box",
          borderRight: "1px solid hsl(var(--color-border))",
          display: "none",
          flexShrink: 0,
          height: "100%",
          minWidth: "272px",
          paddingInlineEnd: "calc(var(--spacing-unit) * 8)",
          paddingInlineStart: "calc(var(--spacing-unit) * 8)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "var(--zIndex-sticky)",
          overflowY: "auto",
          width: "272px",
          "@media (min-width: 768px)": {
            display: "block",
          },
        })
      )}
    >
      {children}
    </aside>
  );
}

export {
  type SidebarContextValue,
  type SidebarProviderProps,
  type SidebarProps,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
};
