import * as React from "react";
import { css } from "@pigment-css/react";

import { Textarea } from "@/src/components/ui/textarea";

export default function TextareaExample(): React.JSX.Element {
  return (
    <Textarea className={css({ maxWidth: "350px" })} placeholder="Product short description" />
  );
}
