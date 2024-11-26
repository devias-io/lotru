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
      <PromptTrigger render={<Button>Open prompt</Button>} />
      <PromptOverlay />
      <PromptContent>
        <PromptHeader>
          <PromptTitle>Delete something</PromptTitle>
          <PromptDescription>Are you sure? This cannot be undone.</PromptDescription>
        </PromptHeader>
        <PromptFooter>
          <PromptCancel>Cancel</PromptCancel>
          <PromptAction>Delete</PromptAction>
        </PromptFooter>
      </PromptContent>
    </Prompt>
  );
}
