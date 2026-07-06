type DashboardStatsProps = {
  contactCount: number;
  bookingCount: number;
};

export function DashboardStats({
  contactCount,
  bookingCount,
}: DashboardStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Contact enquiries
        </p>
        <p className="mt-2 text-3xl font-normal text-foreground">{contactCount}</p>
      </div>

      <div className="rounded-2xl border border-border/80 bg-card/90 p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          Booking requests
        </p>
        <p className="mt-2 text-3xl font-normal text-foreground">{bookingCount}</p>
      </div>
    </div>
  );
}
