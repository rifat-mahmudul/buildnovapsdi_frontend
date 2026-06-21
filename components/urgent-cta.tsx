// components/UrgentCTA.tsx
"use client";
import Link from "next/link";
import React from "react";

export default function UrgentCTA() {
  return (
    <section className="relative bg-[#200D5F] py-20 px-4 overflow-hidden text-center text-white">
      {/* Background radial glow/gradient layer for modern SaaS feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,26,148,0.3)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Main Heading Text with highlighted blue background wrapper like the screenshot */}
        <div className="space-y-2 mb-8 font-poppins">
          <span className="inline-block  text-white text-xl md:text-3xl font-black px-4 py-2 rounded-sm leading-relaxed tracking-wide shadow-sm">
            এই সুযোগ মিস করলে পরের বছর আবার
          </span>
          <br />
          <span className="inline-block text-white text-xl md:text-3xl font-black px-6 py-2 rounded-sm leading-relaxed tracking-wide shadow-sm mt-1">
            একই আফসোস করবেন
          </span>
        </div>

        {/* Premium Pulsing/Glowing CTA Button */}
        <Link href={"#registration"}>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black text-lg rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5 p-4 mb-3">
            <span>🔥</span>
            <span>২৯৯ টাকায় এখনই রেজিস্ট্রেশন করুন</span>
          </button>
        </Link>

        {/* Small Footer Info Text */}
        <p className="text-xs md:text-sm text-slate-300/80 font-medium tracking-wide flex items-center justify-center gap-1.5 opacity-90">
          🗓️ 29-30 June, 2026 • Zoom লাইভ
        </p>
      </div>

      {/* Golden/Yellow bottom layout accent border line matching the screenshot */}
      <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#bfa15f]"></div>
    </section>
  );
}
