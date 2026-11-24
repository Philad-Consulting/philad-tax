import { ArrowUp, Scale } from "lucide-react";

import { CANADA_SITE_URL, CONTACT_EMAIL, SITE_NAME } from "@/lib/config";
import { FOOTER, NAV_LINKS, SERVICES } from "@/lib/content";

import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Brand tone="light" />
            <p className="mt-5 max-w-sm leading-relaxed">{FOOTER.tagline}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-secondary-400 mt-5 inline-block font-semibold text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.key}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="transition-colors hover:text-white">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href={CANADA_SITE_URL}
                  target="_blank"
                  rel="noopener"
                  className="transition-colors hover:text-white"
                >
                  Philad Consulting (Canada)
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 sm:items-center sm:p-6">
          <span className="bg-secondary-500/10 text-secondary-400 grid size-10 shrink-0 place-items-center rounded-full">
            <Scale className="size-5" aria-hidden />
          </span>
          <p className="text-sm leading-relaxed text-white/60">
            <span className="font-semibold text-white">Please note: </span>
            {FOOTER.disclaimer}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
