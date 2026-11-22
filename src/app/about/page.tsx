import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  BookOpen,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  FileCheck2,
  HardHat,
} from "lucide-react";
import { companyData } from "@/data/company";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${companyData.name} — Er. A. Naveen Kumar`,
  description:
    "Learn about Shree Sastha Associates in Ondipudur, Coimbatore. Led by Er. A. Naveen Kumar, B.E. (Civil), AMIE, Registered Engineer Grade II. Dedicated to structural precision, DTCP & plan approvals, and property valuation.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-brand-surface">
      {/* Editorial Page Header */}
      <section className="bg-brand-darkTeal text-brand-ivory py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>About Our Consultancy</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Engineering discipline. <br />
              <span className="text-brand-goldLight italic font-normal">
                Registered integrity.
              </span>
            </h1>
            <p className="text-brand-ivory/80 text-base sm:text-lg leading-relaxed pt-2">
              Shree Sastha Associates was founded with a singular commitment: to provide property owners, prospective homebuilders, and commercial developers in Coimbatore with qualified, registered civil engineering guidance and statutory plan approval assistance.
            </p>
          </div>
        </div>
      </section>

      {/* The Engineer Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual Profile Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-brand-ivory rounded-lg border-2 border-brand-border overflow-hidden shadow-architectural">
              <div className="relative h-96 bg-brand-darkTeal flex flex-col items-center justify-center p-8 text-center text-white overflow-hidden">
                <div className="absolute inset-0 architectural-grid-dark opacity-35" />
                <div className="relative z-10 w-24 h-24 rounded-full border-2 border-brand-gold/60 bg-brand-surface flex items-center justify-center mb-5 p-3 shadow-gold-glow">
                  <Image
                    src="/icon.png"
                    alt="SHREE SASTHA ASSOCIATES Emblem"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
                    Consulting Engineer & Valuer
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-white">
                    {companyData.engineer.fullNameWithPrefix}
                  </h2>
                  <p className="text-xs text-brand-goldLight font-medium">
                    {companyData.engineer.qualifications.join(", ")}
                  </p>
                </div>
                <div className="relative z-10 mt-4 px-3 py-1 rounded bg-brand-secondaryTeal/80 border border-brand-gold/30 text-xs text-brand-ivory">
                  {companyData.engineer.designation}
                </div>
              </div>

              {/* Fast Credentials Strip */}
              <div className="p-6 bg-white space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-brand-mutedText font-medium">Designation</span>
                  <span className="font-semibold text-brand-darkTeal">Registered Engineer Grade II</span>
                </div>
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-brand-mutedText font-medium">Degrees</span>
                  <span className="font-semibold text-brand-darkTeal">B.E. (Civil), AMIE</span>
                </div>
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2">
                  <span className="text-brand-mutedText font-medium">Headquarters</span>
                  <span className="font-semibold text-brand-darkTeal">Ondipudur, Coimbatore</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-brand-mutedText font-medium">Core Scope</span>
                  <span className="font-semibold text-brand-darkTeal">Civil, DTCP & Valuation</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Box */}
            <div className="p-6 rounded-lg bg-brand-darkTeal text-brand-ivory space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">
                Book an In-Person Consultation
              </h3>
              <p className="text-xs text-brand-ivory/80 leading-relaxed">
                Meet Er. A. Naveen Kumar at our Ondipudur office to discuss plot approvals, architectural feasibility, or valuation documentation.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {companyData.contact.phone}</span>
                </a>
                <a
                  href={companyData.contact.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Journey & Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Mission & Background */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                The Engineering Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal">
                Bridging Design Creativity with Structural & Statutory Law
              </h2>
              <div className="space-y-4 text-brand-darkText/85 text-sm sm:text-base leading-relaxed">
                <p>
                  In modern residential and commercial development, homeowners are frequently caught between striking architectural visual concepts and the unforgiving realities of municipal bylaws, setback regulations, and structural physics.
                </p>
                <p>
                  As a <strong>Registered Engineer Grade II</strong> with formal qualifications in Bachelor of Engineering in Civil Engineering and Associate Membership of the Institution of Engineers (AMIE), <strong>Er. A. Naveen Kumar</strong> founded Shree Sastha Associates to bring technical certainty to this process.
                </p>
                <p>
                  Our consultancy operates without ambiguous middlemanship. When you consult with us, you deal directly with a qualified civil engineer who reviews your survey maps, calculates permissible built-up areas according to Tamil Nadu Combined Development and Building Rules (TNCDBR), and verifies structural load paths.
                </p>
              </div>
            </div>

            {/* Core Values Matrix */}
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                Our Operating Principles
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-darkTeal">
                How We Protect Your Building Investment
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-lg bg-white border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm mb-2">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    <span>Statutory Accountability</span>
                  </div>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    We prepare submission blueprints strictly compliant with Coimbatore Corporation, DTCP, and Panchayat bylaws—avoiding notices or costly penalties.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-white border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm mb-2">
                    <Compass className="w-5 h-5 text-brand-gold" />
                    <span>Soil & Structural Rigor</span>
                  </div>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    Coimbatore features distinct geological variations—from black cotton expanses to rocky strata. We coordinate foundations engineered specifically for your site&apos;s soil.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-white border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm mb-2">
                    <Award className="w-5 h-5 text-brand-gold" />
                    <span>Defensible Valuation</span>
                  </div>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    Our property and building valuation reports are grounded in verified physical measurements, guideline comparisons, and standard depreciation formulas.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-white border border-brand-border">
                  <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm mb-2">
                    <FileCheck2 className="w-5 h-5 text-brand-gold" />
                    <span>Independent Client Advocacy</span>
                  </div>
                  <p className="text-xs text-brand-mutedText leading-relaxed">
                    We advise homeowners impartially on contractor quotes, material grades, and payment milestones, ensuring every rupee spent represents genuine value.
                  </p>
                </div>
              </div>
            </div>

            {/* Coimbatore Ground Knowledge */}
            <div className="p-6 rounded-lg bg-brand-ivory border border-brand-border space-y-3">
              <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Deep Knowledge of Coimbatore Localities</span>
              </div>
              <p className="text-xs sm:text-sm text-brand-mutedText leading-relaxed">
                Whether your project is located in Ondipudur, Singanallur, Ramanathapuram, Trichy Road, Sulur, Saravanampatti, or peripheral town panchayats, our familiarity with local development patterns, road widths, and administrative desks ensures prompt and orderly execution.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-brand-border flex flex-wrap items-center gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors"
              >
                <span>Explore All 5 Core Services</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>

              <Link
                href="/contact#enquiry-form"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-goldHover transition-colors"
              >
                <span>Request Consultation Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
