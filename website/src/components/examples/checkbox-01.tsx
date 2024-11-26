import * as React from "react";
import { css } from "@pigment-css/react";

import { Checkbox } from "@/src/components/ui/checkbox";
import { Text } from "@/src/components/ui/text";

export default function CheckboxExample(): React.JSX.Element {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 4)",
      })}
    >
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Checkbox />
        <Text>Default</Text>
      </div>
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Checkbox checked indeterminate />
        <Text>Intermediate</Text>
      </div>
      <div
        className={css({
          alignItems: "center",
          display: "flex",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Checkbox disabled />
        <Text>Disabled</Text>
      </div>
    </div>
  );
}
