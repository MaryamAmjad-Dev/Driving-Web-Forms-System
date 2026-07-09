import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";
import {
  ADMIN_SESSION_COOKIE,
  isAdminApiPath,
  isAdminGuestPath,
  isAdminPath,
  isAdminProtectedPath,
  isPublicAdminApiPath,
  verifySessionToken,
} from "@/lib/auth/admin-auth";
import { isUserAuthApiPath, isUserAuthPath } from "@/lib/auth/user-auth";

function pathnameHasLocale(pathname: string): boolean {
  return locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
}

function getLocaleFromPath(pathname: string): string | null {
  const segment = pathname.split("/")[1];
  return segment && isLocale(segment) ? segment : null;
}

async function getAdminSessionFromRequest(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }

  return verifySessionToken(token);
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    if (isUserAuthApiPath(pathname)) {
      return NextResponse.next();
    }

    if (isAdminApiPath(pathname) && !isPublicAdminApiPath(pathname)) {
      const session = await getAdminSessionFromRequest(request);

      if (!session) {
        return NextResponse.json(
          { ok: false, message: "Unauthorized." },
          { status: 401 },
        );
      }
    }

    return NextResponse.next();
  }

  if (isAdminPath(pathname)) {
    if (pathname === "/admin/signup") {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }

    const session = await getAdminSessionFromRequest(request);

    if (isAdminProtectedPath(pathname) && !session) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      return NextResponse.redirect(loginUrl);
    }

    if (isAdminGuestPath(pathname) && session) {
      const dashboardUrl = request.nextUrl.clone();
      dashboardUrl.pathname = "/admin/dashboard";
      return NextResponse.redirect(dashboardUrl);
    }

    return NextResponse.next();
  }

  if (isUserAuthPath(pathname)) {
    return NextResponse.next();
  }

  if (pathnameHasLocale(pathname)) {
    const locale = getLocaleFromPath(pathname)!;
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-next-locale", locale);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|apple-touch-icon.png|manifest.webmanifest|robots.txt|sitemap.xml).*)",
  ],
};
