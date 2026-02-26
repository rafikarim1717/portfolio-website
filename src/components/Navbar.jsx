"use client";

import React, { useState } from "react";
import { Zap, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItemClass = (id) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-colors text-[#333] font-body
     ${active === id ? "bg-[#4251EB] text-white" : "hover:bg-slate-100"}`;

  const mobileNavItemClass = (id) =>
    `block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
     ${
       active === id
         ? "bg-[#4251EB] text-white"
         : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
     }`;

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    // { name: "Blog", href: "#blog", id: "blog" },
    // { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <Container>
        <div className="relative flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2.5">
            {/* Link ini supaya kalau logo diklik balik ke home */}
            <Link
              href="/"
              className="relative w-8 h-8 md:w-9 md:h-9 transition-transform active:scale-95"
            >
              <Image
                src="/RK.png"
                alt="RK Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                className={navItemClass(link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-transform active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                {link.name}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
