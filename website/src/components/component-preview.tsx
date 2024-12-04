import * as React from "react";
import { css } from "@pigment-css/react";

import { index } from "@/src/__registry__";
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";

export interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export function ComponentPreview({ children, id }: ComponentPreviewProps): React.JSX.Element {
  const codes = React.Children.toArray(children) as React.ReactElement[];
  const code = codes[0];

  const preview = React.useMemo(() => {
    const Component = index[id]?.component;

    if (!Component) {
      return <Text>Component {id} not found</Text>;
    }

    return <Component />;
  }, [id]);

  return (
    <Tabs defaultValue="preview">
      <TabsList
        className={css({
          backgroundColor: "transparent",
          borderBottom: "1px solid hsl(var(--color-border))",
          borderRadius: 0,
          justifyContent: "flex-start",
          padding: 0,
          width: "var(--size-full)",
        })}
      >
        <TabsTrigger
          className={css({
            "&[data-selected]": {
              boxShadow: "none",
            },
          })}
          value="preview"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          className={css({
            "&[data-selected]": {
              boxShadow: "none",
            },
          })}
          value="code"
        >
          Code
        </TabsTrigger>
        <TabsIndicator
          className={css({
            bottom: 0,
          })}
        />
      </TabsList>
      <TabsContent value="preview">
        <div
          className={css({
            border: "1px solid hsl(var(--color-border))",
            borderRadius: "var(--borderRadius-md)",
            boxSizing: "border-box",
            display: "grid",
            height: "400px",
            overflow: "auto",
            paddingBlock: "calc(var(--spacing-unit) * 10)",
            paddingInline: "calc(var(--spacing-unit) * 5)",
            placeItems: "center",
          })}
        >
          {preview}
        </div>
      </TabsContent>
      <TabsContent value="code">{code}</TabsContent>
    </Tabs>
  );
}
