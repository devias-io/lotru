import * as React from "react";

import { Button } from "@/src/components/ui/button";
import { Stack } from "@/src/components/ui/stack";

export default function ButtonExample(): React.JSX.Element {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <Button variant="solid">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
    </Stack>
  );
}
