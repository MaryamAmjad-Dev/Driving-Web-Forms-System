import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { getAdminSession } from "@/lib/auth/admin-session";
import { getBookingRequests } from "@/lib/admin/bookings";
import { getContactEnquiries } from "@/lib/admin/contacts";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  if (!session) {
    redirect("/admin/login");
  }

  const [contacts, bookings] = await Promise.all([
    getContactEnquiries(),
    getBookingRequests(),
  ]);

  return (
    <AdminDashboard
      adminEmail={session.email}
      contacts={contacts}
      bookings={bookings}
    />
  );
}
