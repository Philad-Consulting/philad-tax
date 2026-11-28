import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { legalMetadata } from "@/lib/legal-metadata";
import { ACCESSIBILITY } from "@/lib/legal";

export const metadata: Metadata = legalMetadata(ACCESSIBILITY);

export default function AccessibilityPage() {
  return <LegalPage doc={ACCESSIBILITY} />;
}
