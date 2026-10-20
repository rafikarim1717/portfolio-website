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
      className={`inline-flex items-center gap-2 px-3 py-1.5 bg-tint text-primary rounded-full text-xs font-medium border border-tint-strong ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      {TEXT[lang]}
    </div>
  );
};

export default AvailabilityBadge;
