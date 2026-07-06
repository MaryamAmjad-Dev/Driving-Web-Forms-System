"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import type { PublicUser } from "@/lib/auth/user-session";

type UserAuthNavProps = {
  loginLabel: string;
  signupLabel: string;
  logoutLabel: string;
  user: PublicUser | null;
};

const linkClassName =
  "inline-flex min-h-9 shrink-0 items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:text-sm";

export function UserAuthNav({
  loginLabel,
  signupLabel,
  logoutLabel,
  user,
}: UserAuthNavProps) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    if (loggingOut) {
      return;
    }

    setLoggingOut(true);

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      let data: { ok?: boolean; message?: string } = {};

      try {
        data = (await response.json()) as { ok?: boolean; message?: string };
      } catch {
        data = {};
      }

      if (!response.ok) {
        toast.error(data.message || "Unable to log out.");
        return;
      }

      toast.success(data.message || "Logged out successfully.");
      router.refresh();
    } catch {
      toast.error("Unable to reach the server.");
    } finally {
      setLoggingOut(false);
    }
  }

  if (user) {
    return (
      <div className="hidden items-center gap-1.5 sm:flex">
        <span
          className="max-w-28 truncate px-2 text-xs font-medium text-foreground sm:max-w-36 sm:text-sm"
          title={user.name}
        >
          {user.name}
        </span>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className={`${linkClassName} disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {loggingOut ? "…" : logoutLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="hidden items-center gap-1 sm:flex">
      <Link href="/login" className={linkClassName}>
        {loginLabel}
      </Link>
      <Link
        href="/signup"
        className="inline-flex min-h-9 shrink-0 items-center justify-center rounded-full border border-border bg-card px-3 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-muted sm:text-sm"
      >
        {signupLabel}
      </Link>
    </div>
  );
}

export function UserAuthNavMobile({
  loginLabel,
  signupLabel,
  logoutLabel,
  user,
  onNavigate,
}: UserAuthNavProps & { onNavigate?: () => void }) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    if (loggingOut) {
      return;
    }

    setLoggingOut(true);

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });

      if (!response.ok) {
        toast.error("Unable to log out.");
        return;
      }

      toast.success("Logged out successfully.");
      onNavigate?.();
      router.refresh();
    } catch {
      toast.error("Unable to reach the server.");
    } finally {
      setLoggingOut(false);
    }
  }

  if (user) {
    return (
      <div className="mt-3 border-t border-border pt-3">
        <p className="px-3 py-1 text-sm font-medium text-foreground">{user.name}</p>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="mt-1 w-full rounded-lg px-3 py-2 text-left text-base font-medium text-foreground hover:bg-muted disabled:opacity-60"
        >
          {loggingOut ? "Signing out…" : logoutLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="mt-3 flex flex-col gap-1 border-t border-border pt-3">
      <Link
        href="/login"
        className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
        onClick={onNavigate}
      >
        {loginLabel}
      </Link>
      <Link
        href="/signup"
        className="rounded-lg bg-primary px-3 py-2 text-center text-base font-semibold text-black"
        onClick={onNavigate}
      >
        {signupLabel}
      </Link>
    </div>
  );
}
