"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export function SecurityForm(): React.JSX.Element {
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
              Change Password
            </Text>
          </div>
          <Stack gap={4}>
            <Field>
              <FieldLabel>Old Password</FieldLabel>
              <Input
                className={css({ maxWidth: "var(--size-full)" })}
                defaultValue=""
                name="old"
                type="password"
              />
            </Field>
            <Field>
              <FieldLabel>New Password</FieldLabel>
              <Input
                className={css({ maxWidth: "var(--size-full)" })}
                defaultValue=""
                name="new"
                type="password"
              />
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
              System
            </Text>
          </div>
          <div
            className={css({
              backgroundColor: "hsl(var(--color-muted))",
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "var(--borderRadius-md)",
            })}
          >
            <Stack
              className={css({ padding: "calc(var(--spacing-unit) * 4)" })}
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={4}
            >
              <Stack gap={2}>
                <Text fontWeight="medium">Login sessions</Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  Devices or browsers where you are signed in
                </Text>
              </Stack>
              <Button variant="outline">Sign out of all devices</Button>
            </Stack>
            <Separator />
            <Stack
              className={css({ padding: "calc(var(--spacing-unit) * 4)" })}
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={4}
            >
              <Stack gap={2}>
                <Text fontWeight="medium">Delete account</Text>
                <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                  Permanently delete your account and data
                </Text>
              </Stack>
              <Button variant="danger">Delete account</Button>
            </Stack>
          </div>
        </div>
      </Stack>
    </form>
  );
}
