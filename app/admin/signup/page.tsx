import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SignupForm } from "@/components/admin/SignupForm";
import { BrandMark } from "@/components/brand-mark";
import { getAdminSession } from "@/lib/auth/admin-session";

export const metadata: Metadata = {
  title: "Admin Signup",
};

export default async function AdminSignupPage() {
  const session = await getAdminSession();

  if (session) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <BrandMark sizePx={48} />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Admin
          </p>
          <h1 className="mt-2 text-3xl font-normal text-foreground">
            Create admin account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Register to access the submissions dashboard.
          </p>
        </div>

        <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
          <SignupForm />
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/admin/login"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
