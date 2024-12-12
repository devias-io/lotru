import * as React from "react";
import { css } from "@pigment-css/react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import { Switch } from "@/src/components/ui/switch";
import { Select } from "@/src/components/ui/select";

export default function Page(): React.JSX.Element {
  return (
    <Stack gap={4}>
      <Text fontSize="xl" fontWeight="semibold">
        Profile Information
      </Text>
      <Separator />
      <Stack gap={12}>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "300px 1fr",
          })}
        >
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
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "300px 1fr",
          })}
        >
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
              <Select
                className={css({ maxWidth: "var(--size-full)" })}
                defaultValue=""
                name="email"
              >
                <option disabled>Select a verified email to display</option>
                <option value="sanchez@example.com">sanchez@example.com</option>
                <option value="sanchez@domain.com">sanchez@domain.com</option>
              </Select>
            </Field>
            <Stack direction="row" gap={4} justifyContent="flex-end">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </Stack>
          </Stack>
        </div>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "300px 1fr",
          })}
        >
          <div>
            <Text fontSize="lg" fontWeight="medium">
              Notifications
            </Text>
          </div>
          <Stack gap={4}>
            <Stack direction="row" gap={2}>
              <Switch checked name="system" />
              <div
                className={css({
                  display: "grid",
                  gap: "var(--spacing-unit)",
                })}
              >
                <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                  System
                </Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  Sensitive alerts that cannot be disabled due to severity.
                </Text>
              </div>
            </Stack>
            <Stack direction="row" gap={2}>
              <Switch defaultChecked name="marketing" />
              <div
                className={css({
                  display: "grid",
                  gap: "var(--spacing-unit)",
                })}
              >
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
              </div>
            </Stack>
            <Stack direction="row" gap={2}>
              <Switch name="member" />
              <div
                className={css({
                  display: "grid",
                  gap: "var(--spacing-unit)",
                })}
              >
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
              </div>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Stack>
  );
}
