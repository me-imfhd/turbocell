import type { Session } from "@repo/auth/server";

export type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};
