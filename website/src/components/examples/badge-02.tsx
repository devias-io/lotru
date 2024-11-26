import * as React from "react";

import { Badge } from "@/src/components/ui/badge";
import { Stack } from "@/src/components/ui/stack";

export default function BadgeExample(): React.JSX.Element {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <Badge variant="solid">Lotru</Badge>
      <Badge variant="subtle">Lotru</Badge>
      <Badge variant="outline">Lotru</Badge>
    </Stack>
  );
}
