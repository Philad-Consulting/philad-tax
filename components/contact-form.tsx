"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { useId, useState } from "react";
import { useForm, type FieldError } from "react-hook-form";

import { SERVICE_OPTIONS } from "@/lib/content";
import { leadFormSchema, submitLead, type LeadFormValues } from "@/lib/lead";
import { cn } from "@/lib/utils";

const EMPTY: LeadFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "" as LeadFormValues["service"],
  message: "",
};

const inputClass =
  "block w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-primary-900 shadow-xs transition-[border-color,box-shadow] placeholder:text-slate-400 hover:border-slate-400 focus:border-primary-600 focus:ring-4 focus:ring-primary-600/15 focus:outline-none aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/15";

export function ContactForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({ resolver: zodResolver(leadFormSchema), defaultValues: EMPTY });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await submitLead(values);
      setSentTo(values.email);
      reset(EMPTY);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong.");
    }
  });

  if (sentTo) {
    return (
      <div role="status" className="flex flex-col items-center py-10 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-8" aria-hidden />
        </span>
        <h3 className="font-display text-primary-900 mt-6 text-2xl font-semibold">
          Thanks, we&apos;ve got your request
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-slate-600">
          A member of our team will reply to <strong className="text-primary-900">{sentTo}</strong>{" "}
          with the next steps. If you need to send documents, we&apos;ll share secure upload
          instructions first.
        </p>
        <button
          type="button"
          onClick={() => setSentTo(null)}
          className="text-primary-600 hover:text-primary-800 mt-8 font-semibold underline underline-offset-4"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" error={errors.firstName}>
          {(props) => (
            <input
              {...props}
              {...register("firstName")}
              autoComplete="given-name"
              className={inputClass}
            />
          )}
        </Field>
        <Field label="Last name" error={errors.lastName}>
          {(props) => (
            <input
              {...props}
              {...register("lastName")}
              autoComplete="family-name"
              className={inputClass}
            />
          )}
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" error={errors.email}>
          {(props) => (
            <input
              {...props}
              {...register("email")}
              type="email"
              autoComplete="email"
              inputMode="email"
              className={inputClass}
            />
          )}
        </Field>
        <Field label="Phone" optional error={errors.phone}>
          {(props) => (
            <input
              {...props}
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          )}
        </Field>
      </div>

      <Field label="Service needed" error={errors.service}>
        {(props) => (
          <div className="relative">
            <select
              {...props}
              {...register("service")}
              className={cn(inputClass, "appearance-none pr-11 invalid:text-slate-400")}
              required
            >
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-primary-900">
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
          </div>
        )}
      </Field>

      <Field label="How can we help?" error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            {...register("message")}
            rows={5}
            placeholder="Tell us about your filing type, business structure and any deadlines."
            className={cn(inputClass, "resize-y")}
          />
        )}
      </Field>

      {submitError && (
        <p
          role="alert"
          className="flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primary-500 hover:bg-primary-700 group shadow-primary-900/20 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-semibold text-white shadow-lg transition-colors disabled:cursor-wait disabled:opacity-80"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-5 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Request a consultation
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </>
        )}
      </button>
    </form>
  );
}

/** Label, control and error message, wired together for screen readers */
function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: FieldError;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby"?: string;
  }) => React.ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="text-primary-900 mb-2 block text-sm font-semibold">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-500">(optional)</span>}
      </label>
      {children({
        id,
        "aria-invalid": Boolean(error),
        "aria-describedby": error ? errorId : undefined,
      })}
      {error?.message && (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}
