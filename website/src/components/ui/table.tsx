import * as React from "react";
import { styled } from "@pigment-css/react";
import { MinusIcon } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Stack } from "@/src/components/ui/stack";

const TableRoot = styled("table", {
  name: "TableRoot",
  slot: "root",
})<React.ComponentProps<"table">>({
  borderCollapse: "collapse",
  captionSide: "bottom",
  textIndent: 0,
  width: "var(--size-full)",
});

const TableHeader = styled("thead", {
  name: "TableHeader",
  slot: "header",
})<React.ComponentProps<"thead">>({});

const TableBody = styled("tbody", {
  name: "TableBody",
  slot: "body",
})<React.ComponentProps<"tbody">>({
  "& > tr:last-child": {
    borderBottom: "none",
  },
});

const TableFooter = styled("tfoot", {
  name: "TableFooter",
  slot: "footer",
})<React.ComponentProps<"tfoot">>({
  backgroundColor: "hsl(var(--color-muted) / 50%)",
  borderTop: "1px solid hsl(var(--color-border))",
  fontWeight: "var(--fontWeight-medium)",
  "&:last-child > tr": {
    borderBottom: "none",
  },
});

const TableCaption = styled("caption", {
  name: "TableCaption",
  slot: "caption",
})<React.ComponentProps<"caption">>({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  padding: "calc(var(--spacing-unit) * 4)",
  textAlign: "center",
  verticalAlign: "middle",
});

const TableRow = styled("tr", {
  name: "TableRow",
  slot: "row",
})<React.ComponentProps<"tr">>({
  borderBottom: "1px solid hsl(var(--color-border))",
  "&:hover": {
    backgroundColor: "hsl(var(--color-muted) / 50%)",
  },
});

const TableHeaderCell = styled("th", {
  name: "TableHeaderCell",
  slot: "headerCell",
})<React.ComponentProps<"th">>({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  height: "calc(var(--spacing-unit) * 12)",
  lineHeight: "var(--lineHeight-normal)",
  paddingInline: "calc(var(--spacing-unit) * 4)",
  textAlign: "left",
  verticalAlign: "middle",
});

const TableCell = styled("td", {
  name: "TableCell",
  slot: "cell",
})<React.ComponentProps<"td">>({
  color: "hsl(var(--color-foreground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  padding: "calc(var(--spacing-unit) * 4)",
  textAlign: "left",
  verticalAlign: "middle",
});

const Table = React.forwardRef<HTMLTableElement, React.ComponentPropsWithoutRef<"table">>(
  (props, ref) => {
    return <TableRoot ref={ref} {...props} />;
  }
);
Table.displayName = "Table";

const TablePagination = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
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
    onPreviousPage: () => void;
    onNextPage: () => void;
  }
>(
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
      onNextPage,
      /**
       * A function that handles navigating to the previous page.
       * This function should handle retrieving data for the previous page.
       */
      onPreviousPage,
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
    },
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
          <span>{from}</span>
          <MinusIcon />
          <span>
            {to} {translations.of} {count} {translations.results}
          </span>
        </Stack>
        <Stack alignItems="center" gap={2}>
          <span>
            {pageIndex + 1} {translations.of} {Math.max(pageCount, 1)} {translations.pages}
          </span>
          <Button variant="ghost" onClick={onPreviousPage} disabled={!canPreviousPage}>
            {translations.prev}
          </Button>
          <Button variant="ghost" onClick={onNextPage} disabled={!canNextPage}>
            {translations.next}
          </Button>
        </Stack>
      </div>
    );
  }
);
TablePagination.displayName = "TablePagination";

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TablePagination,
  TableRow,
};
