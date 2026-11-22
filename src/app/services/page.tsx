import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Compass,
  Building2,
  FileText,
  Calculator,
  HelpCircle,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: `Our Services | ${companyData.name} — Civil Engineering & Approvals`,
  description:
    "Explore our 5 verified services: Engineering Services, Property Valuation, Plan Approval Works, DTCP & DTP Approval, and Building Project Consulting in Coimbatore.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-brand-surface">
      {/* Editorial Header */}
      <section className="bg-brand-darkTeal text-brand-ivory py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Services Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Engineering expertise & <br />
              <span className="text-brand-goldLight italic font-normal">
                statutory compliance.
              </span>
            </h1>
            <p className="text-brand-ivory/80 text-base sm:text-lg leading-relaxed pt-2">
              From initial plot verification and DTCP sanction drawings to structural civil engineering reviews and bank valuation reports, we offer clear, reliable guidance for every stage of your building journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Comprehensive Details */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="bg-white rounded-lg border border-brand-border overflow-hidden shadow-sm hover:shadow-architectural-lg transition-all duration-300 scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  {/* Visual Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px] bg-brand-darkTeal ${
                      isEven ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-darkTeal/80 via-transparent to-black/20" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded bg-brand-darkTeal/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-brand-surface/95 backdrop-blur-sm p-4 rounded border border-brand-border text-xs text-brand-darkText">
                        <span className="text-[10px] font-semibold text-brand-gold uppercase tracking-wider block">
                          Who Needs This Service
                        </span>
                        <p className="font-medium text-brand-darkTeal mt-0.5">
                          {service.whoNeedsThis[0]}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 p-8 sm:p-12 space-y-6 ${
                      isEven ? "lg:order-1" : ""
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                        0{index + 1} — {service.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal mt-1">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-brand-gold mt-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-brand-darkText/80 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1 border-t border-brand-border/60">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-mutedText">
                        Technical Highlights:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-darkText">
                        {service.keyHighlights.slice(0, 4).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors group"
                      >
                        <span>View Detailed Procedure & Documents</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}#enquiry-form`}
                        className="px-5 py-2.5 rounded bg-brand-ivory hover:bg-brand-gold hover:text-white text-brand-darkTeal border border-brand-border text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        Enquire for this Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Frequently Asked Questions on Approvals & Consultancy */}
      <section className="py-16 bg-brand-ivory border-t border-brand-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
              Knowledge Base
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal mt-1">
              Common Questions on Plan Approvals & Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
            <div className="p-6 bg-white rounded-lg border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-darkTeal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>What is the difference between DTCP and CCMC approvals?</span>
              </h3>
              <p className="text-brand-mutedText leading-relaxed">
                Coimbatore City Municipal Corporation (CCMC) sanctions building plans inside corporation limits. Directorate of Town and Country Planning (DTCP) oversees layout approvals and regional developments in surrounding planning areas, town panchayats, and non-corporation revenue zones.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-darkTeal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Why is a Registered Engineer Grade II signature required?</span>
              </h3>
              <p className="text-brand-mutedText leading-relaxed">
                Tamil Nadu building rules (TNCDBR) mandate that building plans, structural designs, and stability undertakings must be certified by a legally recognized and licensed civil engineer possessing the prescribed qualifications (B.E. Civil, Registered Grade II).
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-darkTeal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>How is a property valuation report prepared?</span>
              </h3>
              <p className="text-brand-mutedText leading-relaxed">
                Valuation involves physical site inspection, boundary verification, assessing the construction stage, applying Tamil Nadu guideline values alongside realistic market factors, and calculating structural depreciation for bank loans or legal documentation.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-darkTeal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Can an unapproved layout plot be regularized?</span>
              </h3>
              <p className="text-brand-mutedText leading-relaxed">
                Under the Tamil Nadu Government regularisation framework, unapproved plots registered prior to specified cut-off dates can be regularised under the online framework. We assist with boundary reconciliation and technical documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
