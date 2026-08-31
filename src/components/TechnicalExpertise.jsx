"use client";

import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_TEXT = {
  id: {
    heading: "Fondasi Teknis",
    subheading:
      "Teknologi inti yang saya pakai buat membangun sistem yang reliable dan bisa diandalkan.",
  },
  en: {
    heading: "Technical Foundation",
    subheading:
      "The core technologies I use to build reliable, scalable systems that actually work.",
  },
};

// Nama grup & skill sengaja tetap Inggris — istilah teknis, bukan konten yang diterjemahkan
const expertiseGroups = [
  {
    title: "Frontend",
    items: ["JavaScript", "React & Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend & Systems",
    items: [
      "Golang",
      "Database Modeling",
      "Auth & Security",
      "Scalable Architecture",
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      "Git/GitHub",
      "REST APIs",
      "Testing & QA",
      "Deployment & Debugging",
    ],
  },
];

export default function TechnicalExpertise() {
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  return (
    <section
      id="skills"
      aria-labelledby="technical-expertise-heading"
      className="py-20"
    >
      <Container>
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="technical-expertise-heading"
            className="text-3xl font-title font-bold tracking-tight text-[#333] mb-4"
          >
            {t.heading}
          </h2>
          <p className="text-base font-title font-normal text-[#6c757d] max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </header>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expertiseGroups.map((group) => {
            return (
              <section
                key={group.title}
                className="bg-card/50 backdrop-blur-sm rounded-lg p-5 border border-slate-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
    hover:-translate-y-1.5 transition-all duration-300 ease-out
    cursor-default"
              >
                <h3 className="text-base font-title font-semibold text-[#333] mb-6 text-center">
                  {group.title}
                </h3>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="
    bg-blue-50 text-blue-600 font-body font-medium px-4 py-2 rounded-lg text-xs text-center
    border border-blue-100/50 transition-all duration-300 cursor-pointer
    /* Efek saat li ini di-hover langsung */
    hover:bg-blue-100 hover:border-blue-300
    /* Efek saat card (parent) di-hover (biar barengan) */
    group-hover:border-blue-200
  "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
