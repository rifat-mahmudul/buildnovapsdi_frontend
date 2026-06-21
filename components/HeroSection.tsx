// components/Hero.tsx
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Hero() {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target Date: 29th June 2026, 9:00 PM (21:00)
    const targetDate = new Date("2026-06-29T21:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Bengali Number Converter helper function
  const toBengaliNumber = (num: number) => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((digit) =>
        bengaliDigits[parseInt(digit)] ? bengaliDigits[parseInt(digit)] : digit,
      )
      .join("");
  };

  // Zero padding utility for countdown blocks
  const formatTime = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen flex items-center bg-gradient-to-tr from-slate-50 via-white to-purple-50/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* LEFT COLUMN: Main Content & Copywriting */}
        <div className="lg:col-span-7 flex flex-col space-y-8 animate-fade-in-up">
          {/* Core Hook Headline */}
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[1.3] md:leading-[1.25]">
            <span className="text-red-600 font-extrabold">
              ৯২% সিভিল ইঞ্জিনিয়ার
            </span>{" "}
            ভুল গাইডলাইনে পরিশ্রম করে ক্যারিয়ারের সবচেয়ে মূল্যবান সময়গুলো
            নষ্ট করে ফেলেন, কারন তারা ভালো ক্যারিয়ারের সঠিক রোড ম্যাপ গুলো কি
            জানে না।
          </h1>

          {/* Subtitle / Emotional trigger */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            যেই জিনিসটা সিদ্ধান্ত করে{" "}
            <span className="font-bold text-gray-900 underline decoration-[#200D5F] decoration-2">
              আপনার স্বপ্ন বেঁচে থাকবে নাকি মারা যাবে।
            </span>{" "}
            লাইভ ক্লাসে আপনি বুঝবেন কীভাবে সিভিল ইঞ্জিনিয়ারিং এ সফল ক্যারিয়ার
            তৈরি হয়, এবং কীভাবে সেটা ধরে রাখা যায়।
          </p>

          {/* EYE-CATCHING COUNTDOWN DISPLAY (BIG CARDS) */}
          <div className="flex flex-col space-y-3 bg-slate-50/80 border border-slate-100 p-6 rounded-2xl max-w-xl shadow-inner backdrop-blur-sm">
            <p className="text-gray-700 font-bold text-lg md:text-xl flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
              অফার শেষ হতে বাকি:
            </p>

            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {/* Days Block */}
              <div className="bg-gradient-to-b from-white to-slate-100 border border-white rounded-xl shadow-md p-3 text-center flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tight">
                  {toBengaliNumber(parseInt(formatTime(timeLeft.days)))}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                  দিন
                </span>
              </div>

              {/* Hours Block */}
              <div className="bg-gradient-to-b from-white to-slate-100 border border-white rounded-xl shadow-md p-3 text-center flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tight">
                  {toBengaliNumber(parseInt(formatTime(timeLeft.hours)))}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                  ঘণ্টা
                </span>
              </div>

              {/* Minutes Block */}
              <div className="bg-gradient-to-b from-white to-slate-100 border border-white rounded-xl shadow-md p-3 text-center flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tight">
                  {toBengaliNumber(parseInt(formatTime(timeLeft.minutes)))}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                  মিনিট
                </span>
              </div>

              {/* Seconds Block */}
              <div className="bg-gradient-to-b from-white to-slate-100 border border-white rounded-xl shadow-md p-3 text-center flex flex-col items-center justify-center bg-red-50/20">
                <span className="text-3xl md:text-4xl font-black text-red-600 tracking-tight animate-pulse">
                  {toBengaliNumber(parseInt(formatTime(timeLeft.seconds)))}
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-500 mt-1">
                  সেকেন্ড
                </span>
              </div>
            </div>
          </div>

          {/* Action Call Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link href={"#registration"}>
              <button className="w-full sm:w-auto px-8 py-4 bg-[#200D5F] text-white font-bold text-lg rounded-xl shadow-xl shadow-purple-950/20 hover:bg-[#14073d] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                আমি এখনই সিট রিসার্ভ করতে চাই
              </button>
            </Link>
            <Link href={"#curriculum"}>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold text-lg rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                আমি কি শিখবো?
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Premium Info Card Card (Matches image_79eb61.jpg Layout) */}
        <div className="lg:col-span-5 w-full max-w-md mx-auto">
          <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-6 transform transition-all duration-300 hover:shadow-purple-950/5">
            {/* Visual Header Box inside the card */}
            <div className="bg-gradient-to-br from-[#200D5F] to-[#14073d] rounded-2xl p-6 text-white relative overflow-hidden shadow-inner">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl transform translate-x-10 -translate-y-10"></div>
              <p className="text-xs uppercase tracking-widest text-purple-200 font-bold mb-1">
                Exclusive Masterclass
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                CIVIL ENGINEERING ROADMAP
              </h2>
              <div className="w-12 h-1 bg-red-500 mt-4 rounded-full"></div>
            </div>

            {/* Live Indicator Bar */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-semibold text-gray-500">
                  Class status:
                </span>
              </div>
              <span className="text-sm font-black text-red-600 bg-red-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Live soon
              </span>
            </div>

            {/* Structured Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 border border-gray-100 p-3 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Date & Time
                </p>
                <p className="text-sm font-bold text-gray-800 mt-1">
                  29-30 June, 2026
                </p>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-3 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Duration
                </p>
                <p className="text-sm font-bold text-gray-800 mt-1">2 Hours</p>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-3 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Platform
                </p>
                <p className="text-sm font-bold text-gray-800 mt-1">
                  Zoom (Live)
                </p>
              </div>
              <div className="bg-slate-50 border border-gray-100 p-3 rounded-xl">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Entry Fee
                </p>
                <p className="text-sm font-bold text-[#200D5F] mt-1">
                  ৳ ২৯৯ টাকা
                </p>
              </div>
            </div>

            {/* Full Width Info Fields */}
            <div className="space-y-3">
              <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl flex flex-col">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Link Delivery
                </p>
                <p className="text-sm font-bold text-gray-800 mt-0.5">
                  SMS + WhatsApp
                </p>
              </div>

              <div className="bg-slate-50 border border-gray-100 p-4 rounded-xl flex flex-col">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  Seat Limit
                </p>
                <p className="text-sm font-bold text-red-600 mt-0.5">
                  300 Seats Only (Filling Fast)
                </p>
              </div>
            </div>

            {/* Card Main CTA Button */}
            <Link href={"#registration"}>
              <button className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-black text-lg rounded-xl shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5">
                আমি এখনই সিট রিসার্ভ করতে চাই
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
