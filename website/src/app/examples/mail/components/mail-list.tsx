import * as React from "react";
import { css, styled } from "@pigment-css/react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

import { Badge } from "@/src/components/ui/badge";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import type { Mail } from "@/src/app/examples/mail/data";

const MailItem = styled(
  "button",
  {}
)<{ active?: boolean }>({
  backgroundColor: "hsl(var(--color-background))",
  border: "none",
  borderRadius: "var(--borderRadius-md)",
  boxSizing: "border-box",
  color: "hsl(var(--color-foreground))",
  display: "grid",
  gap: "calc(var(--spacing-unit) * 2)",
  padding: "calc(var(--size-unit) * 3)",
  textAlign: "left",
  "&:hover": {
    backgroundColor: "hsl(var(--color-muted))",
  },
  variants: [
    {
      props: { active: true },
      style: {
        backgroundColor: "hsl(var(--color-muted))",
      },
    },
  ],
});

export interface MailListProps {
  mails: Mail[];
  onSelect?: (mailId: string) => void;
  selectedMail: string | null;
}

export function MailList({ mails, onSelect, selectedMail }: MailListProps): React.JSX.Element {
  return (
    <div
      className={css({
        display: "grid",
        flexGrow: 1,
        gap: "calc(var(--spacing-unit) * 2)",
        overflowY: "auto",
        paddingBlockEnd: "calc(var(--size-unit) * 3)",
        paddingInline: "calc(var(--size-unit) * 3)",
      })}
    >
      {mails.map((mail) => (
        <MailItem
          key={mail.id}
          active={mail.id === selectedMail}
          onClick={() => {
            onSelect?.(mail.id);
          }}
        >
          <Stack alignItems="center" direction="row">
            <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="xs">
              {mail.name}
            </Text>
            {!mail.read ? (
              <span
                className={css({
                  backgroundColor: "hsl(var(--color-primary))",
                  borderRadius: "var(--borderRadius-full)",
                  height: "calc(var(--size-unit) * 2)",
                  width: "calc(var(--size-unit) * 2)",
                  marginLeft: "var(--size-unit)",
                })}
              />
            ) : null}
            <Text
              className={css({
                color: "hsl(var(--color-mutedForeground))",
                marginLeft: "auto",
              })}
              size="xs"
            >
              {formatDistanceToNow(new Date(mail.date), {
                addSuffix: true,
              })}
            </Text>
          </Stack>
          <Text weight="medium">{mail.subject}</Text>
          <Text
            className={css({
              "-webkit-box-orient": "vertical",
              "-webkit-line-clamp": "2",
              color: "hsl(var(--color-mutedForeground))",
              display: "-webkit-box",
              overflow: "hidden",
            } as React.CSSProperties)}
            size="xs"
          >
            {mail.text.substring(0, 300)}
          </Text>
          <Stack direction="row" gap={2}>
            {mail.labels.map((label) => (
              <Badge key={label} size="sm" variant={getBadgeVariantFromLabel(label)}>
                {label}
              </Badge>
            ))}
          </Stack>
        </MailItem>
      ))}
    </div>
  );
}

function getBadgeVariantFromLabel(label: string): React.ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "solid";
  }

  return "outline";
}
