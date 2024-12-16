import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function DialogExample(): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Edit Profile</Button>} />
      <DialogOverlay />
      <DialogContent className={css({ maxWidth: "425px" })}>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div
          className={css({
            display: "grid",
            gap: "calc(var(--spacing-unit) * 3)",
            paddingBlock: "calc(var(--spacing-unit) * 3)",
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
        <DialogFooter>
          <DialogClose render={<Button>Save Changes</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
