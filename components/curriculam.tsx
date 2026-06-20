// components/Curriculum.tsx
import Link from "next/link";
import React from "react";

export default function Curriculum() {
  const learningModules = [
    {
      title: "কুরআন ও সায়েন্সের ব্লেন্ড (The 1% Secret)",
      desc: "কুরআন ও আধুনিক বিজ্ঞান সমর্থিত সেই গোপন ওয়ে, যা পৃথিবীর সেরা ১% সফল মানুষ ফলো করেন।",
    },
    {
      title: "দ্য ৯২% ট্র্যাপ (The 92% Trap) ভাঙার ফর্মুলা",
      desc: "ইঞ্জিনিয়ারের ক্যারিয়ার থমকে যাওয়ার আসল কারণ ও তার সমাধান।",
    },
    {
      title: "দ্য কনফিডেন্স ম্যাট্রিক্স (The Confidence Matrix)",
      desc: "(The Science of Real Confidence) সেশনে রিভিল করা হবে সেই সায়েন্স এবং ৩টি ধাপের Effective Strategy, যা আপনার ভেতরের কনফিডেন্সকে স্থায়ী ও আনশেকেবল (Unshakable) করে তুলবে।",
    },
    {
      title: "সাইকোলজি বেইজড (The Genius Shift)",
      desc: "দুইটি Rich People Psychology যা আপনার চিন্তার ধরন পরিবর্তন করে দিবে - তা পরিষ্কারভাবে বুঝবেন।",
    },
    {
      title: "ড্রাফটার টু এক্সপার্ট (The High Paid Expert mindset)",
      desc: "ব্যাকডেটেড ও সাধারণ ড্রাফটিংয়ের বৃত্ত ভেঙে নিজেকে একজন ইন্টারন্যাশনাল স্ট্যান্ডার্ড, হাই-পেইড 'Structural Drawing Expert' হিসেবে গড়ার সুনির্দিষ্ট গাইডলাইন।",
    },
  ];

  return (
    <section id="curriculum" className="py-20 px-4 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        {/* MAIN PANEL (Matches image_797f21.png Layout structure) */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header Box with Brand Color Theme */}
          <div className="bg-[#200D5F] text-white text-center px-6 py-10 md:py-12 space-y-3 bg-gradient-to-b from-[#200D5F] to-[#14073d]">
            <h2 className="text-2xl md:text-4xl font-black tracking-wide">
              ২ দিনের লাইভ ট্রেইনিং এ আপনি যা শিখবেন
            </h2>
            <p className="text-purple-200/90 text-sm md:text-base font-medium max-w-3xl mx-auto leading-relaxed">
              এই প্রশ্নগুলোর পরিষ্কার ও বাস্তব উত্তর আপনি সেশনেই পাবেন যেগুলো
              সরাসরি জীবনে প্রয়োগ করা যায়।
            </p>
          </div>

          {/* List Rows Container */}
          <div className="p-4 md:p-8 space-y-4 bg-slate-50/40">
            {learningModules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-purple-200 group text-center"
              >
                {/* Module Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#200D5F] transition-colors duration-200">
                  {module.title}
                </h3>

                {/* Module Divider */}
                <div className="w-8 h-0.5 bg-gray-200 my-3 mx-auto group-hover:w-16 group-hover:bg-[#200D5F] transition-all duration-300 rounded-full"></div>

                {/* Module Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                  {module.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION CTA BUTTON */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Link href="#registration">
            <button className="w-full sm:w-auto px-10 py-4 bg-[#200D5F] text-white font-black text-lg rounded-xl shadow-xl shadow-purple-950/20 hover:bg-[#14073d] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
              আমি এখনই সিট রিসার্ভ করতে চাই
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
