import { ArrowUpRight, FileText } from "lucide-react";

import { FILE_TAXES_URL } from "@/lib/config";
import { FILE_TAXES } from "@/lib/content";

import { Reveal } from "./reveal";

/** Closing call to action before the footer: file online */
export function FileTaxesSection() {
  return (
    <section aria-labelledby="file-taxes-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="from-secondary-400 via-secondary-500 to-secondary-600 relative isolate overflow-hidden rounded-3xl bg-linear-to-br px-6 py-12 shadow-[0_40px_80px_-40px_rgb(204_133_0/0.6)] sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
            {/* Soft shapes for depth */}
            <div
              aria-hidden
              className="absolute -top-24 -right-16 -z-10 size-72 rounded-full bg-white/20 blur-2xl"
            />
            <FileText
              aria-hidden
              strokeWidth={1}
              className="text-primary-900/10 absolute -bottom-10 -left-6 -z-10 size-56 -rotate-12"
            />

            <div className="max-w-2xl">
              <p className="text-primary-900/90 text-xs font-bold tracking-[0.18em] uppercase">
                {FILE_TAXES.eyebrow}
              </p>
              <h2
                id="file-taxes-title"
                className="font-display text-primary-900 mt-3 text-3xl leading-tight font-semibold text-balance sm:text-4xl"
              >
                {FILE_TAXES.title}
              </h2>
              <p className="text-primary-900/90 mt-4 text-lg leading-relaxed text-pretty">
                {FILE_TAXES.body}
              </p>
            </div>

            <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
              <a
                href={FILE_TAXES_URL}
                target="_blank"
                rel="noopener"
                className="bg-primary-900 hover:bg-primary-800 group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white shadow-lg transition-colors"
              >
                {FILE_TAXES.label}
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
              {/* <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="border-primary-900/20 text-primary-900 inline-flex items-center justify-center gap-2 rounded-full border bg-white/30 px-7 py-4 text-base font-semibold transition-colors hover:bg-white/50"
              >
                <Mail className="size-5" aria-hidden />
                Email our team
              </a> */}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
