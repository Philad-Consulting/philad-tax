/** Public site address, used for metadata, the sitemap and canonical links */
export const SITE_URL = "https://philadtax.com";

export const SITE_NAME = "Philad Tax Advisors";

/** The Philad API (philad-backend). Leads are posted to `${API_BASE_URL}/contact`. */
export const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/+$/, "");

/** The Canadian firm behind the U.S. practice */
export const CANADA_SITE_URL = "https://www.philadconsulting.com";

export const CONTACT_EMAIL = "info@philadtax.com";
