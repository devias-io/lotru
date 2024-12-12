import * as React from "react";

import { Radio } from "@/src/components/ui/radio";
import { RadioGroup } from "@/src/components/ui/radio-group";
import { Stack } from "@/src/components/ui/stack";

export default function RadioExample(): React.JSX.Element {
  return (
    <RadioGroup defaultValue="light">
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="light" />
        <span>Light</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="dark" />
        <span>Dark</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="system" />
        <span>System</span>
      </Stack>
    </RadioGroup>
  );
}
