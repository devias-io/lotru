import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";
import { Stack } from "@/src/components/ui/stack";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

export default function TabsExample(): React.JSX.Element {
  return (
    <Tabs defaultValue="account" className={css({ width: "400px" })}>
      <TabsList
        className={css({
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        })}
      >
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re done.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Stack gap={2}>
              <Field>
                <FieldLabel>Name</FieldLabel>
                <Input id="name" defaultValue="John Doe" />
              </Field>
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input id="username" defaultValue="@john.doe" />
              </Field>
            </Stack>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Stack gap={2}>
              <Field>
                <FieldLabel>Current password</FieldLabel>
                <Input id="current" type="password" />
              </Field>
              <Field>
                <FieldLabel>New password</FieldLabel>
                <Input id="new" type="password" />
              </Field>
            </Stack>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
