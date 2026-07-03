export {
  BOOKING_LESSON_TYPES,
  BOOKING_TRANSMISSIONS,
  BOOKING_PREFERRED_DAYS,
  BOOKING_PREFERRED_TIMES,
  BOOKING_EXPERIENCE_LEVELS,
  parseBookingPayload,
  validateBooking,
} from "@/lib/forms/booking";

export type BookingFormState =
  | { ok: true }
  | { ok: false; message: string }
  | null;
