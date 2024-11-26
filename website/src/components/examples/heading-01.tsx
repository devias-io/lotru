import * as React from "react";
import { css } from "@pigment-css/react";

import { Heading } from "@/src/components/ui/heading";

export default function HeadingExample(): React.JSX.Element {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 2)",
        textAlign: "center",
      })}
    >
      <Heading level="h1">This is an H1 heading</Heading>
      <Heading level="h2">This is an H2 heading</Heading>
      <Heading level="h3">This is an H3 heading</Heading>
    </div>
  );
}
