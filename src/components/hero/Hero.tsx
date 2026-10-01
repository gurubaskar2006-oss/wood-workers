"use client";

import React from "react";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[100svh] w-full flex flex-col justify-between bg-[#171513] text-[#F7F3EC] overflow-hidden"
    >
      {/* Background Architectural Craft Photography */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/architectural-mandapam-installed-front.jpeg"
            alt="Handcrafted architectural wooden mandapam with carved fluted pillars and tiered vimana dome"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter contrast-[1.05]"
          />
        </motion.div>
        {/* Cinematic gradient overlays for legibility without dulling wood tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/55 to-[#171513]/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#171513]/30 to-[#171513]/85" />
      </div>

      {/* Top spacer for navigation bar */}
      <div className="pt-28 md:pt-36" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Micro-label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-[#B18A52]" />
            <span className="label-editorial text-[#E9DFD0]/90 text-[11px] sm:text-xs tracking-[0.28em]">
              Artisan Portfolio & Bespoke Architecture
            </span>
          </motion.div>

          {/* Master Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.03] text-[#F7F3EC] uppercase"
          >
            Crafted from wood.
            <br />
            <span className="italic font-light text-[#E9DFD0]">Designed to endure.</span>
          </motion.h1>

          {/* Editorial Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-light text-[#E9DFD0]/85 max-w-2xl leading-relaxed"
          >
            Bespoke woodwork, traditional carving and architectural craftsmanship
            shaped with precision for sacred and living spaces.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <CTAButton
              href="#work"
              variant="brass"
              size="lg"
              icon={<ArrowRight size={15} />}
            >
              Explore the Work
            </CTAButton>
            <CTAButton
              href="#contact"
              variant="secondary"
              size="lg"
              className="text-[#F7F3EC] border-[#F7F3EC]/30 hover:border-[#F7F3EC] hover:bg-[#F7F3EC]/10"
            >
              Start a Project
            </CTAButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Meta Bar & Scroll Indicator */}
      <div className="relative z-10 border-t border-[#E9DFD0]/15 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6 sm:gap-8 text-xs text-[#E9DFD0]/70 tracking-wider">
            <span className="font-mono text-[#B18A52]">01</span>
            <span className="label-editorial text-[10px] tracking-[0.2em] text-[#E9DFD0]/80">
              Architectural Scale
            </span>
            <span className="hidden sm:inline text-[#E9DFD0]/30">•</span>
            <span className="hidden sm:inline label-editorial text-[10px] tracking-[0.2em] text-[#E9DFD0]/80">
              Traditional Relief
            </span>
            <span className="hidden md:inline text-[#E9DFD0]/30">•</span>
            <span className="hidden md:inline label-editorial text-[10px] tracking-[0.2em] text-[#E9DFD0]/80">
              Bespoke Joinery
            </span>
          </div>

          <a
            href="#philosophy"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E9DFD0]/80 hover:text-[#B18A52] transition-colors group focus-visible:outline-none"
            aria-label="Scroll to philosophy section"
          >
            <span>Scroll</span>
            <ArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1 text-[#B18A52]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
