"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Layers,
  Code2,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "6287879206730";

const TEXT = {
  id: {
    backToProjects: "Kembali ke Proyek",
    industry: "Industri",
    location: "Lokasi",
    techStack: "Tech Stack",
    problem: "Masalahnya",
    solution: "Yang gue kerjain",
    clientSays: "Kata Klien",
    ctaTitle: "Mau website kayak gini buat bisnis lo?",
    ctaDesc: "Ngobrol dulu, gratis. Gue kasih saran paket yang paling pas.",
    ctaButton: "Konsultasi Gratis via WhatsApp",
    visitLive: "Lihat website live",
    siteInactive: "Situs sudah tidak aktif",
    moreProjects: "Proyek Lainnya",
    prev: "Sebelumnya",
    next: "Berikutnya",
    waText: (title) =>
      `Halo Rafi, gue lihat studi kasus ${title} dan mau bikin yang mirip buat bisnis gue.`,
  },
  en: {
    backToProjects: "Back to Projects",
    industry: "Industry",
    location: "Location",
    techStack: "Tech Stack",
    problem: "The problem",
    solution: "What I built",
    clientSays: "Client Says",
    ctaTitle: "Want a website like this for your business?",
    ctaDesc: "Let's talk first, it's free. I'll suggest the package that fits best.",
    ctaButton: "Free Consultation via WhatsApp",
    visitLive: "View live website",
    siteInactive: "Site no longer live",
    moreProjects: "More Projects",
    prev: "Previous",
    next: "Next",
    waText: (title) =>
      `Hi Rafi, I saw the ${title} case study and want something similar for my business.`,
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
  const cs = project.caseStudy;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    t.waText(project.title)
  )}`;

  const metaItems = [
    { icon: Layers, label: t.industry, value: project.industry[lang] },
    { icon: MapPin, label: t.location, value: project.location },
    { icon: Code2, label: t.techStack, value: project.techStack.join(" · ") },
  ];

  const eyebrow =
    "font-body font-semibold text-xs uppercase tracking-[0.12em] text-primary mb-2";

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      <article className="pt-8 pb-16 lg:pt-10 lg:pb-20">
        <Container>
          {/* Breadcrumb */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 min-h-11 mb-6 bg-white text-primary border border-primary/25 shadow-sm text-xs font-semibold px-4 rounded-full uppercase tracking-wide hover:bg-tint hover:border-primary/40 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.backToProjects}
          </Link>

          {/* Header */}
          <div className="max-w-3xl mb-8 lg:mb-10">
            <h1 className="font-title font-bold text-4xl lg:text-5xl text-ink tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="font-body text-base lg:text-lg text-muted leading-relaxed text-balance">
              {project.description[lang]}
            </p>
          </div>

          {/* Cover */}
          <div className="relative aspect-[1600/767] rounded-2xl overflow-hidden border border-line bg-surface-soft">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1100px"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-hover">
                <span className="font-title font-bold text-6xl text-white/90 tracking-wide">
                  {getInitials(project.title)}
                </span>
              </div>
            )}
          </div>

          {/* Meta */}
          <dl className="flex flex-wrap gap-x-12 gap-y-5 py-7 mb-12 lg:mb-16 border-b border-line">
            {metaItems.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-tint flex items-center justify-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <dt className="font-body text-xs text-muted mb-0.5">{label}</dt>
                  <dd className="font-body font-medium text-[15px] text-ink">
                    {value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Problem & Solution */}
          {cs && (
            <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10 lg:gap-16 mb-12">
              <section>
                <p className={eyebrow}>{t.problem}</p>
                <h2 className="font-title font-bold text-xl lg:text-[22px] text-ink tracking-tight leading-tight mb-3 text-balance max-w-md">
                  {cs.problemTitle[lang]}
                </h2>
                <p className="font-body text-base text-muted leading-relaxed max-w-md">
                  {cs.problem[lang]}
                </p>
              </section>
              <section>
                <p className={eyebrow}>{t.solution}</p>
                <h2 className="font-title font-bold text-xl lg:text-[22px] text-ink tracking-tight leading-tight mb-3 text-balance max-w-md">
                  {cs.solutionTitle[lang]}
                </h2>
                <ul className="flex flex-col gap-3">
                  {cs.points[lang].map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-body text-[15px] text-ink/85 leading-[1.45]"
                    >
                      <span className="mt-px flex w-5 h-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Check className="w-3 h-3" strokeWidth={3.5} />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <figure className="relative rounded-2xl bg-surface-soft px-6 pt-14 pb-8 sm:pl-24 sm:pr-12 sm:pt-9 sm:pb-9 mb-12 lg:mb-16">
              <span
                aria-hidden="true"
                className="absolute left-6 top-4 sm:left-10 sm:top-6 font-title font-bold text-6xl sm:text-7xl leading-none text-primary"
              >
                &ldquo;
              </span>
              <p className={eyebrow}>{t.clientSays}</p>
              <blockquote className="font-title font-medium text-lg lg:text-[19px] text-ink leading-[1.45] tracking-tight mb-3.5 max-w-[680px] text-pretty">
                {project.testimonial.quote[lang]}
              </blockquote>
              <figcaption>
                <span className="block font-body font-semibold text-[15px] text-ink">
                  {project.testimonial.name}
                </span>
                <span className="block font-body text-sm text-muted">
                  {project.testimonial.role[lang]}
                </span>
              </figcaption>
            </figure>
          )}

          {/* CTA */}
          <div className="relative overflow-hidden rounded-3xl px-6 py-12 sm:p-12 text-center border border-primary-light/15 bg-[radial-gradient(120%_140%_at_50%_0%,#11524b_0%,var(--surface-dark)_55%,#082320_100%)] mb-12 lg:mb-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(70%_70%_at_50%_0%,#000_30%,transparent_80%)]"
            />
            <div className="relative">
              <h2 className="font-title font-bold text-2xl lg:text-3xl text-white tracking-tight mb-3 text-balance">
                {t.ctaTitle}
              </h2>
              <p className="font-body text-base lg:text-lg text-on-dark-muted mb-8 text-balance">
                {t.ctaDesc}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                <a
                  href={waHref}
                  data-umami-event="wa-click"
                  data-umami-event-source={`case-study-${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-white text-surface-dark font-body font-semibold text-[15px] shadow-[0_10px_30px_-10px_rgba(94,234,212,0.55)] hover:bg-tint active:scale-95 transition-all duration-300"
                >
                  {t.ctaButton}
                </a>
                {project.status === "inactive" ? (
                  <span className="inline-flex items-center min-h-11 font-body text-[15px] text-on-dark-muted/70">
                    {t.siteInactive}
                  </span>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 min-h-11 font-body font-medium text-[15px] text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors"
                  >
                    {t.visitLive}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* More projects */}
          <p className={eyebrow}>{t.moreProjects}</p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {[
              { p: prevProject, label: t.prev, dir: "prev" },
              { p: nextProject, label: t.next, dir: "next" },
            ].map(({ p, label, dir }) => (
              <Link
                key={dir}
                href={`/projects/${p.slug}`}
                className={`group flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 ${
                  dir === "next" ? "sm:items-end sm:text-right" : ""
                }`}
              >
                <span className="inline-flex items-center gap-1.5 font-body font-medium text-[13px] text-primary">
                  {dir === "prev" && (
                    <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                  )}
                  {label}
                  {dir === "next" && (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </span>
                <span className="font-title font-semibold text-[17px] text-ink group-hover:text-primary transition-colors">
                  {p.title}
                </span>
              </Link>
            ))}
          </nav>
        </Container>
      </article>

      <Footer />

      <BackToTop />
      <FloatingWhatsApp />
    </main>
  );
};

export default ProjectDetailClient;
