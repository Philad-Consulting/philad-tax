import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";

import { MotionProvider } from "@/components/motion-provider";
import { HERO, SERVICES } from "@/lib/content";
import { ADDRESS, CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/config";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const title = `${SITE_NAME} | U.S. Tax Filing & Bookkeeping`;
const description =
  "U.S. federal and state tax preparation, bookkeeping and advisory for individuals, LLCs, S corporations, C corporations and partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  keywords: [
    "U.S. tax preparation",
    "IRS tax filing",
    "1040",
    "1040-NR",
    "S-Corp tax return",
    "C-Corp tax return",
    "LLC tax filing",
    "partnership tax return",
    "bookkeeping services",
    "IRS notice help",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d1726",
};

/** Search engines read this to show the firm's services and contact details */
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE_NAME,
  url: SITE_URL,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    addressCountry: "US",
  },
  description: HERO.body,
  areaServed: { "@type": "Country", name: "United States" },
  parentOrganization: { "@type": "Organization", name: "Philad Consulting Inc." },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service.title, description: service.body },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
