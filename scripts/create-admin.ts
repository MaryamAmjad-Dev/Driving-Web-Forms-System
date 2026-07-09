import { existsSync, readFileSync } from "fs";
import { resolve } from "path";
import mongoose from "mongoose";
import { createAdminUser } from "@/lib/admin/admin-users";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/lib/models/admin";

const ADMIN_NAME = "Admin";
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "Admin@123456";

function loadEnvLocal(): void {
  const envPath = resolve(process.cwd(), ".env.local");

  if (!existsSync(envPath)) {
    return;
  }

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

async function main(): Promise<void> {
  loadEnvLocal();

  await connectDB();

  const existingAdmin = await Admin.findOne({
    email: ADMIN_EMAIL.toLowerCase(),
  }).lean();

  if (existingAdmin) {
    console.log(`Admin already exists for ${ADMIN_EMAIL}. No changes made.`);
    return;
  }

  const result = await createAdminUser(ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD);

  if (!result.ok) {
    throw new Error(result.message);
  }

  console.log("First admin created successfully.");
  console.log(`Email: ${ADMIN_EMAIL}`);
  console.log("You can now sign in at /admin/login");
}

main()
  .catch((error: unknown) => {
    const message =
      error instanceof Error ? error.message : "Failed to create admin user.";
    console.error(message);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
