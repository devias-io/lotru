import * as React from "react";
import * as Primitives from "@base_ui/react/RadioGroup";
import { styled } from "@pigment-css/react";

const RadioGroup = styled(Primitives.Root, {
  name: "RadioGroup",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

export { RadioGroup };
