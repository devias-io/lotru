import * as React from "react";
import { InfoIcon } from "lucide-react";

import { Alert, AlertContent, AlertIcon, AlertTitle } from "@/src/components/ui/alert";

export default function AlertExample(): React.JSX.Element {
  return (
    <Alert dismissible>
      <AlertIcon>
        <InfoIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Organization created successfully.</AlertTitle>
      </AlertContent>
    </Alert>
  );
}
