import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/legal-metadata";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = legalMetadata(TERMS);

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
