import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "brass" | "editorial";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function CTAButton({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  type = "button",
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-wider uppercase text-xs font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px] tracking-[0.16em]",
    md: "px-6 py-3.5 text-xs tracking-[0.18em]",
    lg: "px-8 py-4 text-xs tracking-[0.2em]",
  };

  const variantStyles = {
    primary:
      "bg-[#171513] text-[#F7F3EC] hover:bg-[#4A3021] active:bg-[#171513] border border-[#171513] shadow-sm hover:shadow-md",
    secondary:
      "bg-transparent text-[#171513] border border-[#171513]/30 hover:border-[#171513] hover:bg-[#171513]/5 active:bg-[#171513]/10",
    brass:
      "bg-[#B18A52] text-[#F7F3EC] hover:bg-[#9A6A3F] active:bg-[#8C6A37] border border-[#B18A52]",
    editorial:
      "bg-transparent text-[#171513] border-b border-[#171513] px-0 py-1 hover:text-[#9A6A3F] hover:border-[#9A6A3F] tracking-[0.2em]",
  };

  const classes = cn(
    baseStyles,
    variant !== "editorial" && sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span>{children}</span>
        {icon && <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      <span>{children}</span>
      {icon && <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
}
