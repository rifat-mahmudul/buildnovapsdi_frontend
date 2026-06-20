// components/Mentor.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Mentor() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#200D5F] uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full w-fit mx-auto mb-3">
            Expert Guidance
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Meet Your Mentor
          </h2>
          <div className="w-12 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: Professional Frame for Mentor Image */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#200D5F] to-purple-600 rounded-3xl transform rotate-3 scale-102 opacity-10 blur-sm"></div>

            {/* Main Image Frame Wrapper */}
            <div className="relative bg-white border border-slate-100 p-4 rounded-3xl shadow-xl w-full max-w-sm transform transition-all duration-300 hover:scale-[1.01]">
              <div className="aspect-[4/5] w-full bg-slate-100 rounded-2xl overflow-hidden relative group">
                {/* Placeholder image tag - app/public/mentor.jpg path-e image rakhben */}
                <Image
                  src="/mentor.jpeg"
                  alt="Md. Abu Shaid"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback visually if image doesn't exist yet
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-5 -right-4 md:-right-6 bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 px-5 rounded-2xl shadow-xl text-center">
                <p className="text-xl md:text-2xl font-black tracking-tight">
                  ১০+
                </p>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-wide opacity-90">
                  Years Exp.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Mentor Details & Copywriting */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
                Md. Abu Shaid
              </h3>
              <p className="text-base md:text-lg font-bold text-[#200D5F] flex items-center gap-2">
                Founder & The Mastermind Coach
              </p>
            </div>

            {/* Highlight Metric Badges */}
            <div className="inline-flex flex-wrap gap-2.5 bg-slate-100/80 border border-slate-200/40 p-2 rounded-xl text-gray-700 text-xs md:text-sm font-extrabold shadow-inner">
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                ⚡ 10+ Years Industry Experienced
              </span>
              <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                💼 200+ Projects Completed
              </span>
            </div>

            {/* Core Narrative Paragraph */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify font-medium">
              10+ বছরের রিয়েল-ফিল্ড এক্সপেরিয়েন্স এবং ২০০টিরও বেশি বড়
              প্রজেক্টের স্ট্রাকচারাল ডিটেইলিং মাস্টারমাইন্ড। তিনি দেশের বড় বড়
              মেগা স্ট্রাকচার ও সিভিল অ্যাভিয়েশনের প্রজেক্টের ড্রয়িং ডিজাইন
              নিয়ে কাজ করেছেন।
            </p>

            {/* Feature Highlight Callout Box */}
            <div className="border-l-4 border-[#200D5F] bg-purple-50/50 p-4 md:p-5 rounded-r-2xl shadow-sm">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                "নিজের দীর্ঘ ক্যারিয়ারের অভিজ্ঞতা, আধুনিক নিউরোসায়েন্স এবং
                কুরআন থেকে পাওয়া লাইফ-চেঞ্জিং গাইডলাইনের কম্বিনেশনে তিনি তৈরি
                করেছেন এই বিশেষ শিক্ষণ পদ্ধতি—যা সিভিল ইঞ্জিনিয়ারদের
                চিন্তাভাবনা চিরতরে বদলে দিয়ে তাদের তৈরি করছে হাই-পেইড এক্সপার্ট
                হিসেবে।"
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4">
              <Link href={"#registration"}>
                {" "}
                <button className="w-full sm:w-auto px-8 py-4 bg-[#200D5F] text-white font-bold text-base rounded-xl shadow-lg shadow-purple-950/10 hover:bg-[#14073d] transition-all duration-300 transform hover:-translate-y-0.5">
                  মাস্টারমাইন্ড মেন্টরের সাথে যুক্ত হোন
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
