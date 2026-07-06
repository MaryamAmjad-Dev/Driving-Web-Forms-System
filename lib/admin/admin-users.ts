import bcrypt from "bcrypt";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/lib/models/admin";

const SALT_ROUNDS = 12;

export type AuthenticatedAdmin = {
  name: string;
  email: string;
};

export async function createAdminUser(
  name: string,
  email: string,
  password: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  await connectDB();

  const normalizedEmail = email.trim().toLowerCase();
  const existingAdmin = await Admin.findOne({ email: normalizedEmail }).lean();

  if (existingAdmin) {
    return {
      ok: false,
      message: "An account with this email already exists.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await Admin.create({
    name,
    email: normalizedEmail,
    password: hashedPassword,
  });

  return { ok: true };
}

export async function authenticateAdmin(
  email: string,
  password: string,
): Promise<AuthenticatedAdmin | null> {
  await connectDB();

  const admin = await Admin.findOne({ email: email.trim().toLowerCase() });

  if (!admin) {
    return null;
  }

  const passwordMatches = await bcrypt.compare(password, admin.password);

  if (!passwordMatches) {
    return null;
  }

  return {
    name: admin.name,
    email: admin.email,
  };
}
