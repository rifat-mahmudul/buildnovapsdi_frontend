// components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#200D5F] text-white py-4 px-4 shadow-md backdrop-blur-sm bg-opacity-95 transition-all duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
        <p className="text-sm md:text-base font-medium tracking-wide animate-pulse">
          সীমিত সময়ের জন্য ~ মাত্র{" "}
          <span className="font-bold text-yellow-400 text-lg md:text-xl mx-1">
            ২৯৯
          </span>{" "}
          টাকা{" "}
          <span className="line-through text-gray-400 text-xs md:text-sm mx-1">
            ৫৯৮০
          </span>{" "}
          টাকার কোর্স
        </p>
      </div>
    </nav>
  );
}
