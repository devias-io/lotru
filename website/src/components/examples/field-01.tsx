"use client";

import * as React from "react";
import { css } from "@pigment-css/react";

import { Field, FieldControl, FieldDescription, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function FieldExample(): React.JSX.Element {
  return (
    <Field className={css({ maxWidth: "var(--size-sm)", width: "var(--size-full)" })}>
      <FieldLabel>Name</FieldLabel>
      <FieldControl render={<Input />} />
      <FieldDescription>We will use this name to personalize your experience.</FieldDescription>
    </Field>
  );
}
