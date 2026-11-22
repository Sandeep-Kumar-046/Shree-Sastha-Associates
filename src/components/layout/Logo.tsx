import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * REUSABLE LOGO COMPONENT
 * Note: To replace with the actual uploaded logo image, simply set `USE_CUSTOM_IMAGE_LOGO = true`
 * and place the image in `/public/images/logo.png`.
 */
export const USE_CUSTOM_IMAGE_LOGO = false;
export const CUSTOM_LOGO_IMAGE_PATH = "/images/logo.png";

export default function Logo({
  variant = "light",
  className = "",
  showTagline = true,
  size = "md",
}: LogoProps) {
  // If the user uploads their official logo later, this branch renders the real image
  if (USE_CUSTOM_IMAGE_LOGO) {
    return (
      <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
        <div className="relative w-12 h-12">
          <Image
            src={CUSTOM_LOGO_IMAGE_PATH}
            alt="SHREE SASTHA ASSOCIATES Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span
            className={`font-serif tracking-wider font-bold leading-tight ${
              variant === "dark" ? "text-white" : "text-brand-darkTeal"
            } ${size === "lg" ? "text-xl" : size === "sm" ? "text-base" : "text-lg"}`}
          >
            SHREE SASTHA
          </span>
          <span
            className={`text-[10px] tracking-[0.25em] uppercase font-semibold ${
              variant === "dark" ? "text-brand-goldLight" : "text-brand-gold"
            }`}
          >
            ASSOCIATES
          </span>
        </div>
      </Link>
    );
  }

  // Refined architectural monogram placeholder
  const isDark = variant === "dark";

  const sizeClasses = {
    sm: { icon: "w-9 h-9", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-11 h-11", text: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-2xl", sub: "text-xs" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="SHREE SASTHA ASSOCIATES - Home"
      className={`inline-flex items-center gap-3 group transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      {/* Geometric Architectural Monogram Icon */}
      <div
        className={`relative ${sizeClasses.icon} flex items-center justify-center rounded border transition-colors ${
          isDark
            ? "bg-brand-secondaryTeal border-brand-gold/40 text-brand-gold"
            : "bg-brand-darkTeal border-brand-gold/30 text-brand-gold"
        } shadow-sm`}
      >
        {/* Subtle geometric drafting lines */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Outer compass grid */}
          <circle
            cx="22"
            cy="22"
            r="19"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="2 2"
            opacity="0.4"
          />
          {/* Architectural roof truss / triangular motif */}
          <path
            d="M8 32L22 9L36 32"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Engineering tie beam */}
          <line
            x1="13"
            y1="25"
            x2="31"
            y2="25"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          {/* SSA Center Pillar */}
          <line
            x1="22"
            y1="9"
            x2="22"
            y2="34"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Gold plumb bob dot */}
          <circle cx="22" cy="34" r="2.2" fill="#C88945" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-serif tracking-wider font-bold leading-none ${
              isDark ? "text-white" : "text-brand-darkTeal"
            } ${sizeClasses.text}`}
          >
            SHREE SASTHA
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span
            className={`tracking-[0.28em] uppercase font-bold ${
              isDark ? "text-brand-goldLight" : "text-brand-gold"
            } ${sizeClasses.sub}`}
          >
            ASSOCIATES
          </span>
          {showTagline && (
            <>
              <span
                className={`text-[8px] ${
                  isDark ? "text-brand-ivoryDark/40" : "text-brand-mutedText/40"
                }`}
              >
                •
              </span>
              <span
                className={`text-[9px] tracking-wider uppercase font-medium ${
                  isDark ? "text-brand-ivory/60" : "text-brand-mutedText"
                }`}
              >
                Engineers & Valuers
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
