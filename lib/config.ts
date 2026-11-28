/** Public site address, used for metadata, the sitemap and canonical links */
export const SITE_URL = "https://philadtax.com";

export const SITE_NAME = "Philad U.S. Tax Advisors";

/** Where the U.S. practice is based, shown in the footer */
export const ADDRESS = { locality: "Los Angeles", region: "CA" } as const;

/** The Philad API (philad-backend). Leads are posted to `${API_BASE_URL}/contact`. */
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");

/** The Canadian firm behind the U.S. practice */
export const CANADA_SITE_URL = "https://www.philadconsulting.com";

export const CONTACT_EMAIL = "info@philadtax.com";

/** Where clients start filing their return (Taxes To Go), from Deji */
export const FILE_TAXES_URL = "https://taxestogo.com/App/Download/73934";

/** California Tax Education Council, where visitors can verify a preparer's registration */
export const CTEC_URL = "https://www.ctec.org/";
