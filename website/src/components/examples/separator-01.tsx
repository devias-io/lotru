import * as React from "react";
import { css } from "@pigment-css/react";

import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function SeparatorExample(): React.JSX.Element {
  return (
    <Stack gap={4}>
      <Stack gap={1}>
        <Text size="sm" leading="none" weight="medium">
          Base UI Primitives
        </Text>
        <Text size="sm" className={css({ color: "var(--color-mutedForeground)" })}>
          An open-source UI component library.
        </Text>
      </Stack>
      <Separator />
      <Stack alignItems="center" direction="row" gap={4} className={css({ height: "calc(var(--size-unit) * 5)" })}>
        <Text size="sm">Blog</Text>
        <Separator orientation="vertical" />
        <Text size="sm">Docs</Text>
        <Separator orientation="vertical" />
        <Text size="sm">Source</Text>
      </Stack>
    </Stack>
  );
}
