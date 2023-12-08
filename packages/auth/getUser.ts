import { auth } from "./auth-options";

export async function getUser() {
  try {
    const session = await auth();
    const user = session?.user;
    return user;
  } catch (err) {
    console.error(err);
    throw new Error((err as Error).message ?? "Error, please try again");
  }
}
