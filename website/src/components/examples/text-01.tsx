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
      <Text fontSize="md" fontWeight="regular" fontFamily="sans">
        Medium Size, Regular Weight, Sans-Serif
      </Text>
      <Text fontSize="md" fontWeight="medium" fontFamily="sans">
        Medium Size, Medium Weight, Sans-Serif
      </Text>
      <Text fontSize="lg" fontWeight="regular" fontFamily="sans">
        Large Size, Regular Weight, Sans-Serif
      </Text>
      <Text fontSize="lg" fontWeight="medium" fontFamily="sans">
        Large Size, Medium Weight, Sans-Serif
      </Text>
      <Text fontSize="xl" fontWeight="regular" fontFamily="sans">
        XLarge Size, Regular Weight, Sans-Serif
      </Text>
      <Text fontSize="xl" fontWeight="medium" fontFamily="sans">
        XLarge Size, Medium Weight, Sans-Serif
      </Text>
      <Text fontSize="md" fontWeight="regular" fontFamily="mono">
        Base Size, Regular Weight, Mono
      </Text>
      <Text fontSize="lg" fontWeight="regular" fontFamily="mono">
        Large Size, Regular Weight, Mono
      </Text>
      <Text fontSize="lg" fontWeight="medium" fontFamily="mono">
        Large Size, Medium Weight, Mono
      </Text>
      <Text fontSize="xl" fontWeight="regular" fontFamily="mono">
        XLarge Size, Regular Weight, Mono
      </Text>
      <Text fontSize="xl" fontWeight="medium" fontFamily="mono">
        XLarge Size, Medium Weight, Mono
      </Text>
    </div>
  );
}
