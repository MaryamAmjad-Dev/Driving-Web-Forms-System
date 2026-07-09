import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Signup",
};

export default async function AdminSignupPage() {
  redirect("/admin/login");
}
