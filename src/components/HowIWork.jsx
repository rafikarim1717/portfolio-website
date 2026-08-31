"use client";

import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_TEXT = {
  id: {
    heading: "Cara Saya Bekerja",
    subheading:
      "Proses yang jelas dan dibangun di atas komunikasi terbuka dan progres yang stabil — dari obrolan pertama sampai support setelah launching.",
  },
  en: {
    heading: "How I Work",
    subheading:
      "A straightforward process built around clear communication and steady progress — from first conversation to post-launch support.",
  },
};

const steps = [
  {
    number: "01",
    title: { id: "Pahami", en: "Understand" },
    description: {
      id: "Saya mulai dengan menggali tujuan bisnis, alur kerja, dan pain point Anda — bukan cuma requirement di atas kertas — biar solusinya beneran cocok sama cara Anda beroperasi.",
      en: "I start by digging into your business goals, workflows, and pain points — not just requirements on paper — so the solution actually fits how you operate.",
    },
  },
  {
    number: "02",
    title: { id: "Desain", en: "Design" },
    description: {
      id: "Saya memetakan arsitektur, alur data, dan UI sebelum menulis satu baris kode pun, direncanakan buat scalability dan kemudahan maintenance sejak hari pertama.",
      en: "I map out the architecture, data flow, and UI before writing a single line of code, planning for scale and maintainability from day one.",
    },
  },
  {
    number: "03",
    title: { id: "Uji & Iterasi", en: "Test & Iterate" },
    description: {
      id: "Saya bangun feedback loop yang ketat — testing sejak awal, menangkap masalah dengan cepat, dan menyempurnakan berdasarkan penggunaan nyata, bukan asumsi.",
      en: "I build in tight feedback loops — testing early, catching issues fast, and refining based on real usage instead of assumptions.",
    },
  },
  {
    number: "04",
    title: { id: "Rilis & Support", en: "Deliver & Support" },
    description: {
      id: "Saya deliver sistem yang siap produksi dan tetap mendampingi setelah launching buat perbaikan, penyesuaian, dan iterasi lanjutan seiring bisnis Anda berkembang.",
      en: "I ship production-ready systems and stay on after launch for fixes, tweaks, and future iterations as your business grows.",
    },
  },
];

const HowIWork = () => {
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  return (
    <section id="process" className="py-20 bg-blue-600/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-[#333] tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-title font-normal text-base text-[#6c757d] max-w-2xl mx-auto">
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
                bg-white/70 leading-5 border-slate-200
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-1.5 transition-all duration-300 ease-out
                cursor-default
              "
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-title font-bold text-lg transition-colors duration-300 group-hover:bg-blue-100">
                {step.number}
              </div>

              <h3 className="font-title font-semibold text-[17px] text-[#333333]">
                {step.title[lang]}
              </h3>

              <p className="font-body font-normal text-[13px] text-[#6c757d] leading-5">
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
