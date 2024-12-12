import * as React from "react";

import { Checkbox } from "@/src/components/ui/checkbox";
import { Stack } from "@/src/components/ui/stack";

export default function CheckboxExample(): React.JSX.Element {
  return (
    <Stack alignItems="center" direction="row" gap={2}>
      <Checkbox />
      <span>Label</span>
    </Stack>
  );
}
