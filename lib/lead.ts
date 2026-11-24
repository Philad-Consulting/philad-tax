import { z } from "zod";

import { API_BASE_URL } from "@/lib/config";
import { SERVICE_OPTIONS } from "@/lib/content";

/** The contact form. Limits match the backend's CreateContactDto. */
export const leadFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Enter your first name")
    .max(60, "Keep it under 60 characters"),
  lastName: z.string().trim().min(1, "Enter your last name").max(60, "Keep it under 60 characters"),
  email: z.string().trim().pipe(z.email("Enter a valid email address")),
  phone: z
    .string()
    .trim()
    .max(30, "Keep it under 30 characters")
    .refine((value) => !value || /^[+()\-.\s\d]{7,}$/.test(value), "Enter a valid phone number"),
  service: z.enum(SERVICE_OPTIONS, "Choose a service"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (at least 10 characters)")
    .max(2000, "Keep it under 2,000 characters"),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

/**
 * Body for POST /contact. The API rejects any field it doesn't expect, so only these are sent.
 */
export function toContactPayload(values: LeadFormValues) {
  return {
    first_name: values.firstName,
    last_name: values.lastName,
    email: values.email,
    ...(values.phone ? { phone: values.phone } : {}),
    interest: values.service,
    message: values.message,
    source: "us-site" as const,
  };
}

const FALLBACK_ERROR = "We couldn't send your request. Please try again, or email us instead.";

/** Sends a lead to the Philad API. Throws an Error with a message fit to show the visitor. */
export async function submitLead(values: LeadFormValues, fetcher: typeof fetch = fetch) {
  // Without it the form would post to this site itself and get a confusing 404
  if (!API_BASE_URL) {
    console.error("NEXT_PUBLIC_API_BASE_URL is not set; see .env.example");
    throw new Error(FALLBACK_ERROR);
  }

  let response: Response;
  try {
    response = await fetcher(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(toContactPayload(values)),
      signal: AbortSignal.timeout(20_000),
    });
  } catch {
    throw new Error("We couldn't reach our server. Check your connection and try again.");
  }

  if (response.ok) return;
  if (response.status === 429) {
    throw new Error("Too many requests from your connection. Please wait a minute and try again.");
  }
  // 4xx: the API's reason (e.g. an invalid email); anything else gets the friendly fallback
  if (response.status >= 400 && response.status < 500) {
    const body = await response.json().catch(() => null);
    const message = Array.isArray(body?.message) ? body.message.join(", ") : body?.message;
    throw new Error(typeof message === "string" && message ? message : FALLBACK_ERROR);
  }
  throw new Error(FALLBACK_ERROR);
}
