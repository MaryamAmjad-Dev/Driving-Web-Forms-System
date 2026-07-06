import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getSessionCookieOptions,
} from "@/lib/auth/admin-auth";

export async function POST() {
  try {
    const response = NextResponse.json({
      ok: true,
      message: "Logged out successfully.",
    });

    response.cookies.set(ADMIN_SESSION_COOKIE, "", {
      ...getSessionCookieOptions(0),
      maxAge: 0,
    });

    return response;
  } catch (error) {
    console.error("ADMIN LOGOUT ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to log out." },
      { status: 500 },
    );
  }
}
