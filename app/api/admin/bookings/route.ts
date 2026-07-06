import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/admin-session";
import { getBookingRequests } from "@/lib/admin/bookings";

export async function GET() {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { ok: false, message: "Unauthorized." },
        { status: 401 },
      );
    }

    const bookings = await getBookingRequests();

    return NextResponse.json({ ok: true, data: bookings });
  } catch (error) {
    console.error("ADMIN BOOKINGS API ERROR:", error);
    return NextResponse.json(
      { ok: false, message: "Failed to load booking requests." },
      { status: 500 },
    );
  }
}
