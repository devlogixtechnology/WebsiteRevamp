import Image from "next/image";
import { LinkedinIcon } from "../ui/SocialIcons";

export type TeamCardProps = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  className?: string;
};

export default function TeamCard({
  name,
  role,
  image,
  linkedin,
  className = "",
}: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={`h-full overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:border-brand-teal/30 hover:shadow-card-hover ${className}`}
    >
      <div className="relative aspect-4/3 w-full bg-brand-teal/10">
        {image ? (
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center text-2xl font-semibold text-brand-teal-dark"
          >
            {initials}
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-900 sm:text-base">{name}</h3>

        <p className="mt-1 text-xs leading-relaxed text-slate-500">{role}</p>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            <LinkedinIcon className="h-3.5 w-3.5" />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
