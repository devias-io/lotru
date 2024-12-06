import * as React from "react";
import * as Primitives from "@base_ui/react/Field";
import { styled } from "@pigment-css/react";

const Field = styled(Primitives.Root, {
  name: "Field",
  slot: "root",
})<React.ComponentProps<typeof Primitives.Root>>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

const FieldControl = ({
  children,
  ...props
}: Omit<Primitives.ControlProps, "render"> & {
  children: Primitives.ControlProps["render"];
}): React.JSX.Element => <Primitives.Control render={children} {...props} />;
FieldControl.displayName = "FieldControl";

const FieldLabel = styled(Primitives.Label, {
  name: "FieldLabel",
  slot: "label",
})<React.ComponentProps<typeof Primitives.Label>>({
  color: "hsl(var(--color-foreground))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  lineHeight: "var(--lineHeight-none)",
});

const FieldDescription = styled(Primitives.Description, {
  name: "FieldDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitives.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  marginBlock: 0,
});

const FieldError = styled(Primitives.Error, {
  name: "FieldError",
  slot: "error",
})<React.ComponentProps<typeof Primitives.Error>>({
  color: "hsl(var(--color-danger))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  marginBlock: 0,
});

const FieldValidity = Primitives.Validity;

export { Field, FieldControl, FieldDescription, FieldError, FieldValidity, FieldLabel };
