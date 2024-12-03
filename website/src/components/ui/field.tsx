import * as React from "react";
import * as Primitives from "@base_ui/react/Field";
import { styled } from "@pigment-css/react";

const Field = styled(Primitives.Root)({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

interface FieldControlProps extends Primitives.ControlProps {
  children: React.ReactElement;
}

const FieldControl = ({ children, ...props }: FieldControlProps): React.JSX.Element => {
  return <Primitives.Control render={children} {...props} />;
};
FieldControl.displayName = "FieldControl";

const FieldLabel = styled(Primitives.Label)({
  color: "hsl(var(--color-foreground))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  fontWeight: "var(--fontWeight-medium)",
  lineHeight: "var(--lineHeight-none)",
});

const FieldDescription = styled(Primitives.Description)({
  color: "hsl(var(--color-mutedForeground))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  margin: 0,
});

const FieldError = styled(Primitives.Error)({
  color: "hsl(var(--color-danger))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  margin: 0,
});

const FieldValidity = Primitives.Validity;

export { Field, FieldControl, FieldDescription, FieldError, FieldValidity, FieldLabel };
