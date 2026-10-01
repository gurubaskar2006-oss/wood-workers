import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  subtitle,
  theme = "light",
  align = "left",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "max-w-4xl",
        className
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        {number && (
          <span
            className={cn(
              "font-mono text-xs tracking-widest",
              isDark ? "text-[#B18A52]" : "text-[#B18A52]"
            )}
          >
            {number}
          </span>
        )}
        {number && label && (
          <span
            className={cn(
              "inline-block w-6 h-px",
              isDark ? "bg-[#B18A52]/40" : "bg-[#B18A52]/50"
            )}
          />
        )}
        {label && (
          <span
            className={cn(
              "label-editorial",
              isDark ? "text-[#E9DFD0]/70" : "text-[#4A3021]/80"
            )}
          >
            {label}
          </span>
        )}
      </div>

      <h2
        className={cn(
          "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.08]",
          isDark ? "text-[#F7F3EC]" : "text-[#171513]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl",
            isDark ? "text-[#E9DFD0]/80" : "text-[#171513]/75"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
