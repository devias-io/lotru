import * as React from "react";
import { InfoIcon } from "lucide-react";

import { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle } from "@/src/components/ui/alert";

export default function AlertExample(): React.JSX.Element {
  return (
    <Alert>
      <AlertIcon>
        <InfoIcon />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Enable Premium Features</AlertTitle>
        <AlertDescription>
          Upgrade to a premium plan to unlock features like unlimited projects and custom domains.
        </AlertDescription>
      </AlertContent>
    </Alert>
  );
}
