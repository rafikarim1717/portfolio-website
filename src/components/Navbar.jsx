"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { name: { id: "Beranda", en: "Home" }, href: "/#home", id: "home" },
  { name: { id: "Tentang", en: "About" }, href: "/#about", id: "about" },
  { name: { id: "Proyek", en: "Projects" }, href: "/#projects", id: "projects" },
  { name: { id: "Harga", en: "Pricing" }, href: "/#pricing", id: "pricing" },
  { name: { id: "Keahlian", en: "Skills" }, href: "/#skills", id: "skills" },
  // { name: { id: "Blog", en: "Blog" }, href: "/#blog", id: "blog" },
  // { name: { id: "Kontak", en: "Contact" }, href: "/#contact", id: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();

  // Bayangan tipis baru muncul setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight nav link berdasarkan section yang lagi keliatan di viewport
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItemClass = (id) =>
    `relative py-2 text-[14.5px] font-medium font-body transition-colors duration-200 ${
      active === id
        ? "text-primary font-semibold after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary"
        : "text-muted hover:text-ink"
    }`;

  const mobileNavItemClass = (id) =>
    `flex items-center min-h-11 px-4 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-50 ${
      active === id
        ? "text-primary bg-tint"
        : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.12)]"
          : "bg-surface/70"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-14 lg:h-[68px] lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Left: Logo */}
          <div className="flex items-center gap-2.5">
            {/* Link ini supaya kalau logo diklik balik ke home */}
            <Link
              href="/"
              className="flex items-center gap-2.5 min-h-11 font-title font-bold text-[17px] tracking-tight text-ink transition-transform active:scale-95"
            >
              <Image
                src="/android-icon-96x96.png"
                alt=""
                width={30}
                height={30}
                className="rounded-full"
                priority
              />
              Rafi Karim
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={navItemClass(link.id)}
              >
                {link.name[lang]}
              </a>
            ))}
          </div>

          {/* Right: Language Toggle + CTA + Mobile Toggle */}
          <div className="flex items-center justify-end gap-3 lg:gap-5">
            <button
              onClick={toggleLang}
              className="inline-flex items-center justify-center min-h-11 min-w-11 px-1 text-[13px] font-medium font-body text-slate-400 hover:text-ink transition-colors cursor-pointer"
              aria-label={
                lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"
              }
            >
              <span className={lang === "id" ? "text-ink font-semibold" : ""}>ID</span>
              <span aria-hidden="true" className="px-1">/</span>
              <span className={lang === "en" ? "text-ink font-semibold" : ""}>EN</span>
            </button>

            <a
              href="https://wa.me/6287879206730?text=Halo%20Rafi,%20mau%20konsultasi%20soal%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center h-10 px-[18px] rounded-full bg-primary text-white text-sm font-semibold font-body shadow-[0_6px_16px_-6px_rgba(15,118,110,0.5)] hover:bg-primary-hover active:scale-95 transition-all duration-200"
            >
              {lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}
            </a>

            <button
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" /> // Ukuran icon menu biasanya enakan 5 (20px)
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu - Animasi Simpel */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Container className="">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActive(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={mobileNavItemClass(link.id)}
              >
                {link.name[lang]}
              </a>
            ))}

            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 min-h-11 px-4 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-50 text-slate-500 hover:text-slate-900"
            >
              <Languages className="w-4 h-4" />
              {lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            </button>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
