"use client"; // Wajib karena pake state

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_TEXT = {
  id: {
    heading: "Proyek Unggulan",
    subheading:
      "Kumpulan pekerjaan klien nyata — dari platform e-commerce sampai company profile — masing-masing dibangun buat menyelesaikan masalah spesifik, bukan cuma tampil bagus.",
    loadMore: "Tampilkan Lebih Banyak",
    viewCaseStudy: "Lihat Studi Kasus",
  },
  en: {
    heading: "Featured Projects",
    subheading:
      "A selection of real client work — from e-commerce platforms to business profiles — each one built to solve a specific problem, not just look good.",
    loadMore: "Load More",
    viewCaseStudy: "View Case Study",
  },
};

const getInitials = (title) =>
  title
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl text-[#333] tracking-tight mb-6 font-bold">
            {t.heading}
          </h2>
          <p className="font-title font-normal text-base text-[#6c757d] tracking-tight max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
            >
              {/* Image Container */}
              <div className="h-52 bg-slate-100 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4251EB] to-[#3845C8]">
                    <span className="font-title font-bold text-5xl text-white/90 tracking-wide">
                      {getInitials(project.title)}
                    </span>
                  </div>
                )}

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10 bg-slate-900/85 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="font-bold font-title text-[#333] text-sm mb-2.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm font-body mb-6 text-[#6C757D] line-clamp-3 leading-5 tracking-normal">
                  {project.description[lang]}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white text-blue-600 border border-blue-200 shadow-sm text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold font-title text-blue-600 hover:gap-2.5 transition-all"
                >
                  {t.viewCaseStudy}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMoreProjects}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 bg-[#4251EB] hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30 active:scale-95 h-10 rounded-lg px-6 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#4251EB]/50 cursor-pointer"
            >
              {t.loadMore}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
