export {
  CONTACT_SUBJECT_VALUES,
  type ContactSubject,
  parseContactPayload,
  validateContact,
} from "@/lib/forms/contact";

export type ContactFormState =
  | { ok: true }
  | { ok: false; message: string }
  | null;
