"use client"; // Wajib karena pake state

import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { projects } from "@/data/projects";

const getInitials = (title) =>
  title
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);

const FeaturedProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-blue-600/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-title text-3xl text-[#333] tracking-tight mb-6 font-bold">
            Featured Projects
          </h2>
          <p className="font-title font-normal text-base text-[#6c757d] tracking-tight max-w-2xl mx-auto">
            A selection of real client work — from e-commerce platforms to
            business profiles — each one built to solve a specific problem,
            not just look good.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
            >
              {/* Image Container with Hover Overlay */}
              <div className="h-52 bg-slate-100 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#4251EB] to-[#3845C8] transition-transform duration-500 group-hover:scale-110">
                    <span className="font-title font-bold text-5xl text-white/90 tracking-wide">
                      {getInitials(project.title)}
                    </span>
                  </div>
                )}

                {/* Overlay Biru Tipis + Text */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-20 flex items-center justify-center bg-[#4251EB]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                >
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full text-xs font-bold tracking-wider shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    SEE WEBSITE
                  </span>
                </a>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-10 bg-[#4251EB] text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded shadow-sm">
                  {project.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold font-title text-[#333] text-sm mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-body mb-6 text-[#6C757D] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 text-[10px] font-medium px-2 py-1 rounded uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={showMoreProjects}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 bg-[#4251EB] hover:bg-[#3845C8] hover:shadow-lg hover:shadow-[#4251EB]/30 active:scale-95 h-10 rounded-lg px-6 text-white outline-none focus-visible:ring-2 focus-visible:ring-[#4251EB]/50 cursor-pointer"
            >
              Load More
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
