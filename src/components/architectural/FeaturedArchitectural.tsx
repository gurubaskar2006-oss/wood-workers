"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FeaturedArchitectural() {
  const [activeStep, setActiveStep] = useState(0);

  const architecturalStages = [
    {
      step: "01",
      title: "Full Structure",
      subtitle: "Spatial Context & Assembly",
      image: "/images/architectural-mandapam-installed-front.jpeg",
      caption:
        "The completed wooden mandapam integrated into a high-ceiling residential interior, anchored upon an elevated marble platform with cove illumination.",
      specs: "Teakwood superstructure • Multi-tiered carved vimana dome • Built-in brass lamps",
    },
    {
      step: "02",
      title: "Pillars & Columns",
      subtitle: "Load & Proportion",
      image: "/images/architectural-mandapam-installed-angle.jpeg",
      caption:
        "Square-to-octagonal fluted column transitions sculpted to withstand load while imparting visual lightness to the sanctuary entrance.",
      specs: "Fluted shaft transitions • Classical entasis • Mortise-and-tenon structural joints",
    },
    {
      step: "03",
      title: "Carved Capitals",
      subtitle: "Ornamental Detail",
      image: "/images/mandapam-pillar-arch-capital.jpeg",
      caption:
        "Individually hand-chiseled floral rosette medallions and scalloped bracket architraves bridging the vertical column into the horizontal lintel.",
      specs: "Sunflower relief medallions • Lotus petal frieze moulding • Custom temple arch profile",
    },
    {
      step: "04",
      title: "Vimana Crown & Shikhara",
      subtitle: "Tiered Canopy Architecture",
      image: "/images/architectural-mandapam-crown-canopy.jpeg",
      caption:
        "Grand multi-tier wooden mandapam crown canopy carved with diamond lattice roof texturing, turned kalasha finials, and corner bracket reliefs.",
      specs: "Turned kalasha pinnacles • Diamond lattice relief • Multi-tiered stepped cornice",
    },
    {
      step: "05",
      title: "Temple Pediment & Lintel",
      subtitle: "Iconographic Header",
      image: "/images/shiva-parvathi-kailash-lintel.jpeg",
      caption:
        "Handcrafted entrance pediment frieze sculpted with sacred deities, suspended carved temple deepams, and stepped floral dentil mouldings.",
      specs: "Kailash deity relief • Suspended deepam carvings • Integrated door frame architrave",
    },
  ];

  return (
    <section
      id="architectural"
      aria-label="Featured Architectural Woodwork"
      className="py-24 sm:py-32 md:py-36 bg-[#F7F3EC] text-[#171513] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <SectionHeading
          number="05"
          label="Architectural Case Study"
          title="Crafted for the Space"
          subtitle="From individually carved pillars and ornamental elements to complete architectural wooden structures, every piece is developed around its intended environment."
        />

        {/* Interactive Architecture Walkthrough */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Visual Display (8 Cols on Desktop) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#171513] shadow-xl border border-[#171513]/15">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={architecturalStages[activeStep].image}
                    alt={architecturalStages[activeStep].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/85 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-[#F7F3EC]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-[#B18A52]">
                    {architecturalStages[activeStep].step}
                  </span>
                  <span className="w-6 h-px bg-[#B18A52]" />
                  <span className="label-editorial text-[10px] text-[#E9DFD0]">
                    {architecturalStages[activeStep].subtitle}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F7F3EC]">
                  {architecturalStages[activeStep].title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#E9DFD0]/90 max-w-2xl leading-relaxed">
                  {architecturalStages[activeStep].caption}
                </p>
              </div>
            </div>

            {/* Technical Specification Bar */}
            <div className="mt-4 p-4 bg-[#E9DFD0]/60 border border-[#171513]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="font-mono text-[#9A6A3F] uppercase tracking-wider font-semibold">
                Execution Notes:
              </span>
              <span className="text-[#171513]/85 font-medium">
                {architecturalStages[activeStep].specs}
              </span>
            </div>
          </div>

          {/* Sequential Step Selector (4 Cols on Desktop) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            <h4 className="label-editorial text-[#9A6A3F] mb-2">
              Visual Progression Sequence
            </h4>

            {architecturalStages.map((item, idx) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 transition-all duration-300 border flex flex-col ${
                  activeStep === idx
                    ? "bg-[#171513] text-[#F7F3EC] border-[#171513] shadow-md translate-x-1"
                    : "bg-[#F7F3EC] text-[#171513] border-[#171513]/15 hover:border-[#9A6A3F] hover:bg-[#E9DFD0]/40"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span
                    className={`font-mono text-xs ${
                      activeStep === idx ? "text-[#B18A52]" : "text-[#9A6A3F]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`label-editorial text-[9px] ${
                      activeStep === idx ? "text-[#E9DFD0]/70" : "text-[#171513]/60"
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </div>
                <span className="font-display text-lg sm:text-xl font-normal">
                  {item.title}
                </span>
              </button>
            ))}

            <div className="pt-6 mt-4">
              <CTAButton
                href="#contact"
                variant="editorial"
                icon={<ArrowUpRight size={14} />}
              >
                Commission Architectural Woodwork
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
