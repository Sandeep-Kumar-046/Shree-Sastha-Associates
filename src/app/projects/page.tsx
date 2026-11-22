"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, Building, Eye } from "lucide-react";
import { projectsData } from "@/data/projectsData";

const categories = ["All", "Residential", "Commercial", "Modern Homes", "Ongoing"] as const;

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-brand-surface">
      {/* Editorial Header */}
      <section className="bg-brand-darkTeal text-brand-ivory py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Architectural Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Design concepts & <br />
              <span className="text-brand-goldLight italic font-normal">
                engineering layouts.
              </span>
            </h1>
            <p className="text-brand-ivory/80 text-base sm:text-lg leading-relaxed pt-2">
              Explore representative architectural works and illustrative design concepts illustrating spatial efficiency, structural safety, and Tamil Nadu Combined Development and Building Rules (TNCDBR) compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase Container */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-4 border-b border-brand-border">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-brand-darkTeal text-white shadow-sm"
                    : "bg-brand-ivory text-brand-darkText hover:bg-brand-border/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-xs text-brand-mutedText">
            Showing <span className="font-semibold text-brand-darkTeal">{filteredProjects.length}</span> representative projects
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg border border-brand-border overflow-hidden hover:shadow-architectural-lg hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative h-64 w-full overflow-hidden bg-brand-darkTeal">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Representative Label */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2.5 py-0.5 rounded bg-brand-gold text-white text-[10px] font-medium tracking-wide">
                    Illustrative Concept
                  </span>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-mutedText">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <span className="font-semibold text-brand-darkTeal">{project.area}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-darkTeal group-hover:text-brand-gold transition-colors mt-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-brand-gold font-medium mt-1">
                    Scope: {project.scope}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-darkText/80 leading-relaxed mt-2.5 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/contact?service=Building+Project+Consulting#enquiry-form`}
                    className="text-xs text-brand-gold hover:text-brand-goldHover font-semibold"
                  >
                    Inquire Similar →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Professional Portfolio Disclaimer */}
        <div className="mt-16 p-6 rounded-lg bg-brand-ivory border border-brand-border text-xs text-brand-mutedText text-center max-w-3xl mx-auto space-y-1">
          <p className="font-semibold text-brand-darkTeal">
            Portfolio Notice & Data Transparency
          </p>
          <p>
            The projects displayed in this showcase are illustrative architectural representations and design concepts created to demonstrate spatial layout, structural coordination, and bylaw compliance principles. Actual client construction drawings and site documentation are protected under strict professional confidentiality.
          </p>
        </div>
      </section>
    </div>
  );
}
