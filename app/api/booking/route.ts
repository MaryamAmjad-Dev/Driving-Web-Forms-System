import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  BOOKING_NOTES_MIN_WORDS_ERROR,
  parseBookingPayload,
  validateBooking,
} from "@/lib/forms/booking";
import { hasMinWords } from "@/lib/forms/word-count";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

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

    const payload = parseBookingPayload(body);

    if (!payload) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    if (!hasMinWords(payload.notes)) {
      return NextResponse.json(
        { ok: false, message: BOOKING_NOTES_MIN_WORDS_ERROR },
        { status: 400 },
      );
    }

    const validated = validateBooking(payload);

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
    console.error("BOOKING API ERROR:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { ok: false, message: "Failed to save booking request." },
      { status: 500 },
    );
  }
}
