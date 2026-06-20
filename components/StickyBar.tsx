"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Student jodi explicit close kore dey, tobe scroll tracking hobe na
    if (isDismissed) return;

    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isDismissed]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-[#200D5F] border-t border-white/10 z-50 transition-transform duration-300 shadow-[0_-8px_30px_rgb(32,13,95,0.15)] ${
        visible && !isDismissed ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-5 py-3.5 flex items-center justify-between gap-4 flex-wrap max-w-5xl relative">
        {/* Left Elements Panel Group */}
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          <p className="text-white text-xs sm:text-sm font-medium">
            🔥 সীমিত সময়ের অফার! কোর্স ফি মাত্র{" "}
            <span className="text-yellow-400 font-bold">২৯৯৳</span>{" "}
            <span className="text-slate-300 line-through text-xs opacity-60">
              ৫৯৮০৳
            </span>
          </p>
        </div>

        {/* Right Action Elements Layout Container */}
        <div className="flex items-center gap-3">
          <Link
            href="#registration"
            className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black text-xs sm:text-sm py-2.5 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shadow-md active:scale-95"
          >
            ২৯৯৳ অফারে সিট বুক করুন →
          </Link>

          {/* Interactive Modern Fluid Cross Button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Close Sticky Bar"
            className="text-slate-400 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-150 active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
