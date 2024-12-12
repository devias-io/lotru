import * as React from "react";

import { Mail } from "@/src/app/examples/mail/components/mail";
import { mails } from "@/src/app/examples/mail/data";

export default function Page(): React.JSX.Element {
  return <Mail mails={mails} />;
}
