import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, styled } from "@pigment-css/react";

import { Logo } from "@/src/components/logo";
import { Stack } from "@/src/components/ui/stack";

const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean; disabled?: boolean }>({
  color: "hsl(var(--color-foreground) / 80%)",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  textDecoration: "none",
  "&:hover:not([data-disabled])": {
    color: "hsl(var(--color-foreground))",
  },
  "&[data-disabled]": {
    opacity: 0.5,
    pointerEvents: "none",
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

export function Nav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={css({
        alignItems: "center",
        display: "none",
        gap: "calc(var(--size-unit) * 4)",
        "@media (min-width: 768px)": {
          display: "flex",
        },
      })}
    >
      <Link
        className={css({
          display: "none",
          "@media (min-width: 768px)": {
            display: "inline-flex",
          },
        })}
        href="/"
        prefetch={false}
      >
        <Logo />
      </Link>
      <NavItem active={pathname === "/docs"} href="/docs" prefetch={false}>
        Documentation
      </NavItem>
      <Stack alignItems="center" direction="row" gap={2}>
        <NavItem
          active={pathname === "/blocks"}
          data-disabled
          href="/blocks"
          prefetch={false}
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Blocks
        </NavItem>
        <span
          className={css({
            border: "1px solid hsl(var(--color-border))",
            borderRadius: "var(--borderRadius-md)",
            color: "hsl(var(--color-foreground))",
            fontFamily: "var(--fontFamily-sans)",
            fontSize: "var(--fontSize-xs)",
            fontWeight: "var(--fontWeight-medium)",
            opacity: 0.5,
            padding: "var(--spacing-unit)",
          })}
        >
          Coming soon
        </span>
      </Stack>
    </div>
  );
}
