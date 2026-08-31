"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import Container from "@/components/Container";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = [
  { name: { id: "Beranda", en: "Home" }, href: "/#home", id: "home" },
  { name: { id: "Tentang", en: "About" }, href: "/#about", id: "about" },
  { name: { id: "Keahlian", en: "Skills" }, href: "/#skills", id: "skills" },
  { name: { id: "Proyek", en: "Projects" }, href: "/#projects", id: "projects" },
  // { name: { id: "Blog", en: "Blog" }, href: "/#blog", id: "blog" },
  // { name: { id: "Kontak", en: "Contact" }, href: "/#contact", id: "contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { lang, toggleLang } = useLanguage();

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
    `px-3 py-2 text-sm font-semibold rounded-lg transition-colors font-title hover:bg-slate-100 ${
      active === id ? "text-blue-600 bg-blue-50" : "text-[#333]"
    }`;

  const mobileNavItemClass = (id) =>
    `block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-50 ${
      active === id
        ? "text-blue-600 bg-blue-50"
        : "text-slate-500 hover:text-slate-900"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto]">
          {/* Left: Logo */}
          <div className="flex items-center gap-2.5">
            {/* Link ini supaya kalau logo diklik balik ke home */}
            <Link
              href="/"
              className="relative font-title font-bold text-lg text-[#333] transition-transform active:scale-95"
            >
              Rafi
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-1">
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

          {/* Right: Language Toggle + Mobile Toggle */}
          <div className="flex items-center justify-end gap-1">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-sm font-bold rounded-full transition-colors font-title bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 cursor-pointer"
              aria-label={
                lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"
              }
            >
              {lang === "id" ? "EN" : "ID"}
            </button>

            <button
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform active:scale-90"
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
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-slate-50 text-slate-500 hover:text-slate-900"
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
