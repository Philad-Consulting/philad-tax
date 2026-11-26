import { ArrowRight, ArrowUpRight, Check, FileText, Landmark } from "lucide-react";

import { FILE_TAXES_URL } from "@/lib/config";
import { FILE_TAXES, HERO } from "@/lib/content";

import { Reveal } from "./reveal";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="bg-primary-900 relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24"
    >
      {/* Backdrop: a faint grid that fades out, with gold and blue glows. The bottom edge stays
          plain navy so it runs on seamlessly behind the trust strip. */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)] bg-size-[56px_56px]" />
        <div className="bg-secondary-500/20 absolute -top-40 right-[-10%] size-144 rounded-full blur-3xl" />
        <div className="bg-primary-600/35 absolute top-1/4 left-[-15%] size-136 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div>
          <Reveal>
            <p className="text-secondary-300 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium backdrop-blur">
              <span className="bg-secondary-500 size-1.5 rounded-full" aria-hidden />
              {HERO.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              id="hero-title"
              className="font-display mt-7 text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-6xl lg:text-[4.25rem]"
            >
              {HERO.title}{" "}
              <span className="from-secondary-300 via-secondary-500 to-secondary-400 bg-linear-to-r bg-clip-text text-transparent italic">
                {HERO.highlight}
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-primary-100/80 mt-7 max-w-xl text-lg leading-relaxed text-pretty sm:text-xl">
              {HERO.body}
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="bg-secondary-500 text-primary-900 hover:bg-secondary-400 shadow-secondary-500/25 group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold shadow-lg transition-colors"
            >
              Request a consultation
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Explore our services
            </a>
          </Reveal>
          <Reveal delay={0.3} className="mt-6 max-w-xl">
            <a
              href={FILE_TAXES_URL}
              target="_blank"
              rel="noopener"
              className="group hover:border-secondary-400/60 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10 sm:p-5"
            >
              <span className="bg-secondary-500 text-primary-900 grid size-12 shrink-0 place-items-center rounded-xl">
                <FileText className="size-6" aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block text-lg font-semibold text-white">{FILE_TAXES.label}</span>
                <span className="text-primary-100/70 block text-sm">{FILE_TAXES.note}</span>
              </span>
              <ArrowUpRight
                className="text-secondary-400 size-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div
            aria-hidden
            className="from-secondary-500/30 absolute -inset-px rounded-3xl bg-linear-to-br via-white/10 to-transparent"
          />
          <div className="bg-primary-800/70 relative rounded-3xl p-7 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl sm:p-9">
            <div className="flex items-center gap-3">
              <span className="bg-secondary-500/15 text-secondary-400 grid size-11 place-items-center rounded-xl">
                <Landmark className="size-5" aria-hidden />
              </span>
              <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                {HERO.panelTitle}
              </h2>
            </div>
            <ul className="mt-7 space-y-4">
              {HERO.panelItems.map((item) => (
                <li key={item} className="text-primary-50 flex items-start gap-3">
                  <span className="bg-accent-400/15 text-accent-400 mt-0.5 grid size-5 shrink-0 place-items-center rounded-full">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-primary-200 text-xs font-semibold tracking-[0.16em] uppercase">
                Forms we prepare
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {HERO.forms.map((form) => (
                  <li
                    key={form}
                    className="text-primary-50 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs"
                  >
                    {form}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
