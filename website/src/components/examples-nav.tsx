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
      <Text className={css({ textAlign: "center" })} fontSize="2xl" fontWeight="medium">
        Live examples
      </Text>
      <Stack alignItems="center" direction="row" gap={2}>
        <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
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
          if (value === "forms") {
            return router.push("/examples/forms");
          }

          if (value === "mail") {
            return router.push("/examples/mail");
          }

          router.push("/");
        }}
      >
        <TabsList>
          <TabsTrigger value="all">Cards</TabsTrigger>
          <TabsTrigger value="mail">Mail</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

function getActiveTab(pathname: string): string {
  if (pathname.startsWith("/examples/mail")) {
    return "mail";
  }

  if (pathname.startsWith("/examples/forms")) {
    return "forms";
  }

  return "all";
}
