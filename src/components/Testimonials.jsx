"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Container from "@/components/Container";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

const SECTION_TEXT = {
  id: {
    heading: "Kata Klien",
    subheading:
      "Feedback nyata dari bisnis yang pernah bekerja sama dengan saya — bukan sekadar klaim, tapi hasil yang beneran mereka rasakan.",
  },
  en: {
    heading: "What Clients Say",
    subheading:
      "Real feedback from businesses I've worked with — not just claims, but results they've actually experienced.",
  },
};

const testimonials = projects
  .filter((project) => project.testimonial)
  .map((project) => ({ id: project.id, ...project.testimonial }));

const Testimonials = () => {
  const { lang } = useLanguage();
  const t = SECTION_TEXT[lang];

  return (
    <section id="testimonials" className="py-20 bg-blue-600/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title font-bold text-3xl lg:text-4xl text-[#333] tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="font-title font-normal text-base text-[#6c757d] max-w-2xl mx-auto">
            {t.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="
                group flex flex-col gap-6 p-6 rounded-xl h-full border
                bg-white border-slate-200
                hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10
                hover:-translate-y-1.5 transition-all duration-300 ease-out
                cursor-default
              "
            >
              {/* Header: client logo + rating */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-10 w-28 shrink-0">
                  <Image
                    src={testimonial.clientLogo}
                    alt={`${testimonial.name} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-title font-semibold text-sm text-[#333]">
                    {testimonial.rating}
                  </span>
                </div>
              </div>

              <p className="font-body text-sm text-[#333] leading-normal flex-grow">
                &ldquo;{testimonial.quote[lang]}&rdquo;
              </p>

              <div className="pt-4 border-t-2 border-slate-100">
                <p className="font-title font-semibold text-sm text-[#333]">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-[#6c757d]">
                  {testimonial.role[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
