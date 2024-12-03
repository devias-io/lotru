import * as React from "react";
import { css } from "@pigment-css/react";

import { Select } from "@/src/components/ui/select";

export default function SelectExample(): React.JSX.Element {
  return (
    <Select className={css({ maxWidth: "350px", width: "var(--size-full)" })} defaultValue="1">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </Select>
  );
}
