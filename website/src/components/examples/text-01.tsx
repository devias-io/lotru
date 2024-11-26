import * as React from "react";
import { css } from "@pigment-css/react";

import { Text } from "@/src/components/ui/text";

export default function TextExample(): React.JSX.Element {
  return (
    <div
      className={css({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 2)",
        textAlign: "center",
      })}
    >
      <Text size="md" weight="regular" family="sans">
        Medium Size, Regular Weight, Sans-Serif
      </Text>
      <Text size="md" weight="medium" family="sans">
        Medium Size, Medium Weight, Sans-Serif
      </Text>
      <Text size="lg" weight="regular" family="sans">
        Large Size, Regular Weight, Sans-Serif
      </Text>
      <Text size="lg" weight="medium" family="sans">
        Large Size, Medium Weight, Sans-Serif
      </Text>
      <Text size="xl" weight="regular" family="sans">
        XLarge Size, Regular Weight, Sans-Serif
      </Text>
      <Text size="xl" weight="medium" family="sans">
        XLarge Size, Medium Weight, Sans-Serif
      </Text>
      <Text size="md" weight="regular" family="mono">
        Base Size, Regular Weight, Mono
      </Text>
      <Text size="lg" weight="regular" family="mono">
        Large Size, Regular Weight, Mono
      </Text>
      <Text size="lg" weight="medium" family="mono">
        Large Size, Medium Weight, Mono
      </Text>
      <Text size="xl" weight="regular" family="mono">
        XLarge Size, Regular Weight, Mono
      </Text>
      <Text size="xl" weight="medium" family="mono">
        XLarge Size, Medium Weight, Mono
      </Text>
    </div>
  );
}
