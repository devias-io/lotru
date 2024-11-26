import * as React from "react";
import * as Primitives from "@base_ui/react/Field";
import { styled } from "@pigment-css/react";

const Field = Primitives.Root;

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
  lineHeight: "var(--lineHeight-normal)",
});

const FieldDescription = styled(Primitives.Description)({
  color: "hsl(var(--color-foregroundSubtle))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  marginBlockStart: "var(--spacing-unit)",
  "&[data-error]": {
    color: "hsl(var(--color-foregroundDanger))",
  },
});

const FieldError = styled(Primitives.Error)({
  color: "hsl(var(--color-foregroundDanger))",
  display: "block",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-normal)",
  marginBlockStart: "var(--spacing-unit)",
});

const FieldValidity = Primitives.Validity;

export { Field, FieldControl, FieldDescription, FieldError, FieldValidity, FieldLabel };
