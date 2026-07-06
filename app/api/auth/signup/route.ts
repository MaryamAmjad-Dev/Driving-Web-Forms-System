import { NextResponse } from "next/server";
import { createUser } from "@/lib/users/user-service";
import {
  parseUserSignupPayload,
  validateUserSignup,
} from "@/lib/users/signup";

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

    const payload = parseUserSignupPayload(body);

    if (!payload) {
      return NextResponse.json(
        { ok: false, message: "All fields are required." },
        { status: 400 },
      );
    }

    const validated = validateUserSignup(payload);

    if (!validated.ok) {
      return NextResponse.json(
        { ok: false, message: validated.message },
        { status: 400 },
      );
    }

    const result = await createUser(
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
    console.error("USER SIGNUP ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to create account. Please try again." },
      { status: 500 },
    );
  }
}
