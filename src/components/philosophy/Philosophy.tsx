"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-label="Philosophy"
      className="py-24 sm:py-32 md:py-40 bg-[#F7F3EC] text-[#171513] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Micro Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs tracking-widest text-[#B18A52]">
                02
              </span>
              <span className="w-8 h-px bg-[#B18A52]/60" />
              <span className="label-editorial text-[#4A3021]/80">
                Philosophy of Craft
              </span>
            </div>

            {/* Core Manifesto Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.1] uppercase text-[#171513]"
            >
              Wood is the material.
              <br />
              <span className="italic text-[#9A6A3F]">Craft is the language.</span>
            </motion.h2>

            {/* Editorial Body Text */}
            <div className="mt-8 sm:mt-10 space-y-6 text-[#171513]/80 font-light text-base sm:text-lg leading-relaxed max-w-xl">
              <p>
                Every commission begins with a dialogue between raw timber and architectural
                intent. Rather than imposing standardized forms, the grain, density, and
                character of seasoned wood dictate how each curve, bracket, and mortise joint
                takes shape.
              </p>
              <p>
                By harmonizing South Indian temple carving traditions with disciplined contemporary
                spatial design, each creation—whether a full-height sanctum mandapam or an intimate
                handcrafted swing—is sculpted for enduring presence within modern living environments.
              </p>
            </div>

            {/* Micro Dimensions / Craft Values */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-[#171513]/10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <span className="label-editorial text-[10px] text-[#9A6A3F] block mb-1">
                  Materiality
                </span>
                <span className="font-serif text-lg text-[#171513]">Seasoned Teak</span>
              </div>
              <div>
                <span className="label-editorial text-[10px] text-[#9A6A3F] block mb-1">
                  Methodology
                </span>
                <span className="font-serif text-lg text-[#171513]">Subtractive Carving</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="label-editorial text-[10px] text-[#9A6A3F] block mb-1">
                  Execution
                </span>
                <span className="font-serif text-lg text-[#171513]">Bespoke Dimensions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Craftsmanship Image Detail */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-[#E9DFD0] shadow-xl border border-[#171513]/10"
            >
              <Image
                src="/images/mandapam-pillar-arch-capital.jpeg"
                alt="Detailed hand carving of temple pillar capital showing floral rosette medallions and tiered moldings"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#171513]/80 via-[#171513]/40 to-transparent text-[#F7F3EC]">
                <p className="label-editorial text-[10px] tracking-[0.25em] text-[#B18A52]">
                  Pillar Entablature Detail
                </p>
                <p className="font-serif text-sm text-[#F7F3EC]/90 mt-1">
                  Hand-chiseled floral rosette medallion and lotus cornices in solid teakwood
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
