import { ArrowRight, Check, LineChart } from "lucide-react";

import { WHY_PHILAD } from "@/lib/content";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function WhyPhiladSection() {
  const { feature } = WHY_PHILAD;

  return (
    <section
      id="why-philad"
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            id="why-title"
            align="left"
            eyebrow={WHY_PHILAD.eyebrow}
            title={WHY_PHILAD.title}
            body={WHY_PHILAD.body}
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {WHY_PHILAD.points.map((point, index) => (
              <Reveal
                as="li"
                key={point}
                delay={index * 0.06}
                className="flex items-start gap-3 rounded-xl border bg-white p-5"
              >
                <span className="bg-secondary-500 text-primary-900 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                <span className="text-primary-900 leading-snug font-medium">{point}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="bg-primary-500 relative isolate overflow-hidden rounded-3xl p-8 text-white shadow-[0_40px_80px_-40px_rgb(13_23_38/0.6)] sm:p-12">
            <div
              aria-hidden
              className="bg-secondary-500/25 absolute -top-24 -right-24 -z-10 size-72 rounded-full blur-3xl"
            />
            <LineChart
              aria-hidden
              className="text-primary-400/20 absolute -right-6 -bottom-6 -z-10 size-48"
              strokeWidth={1}
            />
            <p className="text-secondary-400 text-xs font-semibold tracking-[0.18em] uppercase">
              {feature.eyebrow}
            </p>
            <h3 className="font-display mt-4 text-3xl leading-tight font-semibold text-balance sm:text-4xl">
              {feature.title}
            </h3>
            <p className="text-primary-100/85 mt-5 text-lg leading-relaxed">{feature.body}</p>
            <p className="border-secondary-500 text-primary-50 mt-8 border-l-2 pl-4 italic">
              {feature.note}
            </p>
            <a
              href="#contact"
              className="text-primary-900 hover:bg-secondary-400 group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold transition-colors"
            >
              {feature.cta}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
