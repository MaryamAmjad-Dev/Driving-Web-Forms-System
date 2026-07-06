export const USER_SESSION_COOKIE = "user_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

export type UserSessionPayload = {
  email: string;
  name: string;
  exp: number;
};

function getSessionSecret(): string {
  const secret = process.env.USER_SESSION_SECRET;

  if (!secret) {
    throw new Error("USER_SESSION_SECRET must be set for user sessions.");
  }

  return secret;
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}

function encodeBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeBase64Url(value: string): string {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return new TextDecoder().decode(bytes);
}

function arrayBufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function signPayload(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSessionSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(payload),
  );

  return arrayBufferToBase64Url(signature);
}

export async function createUserSessionToken(
  email: string,
  name: string,
): Promise<string> {
  const payload: UserSessionPayload = {
    email,
    name,
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
  };

  const encodedPayload = encodeBase64Url(JSON.stringify(payload));
  const signature = await signPayload(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export async function verifyUserSessionToken(
  token: string,
): Promise<UserSessionPayload | null> {
  try {
    const [encodedPayload, signature] = token.split(".");

    if (!encodedPayload || !signature) {
      return null;
    }

    const expectedSignature = await signPayload(encodedPayload);

    if (!safeEqual(signature, expectedSignature)) {
      return null;
    }

    const payload = JSON.parse(decodeBase64Url(encodedPayload)) as UserSessionPayload;

    if (
      typeof payload.email !== "string" ||
      typeof payload.name !== "string" ||
      typeof payload.exp !== "number" ||
      payload.exp < Math.floor(Date.now() / 1000)
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function getUserSessionCookieOptions(maxAge = SESSION_MAX_AGE_SECONDS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge,
  };
}

export function isUserAuthPath(pathname: string): boolean {
  return pathname === "/login" || pathname === "/signup";
}

export const USER_LOGIN_REQUIRED_MESSAGE = "Please login to continue";
