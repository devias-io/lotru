import * as React from "react";

import { Card, CardContent } from "@/src/components/ui/card";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export default function CardExample(): React.JSX.Element {
  return (
    <Card>
      <CardContent>
        <Stack gap={2}>
          <Text size="xl" weight="semibold">
            Latest orders
          </Text>
          <Text>You have 5 new orders. Check them out in the orders section.</Text>
        </Stack>
      </CardContent>
    </Card>
  );
}
