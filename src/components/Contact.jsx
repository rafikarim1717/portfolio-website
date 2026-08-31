"use client";

import React from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import Container from "./Container";
import CtaCard from "./CtaCard";
import { useLanguage } from "@/context/LanguageContext";

const contactData = [
  {
    id: 1,
    title: { id: "Lokasi", en: "Location" },
    value: { id: "Tersedia Secara Global", en: "Available Globally" },
    description: {
      id: "Tersedia buat kerja remote di seluruh dunia",
      en: "Available for remote work worldwide",
    },
    icon: MapPin,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    id: 2,
    title: { id: "Email", en: "Email" },
    value: { id: "karemrafi@gmail.com", en: "karemrafi@gmail.com" },
    description: {
      id: "Respons dalam 24 jam",
      en: "Response within 24 hours",
    },
    icon: Mail,
    color: "text-blue-600",
    bg: "bg-blue-50",
    link: "mailto:karemrafi@gmail.com",
  },
  {
    id: 4,
    title: { id: "Ketersediaan", en: "Availability" },
    value: {
      id: "Jam Fleksibel, Respons Cepat",
      en: "Flexible Hours, Fast Response",
    },
    description: {
      id: "Turnaround cepat buat klien internasional",
      en: "Quick turnaround for international clients",
    },
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
];

const ContactSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col gap-12">
          {/* CTA Card */}
          <CtaCard />

          {/* Get in Touch */}
          <div>
            {/* Header */}

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactData.map((item) => {
                const Wrapper = item.link ? "a" : "div";
                const opensNewTab = item.link?.startsWith("http");
                return (
                  <Wrapper
                    key={item.id}
                    href={item.link}
                    target={opensNewTab ? "_blank" : undefined}
                    rel={opensNewTab ? "noopener noreferrer" : undefined}
                    className={`
                  group flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-200
                  hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                  hover:-translate-y-1.5 transition-all duration-300 ease-out
                  no-underline ${item.link ? "cursor-pointer" : "cursor-default"}
                `}
                  >
                    {/* Icon Container */}
                    <div className={`${item.bg} ${item.color} p-4 rounded-xl`}>
                      <item.icon className="w-5 h-5" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-[#333] uppercase tracking-wide mb-1.5">
                        {item.title[lang]}
                      </span>
                      <h4 className="font-body text-base font-medium text-[#333] mb-1">
                        {item.value[lang]}
                      </h4>
                      <p className="text-sm text-[#6c757d] font-body">
                        {item.description[lang]}
                      </p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>


        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
