"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { Field, FieldControl, FieldError, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function FieldExample(): React.JSX.Element {
  return (
    <Field className={css({ maxWidth: "var(--size-sm)", width: "var(--size-full)" })} invalid>
      <FieldLabel>Name</FieldLabel>
      <FieldControl render={<Input />} />
      <FieldError forceShow>Only alphanumeric characters are allowed (a-z, A-Z, 0-9).</FieldError>
    </Field>
  );
}
