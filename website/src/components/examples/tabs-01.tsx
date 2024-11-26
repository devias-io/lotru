import * as React from "react";
import { css } from "@pigment-css/react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { Text } from "@/src/components/ui/text";

export default function TabsExample(): React.JSX.Element {
  return (
    <Tabs
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 4)",
      })}
    >
      <TabsList>
        <TabsTrigger value="1">General</TabsTrigger>
        <TabsTrigger value="2">Shipping</TabsTrigger>
        <TabsTrigger value="3">Payment</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <Text>
          At ACME, we're dedicated to providing you with an exceptional shopping experience. Our wide selection of
          products caters to your every need.
        </Text>
      </TabsContent>
      <TabsContent value="2">
        <Text>
          Shipping is a crucial part of our service, designed to ensure your products reach you quickly and securely.
        </Text>
      </TabsContent>
      <TabsContent value="3">
        <Text>Our payment process is designed to make your shopping experience smooth and secure.</Text>
      </TabsContent>
    </Tabs>
  );
}
