import * as React from "react";
import { css } from "@pigment-css/react";
import { CircleHelpIcon, RefreshCcwIcon, SearchIcon, SettingsIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { IconButton } from "@/src/components/ui/icon-button";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export function MailTopbar(): React.JSX.Element {
  return (
    <div
      className={css({
        borderBlockEnd: "1px solid hsl(var(--color-border))",
        boxSizing: "border-box",
        display: "flex",
        flexShrink: 0,
        height: "calc(var(--size-unit) * 14)",
        justifyContent: "space-between",
        paddingBlock: "calc(var(--size-unit) * 2)",
        paddingInline: "calc(var(--size-unit) * 3)",
      })}
    >
      <Stack alignItems="center" direction="row" gap={6}>
        <Stack alignItems="center" direction="row" gap={2}>
          <div
            className={css({
              fontSize: 0,
              border: "1px solid hsl(var(--color-background))",
              borderRadius: "var(--borderRadius-md)",
              boxShadow: "var(--shadow-xs)",
            })}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.555557 6.55555C0.555557 3.24184 3.24185 0.555557 6.55556 0.555557H19.4445C22.7582 0.555557 25.4444 3.24185 25.4444 6.55556V19.4445C25.4444 22.7582 22.7582 25.4444 19.4444 25.4444H6.55555C3.24184 25.4444 0.555557 22.7582 0.555557 19.4444V6.55555Z"
                fill="#212124"
              />
              <path
                d="M17.5552 19.9337C16.7206 20.4525 15.8993 20.9572 15.0843 21.4728C14.9221 21.5754 14.794 21.5871 14.6258 21.4824C12.0842 19.9001 9.53964 18.3229 6.99345 16.7487C6.83806 16.6526 6.77753 16.536 6.77779 16.3473C6.78209 13.205 6.7814 10.0626 6.7793 6.92029C6.77918 6.74347 6.809 6.6086 6.97498 6.50716C8.04989 5.85019 9.1204 5.18534 10.1889 4.5171C10.3258 4.4315 10.4363 4.41457 10.5797 4.50405C11.9357 5.35026 13.2935 6.19344 14.6555 7.02913C14.8321 7.1375 14.8843 7.26984 14.8831 7.4746C14.8759 8.7315 14.8847 9.9885 14.8759 11.2454C14.8741 11.4908 14.9437 11.644 15.1545 11.7722C16.1946 12.4046 17.2242 13.0558 18.2612 13.6939C18.3942 13.7757 18.4441 13.8726 18.4438 14.0302C18.4403 15.7411 18.4403 17.452 18.4445 19.1628C18.4448 19.321 18.3978 19.4247 18.2637 19.5014C18.0293 19.6355 17.8013 19.7821 17.5552 19.9337ZM14.809 16.4247C14.845 16.1679 14.7419 16.0124 14.5232 15.8804C13.5036 15.2647 12.4957 14.6277 11.4789 14.0069C11.3076 13.9023 11.2341 13.7818 11.2356 13.5696C11.2443 12.2959 11.2373 11.0221 11.2437 9.74837C11.2448 9.53473 11.1852 9.38998 11.0017 9.27745C10.0437 8.68995 9.09219 8.09085 8.13635 7.49945C7.83781 7.31473 7.75596 7.36586 7.75579 7.73197C7.7546 10.4104 7.75694 13.0887 7.7511 15.7671C7.75068 15.961 7.8211 16.0662 7.97359 16.1606C10.1299 17.4944 12.2833 18.8334 14.4379 20.1703C14.7533 20.366 14.8076 20.3348 14.8081 19.9555C14.8095 18.7952 14.8086 17.6349 14.809 16.4247Z"
                fill="white"
              />
            </svg>
          </div>
          <Text fontWeight="medium">Lotru Mail</Text>
        </Stack>
        <Stack alignItems="center" direction="row" gap={4}>
          <Text fontSize="sm" fontWeight="medium">
            Mail
          </Text>
          <Stack
            alignItems="center"
            className={css({
              opacity: 0.5,
            })}
            direction="row"
            gap={1}
          >
            <Text fontSize="sm" fontWeight="medium">
              AI Automation
            </Text>
            <Badge size="sm" variant="outline">
              Coming soon
            </Badge>
          </Stack>
        </Stack>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <div className={css({ position: "relative" })}>
          <Input
            className={css({ paddingInlineStart: "calc(var(--spacing-unit) * 8)" })}
            placeholder="Search"
          />
          <SearchIcon
            className={css({
              insetBlockStart: "calc(var(--size-unit) * 2.5)",
              insetInlineStart: "calc(var(--size-unit) * 2)",
              pointerEvents: "none",
              position: "absolute",
            })}
            color="hsl(var(--color-mutedForeground))"
            size={16}
          />
        </div>
        <IconButton size="sm" variant="ghost">
          <RefreshCcwIcon />
        </IconButton>
        <Separator orientation="vertical" />
        <IconButton size="sm" variant="ghost">
          <CircleHelpIcon />
        </IconButton>
        <IconButton size="sm" variant="ghost">
          <SettingsIcon />
        </IconButton>
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?&w=128&h=128&dpr=2&q=80" />
        </Avatar>
      </Stack>
    </div>
  );
}
