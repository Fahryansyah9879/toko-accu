import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "6282158544469";
  const message = encodeURIComponent(
    "Halo, saya ingin bertanya tentang aki di Toko Accu Prima Battery"
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform whatsapp-pulse group"
      aria-label="Chat WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7" fill="white" />
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-[#1D3557] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat dengan kami
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#1D3557]"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
