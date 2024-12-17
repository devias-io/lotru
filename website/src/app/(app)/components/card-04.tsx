import * as React from "react";
import { css } from "@pigment-css/react";
import { MailIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Select } from "@/src/components/ui/select";
import { Separator } from "@/src/components/ui/separator";
import { Stack } from "@/src/components/ui/stack";
import { Text } from "@/src/components/ui/text";

const members = [
  {
    avatar: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    name: "Claire Truman",
    email: "claire.truman@domain.com",
    role: "owner",
  },
  {
    avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?&w=128&h=128&dpr=2&q=80",
    name: "Sanchez Marlet",
    email: "sanchez.marlet@domain.com",
    role: "member",
  },
] as const;

export default function Example(): React.JSX.Element {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite team member</CardTitle>
        <CardDescription>Everyone invited can access this project</CardDescription>
      </CardHeader>
      <CardContent>
        <Stack gap={4}>
          <Stack alignItems="center" direction="row" gap={2}>
            <div className={css({ flexGrow: 1, position: "relative" })}>
              <Input
                className={css({
                  maxWidth: "var(--size-full)",
                  paddingInlineStart: "calc(var(--spacing-unit) * 8)",
                })}
                name="email"
                placeholder="Email"
              />
              <MailIcon
                className={css({
                  color: "hsl(var(--color-mutedForeground))",
                  insetBlockStart: "calc(var(--spacing-unit) * 2.5)",
                  insetInlineStart: "calc(var(--spacing-unit) * 2)",
                  pointerEvents: "none",
                  position: "absolute",
                })}
                size={16}
              />
            </div>
            <Button>Send Invite</Button>
          </Stack>
          <Separator />
          <Stack gap={3}>
            <Text
              className={css({ color: "hsl(var(--color-mutedForeground))" })}
              fontSize="sm"
              fontWeight="medium"
            >
              Project members
            </Text>
            <Stack gap={3}>
              {members.map((member) => (
                <Stack
                  key={member.name}
                  alignItems="center"
                  direction="row"
                  gap={4}
                  flexWrap="wrap"
                >
                  <Stack
                    alignItems="center"
                    className={css({ flexGrow: 1 })}
                    direction="row"
                    gap={2}
                  >
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                    </Avatar>
                    <div>
                      <Text fontSize="sm" fontWeight="medium" lineHeight="none">
                        {member.name}
                      </Text>
                      <Text
                        className={css({ color: "hsl(var(--color-mutedForeground))" })}
                        fontSize="sm"
                      >
                        {member.email}
                      </Text>
                    </div>
                  </Stack>
                  <Select className={css({ width: "120px" })} defaultValue={member.role} size="sm">
                    <option value="owner">Owner</option>
                    <option value="member">Member</option>
                  </Select>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
