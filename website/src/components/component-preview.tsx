import * as React from "react";
import { css } from "@pigment-css/react";

import { index } from "@/src/__registry__";
import { cn } from "@/src/lib/cn";
import { CodeBlockWrapper } from "@/src/components/code-block-wrapper";

export interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export function ComponentPreview({
  children,
  className,
  id,
  ...props
}: ComponentPreviewProps): React.JSX.Element {
  const sources = React.Children.toArray(children) as React.ReactElement[];
  const source = sources[0];

  const preview = React.useMemo(() => {
    const Component = index[id]?.component;

    if (!Component) {
      return <div>Component {id} not found</div>;
    }

    return <Component />;
  }, [id]);

  return (
    <div
      className={cn(
        css({
          marginBlock: "calc(var(--spacing-unit) * 4)",
        }),
        className
      )}
      {...props}
    >
      <div
        className={css({
          border: "1px solid hsl(var(--color-border))",
          borderTopLeftRadius: "var(--borderRadius-md)",
          borderTopRightRadius: "var(--borderRadius-md)",
          boxSizing: "border-box",
          display: "grid",
          minHeight: "400px",
          overflow: "auto",
          paddingBlock: "calc(var(--spacing-unit) * 10)",
          paddingInline: "calc(var(--spacing-unit) * 5)",
          placeItems: "center",
        })}
      >
        {preview}
      </div>
      <CodeBlockWrapper
        className={css({
          borderBottomLeftRadius: "var(--borderRadius-md)",
          borderBottomRightRadius: "var(--borderRadius-md)",
        })}
      >
        {source}
      </CodeBlockWrapper>
    </div>
  );
}
