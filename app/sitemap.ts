import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/config";
import { LEGAL_DOCS } from "@/lib/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...LEGAL_DOCS.map((doc) => ({
      url: `${SITE_URL}${doc.path}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
