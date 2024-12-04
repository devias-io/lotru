import * as React from "react";
import { css } from "@pigment-css/react";

import { CodeBlockWrapper } from "@/src/components/code-block-wrapper";

export interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  src: string;
}

export function ComponentSource({ children }: ComponentSourceProps): React.JSX.Element {
  return (
    <CodeBlockWrapper className={css({ borderRadius: "var(--borderRadius-md)" })}>
      {children}
    </CodeBlockWrapper>
  );
}
