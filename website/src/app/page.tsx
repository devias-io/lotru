import * as React from "react";
import Link from "next/link";
import { css } from "@pigment-css/react";
import { SquareArrowOutUpRightIcon } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import Block01 from "@/src/components/blocks/block-01";
import Block02 from "@/src/components/blocks/block-02";
import Block03 from "@/src/components/blocks/block-03";
import Block04 from "@/src/components/blocks/block-04";
import Block05 from "@/src/components/blocks/block-05";
import Block06 from "@/src/components/blocks/block-06";
import Block07 from "@/src/components/blocks/block-07";

export default function Page(): React.JSX.Element {
  return (
    <div>
      <div
        className={css({
          backgroundColor: "hsl(var(--color-muted))",
          borderBottom: "1px solid hsl(var(--color-border))",
          boxSizing: "border-box",
          paddingBlock: "calc(var(--spacing-unit) * 24)",
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
          <Text className={css({ textAlign: "center" })} size="3xl" weight="medium">
            Desining Stunning Apps Has Never Been Easier.
          </Text>
          <div
            className={css({
              color: "hsl(var(--color-mutedForeground))",
              textAlign: "center",
            })}
          >
            <Text size="md" weight="regular">
              Copy-paste pre-built components, powered by{" "}
              <a href="https://base-ui.com" target="_blank" rel="noreferrer">
                <Badge
                  className={css({
                    backgroundColor: "hsl(var(--color-background))",
                    border: "1px solid hsl(var(--color-border))",
                    color: "hsl(var(--color-foreground))",
                  })}
                >
                  Base UI
                  <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" size={12} />
                </Badge>
              </a>{" "}
              and{" "}
              <a href="https://github.com/mui/pigment-css" target="_blank" rel="noreferrer">
                <Badge
                  className={css({
                    backgroundColor: "hsl(var(--color-background))",
                    border: "1px solid hsl(var(--color-border))",
                    color: "hsl(var(--color-foreground))",
                  })}
                >
                  Pigment CSS
                  <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" size={12} />
                </Badge>
              </a>{" "}
              to effortlessly create stunning, inclusive user interfaces.
            </Text>
          </div>
          <div
            className={css({
              alignItems: "center",
              display: "flex",
              gap: "calc(var(--spacing-unit) * 2)",
              justifyContent: "center",
            })}
          >
            <Input
              className={css({
                backgroundColor: "hsl(var(--color-background))",
                flex: "0 1 320px",
              })}
              readOnly
              value="npx lotru@latest init"
            />
            <Link href="/docs">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={css({
          boxSizing: "border-box",
          maxWidth: "1536px",
          marginInline: "auto",
          "@media (min-width: 768px)": {
            paddingInline: "calc(var(--size-unit) * 8)",
          },
        })}
      >
        <div
          className={css({
            display: "grid",
            gap: "calc(var(--spacing-unit) * 6)",
            gridTemplateColumns: "repeat(var(--columns), minmax(0, 1fr))",
            paddingBlock: "calc(var(--spacing-unit) * 6)",
            "@media (min-width: 768px)": {
              "--columns": 2,
            },
            "@media (min-width: 1024px)": {
              "--columns": 3,
            },
          } as React.CSSProperties)}
        >
          <Stack gap={6}>
            <Block01 />
            <Block05 />
          </Stack>
          <Stack gap={6}>
            <Block02 />
            <Block04 />
            <Block06 />
          </Stack>
          <Stack gap={6}>
            <Block03 />
            <Block07 />
          </Stack>
        </div>
      </div>
    </div>
  );
}
