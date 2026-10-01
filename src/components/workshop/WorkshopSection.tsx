"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function WorkshopSection() {
  const principles = [
    {
      label: "Seasoning & Grain",
      title: "Material Understanding",
      desc: "Selecting timber cured to optimal moisture equilibrium ensures that complex relief carvings and multi-column joints do not warp, split, or shrink across generations.",
    },
    {
      label: "Sacred Proportions",
      title: "Architectural Discipline",
      desc: "Every column height, arch curvature, and shikhara tier honors classical ratios while seamlessly aligning with modern residential architectural ceiling heights.",
    },
    {
      label: "Hand-Gouge & Chisel",
      title: "Subtractive Mastery",
      desc: "Machinery cuts raw profiles, but character, depth, shadow, and facial expression in sacred carvings come purely from hand gouges held with years of tactile experience.",
    },
    {
      label: "Slow Craft",
      title: "Patience in Finishing",
      desc: "Surface refinement is never hurried. Progressive grits followed by hand-buffed organic oils produce a warm, silky sheen that lets the wood breathe.",
    },
  ];

  return (
    <section
      id="workshop"
      aria-label="The Workshop and Craft Atelier"
      className="py-24 sm:py-32 bg-[#F7F3EC] text-[#171513] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="09"
          label="Atelier"
          title="The Workshop"
          subtitle="A dedicated studio space where raw timber logs are transformed into sculptural structures, sacred carvings, and custom architectural commissions."
        />

        {/* Workshop Imagery Pair: Authentic Workshop Setting */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 relative"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E9DFD0] shadow-xl border border-[#171513]/10">
              <Image
                src="/images/artisan-workshop-collection-overview.jpeg"
                alt="Artisan workshop workbench featuring handcrafted wooden shrines, carved deities, and tiered pedestals"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#F7F3EC]">
                <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                  Studio Atelier
                </span>
                Workshop bench display: finished relief panels, devotional shrines, and ritual pedestals
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E9DFD0] shadow-lg border border-[#171513]/10">
              <Image
                src="/images/artisan-chisel-bench-relief-process.jpeg"
                alt="Wood carving chisels, bench brush, and hand-carved teakwood temple relief in progress"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-5 left-5 right-5 text-xs text-[#F7F3EC]">
                <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                  Chisel Work In Progress
                </span>
                Subtractive hand-gouging and fine detailing on the artisan workbench
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Atelier Principles Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#171513]/15">
          {principles.map((p, idx) => (
            <div key={p.title} className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-[#B18A52]">0{idx + 1}</span>
                <span className="label-editorial text-[9px] text-[#9A6A3F]">
                  {p.label}
                </span>
              </div>
              <h3 className="font-display text-xl text-[#171513] mb-2 font-normal">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#171513]/70 font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
