import * as React from "react";
import { css } from "@pigment-css/react";
import { ArrowRightIcon, MoreVerticalIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { IconButton } from "@/src/components/ui/icon-button";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

const events = [
  {
    title: "Design review",
    description: "17:00 to 17:30 pm",
    month: "Jan",
    day: "15",
  },
  {
    title: "Annual report",
    description: "09:00 to 10:00 am",
    month: "Feb",
    day: "12",
  },
  {
    title: "Team meeting",
    description: "10:00 to 11:00 am",
    month: "Mar",
    day: "25",
  },
  {
    title: "Customer feedback",
    description: "15:00 to 16:00 pm",
    month: "Apr",
    day: "20",
  },
] as const;

export default function Block(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <div>
        {events.map((event) => (
          <Stack
            key={event.title}
            alignItems="center"
            className={css({
              paddingBlock: "calc(var(--spacing-unit) * 2)",
              paddingInline: "calc(var(--spacing-unit) * 6)",
              "&:not(:last-child)": {
                borderBottom: "1px solid hsl(var(--color-border))",
              },
            })}
            direction="row"
            gap={4}
            flexWrap="wrap"
          >
            <Stack alignItems="center" className={css({ flexGrow: 1 })} direction="row" gap={2}>
              <div
                className={css({
                  backgroundColor: "hsl(var(--color-muted))",
                  borderRadius: "var(--borderRadius-lg)",
                  display: "flex",
                  flexDirection: "column",
                  paddingBlock: "calc(var(--spacing-unit) * 0.5)",
                  paddingInline: "calc(var(--spacing-unit) * 1.5)",
                  textAlign: "center",
                })}
              >
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="xs">
                  {event.month}
                </Text>
                <Text size="xl" leading="tight" weight="medium">
                  {event.day}
                </Text>
              </div>
              <div>
                <Text size="sm" weight="medium">
                  {event.title}
                </Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="sm">
                  {event.description}
                </Text>
              </div>
            </Stack>
            <IconButton size="sm" variant="ghost">
              <MoreVerticalIcon />
            </IconButton>
          </Stack>
        ))}
      </div>
      <CardFooter
        className={css({
          display: "flex",
          justifyContent: "flex-end",
        })}
      >
        <Button size="sm" variant="ghost">
          View all
          <ArrowRightIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
