import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";
import { CONTACT_SUBJECT_VALUES } from "@/lib/forms/contact";

const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    subject: {
      type: String,
      required: true,
      enum: CONTACT_SUBJECT_VALUES,
    },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, default: "" },
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export type ContactDocument = InferSchemaType<typeof contactSchema>;

const Contact: Model<ContactDocument> =
  mongoose.models.Contact ??
  mongoose.model<ContactDocument>("Contact", contactSchema);

export default Contact;
