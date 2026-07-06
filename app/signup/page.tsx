import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { SignupForm } from "@/components/auth/SignupForm";
import { getPublicUser } from "@/lib/auth/user-session";
import { defaultLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Sign up",
  robots: { index: false, follow: false },
};

export default async function SignupPage() {
  const user = await getPublicUser();

  if (user) {
    redirect(`/${defaultLocale}`);
  }

  return (
    <AuthPageShell
      title="Create your account"
      subtitle="Register to submit contact and booking requests."
      footer={
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <SignupForm />
    </AuthPageShell>
  );
}
