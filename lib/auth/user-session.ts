import { cookies } from "next/headers";
import {
  USER_SESSION_COOKIE,
  verifyUserSessionToken,
  type UserSessionPayload,
} from "@/lib/auth/user-auth";

export async function getUserSession(): Promise<UserSessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(USER_SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return verifyUserSessionToken(token);
}

export type PublicUser = {
  name: string;
  email: string;
};

export async function getPublicUser(): Promise<PublicUser | null> {
  const session = await getUserSession();

  if (!session) {
    return null;
  }

  return {
    name: session.name,
    email: session.email,
  };
}
