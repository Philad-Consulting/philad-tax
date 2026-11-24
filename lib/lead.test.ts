import { describe, expect, it, vi } from "vitest";

import { leadFormSchema, submitLead, toContactPayload, type LeadFormValues } from "./lead";

const values: LeadFormValues = {
  firstName: "Ada",
  lastName: "Obi",
  email: "ada@example.com",
  phone: "",
  service: "S-Corp tax filing",
  message: "I need help filing my 1120-S this year.",
};

const reply = (status: number, body?: unknown) =>
  vi.fn().mockResolvedValue(new Response(body ? JSON.stringify(body) : null, { status }));

describe("toContactPayload", () => {
  it("sends only the fields the API accepts, tagged as a U.S. site lead", () => {
    expect(toContactPayload(values)).toEqual({
      first_name: "Ada",
      last_name: "Obi",
      email: "ada@example.com",
      interest: "S-Corp tax filing",
      message: "I need help filing my 1120-S this year.",
      source: "us-site",
    });
  });

  it("includes the phone number only when one is given", () => {
    expect(toContactPayload({ ...values, phone: "+1 424 267 9918" })).toMatchObject({
      phone: "+1 424 267 9918",
    });
  });
});

describe("leadFormSchema", () => {
  it("accepts a complete request and trims it", () => {
    const parsed = leadFormSchema.parse({ ...values, firstName: "  Ada " });
    expect(parsed.firstName).toBe("Ada");
  });

  it("rejects a bad email, an unknown service and a short message", () => {
    const result = leadFormSchema.safeParse({
      ...values,
      email: "ada@",
      service: "Payroll",
      message: "hi",
    });
    expect(result.success).toBe(false);
    const fields = result.error?.issues.map((issue) => issue.path[0]);
    expect(fields).toEqual(expect.arrayContaining(["email", "service", "message"]));
  });
});

describe("submitLead", () => {
  it("posts the payload as JSON to /contact", async () => {
    const fetcher = reply(201, { success: true });
    await submitLead(values, fetcher);
    const [url, init] = fetcher.mock.calls[0];
    expect(url).toMatch(/\/contact$/);
    expect(JSON.parse(init.body)).toEqual(toContactPayload(values));
  });

  it("shows the API's reason for a rejected request", async () => {
    const fetcher = reply(400, { message: ["email must be an email"] });
    await expect(submitLead(values, fetcher)).rejects.toThrow("email must be an email");
  });

  it("asks the visitor to wait when rate limited", async () => {
    await expect(submitLead(values, reply(429))).rejects.toThrow(/wait a minute/);
  });

  it("hides server crashes and lost connections behind friendly messages", async () => {
    await expect(submitLead(values, reply(500, { message: "TypeError: x" }))).rejects.toThrow(
      /couldn't send/,
    );
    const offline = vi.fn().mockRejectedValue(new TypeError("Failed to fetch"));
    await expect(submitLead(values, offline)).rejects.toThrow(/couldn't reach/);
  });
});
