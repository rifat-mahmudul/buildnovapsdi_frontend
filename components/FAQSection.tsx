// components/FAQ.tsx
"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function FAQ() {
  // Toggle handle korar jonno state manager
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "১. এটা কি কোনো থিওরিটিক্যাল বা মোটিভেশনাল সেশন?",
      answer:
        "একদমই না! এটি কোনো চটকদার মোটিভেশনাল স্পিচ বা বোরিং থিওরিটিক্যাল ক্লাস নয়। এটি সম্পূর্ণ প্র্যাক্টিক্যাল এবং রিয়েল-লাইফ বেইজড কুরআন ও আধুনিক বিজ্ঞান সমর্থিত সেই গোপন ওয়ে, যা পৃথিবীর সেরা ১% সফল মানুষ ফলো করেন এমন একটি মাস্টারক্লাস। সেশন কনডাক্ট করবেন একজন ১০+ বছরের ইন্ডাস্ট্রি অভিজ্ঞতাসম্পন্ন এক্সপার্ট।",
    },
    {
      question: "২. Class Slide Pdf এবং ভাউচার কখন পাবো?",
      answer:
        "ওয়ার্কশপ শেষ হওয়ার পর আপনার WhatsApp-এ ইবুক PDF এবং ৳৫০০ গিফট ভাউচার পাঠিয়ে দেওয়া হবে।",
    },
    {
      question: "৩. ২৯৯ টাকার বাইরে আর কোনো খরচ আছে?",
      answer:
        "না, কোনো হিডেন কস্ট নেই। ২৯৯ টাকাই একমাত্র পেমেন্ট। এতে ২ দিনের লাইভ ৬ ঘণ্টা লাইভ ক্লাস, Class Slide PDF অন্তর্ভুক্ত এবং ৳৫০০ গিফট ভাউচার পাঠিয়ে দেওয়া হবে।",
    },
    {
      question: "৪. Zoom লিংক কীভাবে পাবো?",
      answer:
        "রেজিস্ট্রেশনের পর আপনাকে একটি WhatsApp গ্রুপে অ্যাড করা হবে। ক্লাস শুরুর ১০ মিনিট আগে সেই গ্রুপেই Zoom লিংক শেয়ার করা হবে।",
    },
    {
      question: "৫. আমি কি মোবাইল থেকে জয়েন করতে পারবো?",
      answer:
        "হ্যাঁ, Zoom অ্যাপ ইনস্টল করে মোবাইল বা ল্যাপটপ যেকোনো ডিভাইস থেকে জয়েন করতে পারবেন।",
    },
    {
      question: "৬. এটা কি সবার জন্য?",
      answer:
        "আপনি যদি একজন সিভিল ইঞ্জিনিয়ারিংয়ের স্টুডেন্ট হন, ফ্রেশ গ্র্যাজুয়েট হন, কিংবা সাইট ও ডিজাইনে কর্মরত জব হোল্ডার হন—যিনি ড্রাফটিংয়ের সাধারণ বৃত্ত ভেঙে নিজেকে একজন হাই-পেইড Structural Drawing Expert হিসেবে গড়ে তুলতে চান, তবে এই সেশনটি আপনার জন্যই।",
    },
    {
      question: "৭. এটা কি আসলেই কাজ করবে?",
      answer:
        "১০০% কাজ করবে। শুধু সফটওয়্যার কমান্ড নয়, যখন আপনি The Confidence Matrix এবং BNBC/ACI কোডের রিয়েল প্রয়োগ শিখবেন, তখন আপনার কাজের ডিমান্ড আন্তর্জাতিক মানে পৌঁছাবে।",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-slate-50/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#200D5F] uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full w-fit mx-auto mb-3">
            Questions & Answers
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            সাধারণ প্রশ্ন (FAQ)
          </h2>
          <div className="w-12 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:border-purple-200"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors duration-200 focus:outline-none"
                >
                  <span
                    className={`text-base md:text-lg font-bold transition-colors duration-200 ${isOpen ? "text-[#200D5F]" : "text-gray-800"}`}
                  >
                    {faq.question}
                  </span>

                  {/* Dynamic Custom Icon Arrow */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#200D5F] text-white rotate-180" : "bg-slate-100 text-gray-500"}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Accordion Content Panel (Using your CSS base logic but pure Tailwind transition layer) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] border-t border-slate-50" : "max-h-0"}`}
                >
                  <div className="p-5 md:p-6 bg-slate-50/50 text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing conversion booster trust factor info */}
        <div className="mt-12 text-center bg-purple-50/40 border border-purple-100/50 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-gray-700 font-medium text-sm md:text-base">
            আরো কোনো প্রশ্ন বা জানার কিছু আছে?
          </p>
          <Link
            href="https://wa.me/8801540754530"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-3 bg-[#200D5F] text-white font-bold text-sm rounded-xl shadow-md hover:bg-[#14073d] transition-all duration-200"
          >
            এখনি যোগাযোগ করুন
          </Link>
        </div>
      </div>
    </section>
  );
}
