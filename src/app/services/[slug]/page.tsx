import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Phone,
  ShieldCheck,
  ChevronRight,
  FileText,
  UserCheck,
  Clock,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { companyData } from "@/data/company";
import EnquirySection from "@/components/home/EnquirySection";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: `Service Not Found | ${companyData.name}`,
    };
  }

  return {
    title: `${service.title} | ${companyData.name} — Coimbatore`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="w-full bg-brand-surface">
      {/* Breadcrumb Header */}
      <div className="bg-brand-darkTeal text-brand-ivory py-4 border-b border-brand-secondaryTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs flex items-center gap-2">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-ivory/50" />
          <Link href="/services" className="hover:text-brand-gold transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-ivory/50" />
          <span className="text-brand-gold font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-brand-darkTeal text-brand-ivory py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded bg-brand-secondaryTeal text-brand-goldLight text-xs font-semibold tracking-wider uppercase border border-brand-gold/30">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-brand-goldLight text-base sm:text-lg font-medium">
              {service.tagline}
            </p>
            <p className="text-brand-ivory/80 text-sm sm:text-base leading-relaxed pt-1">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Service Dossier (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Visual Hero Image */}
            <div className="relative h-[380px] sm:h-[450px] w-full rounded-lg overflow-hidden border border-brand-border shadow-architectural">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
            </div>

            {/* In-depth Editorial Overview */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                <span className="w-8 h-[1px] bg-brand-gold" />
                <span>Service Scope & Technical Depth</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal">
                Detailed Service Overview
              </h2>
              <div className="space-y-4 text-brand-darkText/85 text-sm sm:text-base leading-relaxed">
                {service.fullDescription.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-darkTeal">
                Key Deliverables & Standards
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-brand-border flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-brand-darkText">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Technical Workflow */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Our Method
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-darkTeal mt-1">
                  How We Execute This Service
                </h3>
              </div>

              <div className="space-y-4">
                {service.processSteps.map((step) => (
                  <div
                    key={step.step}
                    className="p-5 rounded-lg bg-white border border-brand-border flex items-start gap-4 hover:border-brand-gold transition-colors"
                  >
                    <span className="font-serif text-2xl font-bold text-brand-gold shrink-0">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="font-serif text-base font-bold text-brand-darkTeal">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-mutedText mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required in Tamil Nadu */}
            <div className="p-8 rounded-lg bg-brand-ivory border border-brand-border space-y-4">
              <div className="flex items-center gap-2 text-brand-darkTeal font-serif text-xl font-bold">
                <FileCheck2 className="w-5 h-5 text-brand-gold" />
                <span>Documents Typically Required</span>
              </div>
              <p className="text-xs text-brand-mutedText">
                To initiate {service.title} smoothly, clients are advised to assemble copies of the following records:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-darkText">
                {service.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-gold font-bold">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] text-brand-mutedText italic border-t border-brand-border/60">
                * If any document is missing or requires revenue reconciliation, Er. Naveen Kumar will guide you on the lawful procedure to obtain it.
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Consultation Box & Quick Nav (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Direct Consultation Card */}
            <div className="p-6 rounded-lg bg-brand-darkTeal text-brand-ivory border border-brand-gold/30 shadow-architectural space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                Direct Engineer Consultation
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                Consult Er. A. Naveen Kumar
              </h3>
              <p className="text-xs text-brand-ivory/80 leading-relaxed">
                Registered Engineer Grade II with expertise in {service.title} in Coimbatore.
              </p>

              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider transition-colors w-full"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyData.contact.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contact.whatsapp.number}?text=${encodeURIComponent(
                    `Hello Shree Sastha Associates, I would like to enquire about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors w-full"
                >
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation List */}
            <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-gold border-b border-brand-border pb-2">
                Other Engineering Services
              </h4>
              <ul className="space-y-2.5">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="group flex items-center justify-between text-xs font-medium text-brand-darkText hover:text-brand-gold transition-colors py-1"
                    >
                      <span className="truncate pr-2">{other.title}</span>
                      <ArrowRight className="w-3 h-3 text-brand-mutedText group-hover:text-brand-gold group-hover:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form with Preselected Service */}
      <EnquirySection preselectedService={service.title} />
    </div>
  );
}
