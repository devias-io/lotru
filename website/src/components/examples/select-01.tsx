import * as React from "react";
import { css } from "@pigment-css/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export default function SelectExample(): React.JSX.Element {
  return (
    <Select defaultValue="1">
      <SelectTrigger className={css({ width: "180px" })}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className={css({ width: "180px" })}>
        <SelectItem value="1">Option 1</SelectItem>
        <SelectItem value="2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  );
}
