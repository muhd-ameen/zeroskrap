"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { SITE, whatsappLink } from "@/lib/constants";
import { MATERIAL_OPTIONS, QUANTITY_OPTIONS } from "@/lib/data";

const FIELD =
  "w-full rounded-full border border-line bg-white px-5 py-3.5 text-[0.9375rem] text-ink outline-none transition duration-200 ease-soft placeholder:text-muted focus:border-brand-400 focus:ring-4 focus:ring-brand-100";
const LABEL = "block text-sm font-medium text-ink";
const ERROR = "mt-1.5 text-sm text-red-600";

type Fields = {
  name: string;
  phone: string;
  material: string;
  quantity: string;
  location: string;
  message: string;
};

type RequiredField = "name" | "phone" | "location";
type Errors = Partial<Record<RequiredField, string>>;

/** Focus order when a submit fails - matches the visual order of the fields. */
const REQUIRED_FIELDS: readonly RequiredField[] = ["name", "phone", "location"];

const INITIAL: Fields = {
  name: "",
  phone: "",
  material: MATERIAL_OPTIONS[MATERIAL_OPTIONS.length - 1],
  quantity: QUANTITY_OPTIONS[QUANTITY_OPTIONS.length - 1],
  location: "",
  message: "",
};

/**
 * Frontend-only pickup request. On submit the entered details are formatted
 * into a WhatsApp message - no backend, no data stored.
 *
 * Only name, number and location are asked for up front; material, quantity
 * and notes sit behind a disclosure so the form reads as three quick fields.
 */
export const ContactForm = () => {
  const id = useId();
  const [fields, setFields] = useState<Fields>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});

  const inputs = {
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    location: useRef<HTMLInputElement>(null),
  };

  const update = (key: keyof Fields) => (value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    if (key in errors) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Errors = {};
    if (!fields.name.trim()) nextErrors.name = "Please enter your name.";
    if (fields.phone.replace(/\D/g, "").length < 7)
      nextErrors.phone = "Please enter a valid mobile number.";
    if (!fields.location.trim())
      nextErrors.location = "Please tell us where to collect from.";

    setErrors(nextErrors);

    const firstInvalid = REQUIRED_FIELDS.find((key) => nextErrors[key]);
    if (firstInvalid) {
      inputs[firstInvalid].current?.focus();
      return;
    }

    const lines = [
      `Hi ${SITE.name}, I would like to request a pickup.`,
      "",
      `Name: ${fields.name.trim()}`,
      `Phone: +230 ${fields.phone.replace(/\D/g, "")}`,
      `Material: ${fields.material}`,
      `Estimated quantity: ${fields.quantity}`,
      `Pickup location: ${fields.location.trim()}`,
    ];

    if (fields.message.trim()) lines.push(`Message: ${fields.message.trim()}`);

    const target = whatsappLink(lines.join("\n"));
    const opened = window.open(target, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = target;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 [&>*]:min-w-0 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={LABEL}>
            Full name
          </label>
          <input
            ref={inputs.name}
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={(event) => update("name")(event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={`mt-2 ${FIELD}`}
          />
          {errors.name && (
            <p id={`${id}-name-error`} role="alert" className={ERROR}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className={LABEL}>
            Phone number
          </label>
          <div className="relative mt-2">
            <span
              aria-hidden
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[0.9375rem] font-medium text-muted"
            >
              +230
            </span>
            <input
              ref={inputs.phone}
              id={`${id}-phone`}
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="5xxx xxxx"
              maxLength={12}
              value={fields.phone}
              onChange={(event) =>
                update("phone")(event.target.value.replace(/[^\d ]/g, ""))
              }
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
              className={`${FIELD} pl-[4.25rem]`}
            />
          </div>
          {errors.phone && (
            <p id={`${id}-phone-error`} role="alert" className={ERROR}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-location`} className={LABEL}>
          Pickup location
        </label>
        <input
          ref={inputs.location}
          id={`${id}-location`}
          name="location"
          type="text"
          autoComplete="street-address"
          placeholder="Street and town, e.g. Royal Road, Curepipe"
          value={fields.location}
          onChange={(event) => update("location")(event.target.value)}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? `${id}-location-error` : undefined}
          className={`mt-2 ${FIELD}`}
        />
        {errors.location && (
          <p id={`${id}-location-error`} role="alert" className={ERROR}>
            {errors.location}
          </p>
        )}
      </div>

      <details className="group rounded-3xl border border-line bg-white px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-full text-sm font-medium text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100 [&::-webkit-details-marker]:hidden">
          <span>
            Add scrap details{" "}
            <span className="font-normal text-muted">(optional)</span>
          </span>
          <ChevronDown
            aria-hidden
            className="size-4 shrink-0 text-muted transition duration-200 ease-soft group-open:rotate-180"
          />
        </summary>

        <div className="mt-5 flex flex-col gap-5">
          <div className="grid gap-5 [&>*]:min-w-0 sm:grid-cols-2">
            <div>
              <label htmlFor={`${id}-material`} className={LABEL}>
                Material type
              </label>
              <div className="relative mt-2">
                <select
                  id={`${id}-material`}
                  name="material"
                  value={fields.material}
                  onChange={(event) => update("material")(event.target.value)}
                  className={`${FIELD} appearance-none pr-12`}
                >
                  {MATERIAL_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-quantity`} className={LABEL}>
                Estimated quantity
              </label>
              <div className="relative mt-2">
                <select
                  id={`${id}-quantity`}
                  name="quantity"
                  value={fields.quantity}
                  onChange={(event) => update("quantity")(event.target.value)}
                  className={`${FIELD} appearance-none pr-12`}
                >
                  {QUANTITY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden
                  className="pointer-events-none absolute right-5 top-1/2 size-4 -translate-y-1/2 text-muted"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor={`${id}-message`} className={LABEL}>
              Message
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              rows={3}
              placeholder="Anything else we should know before we come?"
              value={fields.message}
              onChange={(event) => update("message")(event.target.value)}
              className={`mt-2 ${FIELD} resize-y rounded-3xl`}
            />
          </div>
        </div>
      </details>

      <Button type="submit" size="lg" fullWidth className="mt-1">
        <WhatsAppIcon className="size-5" />
        Request Pickup on WhatsApp
      </Button>

      <p className="text-center text-sm text-muted">
        Free pickup · No obligation · We usually reply within minutes
      </p>

      <p className="text-center text-xs text-muted">
        Your details open a pre-filled WhatsApp message - nothing is stored on
        this site.
      </p>
    </form>
  );
};
