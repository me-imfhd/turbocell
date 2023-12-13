import type { Session } from "@turbocell/auth/server";

export type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};
