"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BrandMark } from "@/components/brand-mark";
import { BookingsTable } from "@/components/admin/BookingsTable";
import { ContactsTable } from "@/components/admin/ContactsTable";
import { DashboardStats } from "@/components/admin/DashboardStats";
import type { BookingRecord } from "@/lib/admin/bookings";
import type { ContactRecord } from "@/lib/admin/contacts";

type AdminDashboardProps = {
  adminEmail: string;
  contacts: ContactRecord[];
  bookings: BookingRecord[];
};

export function AdminDashboard({
  adminEmail,
  contacts,
  bookings,
}: AdminDashboardProps) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    if (loggingOut) {
      return;
    }

    setLoggingOut(true);

    try {
      const response = await fetch("/api/admin/logout", {
        method: "POST",
      });

      let data: { ok?: boolean; message?: string } = {};

      try {
        data = (await response.json()) as { ok?: boolean; message?: string };
      } catch {
        data = {};
      }

      if (!response.ok) {
        toast.error(data.message || "Unable to log out.");
        return;
      }

      toast.success(data.message || "Logged out successfully.");
      router.push("/admin/login");
      router.refresh();
    } catch {
      toast.error("Unable to reach the server.");
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <div className="msa-container py-10 sm:py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <BrandMark sizePx={40} />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Admin dashboard
            </p>
            <h1 className="text-3xl font-normal text-foreground">Submissions</h1>
            <p className="mt-1 text-sm text-muted-foreground">Signed in as {adminEmail}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted/60 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loggingOut ? "Signing out…" : "Sign out"}
        </button>
      </div>

      <DashboardStats
        contactCount={contacts.length}
        bookingCount={bookings.length}
      />

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-normal text-foreground">Contact enquiries</h2>
        <ContactsTable contacts={contacts} />
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-normal text-foreground">Booking requests</h2>
        <BookingsTable bookings={bookings} />
      </section>
    </div>
  );
}
