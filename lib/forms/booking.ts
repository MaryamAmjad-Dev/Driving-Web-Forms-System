export const BOOKING_LESSON_TYPES = [
  "beginner",
  "intensive",
  "refresher",
  "testPrep",
  "passPlus",
] as const;

export const BOOKING_TRANSMISSIONS = ["manual", "automatic"] as const;

export const BOOKING_PREFERRED_DAYS = [
  "any",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const BOOKING_PREFERRED_TIMES = [
  "any",
  "morning",
  "afternoon",
  "evening",
] as const;

export const BOOKING_EXPERIENCE_LEVELS = [
  "complete-beginner",
  "some-experience",
  "test-date",
  "licence-refresher",
] as const;

export type ValidatedBookingPayload = {
  name: string;
  phone: string;
  email: string;
  lessonType: (typeof BOOKING_LESSON_TYPES)[number];
  transmission: (typeof BOOKING_TRANSMISSIONS)[number];
  preferredDay: (typeof BOOKING_PREFERRED_DAYS)[number];
  preferredTime: (typeof BOOKING_PREFERRED_TIMES)[number];
  experience: (typeof BOOKING_EXPERIENCE_LEVELS)[number] | "";
  notes: string;
};

export type BookingPayload = {
  name: string;
  phone: string;
  email: string;
  lessonType: string;
  transmission: string;
  preferredDay: string;
  preferredTime: string;
  experience: string;
  notes: string;
};

function includes<T extends string>(
  allowed: readonly T[],
  value: string,
): value is T {
  return (allowed as readonly string[]).includes(value);
}

export function parseBookingPayload(body: unknown): BookingPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  return {
    name: String(data.name ?? "").trim(),
    phone: String(data.phone ?? "").trim(),
    email: String(data.email ?? "").trim(),
    lessonType: String(data.lessonType ?? "").trim(),
    transmission: String(data.transmission ?? "").trim(),
    preferredDay: String(data.preferredDay ?? "any").trim(),
    preferredTime: String(data.preferredTime ?? "any").trim(),
    experience: String(data.experience ?? "").trim(),
    notes: String(data.notes ?? "").trim(),
  };
}

export function validateBooking(
  payload: BookingPayload,
): ValidatedBookingPayload | null {
  if (payload.name.length < 2) return null;
  if (payload.phone.length < 7) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;
  if (!includes(BOOKING_LESSON_TYPES, payload.lessonType)) return null;
  if (!includes(BOOKING_TRANSMISSIONS, payload.transmission)) return null;

  const preferredDay = payload.preferredDay || "any";
  const preferredTime = payload.preferredTime || "any";

  if (!includes(BOOKING_PREFERRED_DAYS, preferredDay)) return null;
  if (!includes(BOOKING_PREFERRED_TIMES, preferredTime)) return null;
  if (
    payload.experience &&
    !includes(BOOKING_EXPERIENCE_LEVELS, payload.experience)
  )
    return null;

  return {
    name: payload.name,
    phone: payload.phone,
    email: payload.email,
    lessonType: payload.lessonType,
    transmission: payload.transmission,
    preferredDay,
    preferredTime,
    experience: payload.experience as ValidatedBookingPayload["experience"],
    notes: payload.notes,
  };
}
