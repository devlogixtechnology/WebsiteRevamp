import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type IconCardProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  variant?: "card" | "row";
  active?: boolean;
  className?: string;
};

export default function IconCard({
  icon,
  title,
  description,
  href,
  linkLabel,
  variant = "card",
  active = false,
  className = "",
}: IconCardProps) {
  if (variant === "row") {
    return (
      <div className={`flex items-start gap-4 ${className}`}>
        {icon ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal [&>svg]:h-5 [&>svg]:w-5">
            {icon}
          </span>
        ) : null}

        <div className="pt-1">
          <h3 className="text-sm font-bold text-slate-900 sm:text-base">{title}</h3>
          {description ? (
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-brand-teal/30 hover:shadow-card-hover sm:p-6 ${className}`}
    >
      {active ? (
        <span
          aria-hidden
          className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full bg-brand-teal"
        />
      ) : null}

      {icon ? (
        <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal sm:mb-5 sm:h-11 sm:w-11 [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
      ) : null}

      <h3 className="text-lg font-bold leading-snug text-slate-900 md:text-xl">{title}</h3>

      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
      ) : null}

      {href && linkLabel ? (
        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
        >
          {linkLabel}
          <ArrowRight
            aria-hidden
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      ) : null}
    </div>
  );
}
