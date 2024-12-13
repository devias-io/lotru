import * as React from "react";

import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";
import { ProfileForm } from "@/src/app/(app)/examples/forms/profile-form";

export default function Page(): React.JSX.Element {
  return (
    <Stack gap={6}>
      <Text fontSize="xl" fontWeight="semibold">
        Profile Information
      </Text>
      <Separator />
      <ProfileForm />
    </Stack>
  );
}
