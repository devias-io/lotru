import * as React from "react";
import { css } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function CardExample(): React.JSX.Element {
  return (
    <Card className={css({ width: "350px" })}>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input placeholder="Name of your project" />
        </Field>
      </CardContent>
      <CardFooter className={css({ display: "flex", justifyContent: "space-between" })}>
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
