import * as React from "react";
import { styled } from "@pigment-css/react";

const Card = styled("div", {
  name: "CardRoot",
  slot: "root",
})({
  background: "hsl(var(--color-background))",
  borderRadius: "var(--borderRadius-lg)",
  boxShadow: "var(--shadow-lg)",
});

const CardContent = styled("div", {
  name: "CardContent",
  slot: "content",
})({
  paddingBlock: "calc(var(--spacing-unit) * 4)",
  paddingInline: "calc(var(--spacing-unit) * 6)",
});

export { Card, CardContent };
