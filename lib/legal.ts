/**
 * The policy pages, from the client's text. Edit wording here only. A paragraph can open with a
 * bold lead-in; the contact email is linked wherever it appears.
 */

export type LegalParagraph = string | { lead: string; text: string };

export type LegalDoc = {
  path: string;
  title: string;
  /** One line for search results and link previews */
  description: string;
  effectiveDate?: string;
  sections: { heading?: string; paragraphs: LegalParagraph[] }[];
};

export const PRIVACY_POLICY: LegalDoc = {
  path: "/privacy",
  title: "Privacy Policy",
  description:
    "How Philad U.S. Tax Advisors handles personal and tax return information from site visitors and clients.",
  effectiveDate: "November 27, 2026",
  sections: [
    {
      heading: "Who we are and what this policy covers",
      paragraphs: [
        "Philad U.S. Tax Advisor is the service name of Philad U.S. Tax Advisors (Philad, we, or us). This policy explains how we handle personal information when you visit www.philadtax.com, request a consultation, or use our U.S. tax preparation, filing, bookkeeping, or advisory services. It also describes how we handle nonpublic personal information when we provide tax services to individuals for personal, family, or household purposes.",
      ],
    },
    {
      heading: "Information we collect and where it comes from",
      paragraphs: [
        {
          lead: "Website inquiries.",
          text: "Our contact form collects your name, email address, service selection, and any message you submit. You may also provide a phone number.",
        },
        {
          lead: "Client records.",
          text: "Depending on the work, we collect contact and identity information, dates of birth, Social Security numbers (SSNs), ITINs or EINs, and information about your spouse, dependents, or business owners. We may collect tax returns and supporting records, income and expenses, bookkeeping and payroll records, bank details needed for authorized deposits or payments, and signature and filing records.",
        },
        {
          lead: "Sources.",
          text: "We obtain information from you, your authorized representatives, records you provide or authorize us to access, and tax authorities when permitted. Site hosting and security tools may record technical information such as IP addresses, browser details, requested pages, and access times.",
        },
      ],
    },
    {
      heading: "How we use information",
      paragraphs: [
        "We use information to respond to inquiries, establish and manage engagements, verify identity or authority, perform agreed services, administer billing, communicate about filings, maintain records, secure our systems, and meet applicable legal obligations. When tax return information is involved, federal tax confidentiality rules govern each use and disclosure, including between our tax and bookkeeping services.",
      ],
    },
    {
      heading: "Who receives information",
      paragraphs: [
        "We may share information as legally permitted with the IRS and state or local tax authorities, personnel and vendors supporting authorized work, and people you authorize. Vendors may include tax software and e-file providers, document exchange and electronic signature providers, and hosting, IT, bookkeeping, or payment service providers. We may also disclose information in response to a valid legal demand or as otherwise required by law. Each disclosure of tax return information must independently satisfy the rules below.",
        "Our site links to Taxes To Go, a third-party tax intake app. Its privacy terms describe its own handling of your information. Information we receive through the app is subject to this policy. Use the document exchange method we designate for your engagement. Keep tax documents and sensitive identifiers out of the public contact form and ordinary email.",
      ],
    },
    {
      heading: "Federal tax return confidentiality",
      paragraphs: [
        "Internal Revenue Code sections 7216 and 6713 and related Treasury regulations restrict the use and disclosure of tax return information. Where the law requires consent, we obtain a separate, knowing and voluntary consent in the required form before the use or disclosure. This policy, use of the site, and acceptance of an engagement do not supply that consent. We do not sell personal information, share it for cross-context behavioral advertising, or use tax return information for unrelated marketing. If federal financial privacy law requires an opt-out before sharing nonpublic personal information with an unaffiliated third party, we provide the required notice and choice before sharing. Tax return information remains subject to applicable consent requirements.",
        "If an engagement involves access to tax return information from outside the United States, we apply the rules that govern that access, obtain any required advance consent, and comply with applicable restrictions and masking requirements for SSNs. The location of our personnel or vendors does not replace those protections.",
      ],
    },
    {
      heading: "Website cookies and privacy signals",
      paragraphs: [
        "We may use cookies or similar technologies for site operation and security. You can manage cookies through your browser. Some features may be affected if you block them. We do not respond to legacy Do Not Track signals. We honor legally recognized opt-out signals, including Global Privacy Control, where required. We do not permit third parties to track your activity across sites for advertising through our website. Third-party sites and apps you visit from our links may collect information under their own policies.",
      ],
    },
    {
      heading: "Security and retention",
      paragraphs: [
        "We maintain administrative, technical, and physical safeguards designed to protect client information. We restrict access to those who need it for authorized purposes and oversee service providers that handle customer information. If a security incident requires notice, we notify affected people and regulators as required by law.",
        "We retain information for as long as reasonably needed for the engagement, tax and e-file recordkeeping obligations, and other applicable legal or professional requirements, including dispute resolution. We securely dispose of information when those needs end. We protect former clients’ information under the same confidentiality and safeguards described in this policy.",
      ],
    },
    {
      heading: "Privacy requests and policy updates",
      paragraphs: [
        "Email info@philadtax.com to ask about this policy or request access to, correction of, or deletion of your personal information, where available under applicable law. We may verify your identity or authority and may retain records required by law. If applicable law gives you an appeal right, we will explain how to appeal a denial. We use children’s information supplied by an authorized adult when needed for an engagement. Our website is intended for adults.",
        "We post updates on this website and revise the effective date. We provide individual notice when required and obtain any consent required before a new use or disclosure of tax return information.",
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  path: "/terms",
  title: "Terms and Conditions",
  description:
    "The terms for using philadtax.com and how Philad U.S. Tax Advisors provides tax and bookkeeping services.",
  effectiveDate: "November 27, 2026",
  sections: [
    {
      heading: "Website use and service engagement",
      paragraphs: [
        "Philad U.S. Tax Advisor is the service name of Philad U.S. Tax Advisors (Philad, we, or us). These terms govern your use of www.philadtax.com and outline how we provide services. The site provides general information. Advice for your circumstances is provided within an accepted engagement.",
        "Submitting an inquiry, booking a consultation, sending documents, or using Taxes To Go starts intake. We take on work only after we accept the engagement in writing and you agree to its scope and fees. The engagement letter specifies the tax years, jurisdictions, returns or other deliverables, deadlines, and responsibilities we agree to handle. It governs the agreed services if it conflicts with these website terms, subject to applicable law.",
      ],
    },
    {
      heading: "Scope of services",
      paragraphs: [
        "We provide agreed U.S. federal and state tax preparation for individuals, including nonresident filers, and for businesses, including LLCs, partnerships, S corporations, and C corporations. We may also provide agreed bookkeeping, tax advisory, and tax notice assistance. Amendments, extensions, information returns, foreign reporting, and IRS or state correspondence are included only when agreed in writing.",
        "Bookkeeping and return preparation provide no audit, review, or assurance. We use the records and explanations you provide, may ask for supporting documents, and follow applicable preparer standards. We may decline to prepare or file a return if we cannot meet those standards.",
      ],
    },
    {
      heading: "Your responsibilities and filing deadlines",
      paragraphs: [
        "Provide complete, accurate information and supporting records by the dates in your engagement letter. Disclose relevant income, business interests, foreign activity, and prior filings when relevant. Notify us promptly of changes, notices, errors, or approaching deadlines. If you act for another person or a business, you must have authority to do so.",
        "You are responsible for your filing and payment obligations and for keeping copies and supporting records. An extension must be arranged separately if it is outside the written scope. An extension of time to file generally leaves the payment deadline unchanged. If information, approval, or signatures arrive late, we will tell you if we cannot meet an agreed filing deadline.",
      ],
    },
    {
      heading: "Review and authorization",
      paragraphs: [
        "Review the completed return before signing and verify identifying information, amounts, elections, and bank details. We transmit a return only after receiving the required authorization, such as IRS Form 8879 for applicable individual e-filed returns or the corresponding business or state form. All required signers must authorize the filing. If paper filing is required, follow our written delivery instructions and confirm who is responsible for mailing.",
      ],
    },
    {
      heading: "Electronic filing and service communications",
      paragraphs: [
        "Uploading records or signing an authorization does not confirm that a return was transmitted or accepted. When we handle e-filing, we monitor acknowledgments and tell you about material rejections and any action needed. Acceptance is a processing acknowledgment. It does not establish that the taxing authority agrees with the return. Refund timing and government processing depend on the relevant authority and your circumstances.",
        "We may use electronic communications for routine engagement updates. Use the designated document exchange method for tax records and sensitive identifiers. Taxes To Go and other third-party tools may have their own terms. Where an electronic signature is permitted, each signer must use the designated process and complete any required identity verification. Website or engagement acceptance does not substitute for a filing authorization, debit authorization, or tax information consent.",
      ],
    },
    {
      heading: "Fees and ending an engagement",
      paragraphs: [
        "We agree on professional fees, payment timing, and any deposits in writing before work starts. Fees are based on the services agreed and are not a percentage of your refund. We will explain any proposed additional work and its charges before proceeding. Taxes, interest, penalties, and government charges are separate from our professional fees.",
        "You may end the engagement by contacting us in writing. We may withdraw as allowed by applicable law and professional obligations and will notify you in writing. The engagement letter and applicable law govern charges for work performed, any refunds, and return of client records. Confirm the status of unfinished work and arrange for any remaining filings before the applicable deadlines.",
      ],
    },
    {
      heading: "Tax agency notices and representation",
      paragraphs: [
        "Forward tax notices promptly. Notice response, audit support, and representation require separate written agreement unless already included in your engagement. Any representation must be performed by an eligible representative with the required authorization, such as IRS Form 2848 where applicable. IRS Form 8821 permits access to specified tax information and grants no authority to represent you.",
      ],
    },
    {
      heading: "Privacy and legal rights",
      paragraphs: [
        "Our Privacy Policy explains how we handle personal information. These terms preserve all rights, remedies, and professional duties that applicable law makes nonwaivable. We may update the website terms by posting the revised version and effective date. Changes to an existing engagement follow the engagement letter and applicable law. For questions about these terms or your engagement, contact info@philadtax.com.",
      ],
    },
  ],
};

export const ACCESSIBILITY: LegalDoc = {
  path: "/accessibility",
  title: "Accessibility",
  description:
    "Philad U.S. Tax Advisors is committed to making its website and tax services accessible to people with disabilities.",
  sections: [
    {
      paragraphs: [
        "Philad U.S. Tax Advisor is committed to making our website and tax services accessible to people with disabilities.",
        "If you have difficulty using our website, completing the consultation form, or accessing Taxes To Go, email info@philadtax.com to request assistance or an alternative way to get started. Please keep Social Security numbers, tax returns, and other sensitive documents out of your email.",
      ],
    },
  ],
};

/** In the order the footer lists them */
export const LEGAL_DOCS = [PRIVACY_POLICY, TERMS, ACCESSIBILITY];
