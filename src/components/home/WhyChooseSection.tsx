import React from "react";
import {
  ShieldCheck,
  Compass,
  FileSearch,
  Users2,
  HardHat,
  MessageSquareCheck,
} from "lucide-react";
import { companyData } from "@/data/company";

const trustPillars = [
  {
    icon: ShieldCheck,
    title: "Engineering-Focused Approach",
    desc: "Every design, plan, and recommendation is guided by registered civil engineering principles and Indian Standard (IS) codes, not guesswork.",
  },
  {
    icon: FileSearch,
    title: "Clear Statutory Guidance",
    desc: "Transparent navigation through Tamil Nadu Combined Development and Building Rules (TNCDBR), DTCP sanctions, and CCMC municipal bylaws.",
  },
  {
    icon: Compass,
    title: "Attention to Planning & Details",
    desc: "Thorough verification of setbacks, FSI ratios, structural load paths, and site boundaries before you commit construction capital.",
  },
  {
    icon: Users2,
    title: "Client-Focused Consultation",
    desc: "Direct, personal interaction with Er. A. Naveen Kumar. We listen to your family requirements, budget constraints, and timeline realities.",
  },
  {
    icon: HardHat,
    title: "Practical Building Solutions",
    desc: "Pragmatic civil engineering tailored to Coimbatore's soil strata, groundwater levels, and local construction material availability.",
  },
  {
    icon: MessageSquareCheck,
    title: "Professional Communication",
    desc: "Timely document submissions, prompt status updates, and transparent fee structures with no ambiguous hidden clauses.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-brand-darkTeal text-brand-ivory relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span>Built on Engineering Ethics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Why property owners and builders consult Shree Sastha Associates.
          </h2>
          <p className="text-brand-ivory/80 text-base mt-4">
            We believe in honest technical competence, registered accountability, and protecting the interests of homeowners in Coimbatore.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-lg bg-brand-secondaryTeal/40 border border-brand-border/20 backdrop-blur-sm hover:border-brand-gold/60 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded flex items-center justify-center bg-brand-darkTeal border border-brand-gold/40 text-brand-gold group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-brand-goldLight transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-ivory/75 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Direct Engineer Quote Banner */}
        <div className="mt-16 p-8 rounded-lg bg-brand-secondaryTeal/80 border border-brand-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-brand-gold font-bold">
              Engineer’s Pledge
            </span>
            <p className="font-serif text-base sm:text-lg italic text-brand-ivory/95">
              &quot;A building is not just brick and mortar—it is a family’s generational investment. Our role is to ensure your structure is engineered safely, approved legally, and valued accurately.&quot;
            </p>
            <p className="text-xs text-brand-goldLight font-medium">
              — {companyData.engineer.fullNameWithPrefix}, {companyData.engineer.designation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
