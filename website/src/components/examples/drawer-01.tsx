import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import { Text } from "@/src/components/ui/text";

export default function DrawerExample(): React.JSX.Element {
  return (
    <Drawer>
      <DrawerTrigger render={<Button>Open drawer</Button>} />
      <DrawerOverlay />
      <DrawerContent side="right">
        <DrawerHeader>
          <DrawerTitle>Edit Variant</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Text>This is where you edit the variant's details</Text>
        </DrawerBody>
        <DrawerFooter>
          <Button>Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
