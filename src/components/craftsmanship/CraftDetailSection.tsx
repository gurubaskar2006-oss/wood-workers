"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function CraftDetailSection() {
  const details = [
    {
      title: "Sacred Torana & Relief",
      category: "Carved Deity",
      image: "/images/ganesha-carved-wall-relief.jpeg",
      description:
        "Subtractive high-relief sculpting capturing delicate textile folds, divine ornamentation, and floral temple niches in seasoned teak.",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Floral Rosette & Lintel",
      category: "Architectural Capital",
      image: "/images/mandapam-pillar-arch-capital.jpeg",
      description:
        "Deeply incised eight-petal flower medallions flanked by scrolled corbel arches and layered cornice dentils.",
      aspect: "aspect-[4/5]",
    },
    {
      title: "Lord Balaji & Padmavathi",
      category: "Temple Frieze",
      image: "/images/balaji-padmavathi-carved-frieze.jpeg",
      description:
        "Exquisite hand-carved miniature temple archways, sacred necklaces, and crisp kirtimukha crest details in solid teak.",
      aspect: "aspect-[16/10]",
    },
    {
      title: "Gaja Lakshmi Lotus Medallion",
      category: "Medallion Carving",
      image: "/images/gaja-lakshmi-carved-medallion.jpeg",
      description:
        "Subtractive high-relief sculpting capturing radiant lotus petals, caparisoned elephants, and classical sacred iconography.",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Sacred Drapery & Expression",
      category: "High-Relief Icon",
      image: "/images/sacred-heart-jesus-carved-relief.jpeg",
      description:
        "Masterful textile fold carving and serene portraiture sculpted from a monolithic block of seasoned hardwood.",
      aspect: "aspect-[3/4]",
    },
    {
      title: "Turned Kalashas & Frieze",
      category: "Temple Entablature",
      image: "/images/temple-gopuram-cornice-shikhara.jpeg",
      description:
        "Hand-turned teakwood finials and stepped lotus mouldings sheltering carved guardian emblems.",
      aspect: "aspect-[4/5]",
    },
  ];

  return (
    <section
      aria-label="Craftsmanship and Detail"
      className="py-24 sm:py-32 bg-[#171513] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="06"
          label="Craftsmanship"
          title="Detail is the Difference."
          subtitle="True luxury in woodwork is found in the microscopic decisions: how the chisel meets the grain, how the corner miter locks, and how shadow settles into carved relief."
          theme="dark"
        />

        {/* Editorial Masonry of Tactile Detail Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {details.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.12 }}
              className="group flex flex-col border border-[#E9DFD0]/10 bg-[#23201D]/70 p-4 sm:p-5"
            >
              {/* Tactile Image Crop */}
              <div
                className={`relative w-full ${item.aspect} overflow-hidden bg-[#171513] mb-5`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 filter contrast-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Editorial Description */}
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <span className="label-editorial text-[9px] text-[#B18A52] tracking-[0.25em] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl text-[#F7F3EC] font-normal group-hover:text-[#B18A52] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#E9DFD0]/75 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E9DFD0]/10 flex items-center justify-between text-[11px] text-[#E9DFD0]/50 font-mono">
                  <span>Fig. 0{idx + 1}</span>
                  <span>Hand Carved</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
