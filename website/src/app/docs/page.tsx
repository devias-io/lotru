import * as React from "react";
import { css } from "@pigment-css/react";

import { Text } from "@/src/components/ui/text";

export default function Page(): React.JSX.Element {
  return (
    <article
      className={css({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 4)",
        "@media (min-width: 768px)": {
          paddingInline: "calc(var(--spacing-unit) * 8)",
        },
      })}
    >
      <Text size="4xl" weight="bold">
        Introduction
      </Text>
      <Text className={css({ color: "hsl(var(--color-mutedForeground))" })}>
        Lotru UI is a design system built with Base UI and Pigment CSS. It is a collection of components, styles, and
        utilities that help you build web applications.
      </Text>
    </article>
  );
}
