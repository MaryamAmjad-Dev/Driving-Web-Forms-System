import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export type ContactRecord = {
  id: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export async function getContactEnquiries(): Promise<ContactRecord[]> {
  await connectDB();

  const contacts = await Contact.find()
    .sort({ createdAt: -1 })
    .lean()
    .exec();

  return contacts.map((contact) => ({
    id: String(contact._id),
    name: contact.name,
    subject: contact.subject,
    email: contact.email,
    phone: contact.phone ?? "",
    message: contact.message,
    createdAt:
      contact.createdAt instanceof Date
        ? contact.createdAt.toISOString()
        : new Date(String(contact.createdAt)).toISOString(),
  }));
}
