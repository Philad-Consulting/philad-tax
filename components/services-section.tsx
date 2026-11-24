import {
  ArrowUpRight,
  BookOpenCheck,
  Building,
  Building2,
  Handshake,
  ShieldCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

import { SERVICES, SERVICES_INTRO, type ServiceKey } from "@/lib/content";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const ICONS: Record<ServiceKey, LucideIcon> = {
  individual: UserRound,
  "s-corp": Building2,
  "c-corp": Building,
  partnership: Handshake,
  bookkeeping: BookOpenCheck,
  advisory: ShieldCheck,
};

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading id="services-title" {...SERVICES_INTRO} />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.key];
            return (
              <Reveal as="li" key={service.key} delay={(index % 3) * 0.08} className="flex">
                <a
                  href="#contact"
                  aria-label={`${service.title}: request a consultation`}
                  className="group hover:border-primary-200 relative flex w-full flex-col overflow-hidden rounded-2xl border bg-white p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgb(29_53_87/0.35)]"
                >
                  <span
                    aria-hidden
                    className="from-secondary-500 to-secondary-300 absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <div className="flex items-start justify-between">
                    <span className="bg-primary-50 text-primary-600 group-hover:bg-primary-500 grid size-12 place-items-center rounded-xl transition-colors group-hover:text-white">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    <span className="font-display text-sm font-semibold text-slate-400 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-primary-900 mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{service.body}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Covers">
                      {service.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-primary-700 rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <ArrowUpRight
                      className="group-hover:text-secondary-600 size-5 shrink-0 text-slate-300 transition-[color,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
