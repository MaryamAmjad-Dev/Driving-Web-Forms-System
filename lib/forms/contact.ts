export const CONTACT_SUBJECT_VALUES = [
  "book-lesson",
  "price-inquiry",
  "availability",
  "other",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECT_VALUES)[number];

export type ValidatedContactPayload = {
  name: string;
  subject: ContactSubject;
  email: string;
  phone: string;
  message: string;
};

export type ContactPayload = {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

function isContactSubject(value: string): value is ContactSubject {
  return (CONTACT_SUBJECT_VALUES as readonly string[]).includes(value);
}

export function parseContactPayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const data = body as Record<string, unknown>;

  return {
    name: String(data.name ?? "").trim(),
    subject: String(data.subject ?? "").trim(),
    email: String(data.email ?? "").trim(),
    phone: String(data.phone ?? "").trim(),
    message: String(data.message ?? "").trim(),
  };
}

export function validateContact(
  payload: ContactPayload,
): ValidatedContactPayload | null {
  if (payload.name.length < 2) return null;
  if (!isContactSubject(payload.subject)) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return null;
  if (payload.message.length < 10) return null;

  return {
    name: payload.name,
    subject: payload.subject,
    email: payload.email,
    phone: payload.phone,
    message: payload.message,
  };
}
