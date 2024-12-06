import * as React from "react";

import { Radio } from "@/src/components/ui/radio";
import { RadioGroup } from "@/src/components/ui/radio-group";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function RadioExample(): React.JSX.Element {
  return (
    <RadioGroup defaultValue="light">
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="light" />
        <Text>Light</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="dark" />
        <Text>Dark</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="system" />
        <Text>System</Text>
      </Stack>
    </RadioGroup>
  );
}
