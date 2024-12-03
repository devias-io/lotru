import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import { Popover, PopoverArrow, PopoverContent, PopoverPositioner, PopoverTrigger } from "@/src/components/ui/popover";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function PopoverExample(): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverPositioner side="bottom" sideOffset={4}>
        <PopoverContent>
          <PopoverArrow />
          <Stack gap={2}>
            <Text size="sm" weight="semibold">
              Project Configuration
            </Text>
            <Text size="sm" className={css({ color: "var(--color-mutedForeground)" })}>
              Set the project configuration.
            </Text>
          </Stack>
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  );
}
