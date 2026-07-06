import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { OPEN_GRAPH_LOCALE } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { defaultMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/site";
import { getPublicUser } from "@/lib/auth/user-session";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = await getDictionary(locale);

  const canonical = `${siteUrl}/${locale}`;

  return {
    ...defaultMetadata,
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.defaultDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      locale: OPEN_GRAPH_LOCALE[locale],
      title: dict.meta.siteName,
      description: dict.meta.defaultDescription,
      url: canonical,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = await getDictionary(raw);
  const user = await getPublicUser();

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader locale={raw} dict={dict} user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={raw} dict={dict} />
      <FloatingWhatsapp
        label={dict.footer.floatingWhatsapp.label}
        tooltip={dict.footer.floatingWhatsapp.tooltip}
        message={dict.footer.floatingWhatsapp.message}
      />
    </div>
  );
}
