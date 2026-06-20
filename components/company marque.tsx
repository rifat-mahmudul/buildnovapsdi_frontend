// components/CompanyMarquee.tsx
"use client";
import React from "react";

export default function CompanyMarquee() {
  // image_7899a5.png folder structure anujayi mapping
  const companies = [
    { name: "Company 1", logo: "/company/1.jpg" },
    { name: "Company 2", logo: "/company/2.png" },
    { name: "Company 3", logo: "/company/3.png" },
    { name: "Company 4", logo: "/company/4.png" },
    { name: "Company 5", logo: "/company/5.png" },
    { name: "Company 6", logo: "/company/6.png" },
    { name: "Company 7", logo: "/company/7.png" },
    { name: "Company 8", logo: "/company/8.png" },
    { name: "Company 9", logo: "/company/9.png" },
    { name: "Company 10", logo: "/company/10.png" },
    { name: "Company 11", logo: "/company/11.png" },
    { name: "Company 12", logo: "/company/12.png" },
    { name: "Company 13", logo: "/company/13.png" },
    { name: "Company 14", logo: "/company/14.png" },
    { name: "Company 16", logo: "/company/16.png" },
  ];

  // Infinite smooth scroll dynamic loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50/60 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-xl md:text-3xl font-black tracking-tight text-slate-800 uppercase tracking-widest">
          Worked with leading companies in Bangladesh
        </h2>
        <div className="w-12 h-1 bg-[#200D5F] mx-auto mt-4 rounded-full opacity-60"></div>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full flex overflow-x-hidden group select-none">
        {/* Left & Right Shadow Fade Effect */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Moving Track */}
        <div className="flex space-x-12 md:space-x-16 items-center whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] py-2">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[110px] md:min-w-[140px] transition-all duration-300 transform hover:scale-105"
            >
              {/* Ekhane grayscale and opacity classes drop kora hoyeche jate original color full visible thake */}
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="h-10 md:h-14 w-auto object-contain max-w-[130px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const nextSibling = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (nextSibling) nextSibling.style.display = "block";
                }}
              />

              <span className="hidden text-sm md:text-base font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/50">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
