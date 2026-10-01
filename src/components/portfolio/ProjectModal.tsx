"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);


  // Handle ESC key and arrow keys
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev === 0 ? project.images.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.images[activeImageIndex] || project.coverImage;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171513]/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-[#F7F3EC] text-[#171513] shadow-2xl border border-[#171513]/20 flex flex-col lg:flex-row focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#171513] text-[#F7F3EC] hover:bg-[#B18A52] transition-colors focus-visible:outline-none shadow-md"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Media Preview Column */}
        <div className="lg:w-7/12 bg-[#171513] flex flex-col justify-between relative min-h-[380px] sm:min-h-[460px] lg:min-h-[640px]">
          {/* Main Large Display Image */}
          <div className="relative w-full h-full flex-1 min-h-[320px] sm:min-h-[420px]">
            <Image
              src={currentImage}
              alt={`${project.title} - View ${activeImageIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center p-2 sm:p-4"
            />

            {/* Carousel Navigation Arrows if multiple images */}
            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#171513]/80 text-[#F7F3EC] hover:bg-[#B18A52] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#171513]/80 text-[#F7F3EC] hover:bg-[#B18A52] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails Row if multiple images */}
          {project.images.length > 1 && (
            <div className="p-4 bg-[#171513]/95 border-t border-[#F7F3EC]/10 flex items-center gap-3 overflow-x-auto">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 border-2 overflow-hidden transition-all ${
                    activeImageIndex === idx
                      ? "border-[#B18A52] scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Project Editorial Information Column */}
        <div className="lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#F7F3EC]">
          <div>
            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="label-editorial text-[#9A6A3F]">
                {project.categoryLabel}
              </span>
            </div>

            {/* Title */}
            <h3
              id="modal-project-title"
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#171513] font-light leading-snug"
            >
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="mt-2 text-sm text-[#4A3021] font-medium leading-relaxed">
              {project.tagline}
            </p>

            {/* Description */}
            <div className="mt-6 text-[#171513]/80 text-sm leading-relaxed space-y-4">
              <p>{project.description}</p>
            </div>

            {/* Technical Specifications */}
            <div className="mt-8 pt-6 border-t border-[#171513]/10 space-y-4">
              <div>
                <span className="label-editorial text-[10px] text-[#9A6A3F] block">
                  Material
                </span>
                <span className="font-serif text-sm text-[#171513]">
                  {project.details.material}
                </span>
              </div>
              <div>
                <span className="label-editorial text-[10px] text-[#9A6A3F] block">
                  Technique
                </span>
                <span className="font-serif text-sm text-[#171513]">
                  {project.details.technique}
                </span>
              </div>
              <div>
                <span className="label-editorial text-[10px] text-[#9A6A3F] block">
                  Context
                </span>
                <span className="font-serif text-sm text-[#171513]">
                  {project.details.context}
                </span>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-8 pt-6 border-t border-[#171513]/10 flex flex-col sm:flex-row items-center gap-3">
            <CTAButton
              href="#contact"
              onClick={onClose}
              variant="brass"
              size="md"
              className="w-full text-center"
              icon={<ArrowUpRight size={14} />}
            >
              Enquire About Similar Piece
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
