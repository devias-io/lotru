import * as React from "react";
import * as Primitives from "@base_ui/react/CheckboxGroup";
import { styled } from "@pigment-css/react";

const CheckboxGroup = styled(Primitives.Root, {
  name: "CheckboxGroup",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

export { CheckboxGroup };
