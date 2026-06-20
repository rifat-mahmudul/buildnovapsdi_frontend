// components/CourseProjects.tsx
"use client";
import React from "react";

export default function CourseProjects() {
  // image_788efc.png file-er data anujayi explicit mapping
  const projects = [
    { id: 1, img: "/your-project/1.png", alt: "Course Project 1" },
    { id: 2, img: "/your-project/2.png", alt: "Course Project 2" },
    { id: 3, img: "/your-project/3.png", alt: "Course Project 3" },
    { id: 4, img: "/your-project/4.png", alt: "Course Project 4" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-[#200D5F] uppercase tracking-widest bg-purple-50 px-4 py-1.5 rounded-full w-fit mx-auto mb-3">
            Course Curriculum Visuals
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            যা যা শিখবেন তার বাস্তব প্রজেক্ট গ্যালারি
          </h2>
          <div className="w-12 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Premium Grid Blueprint Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white p-3 rounded-2xl border border-slate-200/60 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden"
            >
              {/* Image Frame Wrapper */}
              <div className="relative w-full aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />

                {/* Clean Subtle Overlay Highlight on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200D5F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
