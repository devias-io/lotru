import * as React from "react";

import { Toggle } from "@/src/components/ui/toggle";
import { BoldIcon } from "lucide-react";

export default function TooltipExample(): React.JSX.Element {
  return (
    <Toggle>
      <BoldIcon />
    </Toggle>
  );
}
