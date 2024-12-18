import * as React from "react";
import Link from "next/link";
import { css } from "@pigment-css/react";
import { TerminalIcon, SquareArrowOutUpRightIcon } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import { CopyButton } from "@/src/components/copy-button";
import { ExamplesNav } from "@/src/components/examples-nav";
import Card01 from "@/src/app/(app)/components/card-01";
import Card02 from "@/src/app/(app)/components/card-02";
import Card03 from "@/src/app/(app)/components/card-03";
import Card04 from "@/src/app/(app)/components/card-04";
import Card05 from "@/src/app/(app)/components/card-05";
import Card06 from "@/src/app/(app)/components/card-06";
import Card07 from "@/src/app/(app)/components/card-07";

export default function Page(): React.JSX.Element {
  return (
    <div>
      <div
        className={css({
          backgroundColor: "hsl(var(--color-muted))",
          borderBlockEnd: "1px solid hsl(var(--color-border))",
          boxSizing: "border-box",
          paddingBlock: "calc(var(--spacing-unit) * 24)",
          paddingInline: "calc(var(--size-unit) * 6)",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--spacing-unit) * 6)",
            marginInline: "auto",
            maxWidth: "700px",
          })}
        >
          <Text className={css({ textAlign: "center" })} fontSize="3xl" fontWeight="medium">
            Designing Stunning Apps Has Never Been Easier.
          </Text>
          <Text
            className={css({ color: "hsl(var(--color-mutedForeground))", textAlign: "center" })}
            fontSize="md"
            fontWeight="regular"
          >
            Copy-paste pre-built components, powered by{" "}
            <a href="https://base-ui.com" target="_blank" rel="noreferrer">
              <Badge
                className={css({ backgroundColor: "hsl(var(--color-background))" })}
                variant="outline"
              >
                Base UI
                <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" />
              </Badge>
            </a>{" "}
            and{" "}
            <a href="https://github.com/mui/pigment-css" target="_blank" rel="noreferrer">
              <Badge
                className={css({ backgroundColor: "hsl(var(--color-background))" })}
                variant="outline"
              >
                Pigment CSS
                <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" />
              </Badge>
            </a>{" "}
            to effortlessly create stunning, inclusive user interfaces.
          </Text>
          <div
            className={css({
              alignItems: "center",
              display: "flex",
              gap: "calc(var(--spacing-unit) * 2)",
              justifyContent: "center",
              flexWrap: "wrap",
            })}
          >
            <div className={css({ alignItems: "center", display: "inline-flex" })}>
              <div className={css({ position: "relative" })}>
                <Input
                  className={css({
                    backgroundColor: "hsl(var(--color-background))",
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 0,
                    maxWidth: "calc(var(--size-unit) * 60)",
                    paddingInlineStart: "calc(var(--spacing-unit) * 8)",
                  })}
                  readOnly
                  value="npx lotru@latest init"
                />
                <TerminalIcon
                  className={css({
                    insetBlockStart: "calc(var(--spacing-unit) * 3)",
                    insetInlineStart: "calc(var(--spacing-unit) * 2)",
                    pointerEvents: "none",
                    position: "absolute",
                  })}
                  color="hsl(var(--color-mutedForeground))"
                  size={16}
                />
              </div>
              <div
                className={css({
                  border: "1px solid hsl(var(--color-border))",
                  borderInlineStart: 0,
                  borderBottomRightRadius: "var(--borderRadius-md)",
                  borderTopRightRadius: "var(--borderRadius-md)",
                  boxSizing: "border-box",
                  height: "calc(var(--size-unit) * 9)",
                  overflow: "hidden",
                })}
              >
                <CopyButton className={css({ borderRadius: 0 })} value="npx lotru@latest init" />
              </div>
            </div>
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={css({
          boxSizing: "border-box",
          display: "grid",
          gap: "calc(var(--spacing-unit) * 6)",
          marginInline: "auto",
          maxWidth: "1536px",
          paddingBlock: "calc(var(--spacing-unit) * 6)",
          paddingInline: "calc(var(--size-unit) * 4)",
          "@media (min-width: 768px)": {
            paddingInline: "calc(var(--size-unit) * 8)",
          },
        })}
      >
        <ExamplesNav />
        <div
          className={css({
            display: "grid",
            gap: "calc(var(--spacing-unit) * 6)",
            gridTemplateColumns: "repeat(var(--columns), minmax(0, 1fr))",
            "@media (min-width: 768px)": {
              "--columns": 2,
            },
            "@media (min-width: 1024px)": {
              "--columns": 3,
            },
          } as React.CSSProperties)}
        >
          <Stack gap={6}>
            <Card01 />
            <Card05 />
          </Stack>
          <Stack gap={6}>
            <Card02 />
            <Card04 />
            <Card06 />
          </Stack>
          <Stack gap={6}>
            <Card03 />
            <Card07 />
          </Stack>
        </div>
      </div>
    </div>
  );
}
