import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";
import { Stack } from "@/src/components/ui/stack";

export default function IconButtonExample(): React.JSX.Element {
  return (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <IconButton variant="solid">
        <ArrowRightIcon />
      </IconButton>
      <IconButton variant="outline">
        <ArrowRightIcon />
      </IconButton>
      <IconButton variant="ghost">
        <ArrowRightIcon />
      </IconButton>
      <IconButton disabled>
        <ArrowRightIcon />
      </IconButton>
    </Stack>
  );
}
