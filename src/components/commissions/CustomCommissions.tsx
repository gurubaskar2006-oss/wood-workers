"use client";

import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CustomCommissions() {
  return (
    <section
      aria-label="Custom Commissions"
      className="py-24 sm:py-32 bg-[#171513] text-[#F7F3EC] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Anchor Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden border border-[#E9DFD0]/15 shadow-2xl bg-[#23201D]">
              <Image
                src="/images/ornamental-gilded-entrance-door.jpeg"
                alt="Custom commissioned solid teakwood entrance door with hand-gilded relief carvings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-[#E9DFD0]/80">
                <span className="label-editorial text-[9px] text-[#B18A52] block mb-1">
                  Commission Highlight
                </span>
                Custom commissioned solid teak entrance door with hand-gilded floral scrollwork & central sun medallion
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Call to Action */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs text-[#B18A52]">08</span>
              <span className="w-8 h-px bg-[#B18A52]" />
              <span className="label-editorial text-[#E9DFD0]/70">
                Commission Inquiries
              </span>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08] text-[#F7F3EC] uppercase"
            >
              Have something
              <br />
              <span className="italic text-[#E9DFD0]">in mind?</span>
            </motion.h2>

            <p className="mt-6 text-base sm:text-lg text-[#E9DFD0]/85 font-light leading-relaxed max-w-xl">
              From a single carved piece to an entire architectural installation,
              custom work begins with an idea. Whether you have detailed architectural
              renderings or an initial conceptual sketch, we work alongside you to realize
              it in solid timber.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-[#E9DFD0]/75">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B18A52]" />
                <span>Private Home Sanctums & Temple Mandapams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B18A52]" />
                <span>Heirloom Swings (Jhulas) & Ceremonial Seating</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B18A52]" />
                <span>Traditional Deity Reliefs & Sacred Sculptures</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B18A52]" />
                <span>Architectural Columns, Architraves & Ornamental Wall Panels</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <CTAButton
                href="#contact"
                variant="brass"
                size="lg"
                icon={<ArrowRight size={15} />}
              >
                Start a Project
              </CTAButton>
              <CTAButton
                href="#work"
                variant="secondary"
                size="lg"
                className="text-[#F7F3EC] border-[#F7F3EC]/30 hover:border-[#F7F3EC] hover:bg-[#F7F3EC]/10"
              >
                View Selected Work
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
