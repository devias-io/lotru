import * as React from "react";
import { css } from "@pigment-css/react";

import { Input } from "@/src/components/ui/input";

export default function InputExample(): React.JSX.Element {
  return <Input className={css({ maxWidth: "350px" })} placeholder="Your Name" />;
}
