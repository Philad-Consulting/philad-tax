import { BookOpenCheck, Building2, Lightbulb, UserRound, type LucideIcon } from "lucide-react";

import { TRUST_POINTS, type TrustPointKey } from "@/lib/content";

import { Reveal } from "./reveal";

const ICONS: Record<TrustPointKey, LucideIcon> = {
  individual: UserRound,
  business: Building2,
  bookkeeping: BookOpenCheck,
  guidance: Lightbulb,
};

/**
 * A floating card that straddles the hero and the next section: the backdrop is navy down to the
 * card's middle and white below, so it sits half on each at every screen size.
 */
export function TrustStrip() {
  return (
    <div className="from-primary-900 relative z-10 bg-linear-to-b from-50% to-white to-50%">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-200 shadow-[0_24px_60px_-24px_rgb(13_23_38/0.35)] ring-1 ring-slate-200 lg:grid-cols-4">
          {TRUST_POINTS.map(({ key, label }) => {
            const Icon = ICONS[key];
            return (
              <li
                key={key}
                className="flex flex-col items-start gap-3 bg-white p-5 sm:flex-row sm:items-center sm:p-7"
              >
                <span className="bg-primary-50 text-primary-600 grid size-11 shrink-0 place-items-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-primary-900 leading-snug font-semibold">{label}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
