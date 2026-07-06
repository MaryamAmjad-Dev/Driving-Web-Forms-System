import type { BookingRecord } from "@/lib/admin/bookings";
import { formatAdminDate, formatLabel } from "@/lib/admin/format";

type BookingsTableProps = {
  bookings: BookingRecord[];
};

export function BookingsTable({ bookings }: BookingsTableProps) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center">
        <p className="text-sm font-medium text-foreground">No booking requests yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          New submissions from the booking form will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border bg-muted/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Lesson</th>
              <th className="px-4 py-3 font-semibold">Transmission</th>
              <th className="px-4 py-3 font-semibold">Day</th>
              <th className="px-4 py-3 font-semibold">Time</th>
              <th className="px-4 py-3 font-semibold">Experience</th>
              <th className="min-w-64 px-4 py-3 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {bookings.map((booking) => (
              <tr key={booking.id} className="align-top">
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {formatAdminDate(booking.createdAt)}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">{booking.name}</td>
                <td className="px-4 py-3 text-foreground">{booking.phone}</td>
                <td className="px-4 py-3">
                  <a
                    href={`mailto:${booking.email}`}
                    className="text-foreground underline-offset-2 hover:underline"
                  >
                    {booking.email}
                  </a>
                </td>
                <td className="px-4 py-3 text-foreground">
                  {formatLabel(booking.lessonType)}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {formatLabel(booking.transmission)}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {formatLabel(booking.preferredDay)}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {formatLabel(booking.preferredTime)}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {booking.experience ? formatLabel(booking.experience) : "—"}
                </td>
                <td className="px-4 py-3 text-foreground">
                  {booking.notes || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
