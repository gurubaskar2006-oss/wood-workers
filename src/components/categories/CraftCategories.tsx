"use client";

import React from "react";
import Image from "next/image";
import { craftCategories } from "@/data/categories";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function CraftCategories() {
  return (
    <section
      id="craft"
      aria-label="Craft Categories"
      className="py-24 sm:py-32 bg-[#171513] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="04"
          label="Disciplines"
          title="Craft Categories"
          subtitle="From sacred temple shrines to custom architectural elements, our work spans five dedicated craft disciplines."
          theme="dark"
        />

        {/* Categories Image-led Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {craftCategories.map((category, index) => {
            // Span configuration for editorial variation
            const isWide = index === 0 || index === 3;
            const colSpan = isWide ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <motion.a
                key={category.id}
                href="#work"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`${colSpan} group relative flex flex-col justify-end p-8 sm:p-10 min-h-[380px] sm:min-h-[440px] overflow-hidden border border-[#E9DFD0]/15 bg-[#23201D] focus-visible:outline-none`}
              >
                {/* Background Authentic Photo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 group-hover:filter group-hover:brightness-90"
                  />
                  {/* Subtle Dark Gradient Overlay for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/70 to-[#171513]/25 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#B18A52]">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E9DFD0]/30 flex items-center justify-center text-[#F7F3EC] group-hover:bg-[#B18A52] group-hover:border-[#B18A52] transition-colors">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#F7F3EC] uppercase tracking-wide group-hover:text-[#B18A52] transition-colors">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm font-light text-[#E9DFD0]/85 tracking-wide">
                    {category.tagline}
                  </p>

                  <p className="mt-4 text-xs text-[#E9DFD0]/70 line-clamp-2 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    {category.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
