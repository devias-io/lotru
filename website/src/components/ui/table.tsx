import * as React from "react";
import { styled } from "@pigment-css/react";
import { MinusIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

const TableRoot = styled("table", {
  name: "Table",
  slot: "root",
})({
  borderCollapse: "collapse",
  width: "var(--size-full)",
});

const TableHeader = styled("thead", {
  name: "TableHeader",
  slot: "header",
})({
  backgroundColor: "hsl(var(--color-backgroundSubtle))",
});

const TableBody = styled("tbody", {
  name: "TableBody",
  slot: "body",
})({});

const TableRow = styled("tr", {
  name: "TableRow",
  slot: "row",
})({
  borderBottom: "1px solid hsl(var(--color-border))",
  "&:last-child": {
    borderBottom: "none",
  },
});

const TableCell = styled("td", {
  name: "TableCell",
  slot: "cell",
})({
  backgroundColor: "hsl(var(--color-background))",
  color: "hsl(var(--color-foregroundSubtle))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  height: "calc(var(--spacing-unit) * 12)",
  paddingInlineStart: "calc(var(--spacing-unit) * 2)",
  paddingBlockEnd: "1px",
  paddingBlockStart: "1px",
  textAlign: "left",
  verticalAlign: "middle",
  "&:first-child": {
    paddingLeft: "calc(var(--spacing-unit) * 6)",
  },
});

const TableHeaderCell = styled(TableCell, {
  name: "TableHeaderCell",
  slot: "headerCell",
})({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  height: "calc(var(--spacing-unit) * 12)",
});

interface TableProps extends React.ComponentPropsWithoutRef<"table"> {}

const Table = React.forwardRef<HTMLTableElement, TableProps>(({ children, ...props }: TableProps, ref) => {
  return (
    <TableRoot ref={ref} {...props}>
      {children}
    </TableRoot>
  );
});

interface TablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  count: number;
  pageSize: number;
  pageIndex: number;
  pageCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  translations?: {
    of?: string;
    results?: string;
    pages?: string;
    prev?: string;
    next?: string;
  };
  previousPage: () => void;
  nextPage: () => void;
}

const TablePagination = React.forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      className,
      /**
       * The total number of items.
       */
      count,
      /**
       * The number of items per page.
       */
      pageSize,
      /**
       * The total number of pages.
       */
      pageCount,
      /**
       * The current page index.
       */
      pageIndex,
      /**
       * Whether there's a previous page that can be navigated to.
       */
      canPreviousPage,
      /**
       * Whether there's a next page that can be navigated to.
       */
      canNextPage,
      /**
       * A function that handles navigating to the next page.
       * This function should handle retrieving data for the next page.
       */
      nextPage,
      /**
       * A function that handles navigating to the previous page.
       * This function should handle retrieving data for the previous page.
       */
      previousPage,
      /**
       * An optional object of words to use in the pagination component.
       * Use this to override the default words, or translate them into another language.
       */
      translations = {
        of: "of",
        results: "results",
        pages: "pages",
        prev: "Prev",
        next: "Next",
      },
      ...props
    }: TablePaginationProps,
    ref
  ) => {
    const { from, to } = React.useMemo(() => {
      const from = count === 0 ? count : pageIndex * pageSize + 1;
      const to = Math.min(count, (pageIndex + 1) * pageSize);

      return { from, to };
    }, [count, pageIndex, pageSize]);

    return (
      <div ref={ref} className={className} {...props}>
        <Stack alignItems="center" direction="row" gap={1}>
          <Text>{from}</Text>
          <MinusIcon />
          <Text>
            {to} {translations.of} {count} {translations.results}
          </Text>
        </Stack>
        <Stack alignItems="center" gap={2}>
          <Text>
            {pageIndex + 1} {translations.of} {Math.max(pageCount, 1)} {translations.pages}
          </Text>
          <Button variant="ghost" onClick={previousPage} disabled={!canPreviousPage}>
            {translations.prev}
          </Button>
          <Button variant="ghost" onClick={nextPage} disabled={!canNextPage}>
            {translations.next}
          </Button>
        </Stack>
      </div>
    );
  }
);

export { Table, TableHeader, TableBody, TableRow, TableCell, TableHeaderCell, TablePagination };

export type { TableProps, TablePaginationProps };
