"use client";

import * as React from "react";

import { Button } from "@/src/components/ui/button";
import { Field, FieldControl, FieldLabel } from "@/src/components/ui/field";
import { Radio } from "@/src/components/ui/radio";
import { RadioGroup } from "@/src/components/ui/radio-group";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function RadioExample(): React.JSX.Element {
  const [value, setValue] = React.useState<string>("all");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form value:", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={6}>
        <Field>
          <FieldLabel>Notify me about...</FieldLabel>
          <RadioGroup
            name="notify"
            onValueChange={(value) => {
              setValue(value as string);
            }}
            value={value}
          >
            <Stack alignItems="center" direction="row" gap={2}>
              <FieldControl>
                <Radio disabled value="all" />
              </FieldControl>
              <Text fontSize="sm">All new messages</Text>
            </Stack>
            <Stack alignItems="center" direction="row" gap={2}>
              <FieldControl>
                <Radio value="mentions" />
              </FieldControl>
              <Text fontSize="sm">Direct messages and mentions</Text>
            </Stack>
            <Stack alignItems="center" direction="row" gap={2}>
              <FieldControl>
                <Radio value="none" />
              </FieldControl>
              <Text fontSize="sm">Nothing</Text>
            </Stack>
          </RadioGroup>
        </Field>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
