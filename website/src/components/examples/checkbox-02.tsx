import * as React from "react";

import { Checkbox } from "@/src/components/ui/checkbox";
import { CheckboxGroup } from "@/src/components/ui/checkbox-group";
import { Stack } from "@/src/components/ui/stack";

export default function CheckboxExample(): React.JSX.Element {
  return (
    <CheckboxGroup>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox />
        <span>Default</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked />
        <span>Checked</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked indeterminate />
        <span>Intermediate</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox disabled />
        <span>Disabled</span>
      </Stack>
      <Stack alignItems="center" direction="row" gap={2}>
        <Checkbox checked disabled />
        <span>Disabled checked</span>
      </Stack>
    </CheckboxGroup>
  );
}
