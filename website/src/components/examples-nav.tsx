"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { css } from "@pigment-css/react";
import { TerminalIcon } from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Stack } from "@/src/components/ui/stack";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";

export function ExamplesNav(): React.JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={css({
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 4)",
      })}
    >
      <Text className={css({ textAlign: "center" })} size="2xl" weight="medium">
        Live examples
      </Text>
      <Stack alignItems="center" direction="row" gap={2}>
        <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="sm">
          As simple as
        </Text>
        <Badge variant="outline">
          <TerminalIcon />
          npx lotru add examples/card-01
        </Badge>
      </Stack>
      <Tabs
        value={getActiveTab(pathname)}
        onValueChange={(value) => {
          router.push(value === "all" ? "/" : "/examples/mail");
        }}
      >
        <TabsList>
          <TabsTrigger value="all">Cards</TabsTrigger>
          <TabsTrigger value="mail">Mail</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

function getActiveTab(pathname: string): string {
  if (pathname === "/") {
    return "all";
  }

  if (pathname.startsWith("/examples/mail")) {
    return "mail";
  }

  return "all";
}
