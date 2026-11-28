import type { Metadata } from "next";

import { SITE_NAME } from "./config";
import type { LegalDoc } from "./legal";

/** Each policy page has its own title and canonical link, rather than the home page's */
export function legalMetadata(doc: LegalDoc): Metadata {
  const title = `${doc.title} | ${SITE_NAME}`;
  return {
    title,
    description: doc.description,
    alternates: { canonical: doc.path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description: doc.description,
      url: doc.path,
    },
  };
}
