import * as React from "react";

import { Radio } from "@/src/components/ui/radio";
import { RadioGroup } from "@/src/components/ui/radio-group";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function RadioExample(): React.JSX.Element {
  return (
    <RadioGroup defaultValue="a">
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="a" />
        <Text>Option 1</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio value="b" />
        <Text>Option 2</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Radio disabled value="c" />
        <Text>Disabled</Text>
      </Stack>
    </RadioGroup>
  );
}
