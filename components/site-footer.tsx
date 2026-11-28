import Link from "next/link";
import { ArrowUp, MapPin, Scale } from "lucide-react";

import { ADDRESS, CANADA_SITE_URL, CONTACT_EMAIL, CTEC_URL, SITE_NAME } from "@/lib/config";
import { FOOTER, NAV_LINKS, SERVICES } from "@/lib/content";
import { LEGAL_DOCS } from "@/lib/legal";

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
            <address className="mt-4 flex items-start gap-2 not-italic">
              <MapPin className="text-secondary-400 mt-0.5 size-4 shrink-0" aria-hidden />
              <span>
                <span className="block font-semibold text-white">{SITE_NAME}</span>
                {ADDRESS.locality}, {ADDRESS.region}
              </span>
            </address>
          </div>

          <nav aria-label="Services">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.key}>
                  <Link href="/#services" className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
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
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#contact" className="transition-colors hover:text-white">
                  Contact us
                </Link>
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

        <div className="mt-8 border-t border-white/10 pt-8 text-sm">
          <p className="max-w-4xl leading-relaxed text-white/70">
            {FOOTER.ctec}{" "}
            <a
              href={CTEC_URL}
              target="_blank"
              rel="noopener"
              className="hover:text-secondary-400 font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors"
            >
              {FOOTER.ctecLink}
            </a>
            .
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="sm:mr-auto sm:ml-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_DOCS.map((doc) => (
                <li key={doc.path}>
                  <Link href={doc.path} className="font-medium transition-colors hover:text-white">
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
