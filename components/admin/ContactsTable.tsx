import type { ContactRecord } from "@/lib/admin/contacts";
import { formatAdminDate, formatLabel } from "@/lib/admin/format";

type ContactsTableProps = {
  contacts: ContactRecord[];
};

export function ContactsTable({ contacts }: ContactsTableProps) {
  if (contacts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-card/50 px-6 py-12 text-center">
        <p className="text-sm font-medium text-foreground">No contact enquiries yet</p>
        <p className="mt-1 text-sm text-muted-foreground">
          New submissions from the contact form will appear here.
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
              <th className="px-4 py-3 font-semibold">Subject</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="min-w-64 px-4 py-3 font-semibold">Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {contacts.map((contact) => (
              <tr key={contact.id} className="align-top">
                <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                  {formatAdminDate(contact.createdAt)}
                </td>
                <td className="px-4 py-3 font-medium text-foreground">{contact.name}</td>
                <td className="px-4 py-3 text-foreground">
                  {formatLabel(contact.subject)}
                </td>
                <td className="px-4 py-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-foreground underline-offset-2 hover:underline"
                  >
                    {contact.email}
                  </a>
                </td>
                <td className="px-4 py-3 text-foreground">
                  {contact.phone || "—"}
                </td>
                <td className="px-4 py-3 text-foreground">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
