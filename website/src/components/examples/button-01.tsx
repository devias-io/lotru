import * as React from "react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";

export default function ButtonExample(): React.JSX.Element {
  return (
    <Button>
      Button
      <ArrowRightIcon />
    </Button>
  );
}
