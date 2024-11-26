import * as React from "react";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

export default function DialogExample(): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open dialog</Button>} />
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Subscription montly usage</DialogTitle>
        <DialogDescription>You have used 10GB of your 100GB montly quota.</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
