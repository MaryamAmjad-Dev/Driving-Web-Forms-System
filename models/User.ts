import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true, collection: "users" },
);

export type UserDocument = InferSchemaType<typeof userSchema>;

const User: Model<UserDocument> =
  mongoose.models.User ?? mongoose.model<UserDocument>("User", userSchema);

export default User;
