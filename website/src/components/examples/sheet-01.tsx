import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function SheetExample(): React.JSX.Element {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open</Button>} />
      <SheetOverlay />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div
          className={css({
            display: "grid",
            gap: "calc(var(--spacing-unit) * 3)",
            paddingBlock: "calc(var(--spacing-unit) * 4)",
          })}
        >
          <Field
            className={css({
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
            })}
          >
            <FieldLabel className={css({ textAlign: "end" })}>Name</FieldLabel>
            <Input defaultValue="John Doe" />
          </Field>
          <Field
            className={css({
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
            })}
          >
            <FieldLabel className={css({ textAlign: "end" })}>Username</FieldLabel>
            <Input defaultValue="@john.doe" />
          </Field>
        </div>
        <SheetFooter>
          <Button>Save Changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
