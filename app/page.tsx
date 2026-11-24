import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";
import { WhyPhiladSection } from "@/components/why-philad-section";

export default function HomePage() {
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
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <WhyPhiladSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
