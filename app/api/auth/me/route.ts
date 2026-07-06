import { NextResponse } from "next/server";
import { getPublicUser } from "@/lib/auth/user-session";

export async function GET() {
  try {
    const user = await getPublicUser();

    if (!user) {
      return NextResponse.json(
        { ok: false, message: "Not authenticated." },
        { status: 401 },
      );
    }

    return NextResponse.json({ ok: true, user });
  } catch (error) {
    console.error("USER ME ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Unable to load session." },
      { status: 500 },
    );
  }
}
