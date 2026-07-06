import type { Metadata } from "next";
import { SectionReveal } from "@/components/section-reveal";
import { FaqSection } from "@/components/faq-section";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactPageBackdrop } from "@/components/contact/contact-page-backdrop";
import { MapEmbed } from "@/components/map-embed";
import { PageHeader } from "@/components/ui/page-header";
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
    path: ROUTES.contact,
    title: dict.contactPage.title,
    description: dict.contactPage.subtitle,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  if (!locale) return null;

  const dict = await getDictionary(locale);
  const page = dict.contactPage;
  const map = dict.home.map;
  const user = await getPublicUser();

  return (
    <div className="msa-contact-page border-b border-border">
      <ContactPageBackdrop />
      <div className="relative z-[1]">
        <div className="msa-container py-24 sm:py-16 md:py-20">
          <PageHeader title={page.title} subtitle={page.subtitle} />

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:mt-14 lg:grid-cols-2 lg:gap-8">
            <SectionReveal variant="left">
              <ContactDetails
                phoneLabel={page.phoneLabel}
                emailLabel={page.emailLabel}
                whatsappLabel={page.whatsappLabel}
                whatsappCta={page.whatsappCta}
                openingHoursTitle={page.openingHours.title}
                openingHoursTodayLabel={page.openingHours.todayLabel}
                openingHoursRows={page.openingHours.rows}
              />
            </SectionReveal>

            <SectionReveal variant="right" delay={80}>
              <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-foreground">
                  {page.formTitle}
                </h2>
                <div className="mt-5">
                  <ContactForm dict={dict} isAuthenticated={!!user} />
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            <FaqSection
              title={page.faq.title}
              subtitle={page.faq.subtitle}
              items={page.faq.items}
            />
          </div>

          <div className="mx-auto mt-14 max-w-6xl border-t border-border/60 pt-14">
            <MapEmbed
              title={map.title}
              subtitle={map.subtitle}
              note={map.note}
              iframeTitle={map.iframeTitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
