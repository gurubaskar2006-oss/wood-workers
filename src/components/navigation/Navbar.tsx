"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { CTAButton } from "@/components/ui/CTAButton";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Craft", href: "#craft" },
    { label: "Architecture", href: "#architectural" },
    { label: "Process", href: "#process" },
    { label: "Workshop", href: "#workshop" },
    { label: "Location", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[#171513]/90 backdrop-blur-md border-b border-[#F7F3EC]/10 py-4 shadow-lg"
            : "bg-gradient-to-b from-[#171513]/80 via-[#171513]/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-display text-xl sm:text-2xl font-light tracking-wide text-[#F7F3EC] transition-colors group-hover:text-[#B18A52]">
              {siteConfig.shortName}
            </span>
            <span className="label-editorial text-[9px] text-[#E9DFD0]/60 tracking-[0.25em]">
              Architectural & Bespoke Woodwork
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#E9DFD0]/80 hover:text-[#F7F3EC] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#B18A52] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <CTAButton
              href="#contact"
              variant="brass"
              size="sm"
              className="text-[11px] tracking-[0.18em]"
            >
              Visit Workshop
            </CTAButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F3EC] hover:text-[#B18A52] transition-colors focus-visible:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        id="mobile-navigation"
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-50 bg-[#171513] text-[#F7F3EC] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#E9DFD0]/15 pb-6">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="font-display text-2xl text-[#F7F3EC]"
          >
            {siteConfig.shortName}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#F7F3EC] hover:text-[#B18A52] transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav aria-label="Mobile Navigation" className="flex flex-col space-y-6 my-auto">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="group flex items-baseline justify-between font-display text-3xl sm:text-4xl font-light text-[#F7F3EC] hover:text-[#B18A52] transition-colors"
            >
              <span>{link.label}</span>
              <span className="font-mono text-xs text-[#B18A52]/60 group-hover:text-[#B18A52]">
                0{idx + 1}
              </span>
            </a>
          ))}
        </nav>

        <div className="pt-6 border-t border-[#E9DFD0]/15 flex flex-col space-y-4">
          <CTAButton
            href="#contact"
            variant="brass"
            size="lg"
            onClick={handleLinkClick}
            className="w-full text-center"
            icon={<ArrowUpRight size={16} />}
          >
            Visit Workshop
          </CTAButton>
          <p className="text-[11px] text-[#E9DFD0]/60 tracking-wider text-center uppercase">
            Bespoke Woodwork & Architectural Commissions
          </p>
        </div>
      </div>
    </>
  );
}
