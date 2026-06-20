// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#12063b] to-[#1a0954] text-slate-300 pt-16 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Visual Design Element Accent Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Column 1: Core Institutional Brand Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🏗️</span>
              <h3 className="text-white font-black text-xl tracking-tight">
                Structural Drawing Foundation
              </h3>
            </div>
            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              Bangladesh-এর Civil Engineering students-দের জন্য প্রিমিয়াম
              প্রফেশনাল structural foundation ও ক্যারিয়ার রেডি এডুকেশনাল
              প্ল্যাটফর্ম। আমরা বিশ্বাস করি নিখুঁত প্র্যাক্টিক্যাল স্কিলেই
              লুকিয়ে আছে উজ্জ্বল ক্যারিয়ার।
            </p>
          </div>

          {/* Column 2: Fast Information Reference Node */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#0066cc] pl-2">
              পেমেন্ট হেল্পলাইন
            </h4>
            <div className="space-y-2 text-xs font-medium text-slate-300/90">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                <p>
                  bKash / Rocket:{" "}
                  <span className="font-mono text-white selection:bg-pink-500">
                    01753224744
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <p>
                  Nagad:{" "}
                  <span className="font-mono text-white selection:bg-orange-500">
                    01540754530
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <span className="text-sm mt-0.5">🏛️</span>
                <p className="leading-normal text-[11px] text-slate-400">
                  <span className="text-white font-bold block">
                    Mutual Trust Bank Ltd.
                  </span>
                  A/C: 1311010504136 <br />
                  Name: MD. ABU SHAID
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Channels Mapping */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest border-l-2 border-[#0066cc] pl-2">
              যোগাযোগ মাধ্যম
            </h4>
            <div className="flex flex-col gap-3 text-sm font-medium">
              <p className="text-xs leading-relaxed flex items-start gap-2">
                <span className="text-base">📍</span>
                <span>
                  Fahad Plaza, Plot 1 & 2, Road No 1, Section – 10, Mirpur,
                  Dhaka 1216
                </span>
              </p>

              <a
                href="https://wa.me/8801540754530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-green-400 transition-colors w-fit group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">
                  💬
                </span>
                <span>
                  WhatsApp Support:{" "}
                  <strong className="text-white group-hover:text-green-400 font-mono">
                    +8801540754530
                  </strong>
                </span>
              </a>

              <a
                href="mailto:civil1632@gmail.com"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-blue-400 transition-colors w-fit group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">
                  ✉️
                </span>
                <span>
                  Email Address:{" "}
                  <strong className="text-white group-hover:text-blue-400 font-mono">
                    civil1632@gmail.com
                  </strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Dynamic Structural Bottom Legal Disclaimer Wrapper */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400/80">
          <p>
            © {new Date().getFullYear()} Structural Drawing Foundation. All
            Rights Reserved.
          </p>
          <div className="flex items-center gap-5 font-semibold text-[11px]">
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <p className="text-slate-500">Design & Architecture Platform</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
