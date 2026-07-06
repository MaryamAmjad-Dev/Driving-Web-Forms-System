import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export type BookingRecord = {
  id: string;
  name: string;
  phone: string;
  email: string;
  lessonType: string;
  transmission: string;
  preferredDay: string;
  preferredTime: string;
  experience: string;
  notes: string;
  createdAt: string;
};

export async function getBookingRequests(): Promise<BookingRecord[]> {
  await connectDB();

  const bookings = await Booking.find()
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  return bookings.map((booking) => ({
    id: String(booking._id),
    name: booking.name,
    phone: booking.phone,
    email: booking.email,
    lessonType: booking.lessonType,
    transmission: booking.transmission,
    preferredDay: booking.preferredDay ?? "any",
    preferredTime: booking.preferredTime ?? "any",
    experience: booking.experience ?? "",
    notes: booking.notes ?? "",
    createdAt:
      booking.createdAt instanceof Date
        ? booking.createdAt.toISOString()
        : new Date(String(booking.createdAt)).toISOString(),
  }));
}
