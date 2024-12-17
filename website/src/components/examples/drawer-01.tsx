import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function DrawerExample(): React.JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline">Open</Button>} />
      <DrawerOverlay />
      <DrawerContent side="bottom">
        <div
          className={css({
            marginInline: "auto",
            maxWidth: "var(--size-sm)",
            width: "var(--size-full)",
          })}
        >
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>Make changes to your profile here.</DrawerDescription>
          </DrawerHeader>
          <div
            className={css({
              display: "grid",
              gap: "calc(var(--spacing-unit) * 3)",
              padding: "calc(var(--spacing-unit) * 4)",
            })}
          >
            <Field
              className={css({
                alignItems: "center",
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
              })}
            >
              <FieldLabel>Name</FieldLabel>
              <Input defaultValue="John Doe" />
            </Field>
            <Field
              className={css({
                alignItems: "center",
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
              })}
            >
              <FieldLabel>Username</FieldLabel>
              <Input defaultValue="@john.doe" />
            </Field>
          </div>
          <DrawerFooter>
            <Button>Save Changes</Button>
            <DrawerClose render={<Button variant="outline">Close</Button>} />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
