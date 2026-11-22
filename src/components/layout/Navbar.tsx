"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import Logo from "./Logo";
import { companyData } from "@/data/company";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    hasDropdown: true,
    subLinks: [
      { name: "Engineering Services", href: "/services/engineering-services" },
      { name: "Valuation Services", href: "/services/valuation-services" },
      { name: "Plan Approval Works", href: "/services/plan-approval-works" },
      { name: "DTCP & DTP Approval", href: "/services/dtcp-dtp-approval" },
      { name: "Building Project Consulting", href: "/services/building-project-consulting" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Professional Information Bar */}
      <div className="bg-brand-darkTeal text-brand-ivory text-xs border-b border-brand-secondaryTeal/60 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Info: Registered Engineer Credential */}
          <div className="flex items-center gap-3 text-brand-ivory/90">
            <span className="inline-flex items-center gap-1.5 font-medium text-brand-goldLight">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              {companyData.engineer.fullNameWithPrefix} ({companyData.engineer.qualifications.join(", ")})
            </span>
            <span className="hidden sm:inline text-brand-gold/60">|</span>
            <span className="hidden sm:inline text-brand-ivory/80">
              {companyData.engineer.designation}
            </span>
          </div>

          {/* Right Contact Quick Links */}
          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-brand-ivory/90 hover:text-brand-gold transition-colors font-medium"
              title="Call Er. A. Naveen Kumar"
            >
              <Phone className="w-3 h-3 text-brand-gold" />
              <span>{companyData.contact.phone}</span>
            </a>
            <span className="text-brand-secondaryTeal">|</span>
            <div className="hidden lg:flex items-center gap-1.5 text-brand-ivory/70">
              <MapPin className="w-3 h-3 text-brand-gold/80" />
              <span>Ondipudur, Coimbatore</span>
            </div>
            <span className="hidden lg:inline text-brand-secondaryTeal">|</span>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-brand-ivory/80 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-gold/80" />
              <span className="truncate max-w-[200px]">{companyData.contact.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FDFCFB]/95 backdrop-blur-md shadow-md py-3 border-b border-brand-border"
            : "bg-[#FDFCFB] py-4 border-b border-brand-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors py-2 ${
                        isActive
                          ? "text-brand-darkTeal font-semibold border-b-2 border-brand-gold"
                          : "text-brand-darkText/80 hover:text-brand-darkTeal"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 text-brand-mutedText group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Services Dropdown Panel */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-72 transition-all duration-200 origin-top-left ${
                        servicesDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="bg-white rounded-md shadow-architectural-lg border border-brand-border/80 p-2 overflow-hidden">
                        <div className="text-[11px] uppercase tracking-wider text-brand-mutedText px-3 py-1 font-semibold border-b border-brand-border/40">
                          Our Engineering Services
                        </div>
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-3 py-2 text-xs font-medium text-brand-darkText hover:text-brand-darkTeal hover:bg-brand-ivory/60 rounded transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                        <div className="mt-1 pt-1 border-t border-brand-border/40">
                          <Link
                            href="/services"
                            className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-brand-gold hover:text-brand-goldHover"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-brand-darkTeal font-semibold border-b-2 border-brand-gold"
                      : "text-brand-darkText/80 hover:text-brand-darkTeal"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact#enquiry-form"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs uppercase tracking-wider font-semibold text-white bg-brand-darkTeal hover:bg-brand-secondaryTeal border border-brand-secondaryTeal shadow-sm transition-all duration-200 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              aria-label="Direct Call"
              className="p-2 text-brand-darkTeal bg-brand-ivory rounded border border-brand-border hover:bg-brand-gold hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 text-brand-darkTeal hover:text-brand-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-brand-surface border-t border-brand-border px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <div key={link.name} className="border-b border-brand-border/40 pb-1">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-base font-medium ${
                        isActive
                          ? "text-brand-darkTeal font-bold pl-2 border-l-4 border-brand-gold"
                          : "text-brand-darkText hover:text-brand-gold"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 pb-2 space-y-1">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-brand-mutedText hover:text-brand-darkTeal"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Engineer Badge Card */}
            <div className="bg-brand-ivory p-3 rounded border border-brand-border text-xs text-brand-darkText">
              <div className="font-semibold text-brand-darkTeal flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>{companyData.engineer.fullNameWithPrefix}</span>
              </div>
              <p className="text-[11px] text-brand-mutedText mt-0.5">
                {companyData.engineer.qualifications.join(", ")} • {companyData.engineer.designation}
              </p>
              <div className="mt-2 text-[11px] text-brand-darkText flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-brand-gold" />
                <span>{companyData.contact.address.area}, Coimbatore – 641016</span>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded text-xs font-semibold bg-brand-ivory text-brand-darkTeal border border-brand-border text-center"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact#enquiry-form"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded text-xs font-semibold bg-brand-darkTeal text-white text-center"
              >
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
