import { Plus } from "lucide-react";

import { CONTACT_EMAIL } from "@/lib/config";
import { FAQ } from "@/lib/content";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading id="faq-title" align="left" eyebrow={FAQ.eyebrow} title={FAQ.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 text-slate-600">
              Still have a question?{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary-600 hover:text-primary-800 decoration-secondary-500 font-semibold underline decoration-2 underline-offset-4"
              >
                Email our team
              </a>
              .
            </p>
          </Reveal>
        </div>

        {/* Native details/summary: keyboard and screen reader support for free */}
        <Reveal delay={0.1} className="divide-y overflow-hidden rounded-2xl border bg-white">
          {FAQ.items.map((item, index) => (
            <details key={item.question} name="faq" open={index === 0} className="group">
              <summary className="text-primary-900 flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold transition-colors hover:bg-slate-50 sm:px-8 sm:py-6 [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="group-open:bg-secondary-500 group-open:text-primary-900 text-primary-600 grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 transition-[background-color,color,transform] duration-300 group-open:rotate-45">
                  <Plus className="size-4" strokeWidth={2.5} aria-hidden />
                </span>
              </summary>
              <p className="px-6 pt-3 pb-6 leading-relaxed text-slate-600 sm:px-8">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
