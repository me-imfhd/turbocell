import { Session } from "next-auth";

export type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};
