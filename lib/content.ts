/**
 * Site copy, from the client's Philad U.S. Tax Advisors content. Edit wording here only.
 */

/** Links go through the home page so they also work from the policy pages */
export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#why-philad", label: "Why Philad" },
  { href: "/#process", label: "Our Process" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const HERO = {
  eyebrow: "Your partner in U.S. tax & accounting",
  title: "Tax Filing Made Simple.",
  highlight: "Business Finances Made Smarter.",
  body: "From individual IRS returns to LLCs, S corporations, C corporations and partnerships, Philad U.S. Tax Advisors helps you file with confidence, maintain accurate books and make informed financial decisions.",
  panelTitle: "One firm. Complete support.",
  panelItems: [
    "Individual & nonresident tax returns",
    "LLC, S-Corp & C-Corp tax filing",
    "Partnership returns & K-1 reporting",
    "Monthly bookkeeping & reconciliation",
    "Tax planning & IRS correspondence",
  ],
  forms: ["1040", "1040-NR", "1120-S", "1120", "1065", "K-1"],
};

export const TRUST_POINTS = [
  { key: "individual", label: "Individual Tax Returns" },
  { key: "business", label: "Business Tax Compliance" },
  { key: "bookkeeping", label: "Year-Round Bookkeeping" },
  { key: "guidance", label: "Practical Tax Guidance" },
] as const;

export type TrustPointKey = (typeof TRUST_POINTS)[number]["key"];

export const SERVICES_INTRO = {
  eyebrow: "What we do",
  title: "Tax and accounting solutions for every stage",
  body: "Whether you're filing your first U.S. return or managing a growing multi-entity business, we provide practical support tailored to your situation.",
};

/** `value` is what the contact form sends as the lead's interest */
export const SERVICES = [
  {
    key: "individual",
    value: "Individual tax filing",
    title: "Individual Tax Filing",
    body: "Federal Form 1040, Form 1040-NR where applicable, state income tax returns, self-employment income and investment-related reporting.",
    tags: ["1040", "1040-NR", "State"],
  },
  {
    key: "s-corp",
    value: "S-Corp tax filing",
    title: "S-Corp Tax Returns",
    body: "Form 1120-S, shareholder Schedule K-1 reporting, reasonable compensation considerations and election-related guidance.",
    tags: ["1120-S", "K-1"],
  },
  {
    key: "c-corp",
    value: "C-Corp tax filing",
    title: "C-Corp Tax Returns",
    body: "Form 1120 preparation, corporate tax compliance, tax provision support and planning for retained earnings and distributions.",
    tags: ["1120"],
  },
  {
    key: "partnership",
    value: "Partnership / LLC filing",
    title: "Partnership & LLC Filing",
    body: "Form 1065, partner Schedule K-1s and guidance on how your LLC's federal tax classification affects filing obligations.",
    tags: ["1065", "K-1"],
  },
  {
    key: "bookkeeping",
    value: "Bookkeeping",
    title: "Bookkeeping Services",
    body: "Monthly transaction categorization, bank and credit card reconciliations, financial statements and year-end tax-ready records.",
    tags: ["Monthly", "Year-end"],
  },
  {
    key: "advisory",
    value: "Tax advisory / IRS notice",
    title: "Tax Advisory & IRS Support",
    body: "Entity selection, tax election guidance, estimated tax planning, multi-state considerations and assistance responding to IRS notices.",
    tags: ["Planning", "IRS notices"],
  },
] as const;

export type ServiceKey = (typeof SERVICES)[number]["key"];

/** Choices in the contact form's "Service needed" list */
export const SERVICE_OPTIONS = [...SERVICES.map((service) => service.value), "Other"] as const;

export const WHY_PHILAD = {
  eyebrow: "Why choose Philad",
  title: "More than filing forms. A clearer financial picture.",
  body: "We combine tax preparation with reliable bookkeeping and proactive guidance, so you can spend less time untangling records and more time growing your business.",
  points: [
    "Individualized support for your entity and filing requirements",
    "Clear communication and transparent next steps",
    "Organized books that make tax season easier",
    "Year-round support, not just once a year",
  ],
  feature: {
    eyebrow: "For growing businesses",
    title: "Let your bookkeeping work for your tax strategy.",
    body: "Accurate monthly records help you understand profitability, monitor cash flow, prepare for financing and avoid last-minute tax-season cleanups.",
    note: "Ask about ongoing bookkeeping paired with annual business tax preparation.",
    cta: "Talk to our team",
  },
};

export const PROCESS = {
  eyebrow: "Simple process",
  title: "How we work with you",
  steps: [
    {
      title: "Tell us what you need",
      body: "Share your filing type, business structure and deadlines.",
    },
    {
      title: "Receive a clear plan",
      body: "We review the scope, required documents and service proposal.",
    },
    {
      title: "File and move forward",
      body: "We prepare the agreed work, guide your review and support next steps.",
    },
  ],
};

export const FAQ = {
  eyebrow: "Frequently asked questions",
  title: "Answers before you get started",
  items: [
    {
      question: "Does every LLC file the same federal tax return?",
      answer:
        "No. An LLC's federal tax treatment depends on its ownership and tax elections. It may be treated as a disregarded entity, partnership, S corporation or C corporation.",
    },
    {
      question: "Can you prepare both federal and state returns?",
      answer:
        "We can assess your federal and applicable state filing needs and confirm the scope of services before engagement.",
    },
    {
      question: "Do you offer bookkeeping without tax preparation?",
      answer:
        "Yes. Ask about recurring monthly bookkeeping, reconciliations and financial reporting as standalone services.",
    },
    {
      question: "Can you help a new business select its tax classification?",
      answer:
        "We can discuss federal tax classifications and election considerations based on your business facts and objectives.",
    },
  ],
};

export const CONTACT = {
  eyebrow: "Let's work together",
  title: "Ready to simplify your U.S. taxes?",
  body: "Tell us what you need. We'll help identify the next step for your tax filing or bookkeeping requirements.",
  cardTitle: "Start with a conversation",
  cardBody:
    "Individual return? New LLC? S-Corp or C-Corp filing? Monthly bookkeeping? We're here to discuss the right scope for your needs.",
  privacy:
    "For your privacy, please do not send Social Security numbers, tax returns or other sensitive documents before receiving secure upload instructions.",
  formTitle: "Request a consultation",
};

/** The online filing link (Taxes To Go), in the hero and the closing section */
export const FILE_TAXES = {
  label: "Click to file your tax now",
  note: "Opens Taxes To Go in a new tab",
  eyebrow: "File online",
  title: "Ready to file your U.S. taxes?",
  body: "Start your return online with Taxes To Go.",
};

export const FOOTER = {
  tagline: "U.S. federal & state tax preparation, bookkeeping and advisory.",
  disclaimer:
    "Tax outcomes depend on individual facts and applicable law. Engagement is subject to acceptance and agreed scope.",
  ctec: "CTEC Registered Tax Preparer (CRTP) #A365050 — Registered with the California Tax Education Council (CTEC) to prepare California and federal income tax returns.",
  ctecLink: "Verify a California tax preparer at ctec.org",
};
