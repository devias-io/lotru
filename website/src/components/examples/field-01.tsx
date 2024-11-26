"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldLabel,
  Field,
  FieldValidity,
} from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function FieldExample(): React.JSX.Element {
  return (
    <Field
      className={css({ maxWidth: "350px", width: "var(--size-full)" })}
      validate={(value) => (value === "admin" ? "Name not allowed" : null)}
    >
      <FieldLabel>Name</FieldLabel>
      <FieldControl required pattern="[a-zA-Z0-9]+">
        <Input />
      </FieldControl>
      <FieldValidity>
        {({ validity, value }) => {
          if (validity.valueMissing || validity.patternMismatch || value === "admin") {
            return null;
          }

          return <FieldDescription>Your name will be visible on your profile.</FieldDescription>;
        }}
      </FieldValidity>
      <FieldError show="customError" />
      <FieldError show="valueMissing" />
      <FieldError show="patternMismatch">Only alphanumeric characters are allowed (a-z, A-Z, 0-9).</FieldError>
    </Field>
  );
}
