import * as React from "react";
import { styled } from "@pigment-css/react";

const Card = styled("div", {
  name: "CardRoot",
  slot: "root",
})({
  background: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-sm)",
});

const CardHeader = styled("div", {
  name: "CardHeader",
  slot: "header",
})({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "var(--spacing-unit)",
  padding: "calc(var(--spacing-unit) * 6)",
});

const CardContent = styled("div", {
  name: "CardContent",
  slot: "content",
})({
  boxSizing: "border-box",
  paddingBlockEnd: "calc(var(--spacing-unit) * 4)",
  paddingInline: "calc(var(--spacing-unit) * 6)",
});

const CardFooter = styled("div", {
  name: "CardFooter",
  slot: "footer",
})({
  boxSizing: "border-box",
  paddingBlockEnd: "calc(var(--spacing-unit) * 4)",
  paddingInline: "calc(var(--spacing-unit) * 6)",
});

const CardTitle = styled("div", {
  name: "CardTitle",
  slot: "title",
})({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-2xl)",
  lineHeight: "var(--lineHeight-none)",
  fontWeight: "var(--fontWeight-semibold)",
});

const CardDescription = styled("div", {
  name: "CardDescription",
  slot: "description",
})({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
});

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
