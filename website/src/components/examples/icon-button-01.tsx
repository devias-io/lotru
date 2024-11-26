import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";

export default function IconButtonExample(): React.JSX.Element {
  return (
    <IconButton size="lg">
      <ArrowRightIcon />
    </IconButton>
  );
}
