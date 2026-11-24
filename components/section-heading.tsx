import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "light",
  id,
  className,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Set on the heading so its section can be labelled by it */
  id?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
          tone === "dark" ? "text-secondary-400" : "text-secondary-700",
        )}
      >
        <span aria-hidden className="bg-secondary-500 h-px w-6" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-display mt-4 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-white" : "text-primary-900",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            tone === "dark" ? "text-primary-100/80" : "text-slate-600",
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
