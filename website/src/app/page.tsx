import * as React from "react";
import Link from "next/link";
import { css } from "@pigment-css/react";
import { StarsIcon, SquareArrowOutUpRightIcon } from "lucide-react";

import { Text } from "@/src/components/ui/text";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Logo } from "@/src/components/logo";

export default function Page(): React.JSX.Element {
  return (
    <div>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          paddingBlock: "calc(var(--spacing-unit) * 4)",
          paddingInline: "calc(var(--spacing-unit) * 6)",
        })}
      >
        <Logo />
      </div>
      <header
        className={css({
          paddingInline: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <div
          className={css({
            backgroundColor: "hsl(var(--color-muted))",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "hsl(var(--color-border))",
            borderRadius: "var(--borderRadius-lg)",
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
            <div
              className={css({
                display: "flex",
                justifyContent: "center",
              })}
            >
              <div
                className={css({
                  alignItems: "center",
                  border: "1px solid hsl(var(--color-border))",
                  borderRadius: "var(--borderRadius-full)",
                  display: "flex",
                  gap: "calc(var(--spacing-unit) * 2)",
                  justifyContent: "center",
                  paddingBlock: "var(--spacing-unit)",
                  paddingInline: "calc(var(--spacing-unit) * 2.5)",
                })}
              >
                <StarsIcon color="hsl(var(--color-mutedForeground))" size={16} />
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="xs" weight="medium">
                  New components every week
                </Text>
              </div>
            </div>
            <Text className={css({ textAlign: "center" })} size="3xl" weight="medium">
              Building accessible UIs has never been easier.
            </Text>
            <div
              className={css({
                color: "hsl(var(--color-mutedForeground))",
                textAlign: "center",
              })}
            >
              <Text size="md" weight="regular">
                Copy-paste pre-built components, powered by{" "}
                <span
                  className={css({
                    alignItems: "center",
                    backgroundColor: "hsl(var(--color-background))",
                    border: "1px solid hsl(var(--color-border))",
                    borderRadius: "var(--borderRadius-md)",
                    color: "hsl(var(--color-foreground))",
                    display: "inline-flex",
                    gap: "calc(var(--spacing-unit) * 2)",
                    padding: "2px 6px",
                    whiteSpace: "nowrap",
                  })}
                >
                  Base UI
                  <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" size={12} />
                </span>{" "}
                and{" "}
                <span
                  className={css({
                    alignItems: "center",
                    backgroundColor: "hsl(var(--color-background))",
                    border: "1px solid hsl(var(--color-border))",
                    borderRadius: "var(--borderRadius-md)",
                    color: "hsl(var(--color-foreground))",
                    display: "inline-flex",
                    gap: "calc(var(--spacing-unit) * 2)",
                    padding: "2px 6px",
                    whiteSpace: "nowrap",
                  })}
                >
                  Pigment CSS
                  <SquareArrowOutUpRightIcon color="hsl(var(--color-mutedForeground))" size={12} />
                </span>{" "}
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
      </header>
    </div>
  );
}
