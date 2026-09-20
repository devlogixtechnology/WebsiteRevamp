export type NumberedCardProps = {
  number: string;
  title: string;
  description?: string;
  className?: string;
};

export default function NumberedCard({
  number,
  title,
  description,
  className = "",
}: NumberedCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:border-brand-teal/30 hover:shadow-card-hover sm:p-6 ${className}`}
    >
      <div
        aria-hidden
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal/10 text-base font-bold text-brand-teal-dark"
      >
        {number}
      </div>

      <h3 className="text-lg font-bold leading-snug text-slate-900 md:text-xl">{title}</h3>

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500">{description}</p>
      )}
    </div>
  );
}
