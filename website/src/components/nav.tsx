import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { css, styled } from "@pigment-css/react";

import { Badge } from "@/src/components/ui/badge";
import { Stack } from "@/src/components/ui/stack";
import { Logo } from "@/src/components/logo";

const NavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean; disabled?: boolean }>({
  alignItems: "center",
  color: "hsl(var(--color-foreground) / 80%)",
  display: "inline-flex",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  gap: "calc(var(--spacing-unit) * 2)",
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
        gap: "calc(var(--spacing-unit) * 4)",
        "@media (min-width: 768px)": {
          display: "flex",
        },
      })}
    >
      <Link
        className={css({
          alignItems: "center",
          display: "none",
          gap: "calc(var(--spacing-unit) * 2)",
          textDecoration: "none",
          "@media (min-width: 768px)": {
            display: "inline-flex",
          },
        })}
        href="/"
        prefetch={false}
      >
        <Logo width={24} height={24} />
        <span
          className={css({
            color: "hsl(var(--color-foreground))",
            fontFamily: "var(--fontFamily-sans)",
            fontSize: "var(--fontSize-lg)",
            fontWeight: "var(--fontWeight-semibold)",
          })}
        >
          Lotru
        </span>
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
          <Badge size="sm" variant="outline">
            Coming soon
          </Badge>
        </NavItem>
      </Stack>
    </div>
  );
}
