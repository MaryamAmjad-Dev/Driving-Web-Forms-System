import Link from "next/link";
import { Suspense } from "react";
import type { Metadata } from "next";
import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { LoginForm } from "@/components/auth/LoginForm";
import { getPublicUser } from "@/lib/auth/user-session";
import { defaultLocale } from "@/lib/i18n/config";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const user = await getPublicUser();

  if (user) {
    redirect(`/${defaultLocale}`);
  }

  return (
    <AuthPageShell
      title="Welcome back"
      subtitle="Sign in to submit contact and booking requests."
      footer={
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            Sign up
          </Link>
        </p>
      }
    >
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthPageShell>
  );
}
