import * as React from "react";

import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import { SecurityForm } from "@/src/app/(app)/examples/forms/security/security-form";

export default function Page(): React.JSX.Element {
  return (
    <Stack gap={6}>
      <Text fontSize="xl" fontWeight="semibold">
        Security
      </Text>
      <Separator />
      <SecurityForm />
    </Stack>
  );
}
