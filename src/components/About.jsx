"use client";

import { LayoutTemplate, ShoppingCart, Settings } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const aboutIntro = {
  id: {
    title: "Website yang Tumbuh Bareng Bisnis Lo.",
    paragraphs: [
      "Halo! Gue Rafi, web developer dengan 5+ tahun pengalaman ngerjain sistem buat BUMN & bank nasional. Sekarang gue bantu pemilik bisnis bikin website yang beneran kepake: udah 24+ proyek, dari website bisnis, toko online, sampai sistem custom.",
    ],
  },
  en: {
    title: "Built for Growth. Tailored to Your Needs.",
    paragraphs: [
      "Hi! I'm Rafi, a web developer with 5+ years building systems for state-owned enterprises and a national bank. Now I help business owners build websites that actually work: 24+ projects so far, from business websites and online stores to custom systems.",
    ],
  },
};

const services = [
  {
    title: { id: "Website Bisnis", en: "Business Website" },
    description: {
      id: "Company profile atau landing page yang bikin bisnis lo kelihatan kredibel dan gampang dihubungi.",
      en: "Establish credibility and generate leads with a professional company profile or high-converting landing page. Clear, fast-loading, optimized for your audience.",
    },
    icon: LayoutTemplate,
  },
  {
    title: { id: "Toko Online", en: "E-Commerce Store" },
    description: {
      id: "Keranjang, pembayaran, stok, sampai data pelanggan. Pembeli bisa checkout sendiri tanpa harus DM.",
      en: "Turn browsers into buyers with a complete online store—shopping cart, secure payments, inventory tracking, and customer management built in.",
    },
    icon: ShoppingCart,
  },
  {
    title: { id: "Sistem Custom", en: "Custom Web Systems" },
    description: {
      id: "Sistem yang ngikutin cara bisnis lo jalan. Contoh: booking & riwayat treatment pasien buat klinik.",
      en: "Software built around how your business runs. Example: a booking & patient treatment-history system for a clinic.",
    },
    icon: Settings,
  },
];

const About = () => {
  const { lang } = useLanguage();
  const intro = aboutIntro[lang];

  return (
    <section id="about" className="py-20 bg-surface-soft">
      <Container>
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-ink tracking-tight text-balance mb-6">
            {intro.title}
          </h2>

          <div className="max-w-3xl mx-auto text-body">
            {intro.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-base lg:text-lg text-muted font-body font-normal leading-relaxed text-balance ${
                  index !== intro.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title.en}
                className="
          group relative flex flex-col gap-4 p-6 rounded-xl h-full border
          bg-white/70 leading-5 border-slate-200
          /* Efek Hover */
          hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
          hover:-translate-y-1.5 transition-all duration-300 ease-out
          cursor-default
        "
              >
                <div className="flex gap-3 items-center">
                  <div className="flex-shrink-0">
                    {/* Box Icon - Warnanya berubah pas card di-hover karena class 'group-hover' */}
                    <div className="w-12 h-12 rounded-xl bg-tint flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-tint-strong">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-title font-semibold text-lg text-ink transition-colors duration-300">
                    {service.title[lang]}
                  </h3>
                </div>

                <div>
                  <p className="font-body font-normal text-[15px] text-muted leading-relaxed">
                    {service.description[lang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default About;
