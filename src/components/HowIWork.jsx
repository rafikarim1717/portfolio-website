"use client";

import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_TEXT = {
  id: {
    heading: "Cara Gue Kerja",
    subheading:
      "Dari ngobrol pertama sampai website online, lo tau progresnya di tiap tahap.",
  },
  en: {
    heading: "How I Work",
    subheading:
      "From our first chat to your site going live, you know where things stand at every step.",
  },
};

const steps = [
  {
    number: "01",
    title: { id: "Ngobrol", en: "Talk" },
    description: {
      id: "Lo ceritain bisnis lo, gue tanya hal-hal penting biar solusinya pas.",
      en: "You tell me about your business, I ask the important questions so the solution fits.",
    },
  },
  {
    number: "02",
    title: { id: "Desain", en: "Design" },
    description: {
      id: "Lo lihat dan setuju sama tampilannya dulu, sebelum mulai dibikin.",
      en: "You see and approve the design first, before anything gets built.",
    },
  },
  {
    number: "03",
    title: { id: "Bikin & Revisi", en: "Build & Revise" },
    description: {
      id: "Gue kerjain, lo cek progresnya, dan revisi sampai pas.",
      en: "I build it, you check the progress, and we revise until it fits.",
    },
  },
  {
    number: "04",
    title: { id: "Online & Support", en: "Launch & Support" },
    description: {
      id: "Website live, lo diajarin cara pakainya, dan gue tetap bantu kalau ada kendala.",
      en: "Your site goes live, I show you how to use it, and I stay around if anything comes up.",
    },
  },
];

const HowIWork = () => {
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  return (
    <section id="process" className="py-20 bg-surface-dark">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-white tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-title font-normal text-base lg:text-lg text-on-dark-muted leading-relaxed max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group relative flex flex-col gap-4 p-6 rounded-xl h-full border
                bg-white/5 leading-5 border-white/10
                hover:border-primary-light/50 hover:shadow-xl hover:shadow-black/20
                hover:-translate-y-1.5 transition-all duration-300 ease-out
                cursor-default
              "
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light/15 flex items-center justify-center text-primary-light font-title font-bold text-lg transition-colors duration-300 group-hover:bg-primary-light/25">
                {step.number}
              </div>

              <h3 className="font-title font-semibold text-lg text-white">
                {step.title[lang]}
              </h3>

              <p className="font-body font-normal text-[15px] text-on-dark-muted leading-relaxed">
                {step.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowIWork;
