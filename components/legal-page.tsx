import { CONTACT_EMAIL, SITE_NAME } from "@/lib/config";
import type { LegalDoc, LegalParagraph } from "@/lib/legal";
import { cn } from "@/lib/utils";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

/** Phrases in the policy text that become links */
const LINKS: Record<string, string> = {
  [CONTACT_EMAIL]: `mailto:${CONTACT_EMAIL}`,
  "Privacy Policy": "/privacy",
};
const LINK_PATTERN = new RegExp(
  `(${Object.keys(LINKS)
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function LinkedText({ text }: { text: string }) {
  return text.split(LINK_PATTERN).map((part, index) =>
    LINKS[part] ? (
      <a
        key={index}
        href={LINKS[part]}
        className="text-primary-600 hover:text-primary-800 decoration-secondary-500 font-semibold underline decoration-2 underline-offset-4"
      >
        {part}
      </a>
    ) : (
      part
    ),
  );
}

function Paragraph({ paragraph }: { paragraph: LegalParagraph }) {
  if (typeof paragraph === "string") {
    return (
      <p>
        <LinkedText text={paragraph} />
      </p>
    );
  }
  return (
    <p>
      <strong className="text-primary-900 font-semibold">{paragraph.lead}</strong>{" "}
      <LinkedText text={paragraph.text} />
    </p>
  );
}

/** A policy page: navy title band, an outline beside the text on wide screens, then the text */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const outline = doc.sections.flatMap((section) =>
    section.heading ? [{ id: slugify(section.heading), heading: section.heading }] : [],
  );

  return (
    <>
      <a
        href="#main"
        className="bg-secondary-500 text-primary-900 sr-only z-100 rounded-md px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <div
          id="top"
          className="bg-primary-900 relative isolate overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-16"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="bg-secondary-500/15 absolute -top-40 right-[-10%] size-120 rounded-full blur-3xl" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-secondary-400 text-xs font-semibold tracking-[0.18em] uppercase">
              {SITE_NAME}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {doc.title}
            </h1>
            {doc.effectiveDate && (
              <p className="text-primary-100/80 mt-4">Effective date {doc.effectiveDate}</p>
            )}
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:px-8">
          {outline.length > 1 && (
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="sticky top-28">
                <h2 className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
                  On this page
                </h2>
                <ul className="mt-4 space-y-1 border-l">
                  {outline.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-primary-900 hover:border-secondary-500 -ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm text-slate-600 transition-colors"
                      >
                        {item.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          )}

          <article className={cn("max-w-3xl", outline.length < 2 && "lg:col-span-2")}>
            {doc.sections.map((section, index) => (
              <section
                key={section.heading ?? index}
                aria-labelledby={section.heading ? slugify(section.heading) : undefined}
                className="border-b py-8 first:pt-0 last:border-b-0"
              >
                {section.heading && (
                  <h2
                    id={slugify(section.heading)}
                    className="font-display text-primary-900 text-2xl font-semibold tracking-tight"
                  >
                    {section.heading}
                  </h2>
                )}
                <div
                  className={cn(
                    "space-y-4 text-lg leading-relaxed text-slate-600",
                    section.heading && "mt-4",
                  )}
                >
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <Paragraph key={paragraphIndex} paragraph={paragraph} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
