import * as React from "react";
import { css } from "@pigment-css/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/src/components/ui/table";

type Row = {
  id: string;
  displayId: number;
  customer: string;
  email: string;
  amount: number;
  currency: string;
};

const rows: Row[] = [
  {
    id: "order_6782",
    displayId: 86078,
    customer: "Jill Miller",
    email: "32690@gmail.com",
    amount: 493,
    currency: "USD",
  },
  {
    id: "order_46487",
    displayId: 42845,
    customer: "Sarah Garcia",
    email: "86379@gmail.com",
    amount: 113,
    currency: "USD",
  },
  {
    id: "order_8169",
    displayId: 39129,
    customer: "Josef Smith",
    email: "89383@gmail.com",
    amount: 43,
    currency: "USD",
  },
  {
    id: "order_67883",
    displayId: 5548,
    customer: "Elvis Jones",
    email: "52860@gmail.com",
    amount: 840,
    currency: "USD",
  },
  {
    id: "order_61121",
    displayId: 87668,
    customer: "Charles Rodriguez",
    email: "45675@gmail.com",
    amount: 304,
    currency: "USD",
  },
];

export default function TableExample(): JSX.Element {
  return (
    <Table className={css({ marginInline: "auto", maxWidth: "var(--size-3xl)" })}>
      <TableCaption>A list of recent orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>#</TableHeaderCell>
          <TableHeaderCell>Customer</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell className={css({ textAlign: "right" })}>Amount</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((order) => {
          return (
            <TableRow key={order.id}>
              <TableCell>{order.displayId}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.email}</TableCell>
              <TableCell className={css({ textAlign: "right" })}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: order.currency,
                }).format(order.amount)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className={css({ textAlign: "right" })}>$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
