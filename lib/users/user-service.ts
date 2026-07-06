import bcrypt from "bcrypt";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

const SALT_ROUNDS = 12;

export type AuthenticatedUser = {
  name: string;
  email: string;
};

export async function createUser(
  name: string,
  email: string,
  password: string,
): Promise<{ ok: true } | { ok: false; message: string }> {
  await connectDB();

  const normalizedEmail = email.trim().toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail }).lean();

  if (existingUser) {
    return {
      ok: false,
      message: "An account with this email already exists.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await User.create({
    name,
    email: normalizedEmail,
    password: hashedPassword,
  });

  return { ok: true };
}

export async function authenticateUser(
  email: string,
  password: string,
): Promise<AuthenticatedUser | null> {
  await connectDB();

  const user = await User.findOne({ email: email.trim().toLowerCase() });

  if (!user) {
    return null;
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    return null;
  }

  return {
    name: user.name,
    email: user.email,
  };
}
