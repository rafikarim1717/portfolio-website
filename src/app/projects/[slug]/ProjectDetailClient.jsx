"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Layers,
  Code2,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { useLanguage } from "@/context/LanguageContext";

const TEXT = {
  id: {
    backToProjects: "Kembali ke Proyek",
    company: "Perusahaan",
    industry: "Industri",
    location: "Lokasi",
    techStack: "Tech Stack",
    theChallenge: "Tantangannya",
    theSolution: "Solusinya",
    visitLive: "Kunjungi Website Live",
    siteInactive: "Situs Sudah Tidak Aktif",
  },
  en: {
    backToProjects: "Back to Projects",
    company: "Company",
    industry: "Industry",
    location: "Location",
    techStack: "Tech Stack",
    theChallenge: "The Challenge",
    theSolution: "The Solution",
    visitLive: "Visit Live Website",
    siteInactive: "Site No Longer Live",
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

const ProjectDetailClient = ({ project }) => {
  const { lang } = useLanguage();
  const t = TEXT[lang];

  const metaItems = [
    { icon: Building2, label: t.company, value: project.title },
    { icon: Layers, label: t.industry, value: project.industry[lang] },
    { icon: MapPin, label: t.location, value: project.location },
    { icon: Code2, label: t.techStack, value: project.techStack.join(", ") },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <article className="pt-8 pb-16 lg:pt-10 lg:pb-20">
        <Container>
          {/* Breadcrumb */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 mb-8 bg-white text-blue-600 border border-blue-200 shadow-sm text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.backToProjects}
          </Link>

          {/* Header */}
          <div className="max-w-3xl mb-10">
            <h1 className="font-title font-bold text-3xl lg:text-5xl text-[#333] tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="font-body text-base lg:text-lg text-[#6c757d] leading-normal">
              {project.description[lang]}
            </p>
          </div>

          {/* Cover */}
          <div className="relative h-64 md:h-[420px] rounded-xl overflow-hidden border border-slate-200 mb-12">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4251EB] to-[#3845C8]">
                <span className="font-title font-bold text-6xl text-white/90 tracking-wide">
                  {getInitials(project.title)}
                </span>
              </div>
            )}
          </div>

          {/* Meta Tags Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 pb-10 mb-12 border-b border-slate-200">
            {metaItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 min-w-0">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-body text-xs text-[#6c757d] mb-0.5">
                    {label}
                  </p>
                  <p
                    className="font-title font-medium text-sm text-[#333] truncate"
                    title={value}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div
              className="
                p-6 rounded-xl h-full border
                bg-white border-slate-200
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-1.5 transition-all duration-300 ease-out
              "
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="font-title font-bold text-lg text-[#333] mb-3">
                {t.theChallenge}
              </h2>
              <p className="font-body text-sm text-[#6c757d] leading-normal">
                {project.challenge[lang]}
              </p>
            </div>

            <div
              className="
                p-6 rounded-xl h-full border
                bg-white border-slate-200
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-1.5 transition-all duration-300 ease-out
              "
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h2 className="font-title font-bold text-lg text-[#333] mb-3">
                {t.theSolution}
              </h2>
              <p className="font-body text-sm text-[#6c757d] leading-normal">
                {project.solution[lang]}
              </p>
            </div>
          </div>

          {/* CTA */}
          {project.status === "inactive" ? (
            <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-10 rounded-lg px-6 bg-slate-100 text-slate-400 cursor-not-allowed">
              {t.siteInactive}
            </span>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 bg-[#4251EB] hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30 active:scale-95 h-10 rounded-lg px-6 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#4251EB]/50 cursor-pointer"
            >
              {t.visitLive}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </Container>
      </article>

      <Footer />

      <BackToTop />
    </main>
  );
};

export default ProjectDetailClient;
