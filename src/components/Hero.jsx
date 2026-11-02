"use client";

import { MessageCircle } from "lucide-react";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const HERO_DATA = {
  id: {
    title: "Website yang bikin pelanggan percaya, lalu beli.",
    description:
      "Gue bantu bisnis lokal tampil profesional online, dari website profil, toko online, sampai sistem yang ngikutin cara kerja lo.",
    stats: [
      { value: "24+", label: "Proyek" },
      { value: "5+", label: "Tahun" },
      { value: "BUMN & Enterprise", label: "Pengalaman" },
    ],
    ctaDesktop: "Chat via WhatsApp",
  },
  en: {
    title: "Websites that make customers trust you, then buy.",
    description:
      "I help local businesses look professional online, from company profiles and online stores to systems built around how you work.",
    stats: [
      { value: "24+", label: "Projects" },
      { value: "5+", label: "Years" },
      { value: "SOE & Enterprise", label: "Experience" },
    ],
    ctaDesktop: "Message on WhatsApp",
  },
};

const role = "Web Developer · Jakarta";

const cta = {
  mobileLabel: "WhatsApp",
  href: "https://wa.me/6287879206730?text=Halo%20Rafi,%20mau%20tanya%20soal%20jasa%20website.",
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge Role */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tint text-primary text-xs md:text-sm font-bold uppercase tracking-widest mb-6 border border-tint-strong">
            {role}
          </div>

          {/* Title - Value proposition, not a generic greeting */}
          <h1 className="font-title font-bold text-3xl md:text-4xl lg:text-6xl text-ink tracking-tight text-balance mb-5">
            {titleWords.slice(0, -3).join(" ")}{" "}
            <span className="text-primary">
              {titleWords.slice(-3).join(" ")}
            </span>
          </h1>

          {/* Description */}
          <p className="font-body font-normal text-base lg:text-lg text-muted leading-relaxed text-balance max-w-xl mx-auto mb-8">
            {t.description}
          </p>

          {/* CTA Section - single, primary action */}
          <div className="flex items-center justify-center mb-10">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 font-body cursor-pointer font-medium inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-7 sm:px-9 text-sm shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30 active:scale-95 whitespace-nowrap"
            >
              <cta.icon className="w-4 h-4" />
              <span className="sm:hidden">{cta.mobileLabel}</span>
              <span className="hidden sm:inline">{t.ctaDesktop}</span>
            </a>
          </div>

          {/* Stats - bukti singkat */}
          <dl className="flex items-stretch justify-center divide-x divide-line">
            {t.stats.map((stat) => (
              <div key={stat.label} className="px-4 sm:px-8 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-title font-extrabold text-lg sm:text-2xl text-ink tracking-tight leading-tight">
                  {stat.value}
                </dd>
                <dd className="font-body text-xs sm:text-sm text-muted mt-0.5">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
