"use client";

import { useLanguage } from "@/context/LanguageContext";

const TEXT = {
  id: "Tersedia untuk kerja",
  en: "Available for hire",
};

const AvailabilityBadge = ({ className = "" }) => {
  const { lang } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium border border-blue-100 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>
      {TEXT[lang]}
    </div>
  );
};

export default AvailabilityBadge;
