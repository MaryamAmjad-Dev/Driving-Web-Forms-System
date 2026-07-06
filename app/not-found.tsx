import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { NotFoundPage } from "@/components/not-found/not-found-page";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { resolveRequestLocale } from "@/lib/i18n/resolve-request-locale";
import { getPublicUser } from "@/lib/auth/user-session";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default async function RootNotFound() {
  const locale = await resolveRequestLocale();
  const dict = await getDictionary(locale);
  const user = await getPublicUser();

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader locale={locale} dict={dict} user={user} />
      <main className="flex-1">
        <NotFoundPage locale={locale} labels={dict.notFoundPage} />
      </main>
      <SiteFooter locale={locale} dict={dict} />
    </div>
  );
}
