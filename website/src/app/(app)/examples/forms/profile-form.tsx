"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import { MoonIcon, SettingsIcon, SunIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Switch } from "@/src/components/ui/switch";
import { Text } from "@/src/components/ui/text";

export function ProfileForm(): React.JSX.Element {
  const [values, setValues] = React.useState({
    theme: "light",
  });

  const ThemeIcon =
    {
      dark: MoonIcon,
      light: SunIcon,
      system: SettingsIcon,
    }[values.theme] ?? SettingsIcon;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Stack gap={6}>
        <div className={css({ display: "grid", gridTemplateColumns: "300px 1fr" })}>
          <div>
            <Text fontSize="lg" fontWeight="medium">
              Avatar
            </Text>
          </div>
          <Stack alignItems="center" direction="row" gap={2}>
            <Avatar size="2xl">
              <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?&w=128&h=128&dpr=2&q=80" />
            </Avatar>
            <Button size="sm" variant="ghost">
              Change
            </Button>
          </Stack>
        </div>
        <Separator />
        <div className={css({ display: "grid", gridTemplateColumns: "300px 1fr" })}>
          <div>
            <Text fontSize="lg" fontWeight="medium">
              Account
            </Text>
          </div>
          <Stack gap={4}>
            <Field>
              <FieldLabel>First Name</FieldLabel>
              <Input
                className={css({ maxWidth: "var(--size-full)" })}
                defaultValue="Sanchez"
                name="firstName"
                placeholder="First Name"
              />
            </Field>
            <Field>
              <FieldLabel>Last Name</FieldLabel>
              <Input
                className={css({ maxWidth: "var(--size-full)" })}
                defaultValue="Marlet"
                name="lastName"
                placeholder="Last Name"
              />
            </Field>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Select defaultValue="" name="email">
                <SelectTrigger className={css({ maxWidth: "var(--size-full)" })}>
                  <SelectValue placeholder="Select a verified email to display" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sanchez@example.com">sanchez@example.com</SelectItem>
                  <SelectItem value="sanchez@domain.com">sanchez@domain.com</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Stack direction="row" gap={4} justifyContent="flex-end">
              <Button variant="outline">Discard</Button>
              <Button>Save Changes</Button>
            </Stack>
          </Stack>
        </div>
        <Separator />
        <div className={css({ display: "grid", gridTemplateColumns: "300px 1fr" })}>
          <div>
            <Text fontSize="lg" fontWeight="medium">
              Notifications
            </Text>
          </div>
          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Switch checked name="system" />
              <Stack gap={1}>
                <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                  System
                </Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  Sensitive alerts that cannot be disabled due to severity.
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row" gap={2}>
              <Switch defaultChecked name="marketing" />
              <Stack gap={1}>
                <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                  Marketing{" "}
                  <Text
                    as="span"
                    className={css({ color: "hsl(var(--color-mutedForeground))" })}
                    fontSize="sm"
                    fontWeight="regular"
                    lineHeight="none"
                  >
                    (Optional)
                  </Text>
                </Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  Limited time offers we usually send once a month.
                </Text>
              </Stack>
            </Stack>
            <Stack direction="row" gap={2}>
              <Switch name="member" />
              <Stack gap={1}>
                <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                  Member joining organization{" "}
                  <Text
                    as="span"
                    className={css({ color: "hsl(var(--color-mutedForeground))" })}
                    fontSize="sm"
                    fontWeight="regular"
                    lineHeight="none"
                  >
                    (Optional)
                  </Text>
                </Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  When an user joins your team.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </div>
        <Separator />
        <div className={css({ display: "grid", gridTemplateColumns: "300px 1fr" })}>
          <div>
            <Text fontSize="lg" fontWeight="medium">
              Appearance
            </Text>
          </div>
          <div>
            <div className={css({ position: "relative" })}>
              <Select
                value={values.theme}
                name="theme"
                onValueChange={(value) => {
                  setValues((prevValues) => ({
                    ...prevValues,
                    theme: value,
                  }));
                }}
              >
                <SelectTrigger
                  className={css({ paddingInlineStart: "calc(var(--spacing-unit) * 8)" })}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <ThemeIcon
                className={css({
                  insetBlockStart: "calc(var(--spacing-unit) * 3)",
                  insetInlineStart: "calc(var(--spacing-unit) * 2)",
                  pointerEvents: "none",
                  position: "absolute",
                })}
                color="hsl(var(--color-mutedForeground))"
                size={16}
              />
            </div>
          </div>
        </div>
      </Stack>
    </form>
  );
}
