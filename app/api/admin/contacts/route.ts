import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/admin-session";
import { getContactEnquiries } from "@/lib/admin/contacts";

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { ok: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const contacts = await getContactEnquiries();

    return NextResponse.json({ ok: true, data: contacts });
  } catch (error) {
    console.error("ADMIN CONTACTS API ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to load contact enquiries." },
      { status: 500 },
    );
  }
}
