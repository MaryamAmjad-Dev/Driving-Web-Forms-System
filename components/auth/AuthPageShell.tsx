import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

type AuthPageShellProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

export function AuthPageShell({
  title,
  subtitle,
  children,
  footer,
}: AuthPageShellProps) {
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <Link href="/en">
              <BrandMark sizePx={48} />
            </Link>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Customer account
          </p>
          <h1 className="mt-2 text-3xl font-normal text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="msa-card-lift rounded-2xl border border-border/80 bg-card/90 p-6 shadow-sm backdrop-blur-sm">
          {children}
        </div>

        {footer}
      </div>
    </div>
  );
}
