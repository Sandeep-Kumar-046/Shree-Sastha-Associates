import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Ruler, Building } from "lucide-react";
import { companyData } from "@/data/company";

export default function IntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F3ED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Image: Real Architectural Contemporary Residence */}
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-md overflow-hidden shadow-architectural border border-brand-border">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Residence Architecture in Coimbatore"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-darkTeal/10 mix-blend-multiply" />
            </div>

            {/* Overlapping Floating Architectural Accent Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-brand-darkTeal text-brand-ivory p-6 rounded-md shadow-architectural-lg border border-brand-gold/30 max-w-[270px]">
              <div className="flex items-center gap-2 text-brand-gold mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[11px] uppercase tracking-wider font-semibold">
                  Registered Authority
                </span>
              </div>
              <p className="font-serif text-sm font-semibold leading-snug">
                {companyData.engineer.fullNameWithPrefix}
              </p>
              <p className="text-xs text-brand-goldLight font-medium mt-0.5">
                {companyData.engineer.qualifications.join(", ")}
              </p>
              <div className="text-[11px] text-brand-ivory/70 mt-2 pt-2 border-t border-brand-secondaryTeal">
                {companyData.engineer.designation}
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>About Shree Sastha Associates</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkTeal leading-tight">
              Expert guidance for every stage of your building journey.
            </h2>

            <div className="space-y-4 text-brand-darkText/85 text-sm sm:text-base leading-relaxed">
              <p>
                Based in Ondipudur, Coimbatore, <strong>SHREE SASTHA ASSOCIATES</strong> is a dedicated engineering consultancy providing technical clarity, statutory plan approvals, property valuations, and construction project guidance for property owners, builders, and developers.
              </p>
              <p>
                Led by <strong>{companyData.engineer.fullNameWithPrefix}</strong>, B.E. (Civil), AMIE, and Registered Engineer Grade II, we bring a disciplined, engineering-first philosophy to construction. Rather than relying on guesswork or generic contractor shortcuts, our consultancy ensures every phase of your project is backed by verified engineering principles and full statutory compliance.
              </p>
            </div>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white rounded border border-brand-border/80">
                <Ruler className="w-5 h-5 text-brand-gold mb-2" />
                <h4 className="font-semibold text-xs sm:text-sm text-brand-darkTeal">
                  Engineering Precision
                </h4>
                <p className="text-xs text-brand-mutedText mt-1">
                  Structural coordination, foundation design, and site quality compliance.
                </p>
              </div>

              <div className="p-4 bg-white rounded border border-brand-border/80">
                <ShieldCheck className="w-5 h-5 text-brand-gold mb-2" />
                <h4 className="font-semibold text-xs sm:text-sm text-brand-darkTeal">
                  Statutory Clearance
                </h4>
                <p className="text-xs text-brand-mutedText mt-1">
                  Strict adherence to TNCDBR rules, DTCP, CCMC, and Panchayat norms.
                </p>
              </div>

              <div className="p-4 bg-white rounded border border-brand-border/80">
                <Building className="w-5 h-5 text-brand-gold mb-2" />
                <h4 className="font-semibold text-xs sm:text-sm text-brand-darkTeal">
                  Independent Advisory
                </h4>
                <p className="text-xs text-brand-mutedText mt-1">
                  Unbiased guidance prioritizing homeowner interest, safety, and budget.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors"
              >
                <span>Read Full Engineer Profile</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
              <span className="text-brand-border">|</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-goldHover transition-colors"
              >
                <span>Visit Our Ondipudur Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
