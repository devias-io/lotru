"use client";

import * as React from "react";
import { css, styled } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { Sheet, SheetContent, SheetOverlay } from "@/src/components/ui/sheet";

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

export function SidebarProvider({ children }: React.PropsWithChildren): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ openMobile: open, setOpenMobile: setOpen }}>
      <div
        className={css({
          "--sidebar-width": "272px",
          display: "flex",
          minHeight: "100svh",
          width: "var(--size-full)",
        } as React.CSSProperties)}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

type SidebarProps = React.ComponentPropsWithoutRef<"aside"> & {
  side?: "left" | "right";
};

function Sidebar({ children, className, side = "left" }: SidebarProps): React.JSX.Element {
  const isMobile = useIsMobile();
  const { openMobile, setOpenMobile } = useSidebarContext();

  if (isMobile) {
    return (
      <Sheet onOpenChange={setOpenMobile} open={openMobile}>
        <SheetOverlay />
        <SheetContent className={css({ width: "var(--sidebar-width)" })} side={side}>
          <div>{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className={css({
        display: "none",
        "@media (min-width: 768px)": {
          display: "block",
        },
      })}
    >
      <div className={css({ width: "var(--sidebar-width)" })} />
      <div
        className={cn(
          css({
            backgroundColor: "hsl(var(--color-background))",
            boxSizing: "border-box",
            flexShrink: 0,
            height: "100svh",
            position: "fixed",
            top: 0,
            width: "var(--sidebar-width)",
            zIndex: "var(--zIndex-sticky)",
          }),
          className
        )}
        style={{
          ...(side === "left"
            ? {
                borderInlineEnd: "1px solid hsl(var(--color-border))",
                left: 0,
              }
            : {
                borderInlineStart: "1px solid hsl(var(--color-border))",
                right: 0,
              }),
        }}
      >
        {children}
      </div>
    </div>
  );
}

const SidebarHeader = styled("div", {
  name: "SidebarHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  padding: "calc(var(--spacing-unit) * 2)",
});

const SidebarContent = styled("div", {
  name: "SidebarContent",
  slot: "body",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  gap: "calc(var(--spacing-unit) * 2)",
  overflowY: "auto",
  minHeight: 0,
});

const SidebarFooter = styled("div", {
  name: "SidebarFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  padding: "calc(var(--spacing-unit) * 2)",
});

const SidebarGroup = styled("div", {
  name: "SidebarGroup",
  slot: "group",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  padding: "calc(var(--spacing-unit) * 2)",
  position: "relative",
  width: "var(--size-full)",
});

const SidebarGroupLabel = styled("div", {
  name: "SidebarGroupLabel",
  slot: "label",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-semibold)",
  paddingBlock: "var(--spacing-unit)",
  paddingInline: "calc(var(--spacing-unit) * 2)",
});

const SidebarGroupContent = styled("div", {
  name: "SidebarGroupContent",
  slot: "content",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
});

const SidebarMenu = styled("div", {
  name: "SidebarMenu",
  slot: "menu",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-unit)",
});

const SidebarMenuItem = styled("div", {
  name: "SidebarMenuItem",
  slot: "item",
})<React.ComponentProps<"div">>({});

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
  padding: "calc(var(--spacing-unit) * 2)",
  textAlign: "start",
  textDecoration: "none",
  width: "var(--size-full)",
  "&:hover:not(:disabled)": {
    backgroundColor: "hsl(var(--color-muted))",
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

const SidebarInset = styled("main", {
  name: "SidebarInset",
  slot: "inset",
})<React.ComponentProps<"main">>({
  backgroundColor: "hsl(var(--color-background))",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative",
});

export {
  type SidebarContextValue,
  type SidebarProps,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
};
