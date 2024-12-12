import * as React from "react";
import { styled } from "@pigment-css/react";

const Card = styled("div", {
  name: "Card",
  slot: "root",
})<React.ComponentProps<"div">>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-sm)",
});

const CardHeader = styled("div", {
  name: "CardHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-unit)",
  padding: "calc(var(--spacing-unit) * 6)",
});

const CardContent = styled("div", {
  name: "CardContent",
  slot: "content",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  paddingBlockEnd: "calc(var(--spacing-unit) * 4)",
  paddingInline: "calc(var(--spacing-unit) * 6)",
});

const CardFooter = styled("div", {
  name: "CardFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  boxSizing: "border-box",
  paddingBlockEnd: "calc(var(--spacing-unit) * 4)",
  paddingInline: "calc(var(--spacing-unit) * 6)",
});

const CardTitle = styled("div", {
  name: "CardTitle",
  slot: "title",
})<React.ComponentProps<"div">>({
  fontSize: "var(--fontSize-xl)",
  lineHeight: "var(--lineHeight-none)",
  fontWeight: "var(--fontWeight-semibold)",
});

const CardDescription = styled("div", {
  name: "CardDescription",
  slot: "description",
})<React.ComponentProps<"div">>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
});

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
