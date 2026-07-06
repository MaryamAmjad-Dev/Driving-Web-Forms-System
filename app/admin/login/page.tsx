import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/LoginForm";
import { BrandMark } from "@/components/brand-mark";
import { getAdminSession } from "@/lib/auth/admin-session";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default async function AdminLoginPage() {
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
            Sign in to dashboard
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access contact enquiries and booking requests.
          </p>
        </div>

        <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
          <LoginForm />
        </div>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Need an account?{" "}
          <Link
            href="/admin/signup"
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
