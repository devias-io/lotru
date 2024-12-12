import * as React from "react";
import { css } from "@pigment-css/react";
import { PackageIcon } from "lucide-react";

import { Avatar } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Field, FieldLabel } from "@/src/components/ui/field";
import { Input } from "@/src/components/ui/input";

export default function Example(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div>
          <Avatar>
            <PackageIcon color="hsl(var(--color-mutedForeground))" size={16} />
          </Avatar>
        </div>
        <CardTitle>Create new project</CardTitle>
        <CardDescription>Got a new product to publish? Let&apos;s start with name.</CardDescription>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel>Project name</FieldLabel>
          <Input id="name" className={css({ maxWidth: "var(--size-full)" })} placeholder="Name" />
        </Field>
      </CardContent>
      <CardFooter
        className={css({
          display: "flex",
          justifyContent: "flex-end",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Button variant="outline">Cancel</Button>
        <Button>Create</Button>
      </CardFooter>
    </Card>
  );
}
