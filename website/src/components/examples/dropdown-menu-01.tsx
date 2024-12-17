import * as React from "react";
import { css } from "@pigment-css/react";
import {
  ChevronRightIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export default function DropdownMenuExample(): React.JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Open</Button>} />
      <DropdownMenuPortal>
        <DropdownMenuPositioner align="center" side="bottom" sideOffset={4}>
          <DropdownMenuContent className={css({ width: "14rem" })}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UserIcon />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <UsersIcon />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <DropdownMenuItem>
                      <UserPlusIcon />
                      <span>Invite users</span>
                      <ChevronRightIcon className={css({ marginInlineStart: "auto" })} />
                    </DropdownMenuItem>
                  }
                />
                <DropdownMenuPositioner align="start" side="right">
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <MailIcon />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquareIcon />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircleIcon />
                      <span>More</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenuPositioner>
              </DropdownMenu>
              <DropdownMenuItem disabled>
                <PlusCircleIcon />
                <span>New team</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <LogOutIcon />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
