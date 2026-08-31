"use client";

import { MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const HERO_DATA = {
  id: {
    title: "Website Anda Harus Mencerminkan Bisnis Anda",
    description:
      "Kebanyakan bisnis belum punya kehadiran online, atau punya website yang gak berfungsi—susah dinavigasi, desainnya kurang oke, atau gagal mengonversi pengunjung. Saya bikin website yang beneran menyelesaikan masalah ini: profesional, jelas, dan dirancang buat mendorong pertumbuhan bisnis dan kredibilitas.",
    ctaDesktop: "Chat via WhatsApp",
  },
  en: {
    title: "Your Website Should Reflect Your Business",
    description:
      "Most businesses either lack an online presence or have a website that doesn't work—difficult to navigate, poor design, or fails to convert visitors. I build websites that actually solve this: professional, clear, and designed to drive business growth and credibility.",
    ctaDesktop: "Message on WhatsApp",
  },
};

const role = "Software Engineer";

const cta = {
  mobileLabel: "WhatsApp",
  href: "https://wa.me/6287879206730?text=Hi%20Rafi,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda.",
  icon: MessageCircle,
};

const trustedBy = [
  { name: "Genova", src: "/logo/logo-genova.jpg" },
  { name: "Ikonoa", src: "/logo/logo-ikonoa.jpg" },
  { name: "Seven Retail", src: "/logo/logo-seven-new-last.svg" },
  { name: "Wisma 52", src: "/logo/logo-wisma-52.png" },
  {
    name: "PT Multi Sarana Pelindung",
    src: "/logo/logo-multi-sarana-pelindung.webp",
  },
];

const Hero = () => {
  const { lang } = useLanguage();
  const t = HERO_DATA[lang];
  const titleWords = t.title.split(" ");

  return (
    <section
      id="home"
      className="min-h-[calc(100dvh-4rem)] flex flex-col justify-center py-20"
    >
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge Role */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-blue-100">
            {role}
          </div>

          {/* Title - Value proposition, not a generic greeting */}
          <h1 className="font-title font-bold text-3xl md:text-4xl lg:text-6xl text-[#333333] tracking-tight mb-4">
            {titleWords.slice(0, -3).join(" ")}{" "}
            <span className="text-blue-600">
              {titleWords.slice(-3).join(" ")}
            </span>
          </h1>

          {/* Description */}
          <p className="font-title font-normal text-base text-[#6c757d] leading-6 max-w-3xl mx-auto mb-8">
            {t.description}
          </p>

          {/* CTA Section - single, primary action */}
          <div className="flex items-center justify-center mb-14">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 font-body cursor-pointer font-medium inline-flex items-center justify-center gap-2 rounded-full bg-[#4251EB] text-white px-7 sm:px-9 text-sm shadow-md shadow-[#4251EB]/20 transition-all duration-300 hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30 active:scale-95 whitespace-nowrap"
            >
              <cta.icon className="w-4 h-4" />
              <span className="sm:hidden">{cta.mobileLabel}</span>
              <span className="hidden sm:inline">{t.ctaDesktop}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
