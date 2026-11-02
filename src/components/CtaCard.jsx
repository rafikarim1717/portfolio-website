"use client";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_HREF =
  "https://wa.me/6287879206730?text=Halo%20Rafi,%20mau%20tanya%20soal%20jasa%20website.";

const TEXT = {
  id: {
    title: "Siap Bikin Solusi Buat Bisnis Lo?",
    description:
      "Bikin bisnis lo jalan lebih rapi dengan sistem yang cepat dan modern. Yuk, kita bangun bareng.",
    cta: "Mulai Proyek Lo",
  },
  en: {
    title: "Ready for Your Custom Solution?",
    description:
      "Transform your business with high-performance systems and modern architecture. Let's build something exceptional together.",
    cta: "Start Your Project",
  },
};

const CtaCard = () => {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  return (
    <div className="relative overflow-hidden rounded-3xl max-w-4xl mx-auto w-full px-6 py-12 sm:p-12 lg:p-16 text-center border border-primary-light/15 bg-[radial-gradient(120%_140%_at_50%_0%,#11524b_0%,var(--surface-dark)_55%,#082320_100%)] shadow-[0_30px_60px_-30px_rgba(11,46,43,0.55)]">
      {/* Pola titik halus, memudar ke bawah */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(70%_70%_at_50%_0%,#000_30%,transparent_80%)]"
      />
      <div className="relative">
        <h3 className="text-2xl lg:text-3xl text-white mb-3 font-bold font-title tracking-tight text-balance">
          {t.title}
        </h3>
        <p className="font-body font-normal text-on-dark-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto text-balance">
          {t.description}
        </p>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2.5 whitespace-nowrap
            h-12 px-7 rounded-full bg-white text-surface-dark
            font-body font-semibold text-[15px]
            shadow-[0_10px_30px_-10px_rgba(94,234,212,0.55)]
            hover:bg-tint hover:shadow-[0_14px_36px_-10px_rgba(94,234,212,0.7)]
            active:scale-95 transition-all duration-300
            outline-none focus-visible:ring-4 focus-visible:ring-primary-light/40
            cursor-pointer
          "
        >
          <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-primary" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.88 9.88 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.88 9.88" />
          </svg>
          {t.cta}
        </a>
      </div>
    </div>
  );
};

export default CtaCard;
