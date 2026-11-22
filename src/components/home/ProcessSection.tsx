import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    phase: "Discovery & Alignment",
    desc: "We discuss your land, plot boundaries, family or commercial requirements, budget scope, and specific statutory goals.",
    focus: "Plot assessment, document check, client briefing",
  },
  {
    number: "02",
    title: "Planning & Guidance",
    phase: "Spatial & Bylaw Analysis",
    desc: "Reviewing applicable Tamil Nadu Combined Development and Building Rules (TNCDBR), zoning constraints, road widths, and setback norms.",
    focus: "FSI calculations, setback study, conceptual layout",
  },
  {
    number: "03",
    title: "Engineering & Documentation",
    phase: "Technical Detailing",
    desc: "Preparing detailed civil engineering drawings, structural coordination, or property valuation worksheets based on the engaged service.",
    focus: "Engineering drawings, load calculations, valuation dossier",
  },
  {
    number: "04",
    title: "Approval & Consultation",
    phase: "Statutory Sanction Support",
    desc: "Facilitating Coimbatore Municipal Corporation, DTCP, or Panchayat submission drawings, resolving departmental queries systematically.",
    focus: "TNCDBR submission drawings, municipal liaison, compliance",
  },
  {
    number: "05",
    title: "Project Guidance",
    phase: "Execution Oversight",
    desc: "Providing milestone guidance, checking foundation casting, reinforcement placement, and guiding the client until successful handover.",
    focus: "Site inspections, quality monitoring, handover advisory",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span>The Building Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-darkTeal leading-tight">
            A structured, transparent process from concept to completion.
          </h2>
          <p className="text-brand-mutedText text-base mt-4">
            Building in Tamil Nadu involves regulatory precision and structural rigor. Here is how Shree Sastha Associates guides you step-by-step.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg border border-brand-border/80 shadow-sm hover:shadow-architectural hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Step Number & Indicator */}
                <div className="flex items-center justify-between border-b border-brand-border/50 pb-3">
                  <span className="font-serif text-3xl font-bold text-brand-gold group-hover:scale-105 transition-transform">
                    {step.number}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-ivory text-brand-darkTeal">
                    Step {idx + 1}
                  </span>
                </div>

                <div className="mt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold block">
                    {step.phase}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-darkTeal mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-mutedText leading-relaxed mt-2.5">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Focus Tag */}
              <div className="pt-3 border-t border-brand-border/40">
                <div className="text-[11px] text-brand-darkTeal/80 flex items-start gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                  <span>{step.focus}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Advisory Note */}
        <div className="mt-12 text-center text-xs text-brand-mutedText max-w-2xl mx-auto">
          <p>
            * Note: Building approvals and plan sanctions are granted at the discretion of the competent statutory authorities (CCMC, DTCP, or Panchayat). Our role as a Registered Engineer Grade II is to ensure drawings and documents are technically compliant with all prevailing TNCDBR bylaws.
          </p>
        </div>
      </div>
    </section>
  );
}
