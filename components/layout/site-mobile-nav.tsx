"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { mobileNavLabels } from "@/lib/i18n/ui-labels";
import { ROUTES } from "@/lib/constants";
import { isRouteActive, localeHref, type NavLink } from "@/lib/i18n/routing";
import type { PublicUser } from "@/lib/auth/user-session";
import { UserAuthNavMobile } from "@/components/layout/user-auth-nav";

type MobileNavProps = {
  locale: Locale;
  dict: Dictionary;
  links: NavLink[];
  user: PublicUser | null;
};

export function MobileNav({ locale, dict, links, user }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const labels = mobileNavLabels(locale);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-lg font-semibold shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? labels.close : labels.open}
      >
        {open ? "×" : "≡"}
      </button>
      {open ? (
        <div
          id="mobile-nav-panel"
          className="fixed left-4 right-4 top-[4.75rem] z-50 mx-auto max-h-[min(70vh,28rem)] max-w-site overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background/95 px-4 py-4 shadow-lg backdrop-blur-md sm:left-6 sm:right-6 sm:top-[5.25rem]"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile primary">
            {links.map((link) => {
              const active = isRouteActive(pathname, locale, link.path);
              const stateClass = active
                ? "bg-primary/10 text-primary font-semibold"
                : "text-foreground hover:bg-muted";
              return (
                <Link
                  key={link.path}
                  href={localeHref(locale, link.path)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-base font-medium ${stateClass}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={localeHref(locale, ROUTES.booking)}
              className="mt-2 rounded-lg bg-primary px-3 py-2 text-center text-base font-semibold text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              {dict.nav.book}
            </Link>
            <UserAuthNavMobile
              loginLabel={dict.nav.login}
              signupLabel={dict.nav.signup}
              logoutLabel={dict.nav.logout}
              user={user}
              onNavigate={() => setOpen(false)}
            />
          </nav>
        </div>
      ) : null}
    </div>
  );
}
