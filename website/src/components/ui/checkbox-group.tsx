import * as React from "react";
import { CheckboxGroup as Primitive } from "@base-ui-components/react/checkbox-group";
import { styled } from "@pigment-css/react";

const CheckboxGroup = styled(Primitive, {
  name: "CheckboxGroup",
  slot: "root",
})<React.ComponentProps<typeof Primitive>>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

export { CheckboxGroup };
