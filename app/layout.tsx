import type { Metadata } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { ThemeScript } from "@/components/theme-script";
import { ToastProvider } from "@/components/toast-provider";
import { LocalBusinessJsonLd } from "@/components/local-business-json-ld";
import { defaultLocale } from "@/lib/i18n/config";
import { defaultMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get("x-next-locale") ?? defaultLocale;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${geistSans.variable} ${bebasNeue.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <ThemeScript />
        <LocalBusinessJsonLd />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: "MSA Driving School Peterborough",
    template: "%s | MSA Driving School Peterborough",
  },
  description:
    "DVSA-approved driving lessons in Peterborough. Manual and automatic, intensive courses, test preparation, Pass Plus.",
};
