"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic buat ngecek posisi scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        p-3 rounded-full bg-white border border-blue-500/20 shadow-lg shadow-blue-500/10
        text-[#4251EB] hover:bg-[#4251EB] hover:text-white
        transition-all duration-300 ease-in-out transform
        ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50 pointer-events-none"}
        group active:scale-90
      `}
      aria-label="Back to Top"
    >
      <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />

      {/* Tooltip kecil kalo mau lebih informatif */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Back to Top
      </span>
    </button>
  );
};

export default BackToTop;
