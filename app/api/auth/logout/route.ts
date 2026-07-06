import { NextResponse } from "next/server";
import {
  USER_SESSION_COOKIE,
  getUserSessionCookieOptions,
} from "@/lib/auth/user-auth";

export async function POST() {
  try {
    const response = NextResponse.json({
      ok: true,
      message: "Logged out successfully.",
    });

    response.cookies.set(USER_SESSION_COOKIE, "", {
      ...getUserSessionCookieOptions(0),
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("USER LOGOUT ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to log out." },
      { status: 500 },
    );
  }
}
