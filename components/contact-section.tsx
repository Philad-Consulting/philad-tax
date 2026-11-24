import { Globe, Lock, Mail } from "lucide-react";

import { CONTACT_EMAIL, SITE_URL } from "@/lib/config";
import { CONTACT } from "@/lib/content";

import { ContactForm } from "./contact-form";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const siteHost = new URL(SITE_URL).host;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-primary-900 relative isolate overflow-hidden py-24 sm:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="bg-secondary-500/15 absolute -bottom-40 -left-32 size-[32rem] rounded-full blur-3xl" />
        <div className="bg-primary-600/30 absolute -top-40 right-0 size-[36rem] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          <SectionHeading
            id="contact-title"
            align="left"
            tone="dark"
            eyebrow={CONTACT.eyebrow}
            title={CONTACT.title}
            body={CONTACT.body}
          />

          <Reveal delay={0.1} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-7">
            <h3 className="font-display text-xl font-semibold text-white">{CONTACT.cardTitle}</h3>
            <p className="text-primary-100/80 mt-3 leading-relaxed">{CONTACT.cardBody}</p>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <dt className="bg-secondary-500/15 text-secondary-400 grid size-10 place-items-center rounded-lg">
                  <Mail className="size-5" aria-hidden />
                  <span className="sr-only">Email</span>
                </dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="hover:text-secondary-300 font-semibold break-all text-white transition-colors"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="bg-secondary-500/15 text-secondary-400 grid size-10 place-items-center rounded-lg">
                  <Globe className="size-5" aria-hidden />
                  <span className="sr-only">Website</span>
                </dt>
                <dd className="font-semibold text-white">{siteHost}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.15} className="mt-6 ml-4 flex items-start gap-3 text-sm">
            <Lock className="text-secondary-400 mt-0.5 size-4 shrink-0" aria-hidden />
            <p className="text-primary-100/70 leading-relaxed">{CONTACT.privacy}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
            <h3 className="font-display text-primary-900 text-2xl font-semibold">
              {CONTACT.formTitle}
            </h3>
            <p className="mt-2 text-slate-600">
              Share a few details and we&apos;ll reply with the next step.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
