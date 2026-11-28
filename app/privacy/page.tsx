import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/legal-metadata";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = legalMetadata(PRIVACY_POLICY);

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />;
}
