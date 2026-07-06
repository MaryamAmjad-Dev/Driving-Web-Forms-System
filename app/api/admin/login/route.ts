import { NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/admin/admin-users";
import {
  ADMIN_SESSION_COOKIE,
  createSessionToken,
  getSessionCookieOptions,
} from "@/lib/auth/admin-auth";

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

    const admin = await authenticateAdmin(email, password);

    if (!admin) {
      return NextResponse.json(
        { ok: false, message: "Invalid email or password." },
        { status: 401 },
      );
    }

    const token = await createSessionToken(admin.email);
    const response = NextResponse.json({
      ok: true,
      message: "Login successful.",
    });

    response.cookies.set(ADMIN_SESSION_COOKIE, token, getSessionCookieOptions());

    return response;
  } catch (error) {
    console.error("ADMIN LOGIN ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to sign in. Please try again." },
      { status: 500 },
    );
  }
}
