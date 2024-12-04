import * as React from "react";

export interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  src: string;
}

export function ComponentSource({ children }: ComponentSourceProps): React.JSX.Element {
  return <div>{children}</div>;
}
