import { NextResponse } from "next/server";
import { createAdminUser } from "@/lib/admin/admin-users";
import {
  parseAdminSignupPayload,
  validateAdminSignup,
} from "@/lib/admin/signup";

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

    const payload = parseAdminSignupPayload(body);

    if (!payload) {
      return NextResponse.json(
        { ok: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    const validated = validateAdminSignup(payload);

    if (!validated.ok) {
      return NextResponse.json(
        { ok: false, message: validated.message },
        { status: 400 },
      );
    }

    const result = await createAdminUser(
      validated.data.name,
      validated.data.email,
      validated.data.password,
    );

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, message: result.message },
        { status: 409 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Account created successfully. You can now sign in.",
    });
  } catch (error) {
    console.error("ADMIN SIGNUP ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to create account. Please try again." },
      { status: 500 },
    );
  }
}
