import * as React from "react";
import { css } from "@pigment-css/react";

import type { TableOfContents } from "@/src/lib/toc";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export interface TocProps {
  tree: TableOfContents;
}

export function Toc({ tree }: TocProps): React.JSX.Element {
  return (
    <Stack gap={2}>
      <Text fontWeight="medium">On this page</Text>
      <Tree tree={tree} />
    </Stack>
  );
}

interface TreeProps {
  tree: TableOfContents;
  level?: number;
}

function Tree({ tree, level = 1 }: TreeProps): React.JSX.Element | null {
  if (!tree.items?.length || level > 3) {
    return null;
  }

  return (
    <ul
      className={css({ margin: 0, listStyle: "none" })}
      style={{
        paddingInlineStart: level > 1 ? "calc(var(--spacing-unit) * 4)" : 0,
      }}
    >
      {tree.items?.map((item, index) => (
        <li
          key={index}
          className={css({
            paddingBlockStart: "calc(var(--spacing-unit) * 2)",
          })}
        >
          <a
            className={css({
              color: "hsl(var(--color-mutedForeground))",
              fontSize: "var(--fontSize-sm)",
              textDecoration: "none",
              "&:hover": {
                color: "inherit",
              },
            })}
            href={item.url}
          >
            {item.title}
          </a>
          {item.items?.length ? <Tree tree={item} level={level + 1} /> : null}
        </li>
      ))}
    </ul>
  );
}
