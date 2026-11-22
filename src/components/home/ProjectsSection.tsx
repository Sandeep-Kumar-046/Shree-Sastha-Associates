"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Layers } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";

const categories = ["All", "Residential", "Commercial", "Modern Homes", "Ongoing"] as const;

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-darkTeal leading-tight">
              Design concepts & architectural engineering vision.
            </h2>
            <p className="text-brand-mutedText text-sm sm:text-base mt-3">
              Explore representative architectural works and engineering concepts showcasing structural finesse, climate-conscious layouts, and bylaw compliance.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors shrink-0"
          >
            <span>View All Showcase Projects</span>
            <ArrowRight className="w-4 h-4 text-brand-gold" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-brand-border">
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="group bg-brand-surface rounded-lg border border-brand-border overflow-hidden hover:shadow-architectural-lg hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Representative Label */}
                <div className="absolute bottom-4 right-4">
                  <span className="px-2 py-0.5 rounded bg-brand-gold text-white text-[10px] font-medium tracking-wide">
                    Illustrative Concept
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-brand-mutedText">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <span className="font-medium text-brand-darkTeal">{project.area}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-darkTeal group-hover:text-brand-gold transition-colors mt-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-brand-mutedText mt-1 line-clamp-1 font-medium">
                    Scope: {project.scope}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-darkText/80 leading-relaxed mt-2.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors"
                  >
                    <span>View Project Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact#enquiry-form"
                    className="text-xs text-brand-gold hover:text-brand-goldHover font-semibold"
                  >
                    Plan Similar →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Development Placeholders */}
        <div className="mt-12 text-center text-xs text-brand-mutedText">
          <p>
            * Note: The projects above represent architectural showcases and illustrative design concepts. Actual client project documentation and custom drawings are maintained confidentially in accordance with client privacy agreements.
          </p>
        </div>
      </div>
    </section>
  );
}
