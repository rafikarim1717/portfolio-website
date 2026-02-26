import React from "react";
import Image from "next/image";
import Container from "./Container";
// import { Check, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Seven Retail",
    description:
      "A high-performance corporate platform with an integrated CMS, enabling seamless brand management and dynamic content updates for a leading retail group.",
    image: "/seven-retail.png",
    category: "CMS",
    tags: ["CMS", "Retail Industry", "Next.js"],
    link: "https://sevenretail.id",
  },
  {
    id: 2,
    title: "Ikonoa",
    description:
      "A specialized insurance brokerage platform featuring risk consulting tools and a transparent claims management system for complex insurance workflows.",
    image: "/Ikonoa.png",
    category: "Company Profile",
    tags: ["Insurance Tech", "Next.js"],
    link: "https://www.ikonoa.com/",
  },
  {
    id: 3,
    title: "Wisma 52",
    description:
      "A premium hospitality landing page and property management profile designed to convert leads for high-end residential living in Jakarta.",
    image: "https://placehold.co/800x500/0f1cb3/ffffff?text=Wisma52",
    category: "Business Profile",
    tags: ["Nextjs", "Landing Page"],
    link: "https://wisma52.vercel.app/",
  },
  {
    id: 4,
    title: "Genova",
    description:
      "A premium business profile and product catalog for a Jakarta-based syrup manufacturer. Featuring a seamless product showcase with direct integration to Tokopedia for streamlined purchasing.",
    image: "/Genova.png", // Atau pake placeholder dulu: "https://placehold.co/800x500/0f1cb3/ffffff?text=Genova+Syrup"
    category: "Digital Catalog",
    tags: ["Catalog System", "F&B Industry"],
    link: "https://sevenretail.id",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-blue-600/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl text-[#333] tracking-tight mb-6 font-bold">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-[#6c757d] tracking-tight max-w-2xl mx-auto">
            Showcasing custom Website solution. Each project represents a unique
            solution with proven results and satisfied clients.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
            >
              {/* Image Container with Hover Overlay */}
              <div className="h-52 bg-slate-100 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlay Biru Tipis + Text (Muncul pas Hover) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-blue-600/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    SEE WEBSITE
                  </span>
                </a>

                {/* Category Tag (Kasih z-10 biar di bawah overlay pas hover) */}
                <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold font-title text-[#333] text-sm mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-body mb-6 text-[#6C757D] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
