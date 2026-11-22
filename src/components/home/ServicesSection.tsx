import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Shield, Building, FileText, Calculator } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  "engineering-services": <Compass className="w-6 h-6 text-brand-gold" />,
  "valuation-services": <Calculator className="w-6 h-6 text-brand-gold" />,
  "plan-approval-works": <FileText className="w-6 h-6 text-brand-gold" />,
  "dtcp-dtp-approval": <Shield className="w-6 h-6 text-brand-gold" />,
  "building-project-consulting": <Building className="w-6 h-6 text-brand-gold" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            <span className="w-8 h-[1px] bg-brand-gold" />
            <span>Core Company Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-darkTeal leading-tight">
            Comprehensive civil engineering and statutory building solutions.
          </h2>
          <p className="text-brand-mutedText text-base mt-4">
            Directly derived from verified professional expertise—crafted for individual homebuilders, commercial plot investors, and developers in Coimbatore.
          </p>
        </div>

        {/* 5 Verified Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={service.slug}
                className={`group flex flex-col justify-between bg-brand-surface rounded-lg border border-brand-border/80 overflow-hidden hover:shadow-architectural-lg hover:border-brand-gold/50 transition-all duration-300 ${
                  isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Top Image Composition */}
                <div className="relative h-56 w-full overflow-hidden bg-brand-darkTeal">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darkTeal/90 via-brand-darkTeal/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded bg-brand-darkTeal/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-4 p-2.5 rounded bg-brand-darkTeal/90 border border-brand-gold/40 text-brand-gold">
                    {iconMap[service.slug] || <Compass className="w-6 h-6 text-brand-gold" />}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-brand-darkTeal group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-gold uppercase tracking-wider mt-1">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-brand-darkText/80 leading-relaxed mt-3">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Highlights Snippet */}
                  <div className="pt-2 border-t border-brand-border/60">
                    <ul className="space-y-1.5 text-xs text-brand-mutedText">
                      {service.keyHighlights.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Dual Action */}
                  <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}#enquiry-form`}
                      className="px-3.5 py-1.5 rounded text-xs font-semibold bg-brand-ivory text-brand-darkTeal border border-brand-border hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Local SEO Callout */}
        <div className="mt-16 p-6 sm:p-8 bg-brand-ivory rounded-lg border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg font-bold text-brand-darkTeal">
              Need assistance with DTCP, Corporation Approvals, or Property Valuation in Coimbatore?
            </h4>
            <p className="text-xs sm:text-sm text-brand-mutedText">
              Er. A. Naveen Kumar provides direct consultations at our Ondipudur office or via scheduled on-site inspections.
            </p>
          </div>
          <Link
            href="/contact#enquiry-form"
            className="shrink-0 px-6 py-3 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Request Service Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
