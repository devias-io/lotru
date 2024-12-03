import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@/src/components/ui/popover";

export default function PopoverExample(): React.JSX.Element {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Open popover</Button>} />
      <PopoverPositioner sideOffset={8}>
        <PopoverContent>
          <PopoverArrow />
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>Popover Description</PopoverDescription>
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  );
}
