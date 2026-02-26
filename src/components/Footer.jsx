"use client";

import React from "react";
import Link from "next/link";
import { Zap, Linkedin, Mail, MapPin, ChevronUp } from "lucide-react";

// Konfigurasi Data Footer
const FOOTER_DATA = {
  brand: {
    name: "Rafi Karim",
    description:
      "Specializing in custom plugin development, theme creation, and technical WordPress solutions. Delivering robust code for scalable websites.",
  },
  socials: [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:info@gigsix.com", label: "Email" },
  ],
  contact: [
    { icon: MapPin, text: "Worldwide" },
    { icon: Mail, text: "info@gigsix.com" },
  ],
  services: [
    { name: "Business Websites", href: "#" },
    { name: "E-Commerce", href: "#" },
    { name: "AI Integration", href: "#" },
    { name: "Custom Web Systems", href: "#" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white pt-8 pb-8">
      <div className="container mx-auto px-6">
        {/* SECTION ATAS DI-COMMENT SESUAI REQUEST */}
        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-slate-900 text-white rounded-full p-1.5 flex items-center justify-center">
                <Zap className="w-4 h-4" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">
                {FOOTER_DATA.brand.name}
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              {FOOTER_DATA.brand.description}
            </p>

            <div className="flex gap-3">
              {FOOTER_DATA.socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-2">
              {FOOTER_DATA.contact.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-slate-500"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {FOOTER_DATA.services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              {FOOTER_DATA.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div> 
        */}

        {/* Simplified Footer / Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#6c757d] font-medium">
              © {currentYear} {FOOTER_DATA.brand.name} – Freelance Software
              Developer. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for hire
            </div>

            {/* Back to Top */}
            {/* <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-[#4251EB] transition-colors group"
            >
              Back to Top
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
