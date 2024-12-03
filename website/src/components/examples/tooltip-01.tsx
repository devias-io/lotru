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
        <TooltipTrigger render={<Button variant="outline">Hover</Button>}></TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent>Add to library</TooltipContent>
          <TooltipArrow />
        </TooltipPositioner>
      </Tooltip>
    </TooltipProvider>
  );
}
