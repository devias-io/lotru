import * as React from "react";

import { Switch } from "@/src/components/ui/switch";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function SwitchExample(): React.JSX.Element {
  return (
    <Stack alignItems="center" direction="row" gap={2}>
      <Switch />
      <Text>Label</Text>
    </Stack>
  );
}
