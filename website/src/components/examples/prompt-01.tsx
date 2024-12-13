import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Prompt,
  PromptAction,
  PromptOverlay,
  PromptCancel,
  PromptContent,
  PromptDescription,
  PromptFooter,
  PromptHeader,
  PromptTitle,
  PromptTrigger,
} from "@/src/components/ui/prompt";

export default function PromptExample(): React.JSX.Element {
  return (
    <Prompt variant="danger">
      <PromptTrigger render={<Button variant="outline">Show Dialog</Button>} />
      <PromptOverlay />
      <PromptContent>
        <PromptHeader>
          <PromptTitle>Are you absolutely sure?</PromptTitle>
          <PromptDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </PromptDescription>
        </PromptHeader>
        <PromptFooter>
          <PromptCancel>Cancel</PromptCancel>
          <PromptAction>Continue</PromptAction>
        </PromptFooter>
      </PromptContent>
    </Prompt>
  );
}
