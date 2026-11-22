import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Ruler,
  Layers,
  Calendar,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building,
} from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { companyData } from "@/data/company";
import EnquirySection from "@/components/home/EnquirySection";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: `Project Not Found | ${companyData.name}`,
    };
  }

  return {
    title: `${project.title} | ${companyData.name} — Architecture & Civil Engineering`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-brand-surface">
      {/* Breadcrumb Header */}
      <div className="bg-brand-darkTeal text-brand-ivory py-4 border-b border-brand-secondaryTeal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs flex items-center gap-2">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-ivory/50" />
          <Link href="/projects" className="hover:text-brand-gold transition-colors">
            Projects
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-brand-ivory/50" />
          <span className="text-brand-gold font-medium">{project.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-brand-darkTeal text-brand-ivory py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-brand-secondaryTeal text-brand-goldLight text-xs font-semibold tracking-wider uppercase border border-brand-gold/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded bg-brand-gold text-white text-[11px] font-medium">
                Illustrative Showcase
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-brand-ivory/80 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-gold" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-brand-gold" />
                Built-Up Area: {project.area}
              </span>
              <span>•</span>
              <span className="text-brand-goldLight font-medium">
                {project.scope}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Details Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Gallery & Specs (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Primary Visual Showcase */}
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-lg overflow-hidden border border-brand-border shadow-architectural bg-brand-darkTeal">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>

            {/* Additional Gallery Frames (if any) */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.slice(1).map((imgUrl, idx) => (
                  <div
                    key={idx}
                    className="relative h-64 rounded-lg overflow-hidden border border-brand-border shadow-sm bg-brand-darkTeal"
                  >
                    <Image
                      src={imgUrl}
                      alt={`${project.title} Gallery Perspective ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Architectural Narrative */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                <span className="w-8 h-[1px] bg-brand-gold" />
                <span>Concept & Planning Narrative</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal">
                Design Intent & Spatial Strategy
              </h2>
              <p className="text-sm sm:text-base text-brand-darkText/85 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Architectural Features */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-darkTeal">
                Architectural Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecturalFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-brand-border flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-darkText">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-darkTeal">
                Civil & Structural Engineering Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.engineeringHighlights.map((eng, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-brand-ivory border border-brand-border flex items-start gap-3"
                  >
                    <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-brand-darkTeal font-medium">
                      {eng}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Specifications Card & Direct Action (4 cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm space-y-4">
              <span className="text-[11px] uppercase font-bold tracking-widest text-brand-gold block border-b border-brand-border pb-2">
                Project Matrix
              </span>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-brand-mutedText block">Category:</span>
                  <span className="font-semibold text-brand-darkTeal text-sm">
                    {project.category}
                  </span>
                </div>

                <div>
                  <span className="text-brand-mutedText block">Built-Up Area:</span>
                  <span className="font-semibold text-brand-darkTeal text-sm">
                    {project.area}
                  </span>
                </div>

                <div>
                  <span className="text-brand-mutedText block">Location:</span>
                  <span className="font-semibold text-brand-darkTeal text-sm">
                    {project.location}
                  </span>
                </div>

                <div>
                  <span className="text-brand-mutedText block">Scope of Engagement:</span>
                  <span className="font-semibold text-brand-darkTeal text-sm">
                    {project.scope}
                  </span>
                </div>

                <div>
                  <span className="text-brand-mutedText block">Consulting Engineer:</span>
                  <span className="font-semibold text-brand-darkTeal text-sm">
                    {companyData.engineer.fullNameWithPrefix} ({companyData.engineer.designation})
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border">
                <Link
                  href="/contact#enquiry-form"
                  className="block w-full text-center py-3 px-4 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Plan a Similar Building
                </Link>
              </div>
            </div>

            {/* Direct Call to Er. Naveen Kumar */}
            <div className="p-6 rounded-lg bg-brand-ivory border border-brand-border space-y-3">
              <h4 className="font-serif text-base font-bold text-brand-darkTeal">
                Have a plot in Coimbatore?
              </h4>
              <p className="text-xs text-brand-mutedText leading-relaxed">
                Connect with our engineer directly to assess setback guidelines, permissible floor space index, and soil foundation feasibility.
              </p>
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {companyData.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquirySection preselectedService="Building Project Consulting" />
    </div>
  );
}
