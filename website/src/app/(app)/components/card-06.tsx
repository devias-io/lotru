import * as React from "react";
import { css } from "@pigment-css/react";
import { HeartIcon, MoreVerticalIcon, Music2Icon, PlayIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Card } from "@/src/components/ui/card";
import { IconButton } from "@/src/components/ui/icon-button";
import { Select } from "@/src/components/ui/select";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

const songs = [
  {
    title: "Float",
    artist: "The Neighbourhood",
    timestamp: "3:21",
  },
  {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    timestamp: "3:39",
  },
  {
    title: "Breezeblocks",
    artist: "alt-J",
    timestamp: "3:47",
  },
] as const;

export default function Example(): React.JSX.Element {
  return (
    <Card className={css({ padding: "calc(var(--spacing-unit) * 2)" })}>
      <div
        className={css({
          alignItems: "center",
          backgroundColor: "hsl(var(--color-primary))",
          borderRadius: "var(--borderRadius-lg)",
          color: "hsl(var(--color-primaryForeground))",
          display: "flex",
          gap: "calc(var(--spacing-unit) * 4)",
          paddingBlock: "calc(var(--spacing-unit) * 8)",
          paddingInline: "calc(var(--spacing-unit) * 6)",
        })}
      >
        <Avatar size="2xl">
          <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?&w=128&h=128&dpr=2&q=80" />
        </Avatar>
        <div>
          <div>Focus Mix</div>
          <Text
            className={css({
              color: "hsl(var(--color-primaryForeground) / 60%)",
            })}
            fontSize="sm"
          >
            12 songs • 314 minutes
          </Text>
        </div>
      </div>
      <div className={css({ padding: "calc(var(--spacing-unit) * 6)" })}>
        <Stack gap={4}>
          <Stack direction="row" justifyContent="space-between">
            <IconButton>
              <PlayIcon />
            </IconButton>
            <Select defaultValue="likes" className={css({ width: "120px" })}>
              <option value="likes">Most Liked</option>
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
            </Select>
          </Stack>
          <div
            className={css({
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "var(--borderRadius-lg)",
            })}
          >
            {songs.map((song) => (
              <Stack
                key={song.title}
                alignItems="center"
                className={css({
                  padding: "calc(var(--spacing-unit) * 4)",
                  "&:not(:last-child)": {
                    borderBlockEnd: "1px solid hsl(var(--color-border))",
                  },
                })}
                direction="row"
                gap={4}
                flexWrap="wrap"
              >
                <Stack alignItems="center" className={css({ flexGrow: 1 })} direction="row" gap={2}>
                  <Avatar className={css({})} variant="squared">
                    <Music2Icon />
                  </Avatar>
                  <div>
                    <Text fontSize="sm" fontWeight="medium">
                      {song.title}
                    </Text>
                    <Text
                      className={css({ color: "hsl(var(--color-mutedForeground))" })}
                      fontSize="sm"
                    >
                      {song.artist}
                    </Text>
                  </div>
                </Stack>
                <Stack alignItems="center" direction="row" gap={2}>
                  <IconButton variant="ghost">
                    <HeartIcon />
                  </IconButton>
                  <Text fontSize="sm">{song.timestamp}</Text>
                  <IconButton size="sm" variant="ghost">
                    <MoreVerticalIcon />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
          </div>
        </Stack>
      </div>
    </Card>
  );
}
