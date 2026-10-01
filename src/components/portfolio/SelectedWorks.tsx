"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { ProjectModal } from "./ProjectModal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SelectedWorks() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    { id: "all", label: "All Works" },
    { id: "architectural-woodwork", label: "Architectural" },
    { id: "traditional-carving", label: "Traditional Carving" },
    { id: "bespoke-furniture", label: "Furniture & Swings" },
    { id: "decorative-craft", label: "Decorative" },
    { id: "custom-creations", label: "Custom Commissions" },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") {
      return projects;
    }
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section
      id="work"
      aria-label="Selected Works Portfolio"
      className="py-24 sm:py-32 md:py-36 bg-[#F7F3EC] text-[#171513] relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <SectionHeading
            number="03"
            label="Portfolio"
            title="Selected Works"
            subtitle="Sculptural timber creations, temple mandapams, and bespoke joinery handcrafted for architectural spaces."
            className="mb-0"
          />

          {/* Editorial Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter works by category"
            className="flex flex-wrap gap-2 sm:gap-3 border-b border-[#171513]/15 pb-2"
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs uppercase tracking-[0.16em] px-3.5 py-2 transition-all duration-300 relative ${
                  selectedCategory === cat.id
                    ? "text-[#171513] font-semibold"
                    : "text-[#171513]/60 hover:text-[#171513]"
                }`}
              >
                <span>{cat.label}</span>
                {selectedCategory === cat.id && (
                  <motion.div
                    layoutId="category-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B18A52]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Asymmetric editorial sizing based on project order
              const isLargeLead = index % 5 === 0;
              const isMediumRight = index % 5 === 1;
              const isMediumLeft = index % 5 === 2;
              const isTall = index % 5 === 3;

              let colSpan = "md:col-span-6 lg:col-span-4";
              let aspectClass = "aspect-[4/5]";

              if (isLargeLead) {
                colSpan = "md:col-span-12 lg:col-span-8";
                aspectClass = "aspect-[16/10] md:aspect-[16/9]";
              } else if (isMediumRight) {
                colSpan = "md:col-span-12 lg:col-span-4";
                aspectClass = "aspect-[4/5] lg:aspect-[3/4]";
              } else if (isMediumLeft) {
                colSpan = "md:col-span-6 lg:col-span-6";
                aspectClass = "aspect-[16/11]";
              } else if (isTall) {
                colSpan = "md:col-span-6 lg:col-span-6";
                aspectClass = "aspect-[16/11]";
              }

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`${colSpan} group cursor-pointer flex flex-col`}
                  onClick={() => setActiveProject(project)}
                >
                  {/* Image Container with Restrained Scale Reveal */}
                  <div
                    className={`relative w-full ${aspectClass} overflow-hidden bg-[#E9DFD0] shadow-sm transition-shadow duration-500 group-hover:shadow-xl`}
                  >
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes={
                        isLargeLead
                          ? "(max-width: 768px) 100vw, 70vw"
                          : "(max-width: 768px) 100vw, 35vw"
                      }
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle Overlay on Desktop Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Micro Tag Overlay */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="label-editorial text-[9px] px-2.5 py-1 bg-[#171513]/85 text-[#F7F3EC] backdrop-blur-xs">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Click Indicator on Hover */}
                    <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-[#F7F3EC] text-[#171513] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Project Metadata Under Image */}
                  <div className="pt-5 pb-2 flex flex-col">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl sm:text-2xl font-normal text-[#171513] group-hover:text-[#9A6A3F] transition-colors">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs text-[#9A6A3F]/70 shrink-0">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[#171513]/70 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        key={activeProject?.id || "modal"}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
