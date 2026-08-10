import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { CONTACT, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/constants";

/** Always-available contact shortcuts - the primary mobile conversion path. */
export const FloatingActions = () => (
  <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3 md:bottom-8 md:right-8">
    <a
      href={whatsappLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZeroSkrap on WhatsApp"
      title="WhatsApp"
      className="grid size-14 place-items-center rounded-full bg-brand-500 text-white transition duration-200 ease-soft hover:bg-brand-600 active:scale-95"
    >
      <WhatsAppIcon className="size-7" />
    </a>

    <a
      href={CONTACT.phonePrimary.href}
      aria-label={`Call ZeroSkrap on ${CONTACT.phonePrimary.display}`}
      title="Call us"
      className="grid size-14 place-items-center rounded-full bg-brand-700 text-white transition duration-200 ease-soft hover:bg-brand-800 active:scale-95"
    >
      <Phone className="size-6" strokeWidth={1.9} />
    </a>
  </div>
);
