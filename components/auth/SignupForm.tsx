"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const inputClassName =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring";

export function SignupForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const submittingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setPending(true);
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (!name || !email || !password || !confirmPassword) {
      const message = "All fields are required.";
      setErrorMessage(message);
      toast.error(message);
      submittingRef.current = false;
      setPending(false);
      return;
    }

    if (name.length < 2) {
      const message = "Name must be at least 2 characters.";
      setErrorMessage(message);
      toast.error(message);
      submittingRef.current = false;
      setPending(false);
      return;
    }

    if (password.length < 8) {
      const message = "Password must be at least 8 characters.";
      setErrorMessage(message);
      toast.error(message);
      submittingRef.current = false;
      setPending(false);
      return;
    }

    if (password !== confirmPassword) {
      const message = "Passwords do not match.";
      setErrorMessage(message);
      toast.error(message);
      submittingRef.current = false;
      setPending(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      let data: { ok?: boolean; message?: string } = {};

      try {
        data = (await response.json()) as { ok?: boolean; message?: string };
      } catch {
        data = {};
      }

      const message =
        typeof data.message === "string" && data.message.trim()
          ? data.message.trim()
          : "Unable to create account. Please try again.";

      if (!response.ok) {
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      toast.success(message || "Account created successfully.");
      router.push("/login");
      router.refresh();
    } catch {
      const message = "Unable to reach the server. Please try again.";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      submittingRef.current = false;
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-busy={pending}>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="user-name">
          Name
        </label>
        <input
          id="user-name"
          name="name"
          required
          autoComplete="name"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium"
          htmlFor="user-signup-email"
        >
          Email
        </label>
        <input
          id="user-signup-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium"
          htmlFor="user-signup-password"
        >
          Password
        </label>
        <input
          id="user-signup-password"
          name="password"
          type="password"
          required
          autoComplete="new-password"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium"
          htmlFor="user-confirm-password"
        >
          Confirm password
        </label>
        <input
          id="user-confirm-password"
          name="confirmPassword"
          type="password"
          required
          autoComplete="new-password"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      {errorMessage ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        aria-disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Creating account…" : "Create account"}
      </button>
    </form>
  );
}
