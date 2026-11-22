import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  layout?: "horizontal" | "stacked";
}

/**
 * OFFICIAL SHREE SASTHA ASSOCIATES LOGO COMPONENT
 * Uses official brand assets:
 * - /images/logo-light.png: Dark Teal + Gold on transparent background (for light/ivory backgrounds like Navbar)
 * - /images/logo-dark.png: Crisp White + Gold on transparent background (for dark teal backgrounds like Footer)
 * - /images/logo-stacked.png: Stacked variant for vertical contexts
 */
export default function Logo({
  variant = "light",
  className = "",
  showTagline = false,
  size = "md",
  layout = "horizontal",
}: LogoProps) {
  const isDark = variant === "dark";

  // Select appropriate logo asset based on background contrast and layout
  const logoSrc =
    layout === "stacked"
      ? "/images/logo-stacked.png"
      : isDark
      ? "/images/logo-dark.png"
      : "/images/logo-light.png";

  // Height configurations maintaining original 902x143 (~6.31:1) aspect ratio
  const sizeConfig = {
    sm: { height: 32, width: 202, classes: "h-8 w-auto max-w-[190px] sm:max-w-[210px]" },
    md: { height: 42, width: 265, classes: "h-9 sm:h-11 w-auto max-w-[220px] sm:max-w-[270px]" },
    lg: { height: 54, width: 340, classes: "h-12 sm:h-14 w-auto max-w-[260px] sm:max-w-[340px]" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="SHREE SASTHA ASSOCIATES — Civil Engineers, Valuers & Plan Approvals"
      className={`inline-flex flex-col group transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="SHREE SASTHA ASSOCIATES Logo"
          width={sizeConfig.width}
          height={sizeConfig.height}
          priority
          className={`${sizeConfig.classes} object-contain transition-all`}
        />
      </div>

      {showTagline && (
        <span
          className={`text-[9px] tracking-[0.25em] uppercase font-semibold mt-1 ${
            isDark ? "text-brand-goldLight" : "text-brand-gold"
          }`}
        >
          Engineers & Valuers • Coimbatore
        </span>
      )}
    </Link>
  );
}
