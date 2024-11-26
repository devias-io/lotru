import * as React from "react";
import { TextCursorIcon } from "lucide-react";

import { Card } from "@/src/components/ui/card";
import { Text } from "@/src/components/ui/text";
import { IconButton } from "@/src/components/ui/icon-button";

export default function Stats(): React.JSX.Element {
  return (
    <Card>
      <div>
        <Text>Hello</Text>
      </div>
      <div>
        <IconButton>
          <TextCursorIcon />
        </IconButton>
      </div>
    </Card>
  );
}
