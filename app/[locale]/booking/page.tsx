import type { Metadata } from "next";
import { BookingPageClient } from "@/components/booking/booking-page-client";
import { ROUTES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata, resolveLocale } from "@/lib/seo/page-metadata";
import { getPublicUser } from "@/lib/auth/user-session";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = await resolveLocale(params);
  if (!locale) return {};
  const dict = await getDictionary(locale);

  return buildPageMetadata({
    localeParam: raw,
    path: ROUTES.booking,
    title: dict.bookingPage.title,
    description: dict.bookingPage.subtitle,
  });
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const user = await getPublicUser();

  return <BookingPageClient dict={dict} isAuthenticated={!!user} />;
}
