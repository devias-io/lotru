import * as React from "react";

import { Switch } from "@/src/components/ui/switch";
import { Stack } from "@/src/components/ui/stack";

export default function SwitchExample(): React.JSX.Element {
  return (
    <Stack alignItems="center" direction="row" gap={2}>
      <Switch />
      <span>Label</span>
    </Stack>
  );
}
