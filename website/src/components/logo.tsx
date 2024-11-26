import * as React from "react";

export function Logo({ height, width }: { height?: number; width?: number }): React.JSX.Element {
  return <img height={height} width={width} src="/assets/logo--dark.svg" />;
}
