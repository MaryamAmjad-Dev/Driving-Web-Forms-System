"use client";

import { useRef, useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { submitFormApi } from "@/lib/forms/submit-form";
import { hasMinWords } from "@/lib/forms/word-count";
import { SubjectSelect } from "@/components/contact/subject-select";

const inputClassName =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring";

type ContactFormProps = {
  dict: Dictionary;
};

export function ContactForm({ dict }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const submittingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) {
      return;
    }

    submittingRef.current = true;
    setPending(true);
    setErrorMessage(null);
    setMessageError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const c = dict.contactPage;
    const message = String(formData.get("message") ?? "").trim();

    if (!hasMinWords(message)) {
      setMessageError(c.formMessageMinWords);
      submittingRef.current = false;
      setPending(false);
      return;
    }

    const payload = Object.fromEntries(formData.entries());

    try {
      const result = await submitFormApi("/api/contact", payload);

      if (!result.ok) {
        const message = result.message || c.formError;
        setErrorMessage(message);
        toast.error(message);
        return;
      }

      form.reset();
      setSuccess(true);
      toast.success(c.formSuccess);
    } catch {
      setErrorMessage(c.formError);
      toast.error(c.formError);
    } finally {
      submittingRef.current = false;
      setPending(false);
    }
  }

  if (success) {
    return (
      <p
        className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-100"
        role="status"
      >
        {dict.contactPage.formSuccess}
      </p>
    );
  }

  const c = dict.contactPage;

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-busy={pending}>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="name">
          {c.formName}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          disabled={pending}
          className={inputClassName}
        />
      </div>
      <SubjectSelect
        label={c.formSubject}
        placeholder={c.formSubjectPlaceholder}
        options={c.formSubjectOptions}
      />
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="email">
          {c.formEmail}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pending}
          className={inputClassName}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="phone">
          {c.formPhone}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={pending}
          className={inputClassName}
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="message">
          {c.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={pending}
          className={inputClassName}
        />
        {messageError ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {messageError}
          </p>
        ) : null}
      </div>
      {errorMessage ? (
        <p className="text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        aria-disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? c.formSending : c.formSubmit}
      </button>
    </form>
  );
}
