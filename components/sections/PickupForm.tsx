"use client";

import { useId, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Frontend-only pickup request: validates the number, then hands the visitor
 * over to WhatsApp with a pre-filled message. No backend required.
 */
export const PickupForm = ({ className }: { className?: string }) => {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const digits = phone.replace(/\D/g, "");

    if (digits.length < 7) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setError(null);

    const message = `Hi ${SITE.name}, I would like to book a scrap pickup. My number is +230 ${digits}.`;
    const target = whatsappLink(message);
    const opened = window.open(target, "_blank", "noopener,noreferrer");

    if (!opened) window.location.href = target;
  };

  return (
    <div className={cn("mt-9 w-full min-w-0 max-w-xl", className)}>
      <label
        htmlFor={inputId}
        className="block text-center text-[0.9375rem] font-semibold text-brand-700 lg:text-left"
      >
        Book a free pickup
      </label>

      {/* min-w-0 on every nested flex/block level: iOS inputs have a large
          intrinsic min-width that otherwise blows past the viewport, and the
          hero's items-center + overflow-hidden then clips the left side. */}
      <div className="mt-3 w-full min-w-0 bg-brand-100/70 p-1.5 sm:p-2">
        <div className="w-full min-w-0 bg-brand-200/60 p-1 sm:p-1.5">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex w-full min-w-0 items-center gap-2 bg-white py-1.5 pl-3.5 pr-1.5 ring-1 ring-brand-100 sm:gap-3 sm:py-2 sm:pl-5 sm:pr-2"
          >
            <span className="shrink-0 text-[0.9375rem] font-medium text-muted">
              +230
            </span>
            <span aria-hidden className="h-6 w-px shrink-0 bg-line" />

            <input
              id={inputId}
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="Enter mobile number"
              value={phone}
              size={1}
              onChange={(event) => {
                setPhone(event.target.value);
                if (error) setError(null);
              }}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className="w-full min-w-0 flex-1 bg-transparent py-2.5 text-[0.9375rem] text-ink outline-none placeholder:text-muted sm:text-base"
            />

            <button
              type="submit"
              aria-label="Request a pickup on WhatsApp"
              className="grid size-11 shrink-0 place-items-center rounded-btn bg-brand-700 text-white transition duration-200 ease-soft hover:bg-brand-800 active:scale-95 sm:size-12"
            >
              <ArrowRight className="size-5" strokeWidth={2.2} />
            </button>
          </form>
        </div>
      </div>

      <p
        id={error ? errorId : undefined}
        role={error ? "alert" : undefined}
        className={`mt-3 text-center text-sm lg:text-left ${
          error ? "text-red-600" : "text-muted"
        }`}
      >
        {error ?? "We reply on WhatsApp - usually within minutes."}
      </p>
    </div>
  );
};
