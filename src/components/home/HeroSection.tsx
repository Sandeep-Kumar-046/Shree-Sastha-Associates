"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, MapPin, Compass, FileCheck2 } from "lucide-react";
import { companyData } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-brand-darkTeal text-brand-ivory overflow-hidden">
      {/* Background Architectural Image with Refined Editorial Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Residential Construction in India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Architectural Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darkTeal/95 via-brand-darkTeal/85 to-brand-darkTeal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darkTeal via-transparent to-brand-darkTeal/40" />
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Engineer Credentials Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-secondaryTeal/80 backdrop-blur-sm border border-brand-gold/40 text-xs sm:text-sm text-brand-ivory">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="font-semibold text-brand-goldLight">
                {companyData.engineer.fullNameWithPrefix}
              </span>
              <span className="text-brand-ivory/60">•</span>
              <span className="text-brand-ivory/90 font-medium">
                {companyData.engineer.qualifications.join(", ")}
              </span>
              <span className="hidden sm:inline text-brand-ivory/60">•</span>
              <span className="hidden sm:inline text-brand-ivory/90">
                {companyData.engineer.designation}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
              Building with Vision. <br className="hidden sm:inline" />
              <span className="text-brand-goldLight italic font-normal">
                Engineering with Trust.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-brand-ivory/85 font-normal max-w-2xl leading-relaxed">
              Engineering expertise, thoughtful planning, and professional guidance for your building journey. Independent civil engineering, statutory approvals, and property valuation in Coimbatore.
            </p>

            {/* Dual Primary Call-to-Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-sm font-semibold uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all duration-300 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-brand-secondaryTeal/70 hover:bg-brand-secondaryTeal text-brand-ivory border border-brand-border/40 text-sm font-semibold uppercase tracking-wider backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Contact Our Engineer</span>
              </Link>
            </div>

            {/* Quick Trust Attributes */}
            <div className="pt-8 border-t border-brand-ivory/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-brand-ivory/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="font-semibold text-white">Registered Authority</div>
                  <div className="text-[11px] text-brand-ivory/60">Registered Engineer Grade II</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="font-semibold text-white">Statutory Sanctions</div>
                  <div className="text-[11px] text-brand-ivory/60">DTCP & Municipal Approval</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <div>
                  <div className="font-semibold text-white">Local Office</div>
                  <div className="text-[11px] text-brand-ivory/60">Ondipudur, Coimbatore</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Card (5 cols) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="bg-brand-surface/95 backdrop-blur-md text-brand-darkText p-7 rounded-lg border border-brand-border/80 shadow-architectural-lg space-y-5">
              <div className="border-b border-brand-border pb-4">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                  Direct Consultancy
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-darkTeal mt-0.5">
                  Shree Sastha Associates
                </h3>
                <p className="text-xs text-brand-mutedText mt-1">
                  Civil Engineering • Valuations • Statutory Approvals
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-brand-ivory/60 rounded border border-brand-border/60">
                  <span className="text-[11px] font-semibold text-brand-darkTeal block">
                    1. Plan Approval Assistance
                  </span>
                  <span className="text-brand-mutedText text-[11px]">
                    CCMC, DTCP, and Panchayat building permits & layout regularisation.
                  </span>
                </div>

                <div className="p-3 bg-brand-ivory/60 rounded border border-brand-border/60">
                  <span className="text-[11px] font-semibold text-brand-darkTeal block">
                    2. Valuation Reports
                  </span>
                  <span className="text-brand-mutedText text-[11px]">
                    Detailed bank loan, mortgage, and legal property valuation certificates.
                  </span>
                </div>

                <div className="p-3 bg-brand-ivory/60 rounded border border-brand-border/60">
                  <span className="text-[11px] font-semibold text-brand-darkTeal block">
                    3. Civil Project Consulting
                  </span>
                  <span className="text-brand-mutedText text-[11px]">
                    Independent technical oversight for homebuilders and landowners.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="flex items-center justify-between w-full p-3 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Direct Call: {companyData.contact.phone}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
