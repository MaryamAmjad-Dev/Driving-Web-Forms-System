import { NextResponse } from "next/server";
import {
  parseBookingPayload,
  validateBooking,
} from "@/lib/forms/booking";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseBookingPayload(body);
    const validated = payload ? validateBooking(payload) : null;

    if (!validated) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    await connectDB();

    await Booking.create({
      name: validated.name,
      phone: validated.phone,
      email: validated.email,
      lessonType: validated.lessonType,
      transmission: validated.transmission,
      preferredDay: validated.preferredDay,
      preferredTime: validated.preferredTime,
      ...(validated.experience ? { experience: validated.experience } : {}),
      notes: validated.notes,
    });

    return NextResponse.json({ ok: true, message: "Booking request saved." });
  } catch (error) {
    console.error("[api/booking]", error);
    return NextResponse.json(
      { ok: false, message: "Failed to save booking request." },
      { status: 500 },
    );
  }
}
