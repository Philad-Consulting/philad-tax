import { PROCESS } from "@/lib/content";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="process-title" eyebrow={PROCESS.eyebrow} title={PROCESS.title} />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* The line joining the steps: across on desktop, down on mobile */}
          <span
            aria-hidden
            className="via-secondary-400 absolute top-7 right-[16.66%] left-[16.66%] hidden h-px bg-linear-to-r from-transparent to-transparent md:block"
          />
          <span
            aria-hidden
            className="via-secondary-400 absolute top-7 bottom-7 left-7 w-px bg-linear-to-b from-transparent to-transparent md:hidden"
          />
          {PROCESS.steps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.12}
              className="relative flex gap-6 md:flex-col md:items-center md:text-center"
            >
              <span className="bg-primary-900 text-secondary-400 font-display ring-secondary-500/30 relative grid size-14 shrink-0 place-items-center rounded-full text-lg font-semibold shadow-lg ring-4 ring-offset-4 ring-offset-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-primary-900 text-xl font-semibold md:mt-4">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs leading-relaxed text-slate-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
