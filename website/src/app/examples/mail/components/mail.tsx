"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import {
  ArchiveIcon,
  ArchiveXIcon,
  FileIcon,
  InboxIcon,
  PlusIcon,
  SendIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Progress } from "@/src/components/ui/progress";
import { Stack } from "@/src/components/ui/stack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";
import type { Mail } from "@/src/app/examples/mail/data";
import { MailDisplay } from "@/src/app/examples/mail/components/mail-display";
import { MailList } from "@/src/app/examples/mail/components/mail-list";
import { MailNav } from "@/src/app/examples/mail/components/mail-nav";
import { MailTopbar } from "@/src/app/examples/mail/components/mail-topbar";

export interface MailProps {
  mails: Mail[];
}

export function Mail({ mails }: MailProps): React.JSX.Element {
  const [selectedMail, setSelectedMail] = React.useState<string | null>(mails[0]?.id ?? null);

  return (
    <div
      className={css({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        height: "800px",
        position: "relative",
      })}
    >
      <MailTopbar />
      <div
        className={css({
          boxSizing: "border-box",
          display: "grid",
          flexGrow: 1,
          minHeight: 0,
          gridTemplateColumns: "20% 30% 50%",
        })}
      >
        <div
          className={css({
            borderRight: "1px solid hsl(var(--color-border))",
            display: "flex",
            flexDirection: "column",
          })}
        >
          <div
            className={css({
              boxSizing: "border-box",
              paddingBlock: "calc(var(--size-unit) * 4)",
              paddingInline: "calc(var(--size-unit) * 3)",
            })}
          >
            <Button className={css({ width: "var(--size-full)" })} variant="outline">
              <PlusIcon />
              Compose mail
            </Button>
          </div>
          <div className={css({ paddingInline: "calc(var(--size-unit) * 3)" })}>
            <div className={css({ borderTop: "1px dashed hsl(var(--color-border))" })} />
          </div>
          <MailNav
            items={[
              {
                title: "Inbox",
                label: "25",
                icon: InboxIcon,
                variant: "solid",
              },
              {
                title: "Drafts",
                label: "2",
                icon: FileIcon,
                variant: "ghost",
              },
              {
                title: "Sent",
                label: "",
                icon: SendIcon,
                variant: "ghost",
              },
              {
                title: "Junk",
                label: "5",
                icon: ArchiveXIcon,
                variant: "ghost",
              },
              {
                title: "Trash",
                label: "",
                icon: Trash2Icon,
                variant: "ghost",
              },
              {
                title: "Archive",
                label: "1",
                icon: ArchiveIcon,
                variant: "ghost",
              },
            ]}
          />
          <div className={css({ paddingInline: "calc(var(--size-unit) * 3)" })}>
            <div className={css({ borderTop: "1px dashed hsl(var(--color-border))" })} />
          </div>
          <MailNav
            items={[
              {
                title: "Work",
                label: "16",
                icon: TagIcon,
                variant: "ghost",
              },
            ]}
          />
          <div className={css({ paddingInline: "calc(var(--size-unit) * 3)", marginTop: "auto" })}>
            <div className={css({ borderTop: "1px dashed hsl(var(--color-border))" })} />
          </div>
          <Stack
            className={css({
              paddingBlock: "calc(var(--size-unit) * 4)",
              paddingInline: "calc(var(--size-unit) * 3)",
            })}
            gap={2}
          >
            <Text weight="medium">Storage</Text>
            <Progress value={30} />
            <Stack alignItems="center" direction="row" justifyContent="space-between">
              <Text size="xs" weight="bold">
                3.2 GB{" "}
                <Text
                  as="span"
                  className={css({ color: "hsl(var(--color-mutedForeground))" })}
                  size="xs"
                  weight="regular"
                >
                  of 10 GB used
                </Text>
              </Text>
              <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} size="xs">
                30%
              </Text>
            </Stack>
          </Stack>
        </div>
        <div
          className={css({
            borderRight: "1px solid hsl(var(--color-border))",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          })}
        >
          <Tabs
            className={css({
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            })}
            defaultValue="all"
          >
            <div
              className={css({
                boxSizing: "border-box",
                paddingBlock: "calc(var(--size-unit) * 4)",
                paddingInline: "calc(var(--size-unit) * 3)",
              })}
            >
              <TabsList
                className={css({
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                })}
              >
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              className={css({ display: "flex", flexDirection: "column", margin: 0, minHeight: 0 })}
              value="all"
            >
              <MailList mails={mails} onSelect={setSelectedMail} selectedMail={selectedMail} />
            </TabsContent>
            <TabsContent
              className={css({ display: "flex", flexDirection: "column", margin: 0, minHeight: 0 })}
              value="unread"
            >
              <MailList
                mails={mails.filter((mail) => !mail.read)}
                onSelect={setSelectedMail}
                selectedMail={selectedMail}
              />
            </TabsContent>
          </Tabs>
        </div>
        <MailDisplay mail={mails.find((mail) => mail.id === selectedMail) ?? null} />
      </div>
    </div>
  );
}
