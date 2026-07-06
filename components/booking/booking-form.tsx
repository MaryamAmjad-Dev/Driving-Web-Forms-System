"use client";

import type { FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { SubjectSelect } from "@/components/contact/subject-select";

const inputClassName =
  "w-full rounded-lg border border-border bg-card px-3 py-2 text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring";

type BookingFormProps = {
  dict: Dictionary;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  pending: boolean;
  errorMessage: string | null;
  notesError: string | null;
};

export function BookingForm({
  dict,
  onSubmit,
  pending,
  errorMessage,
  notesError,
}: BookingFormProps) {
  const page = dict.bookingPage;

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-busy={pending}>
      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="booking-name">
          {page.formName}
          <span className="text-destructive"> *</span>
        </label>
        <input
          id="booking-name"
          name="name"
          required
          autoComplete="name"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="booking-phone">
          {page.formPhone}
          <span className="text-destructive"> *</span>
        </label>
        <input
          id="booking-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="booking-email">
          {page.formEmail}
          <span className="text-destructive"> *</span>
        </label>
        <input
          id="booking-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={pending}
          className={inputClassName}
        />
      </div>

      <SubjectSelect
        name="lessonType"
        label={`${page.formLessonType} *`}
        placeholder={page.formLessonTypePlaceholder}
        options={page.lessonTypeOptions}
      />

      <SubjectSelect
        name="transmission"
        label={`${page.formTransmission} *`}
        placeholder={page.formTransmissionPlaceholder}
        options={page.transmissionOptions}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <SubjectSelect
          name="preferredDay"
          label={page.formPreferredDay}
          placeholder={page.formPreferredDayPlaceholder}
          options={page.preferredDayOptions}
          required={false}
        />
        <SubjectSelect
          name="preferredTime"
          label={page.formPreferredTime}
          placeholder={page.formPreferredTimePlaceholder}
          options={page.preferredTimeOptions}
          required={false}
        />
      </div>

      <SubjectSelect
        name="experience"
        label={page.formExperience}
        placeholder={page.formExperiencePlaceholder}
        options={page.experienceOptions}
        required={false}
      />

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="booking-notes">
          {page.formNotes}
        </label>
        <textarea
          id="booking-notes"
          name="notes"
          rows={4}
          required
          disabled={pending}
          className={inputClassName}
        />
        {notesError ? (
          <p className="mt-1 text-sm text-destructive" role="alert">
            {notesError}
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
        {pending ? page.formSending : page.formSubmit}
      </button>
    </form>
  );
}
