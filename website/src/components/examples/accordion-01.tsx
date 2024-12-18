import * as React from "react";
import { css } from "@pigment-css/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";

export default function AccordionExample(): React.JSX.Element {
  return (
    <Accordion className={css({ maxWidth: "450px", width: "var(--size-full)" })}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it responsive?</AccordionTrigger>
        <AccordionContent>Yes. It adapts seamlessly to different screen sizes.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize it?</AccordionTrigger>
        <AccordionContent>
          Absolutely. You can easily override the default styles to suit your design.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support interactivity?</AccordionTrigger>
        <AccordionContent>
          Yes. It includes built-in features for smooth user interaction.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
