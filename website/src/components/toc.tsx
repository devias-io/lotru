"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { cn } from "@/src/lib/cn";
import type { TableOfContents } from "@/src/lib/toc";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export interface TocProps {
  tree: TableOfContents;
}

export function Toc({ tree }: TocProps): React.JSX.Element {
  const itemIds = React.useMemo(
    () =>
      tree.items
        ? tree.items
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [tree]
  );

  const activeItem = useActiveItem(itemIds as string[]);

  return (
    <Stack gap={2}>
      <Text fontSize="sm" fontWeight="medium">
        On this page
      </Text>
      <Tree activeItem={activeItem} tree={tree} />
    </Stack>
  );
}

interface TreeProps {
  activeItem?: string | null;
  tree: TableOfContents;
  level?: number;
}

function Tree({ activeItem, tree, level = 1 }: TreeProps): React.JSX.Element | null {
  if (!tree.items?.length || level > 3) {
    return null;
  }

  return (
    <ul
      className={cn(
        css({ margin: 0, listStyle: "none", padding: 0 }),
        level > 1 && css({ paddingInlineStart: "calc(var(--spacing-unit) * 4)" })
      )}
    >
      {tree.items?.map((item, index) => (
        <li key={index} className={css({ paddingBlockStart: "calc(var(--spacing-unit) * 2)" })}>
          <a
            className={cn(
              css({
                color: "hsl(var(--color-mutedForeground))",
                fontSize: "var(--fontSize-sm)",
                textDecoration: "none",
                "&:hover": {
                  color: "hsl(var(--color-foreground))",
                },
              }),
              item.url === `#${activeItem}` &&
                css({
                  color: "hsl(var(--color-foreground))",
                  fontWeight: "var(--fontWeight-medium)",
                })
            )}
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

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    itemIds?.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}
