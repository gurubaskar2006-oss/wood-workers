import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Philosophy } from "@/components/philosophy/Philosophy";
import { SelectedWorks } from "@/components/portfolio/SelectedWorks";
import { CraftCategories } from "@/components/categories/CraftCategories";
import { FeaturedArchitectural } from "@/components/architectural/FeaturedArchitectural";
import { CraftDetailSection } from "@/components/craftsmanship/CraftDetailSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { CustomCommissions } from "@/components/commissions/CustomCommissions";
import { WorkshopSection } from "@/components/workshop/WorkshopSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F3EC] text-[#171513]">
      {/* 1. Global Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Cinematic Hero */}
        <Hero />

        {/* 3. Intro / Philosophy */}
        <Philosophy />

        {/* 4. Selected Works (Portfolio & Lightbox) */}
        <SelectedWorks />

        {/* 5. Craft Disciplines / Categories */}
        <CraftCategories />

        {/* 6. Featured Architectural Work (Mandapam Case Study) */}
        <FeaturedArchitectural />

        {/* 7. Craftsmanship & Tactile Details */}
        <CraftDetailSection />

        {/* 8. The Making Process (5 Stages) */}
        <ProcessSection />

        {/* 9. Custom Commissions Conversion Anchor */}
        <CustomCommissions />

        {/* 10. The Workshop / Atelier */}
        <WorkshopSection />

        {/* 11. Contact & Commission Enquiry Form */}
        <ContactSection />
      </main>

      {/* 12. Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
