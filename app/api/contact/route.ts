import { NextResponse } from "next/server";
import mongoose from "mongoose";
import {
  CONTACT_MESSAGE_MIN_WORDS_ERROR,
  parseContactPayload,
  validateContact,
} from "@/lib/forms/contact";
import { hasMinWords } from "@/lib/forms/word-count";
import { USER_LOGIN_REQUIRED_MESSAGE } from "@/lib/auth/user-auth";
import { getUserSession } from "@/lib/auth/user-session";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const userSession = await getUserSession();

    if (!userSession) {
      return NextResponse.json(
        { ok: false, message: USER_LOGIN_REQUIRED_MESSAGE },
        { status: 401 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    const payload = parseContactPayload(body);

    if (!payload) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    if (!hasMinWords(payload.message)) {
      return NextResponse.json(
        { ok: false, message: CONTACT_MESSAGE_MIN_WORDS_ERROR },
        { status: 400 },
      );
    }

    const validated = validateContact(payload);

    if (!validated) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    await connectDB();
    console.log("MongoDB connected successfully");

    await Contact.create(validated);

    return NextResponse.json({ ok: true, message: "Contact enquiry saved." });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { ok: false, message: "Invalid form data." },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { ok: false, message: "Failed to save contact enquiry." },
      { status: 500 },
    );
  }
}
