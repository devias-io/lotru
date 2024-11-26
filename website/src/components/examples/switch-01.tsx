import * as React from "react";
import { css } from "@pigment-css/react";

import { Switch } from "@/src/components/ui/switch";
import { Text } from "@/src/components/ui/text";

export default function SwitchExample(): React.JSX.Element {
  return (
    <div
      className={css({
        alignItems: "center",
        display: "flex",
        gap: "calc(var(--spacing-unit) * 2)",
      })}
    >
      <Switch />
      <Text>Manage Inventory</Text>
    </div>
  );
}
