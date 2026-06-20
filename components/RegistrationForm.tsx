// components/RegistrationForm.tsx
"use client";

import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showBankDetails, setShowBankDetails] = useState(true); // Default open keeping bank focus clear

  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    paymentMethod: "bKash",
    senderNumber: "",
    transactionId: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const templateParams = {
        to_email: "civil1632@gmail.com",
        from_name: form.name,
        from_email: form.email || "not-provided@email.com",
        phone: form.phone,
        whatsapp_number: form.whatsapp,
        payment_method: form.paymentMethod,
        sender_number: form.senderNumber,
        transaction_id: form.transactionId,
        name: form.name,
        email: form.email || "Not provided",
        date: new Date().toLocaleString("bn-BD", {
          timeZone: "Asia/Dhaka",
        }),
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID as string,
        EMAILJS_TEMPLATE_ID as string,
        templateParams,
        EMAILJS_PUBLIC_KEY as string,
      );

      if (result.status === 200) {
        setSubmitted(true);
      } else {
        throw new Error("ইমেইল পাঠাতে সমস্যা হয়েছে");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError(
        "দুঃখিত, ভেরিফিকেশন রিকোয়েস্ট পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="registration"
      className="pb-24 bg-gradient-to-b from-white to-slate-50/60 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#200D5F]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-sm font-black text-[#200D5F] uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full">
            Enrollment Gateway
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-4 tracking-tight">
            মাস্টারক্লাসে আপনার সিট{" "}
            <span className="text-[#0066cc]">নিশ্চিত করুন</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
            নিচের যেকোনো একটি পেমেন্ট গেটওয়ে ব্যবহার করে কোর্স ফি সেন্ড
            মানি/ট্রান্সফার করুন এবং ভেরিফিকেশন তথ্য সাবমিট করুন।
          </p>
        </div>

        {/* Core Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* LEFT: Premium Payment Directory & Verified Real Details */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#200D5F] to-[#140640] text-white p-6 md:p-8 rounded-3xl shadow-xl border border-[#200D5F]/20 space-y-6">
            <div>
              <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl w-fit mb-4 border border-white/10">
                <span className="text-xs font-bold text-yellow-400">
                  💰 স্পেশাল অফার কোর্স ফি
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">২৯৯৳</span>
                <span className="text-sm text-slate-300 line-through opacity-60">
                  ৫৯৮০৳
                </span>
              </div>
            </div>

            {/* Mobile Banking Accounts Matrix (Rocket Completely Removed) */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <h4 className="font-bold text-sm text-slate-200 uppercase tracking-wider mb-2">
                📱 Mobile Banking (Send Money):
              </h4>

              {/* bKash */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-1 relative overflow-hidden group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">
                    bKash
                  </span>
                  <span className="text-[10px] bg-pink-500/20 text-pink-300 font-bold px-2 py-0.5 rounded-full">
                    Personal
                  </span>
                </div>
                <p className="text-xl font-mono font-black tracking-wider text-white mt-1 select-all">
                  01753224744
                </p>
              </div>

              {/* Nagad */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-1 relative overflow-hidden group">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
                    Nagad
                  </span>
                  <span className="text-[10px] bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded-full">
                    Personal
                  </span>
                </div>
                <p className="text-xl font-mono font-black tracking-wider text-white mt-1 select-all">
                  01540754530
                </p>
              </div>
            </div>

            {/* Bank Details Accent Box */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setShowBankDetails(!showBankDetails)}
                className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-200"
              >
                <span className="flex items-center gap-2">
                  🏛️ ব্যাংক অ্যাকাউন্ট ডিটেইলস
                </span>
                <span
                  className={`transform transition-transform duration-200 ${showBankDetails ? "rotate-180" : ""}`}
                >
                  👇
                </span>
              </button>

              {showBankDetails && (
                <div className="mt-3 bg-black/20 border border-white/5 rounded-2xl p-4 space-y-2.5 text-xs font-medium text-slate-200 leading-relaxed animate-fadeIn">
                  <p>
                    <span className="text-slate-400">Bank Name:</span> Mutual
                    Trust Bank Limited
                  </p>
                  <p>
                    <span className="text-slate-400">Account Name:</span> MD.
                    ABU SHAID
                  </p>
                  <p>
                    <span className="text-slate-400">Account No:</span>{" "}
                    <span className="font-mono font-bold text-white select-all">
                      1311010504136
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-400">Branch Address:</span>{" "}
                    Fahad Plaza, Plot 1 & 2, Road No 1, Section – 10, Mirpur,
                    Dhaka 1216
                  </p>
                  <p>
                    <span className="text-slate-400">SWIFT Code:</span>{" "}
                    <span className="font-mono text-white">MTBLBDDH</span>
                  </p>
                </div>
              )}
            </div>

            <p className="text-[11px] text-yellow-300/80 leading-normal border-t border-white/10 pt-4">
              ⚠️ বিকাশ এবং নগদ থেকে টাকা পাঠানোর সময় অবশ্যই **Send Money** অপশন
              ব্যবহার করবেন। ব্যাংক ট্রান্সফার এর ক্ষেত্রে যেকোনো ব্যাংকিং অ্যাপ
              বা ব্রাঞ্চ থেকে ফান্ড ট্রান্সফার করতে পারবেন।
            </p>
          </div>

          {/* RIGHT: Validation Form Workspace */}
          <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-lg">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                <p className="font-medium">⚠️ {error}</p>
              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  আপনার সম্পূর্ণ নাম <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] rounded-xl text-sm font-medium outline-none transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  মোবাইল নাম্বার <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] rounded-xl text-sm font-medium outline-none transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  WhatsApp নাম্বার <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] rounded-xl text-sm font-medium outline-none transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  ইমেইল এড্রেস (ঐচ্ছিক)
                </label>
                <input
                  type="email"
                  placeholder="example@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] rounded-xl text-sm font-medium outline-none transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2 my-1 border-t border-dashed border-slate-200"></div>

              {/* Updated Selection Interface Container without Rocket */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  পেমেন্ট মাধ্যম সিলেক্ট করুন{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {["bKash", "Nagad", "Bank"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() =>
                        setForm({ ...form, paymentMethod: method })
                      }
                      className={`py-3 text-center rounded-xl text-xs font-bold border-2 transition-all duration-150 ${
                        form.paymentMethod === method
                          ? "border-[#200D5F] bg-[#200D5F]/5 text-[#200D5F]"
                          : "border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      {method === "Bank" ? "🏛️ Bank Transfer" : method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {form.paymentMethod === "Bank"
                    ? "যে ব্যাংক একাউন্ট/নাম্বার থেকে পাঠিয়েছেন *"
                    : "যে নাম্বার থেকে টাকা পাঠিয়েছেন *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    form.paymentMethod === "Bank"
                      ? "Account No বা Wallet No লিখুন"
                      : "01XXXXXXXXX"
                  }
                  value={form.senderNumber}
                  onChange={(e) =>
                    setForm({ ...form, senderNumber: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] bg-slate-50/50 rounded-xl text-sm font-medium outline-none transition-all duration-200"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {form.paymentMethod === "Bank"
                    ? "Reference / Ref No *"
                    : "Transaction ID (TrxID) *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    form.paymentMethod === "Bank"
                      ? "ব্যাংক ট্রান্সফার Ref/Trx নং লিখুন"
                      : "X7K9LM4P2"
                  }
                  value={form.transactionId}
                  onChange={(e) =>
                    setForm({ ...form, transactionId: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-slate-200 focus:border-[#200D5F] bg-slate-50/50 rounded-xl text-sm font-mono font-bold outline-none transition-all duration-200 uppercase"
                  disabled={loading}
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-[#200D5F] hover:bg-[#150645] text-white font-bold text-base py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading
                    ? "ভেরিফিকেশন সাবমিট হচ্ছে..."
                    : "পেমেন্ট ভেরিফিকেশন রিকোয়েস্ট পাঠান →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS POPUP MODAL WINDOW */}
      {submitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 md:p-8 text-center shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>

            <h3 className="text-2xl font-black text-slate-800 mb-1">
              রিকোয়েস্ট সফলভাবে জমা হয়েছে!
            </h3>
            <p className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full w-fit mx-auto mb-5">
              Payment Status: Pending Verification
            </p>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
              <p>
                আপনার তথ্য সফলভাবে আমাদের ডাটাবেজে রেকর্ড করা হয়েছে। এডমিন টিম
                আপনার transaction id বা bank reference চেক করে ২৪ ঘন্টার ভেতর
                পেমেন্ট অনুমোদন করবে।
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-left">
                <p className="font-bold text-slate-800 text-xs flex items-center gap-1.5 mb-1.5">
                  <span>🚨</span> গুরুত্বপূর্ণ শেষ ধাপ:
                </p>
                <p className="text-xs text-slate-500">
                  ক্লাসের জুম লিংক, নোটিশ এবং সকল প্রিমিয়াম ডকুমেন্ট পেতে নিচের
                  বাটনে ক্লিক করে আমাদের **অফিসিয়াল প্রাইভেট হোয়াটসঅ্যাপ
                  গ্রুপে** এখনই জয়েন করে রাখুন।
                </p>
              </div>
            </div>

            <a
              href="https://chat.whatsapp.com/JvbGKUmACMc7tGhq0LdVrc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-black text-base py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              <span>💬</span>
              <span>WhatsApp গ্রুপে জয়েন করুন</span>
            </a>

            <button
              onClick={() => {
                setSubmitted(false);
                setForm({
                  name: "",
                  phone: "",
                  whatsapp: "",
                  email: "",
                  paymentMethod: "bKash",
                  senderNumber: "",
                  transactionId: "",
                });
              }}
              className="mt-4 text-[11px] text-slate-400 hover:text-slate-600 font-bold tracking-wide uppercase transition-colors"
            >
              উইন্ডোটি বন্ধ করুন
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
