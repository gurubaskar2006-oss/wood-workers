"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Concept",
      subtitle: "Listening & Spatial Context",
      description:
        "Every bespoke project begins with understanding your space, aesthetic aspirations, and devotional or architectural requirements. We study room dimensions, sight lines, ambient lighting, and functional needs before timber is selected.",
      deliverable: "Spatial consultation, conceptual brief & timber recommendation",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Proportion & Iconography",
      description:
        "Translating ideas into measured architectural drawings and carving templates. We balance classical shilpa-shastra proportion canons with contemporary clean architectural lines to create harmony between old-world depth and modern spatial restraint.",
      deliverable: "Detailed dimensioned schematics & ornamental profile studies",
    },
    {
      number: "03",
      title: "Carving",
      subtitle: "Hand Chisel & Timber Joinery",
      description:
        "Seasoned hardwood blocks are rough-hewn, mortised, and meticulously hand-carved using specialized gouges, chisels, and rasps. Layer by layer, relief sculptures, fluted pillars, and interlocking joints emerge from solid timber.",
      deliverable: "Subtractive sculpting, mortise-and-tenon structural assembly",
    },
    {
      number: "04",
      title: "Finishing",
      subtitle: "Texture, Polish & Surface Luster",
      description:
        "Progressive hand-sanding followed by traditional herbal oils, organic waxes, or custom matte stains. The natural timber grain is accentuated while protecting the carved surfaces from humidity, temperature shifts, and time.",
      deliverable: "Hand-rubbed oil finish, grain protection & tactile luster",
    },
    {
      number: "05",
      title: "Installation",
      subtitle: "Spatial Placement & Assembly",
      description:
        "Large architectural structures and mandapams are carefully transported in modular precision components and assembled on-site. Every anchor, bracket, and brass fixture is leveled and secured seamlessly into your architecture.",
      deliverable: "White-glove on-site assembly, structural leveling & final handover",
    },
  ];

  return (
    <section
      id="process"
      aria-label="The Making Process"
      className="py-24 sm:py-32 md:py-36 bg-[#F7F3EC] text-[#171513] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="07"
          label="Methodology"
          title="The Making Process"
          subtitle="From initial spatial concept to finished architectural installation, our five-stage discipline guarantees enduring quality."
        />

        {/* Process Steps Progression Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className="group flex flex-col justify-between p-6 sm:p-7 bg-[#FAF7F2] border border-[#171513]/15 hover:border-[#9A6A3F] transition-all duration-300 relative"
            >
              {/* Step Counter Top Bar */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#171513]/10 mb-5">
                  <span className="font-mono text-lg font-light text-[#B18A52]">
                    {step.number}
                  </span>
                  <span className="label-editorial text-[9px] text-[#9A6A3F]">
                    Stage {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl text-[#171513] mb-1 group-hover:text-[#9A6A3F] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4A3021] font-medium tracking-wide mb-4">
                  {step.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#171513]/75 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Micro Card */}
              <div className="mt-6 pt-4 border-t border-[#171513]/10">
                <span className="label-editorial text-[8px] text-[#9A6A3F] block mb-1">
                  Deliverable
                </span>
                <span className="text-[11px] text-[#171513]/85 font-medium leading-snug block">
                  {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
