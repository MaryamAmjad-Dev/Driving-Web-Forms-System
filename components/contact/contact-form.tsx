"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SubjectSelect } from "@/components/contact/subject-select";

const inputClassName =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring";

type ContactFormProps = {
  dict: Dictionary;
};

export function ContactForm({ dict }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setShowError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setShowError(true);
        return;
      }

      form.reset();
      setSuccess(true);
    } catch {
      setShowError(true);
    } finally {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="name">
          {c.formName}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
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
          minLength={10}
          className={inputClassName}
        />
      </div>
      {showError ? (
        <p className="text-sm text-destructive" role="alert">
          {c.formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {pending ? c.formSending : c.formSubmit}
      </button>
    </form>
  );
}
