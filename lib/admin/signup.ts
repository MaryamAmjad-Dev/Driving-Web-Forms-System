export type AdminSignupPayload = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type AdminSignupValidationResult =
  | { ok: true; data: { name: string; email: string; password: string } }
  | { ok: false; message: string };

export function parseAdminSignupPayload(
  body: unknown,
): AdminSignupPayload | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const data = body as Record<string, unknown>;

  return {
    name: String(data.name ?? "").trim(),
    email: String(data.email ?? "").trim(),
    password: String(data.password ?? ""),
    confirmPassword: String(data.confirmPassword ?? ""),
  };
}

export function validateAdminSignup(
  payload: AdminSignupPayload,
): AdminSignupValidationResult {
  if (payload.name.length < 2) {
    return { ok: false, message: "Name must be at least 2 characters." };
  }

  if (!payload.email) {
    return { ok: false, message: "Email is required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (payload.password.length < 8) {
    return { ok: false, message: "Password must be at least 8 characters." };
  }

  if (payload.password !== payload.confirmPassword) {
    return { ok: false, message: "Passwords do not match." };
  }

  return {
    ok: true,
    data: {
      name: payload.name,
      email: payload.email.toLowerCase(),
      password: payload.password,
    },
  };
}
