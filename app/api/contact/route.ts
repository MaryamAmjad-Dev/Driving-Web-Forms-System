import { NextResponse } from "next/server";
import {
  parseContactPayload,
  validateContact,
} from "@/lib/forms/contact";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseContactPayload(body);
    const validated = payload ? validateContact(payload) : null;

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
    return NextResponse.json(
      { ok: false, message: "Failed to save contact enquiry." },
      { status: 500 },
    );
  }
}
