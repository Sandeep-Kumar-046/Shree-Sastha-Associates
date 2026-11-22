"use client";

import React, { useState } from "react";
import {
  Calculator,
  Building,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Phone,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { companyData } from "@/data/company";

export default function BuildingPlanningTool() {
  const [plotArea, setPlotArea] = useState<number>(1800);
  const [authorityType, setAuthorityType] = useState<"ccmc" | "dtcp" | "panchayat">("ccmc");
  const [buildingType, setBuildingType] = useState<"standard" | "premium" | "commercial">("premium");

  // Indicative material & estimation calculations for Coimbatore region
  const approximateBuiltUp = Math.round(plotArea * 0.85); // 85% coverage estimate
  
  const costPerSqFt = {
    standard: 2200,
    premium: 2750,
    commercial: 2400,
  }[buildingType];

  const estimatedConstructionCost = approximateBuiltUp * costPerSqFt;

  // Key engineering material indicators for prospective homebuilder
  const approximateSteelTons = (approximateBuiltUp * 0.0035).toFixed(1); // ~3.5 kg/sqft
  const approximateCementBags = Math.round(approximateBuiltUp * 0.42); // ~0.42 bags/sqft

  const authorityDetails = {
    ccmc: {
      name: "Coimbatore City Municipal Corporation (CCMC)",
      bylaws: "Tamil Nadu Combined Development & Building Rules (TNCDBR)",
      typicalTimeline: "30 – 45 Days",
      keyRule: "Mandatory front/rear setbacks based on road width & height; RWH system mandatory.",
    },
    dtcp: {
      name: "Directorate of Town & Country Planning (DTCP)",
      bylaws: "DTCP Master Plan & Layout Rules",
      typicalTimeline: "45 – 60 Days",
      keyRule: "Approved layout verification required; OSR rules applicable if layout formation.",
    },
    panchayat: {
      name: "Village / Town Panchayat Permit",
      bylaws: "TNCDBR Rule for Non-Corporation Areas",
      typicalTimeline: "20 – 35 Days",
      keyRule: "Executive Officer / Panchayat President sanction with licensed engineer stability certificate.",
    },
  }[authorityType];

  return (
    <section className="py-20 bg-brand-ivory border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tool Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold mb-3">
            <Calculator className="w-4 h-4 text-brand-gold" />
            <span>Interactive Planning Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkTeal leading-tight">
            Coimbatore Homeowner Planning & Estimator
          </h2>
          <p className="text-brand-mutedText text-sm sm:text-base mt-3">
            Get an instant indicative overview of statutory authority guidelines, material approximations, and budget feasibility for your plot before commencing construction.
          </p>
        </div>

        {/* Calculator Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls (6 cols) */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-lg border border-brand-border shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-darkTeal border-b border-brand-border pb-3 flex items-center justify-between">
              <span>Plot & Project Parameters</span>
              <span className="text-xs font-normal text-brand-mutedText">Adjust Sliders</span>
            </h3>

            {/* Plot Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-darkTeal">
                  Proposed Built-Up Area:
                </label>
                <span className="text-sm font-bold text-brand-gold font-sans px-2.5 py-1 rounded bg-brand-ivory border border-brand-border">
                  {plotArea.toLocaleString()} sq.ft ({(plotArea / 435.6).toFixed(1)} cents)
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="6000"
                step="100"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full h-2 bg-brand-ivory rounded-lg appearance-none cursor-pointer accent-brand-gold"
              />
              <div className="flex justify-between text-[11px] text-brand-mutedText mt-1">
                <span>800 sq.ft (~2 cents)</span>
                <span>3,000 sq.ft (~7 cents)</span>
                <span>6,000 sq.ft (~14 cents)</span>
              </div>
            </div>

            {/* Statutory Authority Selection */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-darkTeal block mb-2">
                Land Location / Sanction Authority:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "ccmc", label: "CCMC City", sub: "Corporation Limits" },
                  { id: "dtcp", label: "DTCP Zone", sub: "Layout / Suburbs" },
                  { id: "panchayat", label: "Panchayat", sub: "Rural / Town" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAuthorityType(item.id as any)}
                    className={`p-3 rounded text-left border transition-all ${
                      authorityType === item.id
                        ? "bg-brand-darkTeal text-white border-brand-darkTeal shadow-sm"
                        : "bg-brand-ivory/60 text-brand-darkText border-brand-border hover:bg-brand-border/40"
                    }`}
                  >
                    <div className="font-semibold text-xs">{item.label}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        authorityType === item.id ? "text-brand-goldLight" : "text-brand-mutedText"
                      }`}
                    >
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Construction Specification Tier */}
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-darkTeal block mb-2">
                Construction Specification Tier:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "standard", label: "Standard Spec", rate: "₹2,200/sq.ft" },
                  { id: "premium", label: "Premium Spec", rate: "₹2,750/sq.ft" },
                  { id: "commercial", label: "Commercial Hub", rate: "₹2,400/sq.ft" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setBuildingType(tier.id as any)}
                    className={`p-3 rounded text-left border transition-all ${
                      buildingType === tier.id
                        ? "bg-brand-darkTeal text-white border-brand-darkTeal shadow-sm"
                        : "bg-brand-ivory/60 text-brand-darkText border-brand-border hover:bg-brand-border/40"
                    }`}
                  >
                    <div className="font-semibold text-xs">{tier.label}</div>
                    <div
                      className={`text-[10px] font-medium mt-0.5 ${
                        buildingType === tier.id ? "text-brand-gold" : "text-brand-mutedText"
                      }`}
                    >
                      {tier.rate}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 bg-brand-ivory/80 rounded border border-brand-border text-xs text-brand-mutedText leading-relaxed flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span>
                Calculations are indicative baseline estimates for the Coimbatore region. Precise structural BOQ requires soil tests and architectural blueprints certified by Er. A. Naveen Kumar.
              </span>
            </div>
          </div>

          {/* Right Output Dossier (6 cols) */}
          <div className="lg:col-span-6 bg-brand-darkTeal text-brand-ivory p-7 sm:p-9 rounded-lg border border-brand-gold/40 shadow-architectural-lg flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between border-b border-brand-secondaryTeal pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold">
                  Engineering Overview
                </span>
                <span className="text-xs text-brand-ivory/70">
                  {plotArea} sq.ft Area
                </span>
              </div>

              {/* Indicative Budget Box */}
              <div className="mt-5 p-5 rounded bg-brand-secondaryTeal/60 border border-brand-gold/30">
                <span className="text-xs text-brand-ivory/80 uppercase tracking-wider block">
                  Indicative Construction Budget Range:
                </span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                  ₹{(estimatedConstructionCost / 100000).toFixed(2)} Lakhs
                  <span className="text-xs font-sans font-normal text-brand-goldLight ml-2">
                    (@ ₹{costPerSqFt}/sq.ft)
                  </span>
                </div>
              </div>

              {/* Material Estimates Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded bg-brand-secondaryTeal/40 border border-brand-border/20">
                  <span className="text-[11px] text-brand-ivory/70 block">
                    Approx. Structural Steel:
                  </span>
                  <span className="text-lg font-bold text-white font-serif">
                    ~{approximateSteelTons} Tons
                  </span>
                  <span className="text-[10px] text-brand-gold block mt-0.5">Fe 550D TMT</span>
                </div>

                <div className="p-3 rounded bg-brand-secondaryTeal/40 border border-brand-border/20">
                  <span className="text-[11px] text-brand-ivory/70 block">
                    Approx. Cement Bags:
                  </span>
                  <span className="text-lg font-bold text-white font-serif">
                    ~{approximateCementBags} Bags
                  </span>
                  <span className="text-[10px] text-brand-gold block mt-0.5">OPC/PPC Grade</span>
                </div>
              </div>

              {/* Statutory Framework */}
              <div className="mt-5 space-y-2 text-xs">
                <div className="font-semibold text-brand-gold uppercase tracking-wider text-[11px]">
                  Applicable Statutory Framework:
                </div>
                <div className="text-white font-medium">
                  {authorityDetails.name}
                </div>
                <p className="text-brand-ivory/80 leading-relaxed text-[11px]">
                  {authorityDetails.keyRule}
                </p>
                <div className="text-brand-ivory/60 text-[11px]">
                  Estimated Approval Processing: <strong>{authorityDetails.typicalTimeline}</strong>
                </div>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="pt-4 border-t border-brand-secondaryTeal flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/${companyData.contact.whatsapp.number}?text=${encodeURIComponent(
                  `Hello Er. Naveen Kumar, I checked your online planning tool for a ${plotArea} sq.ft project under ${authorityDetails.name}. I would like to consult with you.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Discuss with Er. Naveen Kumar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded bg-brand-secondaryTeal hover:bg-brand-secondaryTeal/80 text-white text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
