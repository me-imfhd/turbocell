import { Session } from "@turbocell/auth";

export type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};
