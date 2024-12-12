import * as React from "react";
import { css } from "@pigment-css/react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Switch } from "@/src/components/ui/switch";
import { Text } from "@/src/components/ui/text";

export default function Example(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit user</CardTitle>
      </CardHeader>
      <Separator />
      <div
        className={css({
          backgroundColor: "hsl(var(--color-muted))",
          paddingBlock: "calc(var(--spacing-unit) * 4)",
          paddingInline: "calc(var(--spacing-unit) * 6)",
        })}
      >
        <Button size="sm" variant="ghost">
          Upload
        </Button>
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
          })}
        >
          <Avatar size="2xl">
            <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
          </Avatar>
        </div>
      </div>
      <Separator />
      <CardContent
        className={css({
          paddingBlockStart: "calc(var(--spacing-unit) * 4)",
        })}
      >
        <Stack gap={4}>
          <Field>
            <FieldLabel>First Name</FieldLabel>
            <Input
              className={css({ maxWidth: "var(--size-full)" })}
              name="firstName"
              placeholder="First Name"
            />
          </Field>
          <Field>
            <FieldLabel>Last Name</FieldLabel>
            <Input
              className={css({ maxWidth: "var(--size-full)" })}
              name="lastName"
              placeholder="Last Name"
            />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              className={css({ maxWidth: "var(--size-full)" })}
              name="email"
              placeholder="Email"
            />
          </Field>
          <Stack
            className={css({
              border: "1px solid hsl(var(--color-border))",
              borderRadius: "var(--borderRadius-md)",
              boxShadow: "var(--shadow-xs)",
              padding: "calc(var(--spacing-unit) * 2)",
            })}
            direction="row"
            gap={2}
          >
            <Switch defaultChecked name="analytics" />
            <div
              className={css({
                display: "grid",
                gap: "var(--spacing-unit)",
              })}
            >
              <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                Usage Analytics{" "}
                <Text
                  as="span"
                  className={css({ color: "hsl(var(--color-mutedForeground))" })}
                  fontSize="sm"
                >
                  (Optional)
                </Text>
              </Text>
              <Text className={css({ color: "hsl(var(--color-mutedForeground))" })} fontSize="sm">
                We use the data to improve the user experience.
              </Text>
            </div>
          </Stack>
        </Stack>
      </CardContent>
      <CardFooter
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
}
