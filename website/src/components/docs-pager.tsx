import * as React from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { css } from "@pigment-css/react";

import type { Doc } from "content-collections";

import { groups, type Item } from "@/src/config/docs";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

export interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps): React.JSX.Element | null {
  const pager = getPager(doc);

  if (!pager) {
    return null;
  }

  return (
    <div
      className={css({
        display: "grid",
        gap: "calc(var(--spacing-unit) * 4)",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      })}
    >
      {pager?.prev?.href ? (
        <Link
          className={css({
            border: "1px solid hsl(var(--color-border))",
            borderRadius: "var(--borderRadius-md)",
            boxSizing: "border-box",
            color: "hsl(var(--color-primary))",
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--spacing-unit) * 1.5)",
            marginInlineStart: "auto",
            paddingBlock: "calc(var(--spacing-unit) * 2)",
            paddingInline: "calc(var(--spacing-unit) * 4)",
            textDecoration: "none",
            width: "var(--size-full)",
            "&:hover": {
              borderColor: "hsl(var(--color-primary))",
            },
          })}
          href={pager.prev.href}
        >
          <Text
            className={css({ color: "hsl(var(--color-mutedForeground))" })}
            fontSize="sm"
            fontWeight="medium"
          >
            Previous
          </Text>
          <Stack alignItems="center" direction="row" gap={1}>
            <ArrowLeftIcon size={18} />
            <Text fontWeight="medium">{pager.prev.title}</Text>
          </Stack>
        </Link>
      ) : (
        <span />
      )}
      {pager?.next?.href ? (
        <Link
          className={css({
            alignItems: "flex-end",
            border: "1px solid hsl(var(--color-border))",
            borderRadius: "var(--borderRadius-md)",
            boxSizing: "border-box",
            color: "hsl(var(--color-primary))",
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--spacing-unit) * 1.5)",
            marginInlineStart: "auto",
            paddingBlock: "calc(var(--spacing-unit) * 2)",
            paddingInline: "calc(var(--spacing-unit) * 4)",
            textDecoration: "none",
            width: "var(--size-full)",
            "&:hover": {
              borderColor: "hsl(var(--color-primary))",
            },
          })}
          href={pager.next.href}
        >
          <Text
            className={css({ color: "hsl(var(--color-mutedForeground))" })}
            fontSize="sm"
            fontWeight="medium"
          >
            Next
          </Text>
          <Stack alignItems="center" direction="row" gap={1}>
            <Text fontWeight="medium">{pager.next.title}</Text>
            <ArrowRightIcon size={18} />
          </Stack>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}

function getPager(doc: Doc): {
  prev: Item | null;
  next: Item | null;
} {
  const flattenendGroups = groups.reduce<Item[]>((acc, group) => {
    return acc.concat(...group.items);
  }, []);
  const flattenedItems = [null, ...flatten(flattenendGroups), null];
  const activeIndex = flattenedItems.findIndex((item) => {
    if (!item?.href) {
      return false;
    }

    return (
      `/docs/${doc._meta.path}` === (doc._meta.path === "index" ? `${item.href}/index` : item.href)
    );
  });
  const prev = activeIndex !== 0 ? flattenedItems[activeIndex - 1] : null;
  const next = activeIndex !== flattenedItems.length - 1 ? flattenedItems[activeIndex + 1] : null;

  return {
    prev,
    next,
  };
}

function flatten(items: Item[]): Item[] {
  return items
    .reduce<Item[]>((acc, item) => {
      return acc.concat(item.items?.length ? flatten(item.items) : item);
    }, [])
    .filter((item) => !item?.disabled)
    .filter((item) => !item?.external);
}
