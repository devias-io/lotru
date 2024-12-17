import * as React from "react";
import { RadioGroup as Primitive } from "@base-ui-components/react/radio-group";
import { styled } from "@pigment-css/react";

const RadioGroup = styled(Primitive, {
  name: "RadioGroup",
  slot: "root",
})<React.ComponentProps<typeof Primitive>>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

export { RadioGroup };
