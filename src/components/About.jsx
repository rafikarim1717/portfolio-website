"use client";

import { LayoutTemplate, ShoppingCart, Settings } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";

const aboutIntro = {
  id: {
    title: "Dibangun untuk Berkembang. Disesuaikan dengan Kebutuhan Anda.",
    paragraphs: [
      "Halo! Saya Rafi, Software Engineer dengan 5+ tahun pengalaman di enterprise development (sebelumnya di BRI), sekarang membantu pemilik bisnis membangun solusi yang beneran cocok buat bisnis mereka.",
      "Saya sudah mengerjakan 24+ proyek di tiga area utama: online presence profesional, toko e-commerce, dan sistem custom yang dirancang buat menyelesaikan tantangan operasional spesifik.",
    ],
  },
  en: {
    title: "Built for Growth. Tailored to Your Needs.",
    paragraphs: [
      "Hi! I'm Rafi, a Software Engineer with 5+ years in enterprise development (previously at BRI) and now helping business owners build solutions that actually work for their business.",
      "I've delivered 24+ projects across three main areas: professional online presence, e-commerce stores, and custom systems designed to solve specific operational challenges.",
    ],
  },
};

const services = [
  {
    title: { id: "Website Bisnis", en: "Business Website" },
    description: {
      id: "Bangun kredibilitas dan hasilkan leads lewat company profile profesional atau landing page yang tinggi konversinya. Jelas, cepat diakses, dioptimalkan buat audiens Anda.",
      en: "Establish credibility and generate leads with a professional company profile or high-converting landing page. Clear, fast-loading, optimized for your audience.",
    },
    icon: LayoutTemplate,
  },
  {
    title: { id: "Toko E-Commerce", en: "E-Commerce Store" },
    description: {
      id: "Ubah pengunjung jadi pembeli dengan toko online yang lengkap—keranjang belanja, pembayaran aman, pelacakan stok, dan manajemen pelanggan yang sudah terintegrasi.",
      en: "Turn browsers into buyers with a complete online store—shopping cart, secure payments, inventory tracking, and customer management built in.",
    },
    icon: ShoppingCart,
  },
  {
    title: { id: "Sistem Web Custom", en: "Custom Web Systems" },
    description: {
      id: "Selesaikan masalah bisnis spesifik dengan software yang dibuat khusus. Pernah bikin sistem manajemen salon lengkap dengan booking, POS, komisi staf, pelacakan stok, notifikasi WhatsApp otomatis, dan analitik bisnis—itu jenis problem-solving yang jadi keahlian saya.",
      en: "Solve specific business headaches with tailor-made software. Built a salon management system with booking, POS, staff commissions, inventory tracking, automated WhatsApp notifications, and business analytics—that's the kind of problem-solving I specialize in.",
    },
    icon: Settings,
  },
];

const About = () => {
  const { lang } = useLanguage();
  const intro = aboutIntro[lang];

  return (
    <section id="about" className="py-20 bg-blue-600/5">
      <Container>
        {/* Intro */}
        <div className="text-center mb-20">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-[#333] tracking-tight mb-6">
            {intro.title}
          </h2>

          <div className="max-w-3xl mx-auto text-body">
            {intro.paragraphs.map((text, index) => (
              <p
                key={index}
                className={`text-base text-[#6c757d] font-title font-normal tracking-tight ${
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
          hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
          hover:-translate-y-1.5 transition-all duration-300 ease-out
          cursor-default
        "
              >
                <div className="flex gap-3 items-center">
                  <div className="flex-shrink-0">
                    {/* Box Icon - Warnanya berubah pas card di-hover karena class 'group-hover' */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 transition-colors duration-300 group-hover:bg-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-title font-semibold text-[17px] text-[#333333] transition-colors duration-300">
                    {service.title[lang]}
                  </h3>
                </div>

                <div>
                  <p className="font-body font-normal text-[13px] text-[#6c757d] leading-5">
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
