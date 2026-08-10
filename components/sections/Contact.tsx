import { Clock, Mail, MapPin, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CONTACT, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";
import { ContactForm } from "./ContactForm";

const DETAILS = [
  {
    icon: MapPin,
    label: "Our yard",
    value: CONTACT.address.full,
  },
  {
    icon: Truck,
    label: "Coverage",
    value: `${CONTACT.coverage} - north, south, east and west`,
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: CONTACT.hours,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
  },
];

export const Contact = () => (
  <Section id="contact" className="bg-white" aria-labelledby="contact-heading">
    {/* min-w-0 stops the select's intrinsic width from widening the column. */}
    <div className="grid gap-10 [&>*]:min-w-0 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <div>
        <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-800">
          Contact
        </span>

        <h1
          id="contact-heading"
          className="mt-5 text-[1.875rem] font-bold leading-[1.15] md:text-[2.5rem]"
        >
          Book a pickup or{" "}
          <span className="text-brand-500">request a clearance</span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Tell us what you have and where you are. We confirm a time, arrive
          with the scales and pay you on the spot - anywhere in Mauritius.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            size="md"
            className="w-full sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Chat on WhatsApp
          </Button>

          <Button
            href={CONTACT.phonePrimary.href}
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
          >
            <Phone className="size-[1.125rem]" strokeWidth={1.9} />
            {CONTACT.phonePrimary.display}
          </Button>
        </div>

        <ul className="mt-10 space-y-5">
          {DETAILS.map(({ icon: Glyph, label, value }) => (
            <li key={label} className="flex gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                <Glyph className="size-5" strokeWidth={1.9} aria-hidden />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{label}</h3>
                <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-muted">
                  {value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-card border border-line bg-canvas p-6 md:p-8">
        <h3 className="text-lg font-semibold">Request a pickup</h3>
        <p className="mt-1.5 text-[0.9375rem] text-muted">
          Three details is all we need - we confirm the time on WhatsApp.
        </p>

        <div className="mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  </Section>
);
