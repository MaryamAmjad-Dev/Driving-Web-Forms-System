import { NextResponse } from "next/server";
import { authenticateUser } from "@/lib/users/user-service";
import {
  USER_SESSION_COOKIE,
  createUserSessionToken,
  getUserSessionCookieOptions,
} from "@/lib/auth/user-auth";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, message: "Email and password are required." },
        { status: 400 },
      );
    }

    const data = body as Record<string, unknown>;
    const email = String(data.email ?? "").trim();
    const password = String(data.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { ok: false, message: "Email and password are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const user = await authenticateUser(email, password);

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Invalid email or password." },
        { status: 401 },
      );
    }

    const token = await createUserSessionToken(user.email, user.name);
    const response = NextResponse.json({
      ok: true,
      message: "Login successful.",
      user: { name: user.name, email: user.email },
    });

    response.cookies.set(USER_SESSION_COOKIE, token, getUserSessionCookieOptions());

    return response;
  } catch (error) {
    console.error("USER LOGIN ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to sign in. Please try again." },
      { status: 500 },
    );
  }
}
