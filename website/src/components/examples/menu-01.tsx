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
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuPositioner,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/src/components/ui/menu";

export default function MenuExample(): React.JSX.Element {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Open</Button>} />
      <MenuPositioner side="bottom" alignment="center">
        <MenuContent className={css({ width: "14rem" })}>
          <MenuLabel>My Account</MenuLabel>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <UserIcon />
              <span>Profile</span>
              <MenuShortcut>⇧⌘P</MenuShortcut>
            </MenuItem>
            <MenuItem>
              <SettingsIcon />
              <span>Settings</span>
              <MenuShortcut>⌘S</MenuShortcut>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <UsersIcon />
              <span>Team</span>
            </MenuItem>
            <Menu>
              <MenuTrigger
                render={
                  <MenuItem>
                    <UserPlusIcon />
                    <span>Invite users</span>
                    <ChevronRightIcon className={css({ marginInlineStart: "auto" })} />
                  </MenuItem>
                }
              />
              <MenuPositioner side="right" alignment="start">
                <MenuContent>
                  <MenuItem>
                    <MailIcon />
                    <span>Email</span>
                  </MenuItem>
                  <MenuItem>
                    <MessageSquareIcon />
                    <span>Message</span>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <PlusCircleIcon />
                    <span>More</span>
                  </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </Menu>
            <MenuItem disabled>
              <PlusCircleIcon />
              <span>New team</span>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuGroup>
            <MenuItem>
              <LogOutIcon />
              <span>Log out</span>
              <MenuShortcut>⇧⌘Q</MenuShortcut>
            </MenuItem>
          </MenuGroup>
        </MenuContent>
      </MenuPositioner>
    </Menu>
  );
}
