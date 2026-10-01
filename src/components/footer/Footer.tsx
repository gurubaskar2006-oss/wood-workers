"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#171513] text-[#F7F3EC] border-t border-[#E9DFD0]/10 pt-16 sm:pt-20 pb-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E9DFD0]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block group focus-visible:outline-none">
                <span className="font-display text-2xl sm:text-3xl font-light tracking-wide text-[#F7F3EC] group-hover:text-[#B18A52] transition-colors">
                  {siteConfig.shortName}
                </span>
                <span className="label-editorial text-[9px] text-[#B18A52] block tracking-[0.25em] mt-1">
                  Contemporary Indian Craftsmanship
                </span>
              </Link>
              <p className="mt-4 text-xs sm:text-sm text-[#E9DFD0]/70 font-light leading-relaxed max-w-sm">
                Architectural woodwork, traditional temple mandapams, and bespoke timber
                commissions handcrafted with enduring precision.
              </p>
            </div>

            <div className="mt-8 space-y-1 text-xs text-[#E9DFD0]/60 font-mono">
              <div>
                Atelier Location: {siteConfig.contact.location.city},{" "}
                {siteConfig.contact.location.country}
              </div>
              <div>
                Direct / WhatsApp:{" "}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-[#E9DFD0] hover:text-[#B18A52] transition-colors"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="md:col-span-3">
            <span className="label-editorial text-[10px] text-[#B18A52] block mb-4 tracking-[0.22em]">
              Navigation
            </span>
            <ul className="space-y-3 text-xs uppercase tracking-[0.16em]">
              <li>
                <a
                  href="#work"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#craft"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  Craft Disciplines
                </a>
              </li>
              <li>
                <a
                  href="#architectural"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  Architectural Case Study
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  The Making Process
                </a>
              </li>
              <li>
                <a
                  href="#workshop"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  The Workshop
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#E9DFD0]/75 hover:text-[#F7F3EC] transition-colors"
                >
                  Location & Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Craft Disciplines List */}
          <div className="md:col-span-4">
            <span className="label-editorial text-[10px] text-[#B18A52] block mb-4 tracking-[0.22em]">
              Specializations
            </span>
            <ul className="space-y-2 text-xs text-[#E9DFD0]/70 font-light">
              {siteConfig.craftSpecializations.map((spec) => (
                <li key={spec} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#B18A52]" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Case Study Citation, Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9DFD0]/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span suppressHydrationWarning>
              &copy; {currentYear} {siteConfig.shortName}. All rights reserved.
            </span>
            <span className="hidden sm:inline text-[#E9DFD0]/20">•</span>
            <span className="text-[11px] text-[#E9DFD0]/50">
              6th Civilians Corporation Portfolio Showcase
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E9DFD0]/80 hover:text-[#B18A52] transition-colors focus-visible:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="text-[#B18A52]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
