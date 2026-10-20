"use client";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_HREF =
  "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.";

const TEXT = {
  id: {
    title: "Siap untuk Solusi Custom Anda?",
    description:
      "Transformasikan bisnis Anda dengan sistem berperforma tinggi dan arsitektur modern. Mari bangun sesuatu yang luar biasa bersama.",
    cta: "Mulai Proyek Anda",
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
    <div className="text-card-foreground flex flex-col gap-6 rounded-2xl bg-surface-dark max-w-4xl mx-auto w-full p-10 lg:p-14 text-center shadow-xl shadow-ink/10">
      <div>
        <h3 className="text-2xl lg:text-3xl text-white mb-3 font-bold font-title tracking-tight">
          {t.title}
        </h3>
        <p className="font-body font-normal text-on-dark-muted text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
          {t.description}
        </p>

        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2 whitespace-nowrap
            text-sm font-medium transition-all duration-300
            bg-white hover:bg-tint hover:shadow-lg hover:shadow-black/20
            active:scale-95 h-12 rounded-lg px-7 text-surface-dark font-semibold
            outline-none focus-visible:ring-2 focus-visible:ring-primary-light/60
            cursor-pointer
          "
        >
          {t.cta}
        </a>
      </div>
    </div>
  );
};

export default CtaCard;
