import { personalInfo } from "@/data/content";
import { WhatsappIcon } from "@/components/BrandIcons";

export default function WhatsAppButton() {
  return (
    <a
      href={personalInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 bg-[#25D366] animate-ping opacity-20" />

      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-coffee-950 text-white text-xs font-semibold px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Discutons sur WhatsApp
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-coffee-950 rotate-45" />
      </div>

      <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] flex items-center justify-center shadow-lg shadow-green-500/30 transition-all hover:scale-110 active:scale-95">
        <WhatsappIcon size={28} className="text-white" />
      </div>
    </a>
  );
}
