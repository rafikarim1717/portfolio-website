"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import AvailabilityBadge from "@/components/AvailabilityBadge";

const FOOTER_DATA = {
  brand: {
    name: "Rafi Karim",
  },
  socials: [
    { icon: Github, href: "https://github.com/rafikarim1717", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rafikarim16/", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/rafiikarim", label: "Instagram" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-8 pb-8">
      <div className="container mx-auto px-6">
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-[#6c757d] font-medium">
              © {currentYear} {FOOTER_DATA.brand.name} – Software
              Engineer. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {FOOTER_DATA.socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-200 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Status Badge */}
            <AvailabilityBadge />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
