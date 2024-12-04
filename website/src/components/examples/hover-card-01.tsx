import * as React from "react";
import { css } from "@pigment-css/react";
import { CalendarDaysIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardPositioner, HoverCardTrigger } from "@/src/components/ui/hover-card";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger render={<Text className={css({ textDecoration: "underline" })}>@nextjs</Text>} />
      <HoverCardPositioner side="bottom">
        <HoverCardContent className={css({ width: "calc(var(--size-unit) * 80)" })}>
          <Stack direction="row" gap={4} justifyContent="space-between">
            <Avatar>
              <AvatarImage src="https://github.com/vercel.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <Stack gap={4}>
              <Stack gap={1}>
                <Text size="sm" weight="semibold">
                  @nextjs
                </Text>
                <Text size="sm">The React Framework - created and maintained by @vercel.</Text>
              </Stack>
              <Stack alignItems="center" direction="row" gap={2}>
                <CalendarDaysIcon
                  className={css({
                    height: "calc(var(--size-unit) * 4)",
                    opacity: 0.7,
                    width: "calc(var(--size-unit) * 4)",
                  })}
                />
                <Text size="xs" className={css({ color: "hsl(var(--color-mutedForeground))" })}>
                  Joined December 2021
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </HoverCardContent>
      </HoverCardPositioner>
    </HoverCard>
  );
}
