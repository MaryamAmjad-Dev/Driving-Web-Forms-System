import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import {
  BOOKING_EXPERIENCE_LEVELS,
  BOOKING_LESSON_TYPES,
  BOOKING_PREFERRED_DAYS,
  BOOKING_PREFERRED_TIMES,
  BOOKING_TRANSMISSIONS,
} from "@/lib/forms/booking";

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    lessonType: {
      type: String,
      required: true,
      enum: BOOKING_LESSON_TYPES,
    },
    transmission: {
      type: String,
      required: true,
      enum: BOOKING_TRANSMISSIONS,
    },
    preferredDay: {
      type: String,
      enum: BOOKING_PREFERRED_DAYS,
      default: "any",
    },
    preferredTime: {
      type: String,
      enum: BOOKING_PREFERRED_TIMES,
      default: "any",
    },
    experience: {
      type: String,
      enum: BOOKING_EXPERIENCE_LEVELS,
      default: "",
    },
    notes: { type: String, trim: true, default: "" },
  },
  { timestamps: true },
);

export type BookingDocument = InferSchemaType<typeof bookingSchema>;

const Booking: Model<BookingDocument> =
  mongoose.models.Booking ??
  mongoose.model<BookingDocument>("Booking", bookingSchema);

export default Booking;
