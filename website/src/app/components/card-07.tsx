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
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function Example(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Delete project</CardTitle>
        <CardDescription>Are you sure you want to delete this project?</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className={css({ paddingBlock: "calc(var(--spacing-unit) * 4)" })}>
        <Stack gap={2}>
          <Text>
            Type{" "}
            <Text as="span" weight="semibold">
              delete
            </Text>{" "}
            to confirm your action.
          </Text>
          <Input className={css({ maxWidth: "var(--size-full)" })} />
        </Stack>
      </CardContent>
      <Separator />
      <CardFooter
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          gap: "calc(var(--spacing-unit) * 2)",
          paddingBlock: "calc(var(--spacing-unit) * 4)",
        })}
      >
        <Button variant="outline">Cancel</Button>
        <Button variant="danger">Confirm</Button>
      </CardFooter>
    </Card>
  );
}
