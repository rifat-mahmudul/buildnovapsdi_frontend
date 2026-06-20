// components/WhatsAppFloatingButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  return (
    <div className="fixed bottom-24 right-14 z-40 animate-bounce-slow">
      {/* Decorative Outer Pulsing Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>

      {/* Target WhatsApp Anchor Link */}
      <a
        href="https://wa.me/8801540754530"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
      >
        {/* React Icon Injection */}
        <FaWhatsapp className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />

        {/* Floating Tooltip Option */}
        <span className="absolute right-16 bg-[#200D5F] text-white text-xs font-bold py-1.5 px-3 rounded-xl opacity-0 scale-75 shadow-md pointer-events-none transition-all duration-200 origin-right group-hover:opacity-100 group-hover:scale-100 whitespace-nowrap border border-white/10">
          যেকোনো প্রয়োজনে মেসেজ দিন 💬
        </span>
      </a>
    </div>
  );
}
