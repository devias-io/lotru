import * as React from "react";
import { Field as Primitive } from "@base-ui-components/react/field";
import { styled } from "@pigment-css/react";

const Field = styled(Primitive.Root, {
  name: "Field",
  slot: "root",
})<React.ComponentProps<typeof Primitive.Root>>({
  display: "grid",
  gap: "calc(var(--spacing-unit) * 2)",
});

const FieldLabel = styled(Primitive.Label, {
  name: "FieldLabel",
  slot: "label",
})<React.ComponentProps<typeof Primitive.Label>>({
  display: "block",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  lineHeight: "var(--lineHeight-none)",
});

const FieldControl = Primitive.Control;

const FieldDescription = styled(Primitive.Description, {
  name: "FieldDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitive.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  display: "block",
  fontSize: "var(--fontSize-sm)",
  marginBlock: 0,
});

const FieldError = styled(Primitive.Error, {
  name: "FieldError",
  slot: "error",
})<React.ComponentProps<typeof Primitive.Error>>({
  color: "hsl(var(--color-danger))",
  display: "block",
  fontSize: "var(--fontSize-sm)",
  marginBlock: 0,
});

const FieldValidity = Primitive.Validity;

export { Field, FieldControl, FieldDescription, FieldError, FieldLabel, FieldValidity };
