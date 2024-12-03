import * as React from "react";
import * as Primitives from "@base_ui/react/RadioGroup";
import { styled } from "@pigment-css/react";

const RadioGroup = styled(Primitives.Root, {
  name: "RadioGroup",
  slot: "root",
})({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--size-unit) * 2)",
});

export { RadioGroup };
