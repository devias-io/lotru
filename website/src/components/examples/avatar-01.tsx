import * as React from "react";
import { css } from "@pigment-css/react";

import { Avatar } from "@/src/components/ui/avatar";

export default function AvatarExample(): React.JSX.Element {
  return (
    <div
      className={css({
        display: "flex",
        gap: "calc(var(--spacing-unit) * 2)",
      })}
    >
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        fallback="LT"
        size="lg"
      />
      <Avatar
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        fallback="RA"
        size="lg"
      />
      <Avatar fallback="AC" size="lg" />
    </div>
  );
}
