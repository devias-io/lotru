import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPositioner,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

export default function TooltipExample(): React.JSX.Element {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover</Button>} />
        <TooltipPositioner side="top" sideOffset={4}>
          <TooltipContent>
            <TooltipArrow />
            Add to library
          </TooltipContent>
        </TooltipPositioner>
      </Tooltip>
    </TooltipProvider>
  );
}
