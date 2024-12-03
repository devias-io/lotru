import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { Stack } from "@/src/components/ui/stack";

export default function AvatarExample(): React.JSX.Element {
  return (
    <Stack direction="row" gap={2}>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
        <AvatarFallback>LT</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
        <AvatarFallback>RA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AC</AvatarFallback>
      </Avatar>
    </Stack>
  );
}
