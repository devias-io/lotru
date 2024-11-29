import * as React from "react";

import { Checkbox } from "@/src/components/ui/checkbox";
import { CheckboxGroup } from "@/src/components/ui/checkbox-group";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function CheckboxExample(): React.JSX.Element {
  return (
    <CheckboxGroup>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox />
        <Text>Default</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked />
        <Text>Checked</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked indeterminate />
        <Text>Intermediate</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox disabled />
        <Text>Disabled</Text>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked disabled />
        <Text>Disabled checked</Text>
      </Stack>
    </CheckboxGroup>
  );
}
