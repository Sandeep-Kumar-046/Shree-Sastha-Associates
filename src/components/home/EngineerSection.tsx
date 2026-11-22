import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileBadge,
  UserCheck,
} from "lucide-react";
import { companyData } from "@/data/company";

export default function EngineerSection() {
  return (
    <section className="py-24 bg-brand-surface relative overflow-hidden border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Engineer Profile Visual Placeholder (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-brand-ivory rounded-lg border-2 border-brand-border overflow-hidden shadow-architectural">
              {/* Professional Engineer Silhouette / Monogram Art Placeholder */}
              <div className="relative h-[420px] bg-gradient-to-b from-brand-secondaryTeal via-brand-darkTeal to-brand-darkTeal flex flex-col items-center justify-center p-8 text-center text-brand-ivory overflow-hidden">
                {/* Architectural Drafting Lines Behind */}
                <div className="absolute inset-0 architectural-grid-dark opacity-30" />

                {/* Central Registered Engineer Emblem */}
                <div className="relative z-10 w-28 h-28 rounded-full border-2 border-brand-gold/60 bg-brand-surface flex items-center justify-center mb-5 shadow-gold-glow p-4">
                  <Image
                    src="/icon.png"
                    alt="SHREE SASTHA ASSOCIATES Emblem"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-gold block">
                    Chief Consulting Engineer
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {companyData.engineer.fullNameWithPrefix}
                  </h3>
                  <p className="text-sm text-brand-goldLight font-medium">
                    {companyData.engineer.qualifications.join(", ")}
                  </p>
                </div>

                <div className="relative z-10 mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-darkTeal/80 border border-brand-gold/40 text-xs text-white">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>{companyData.engineer.designation}</span>
                </div>

                {/* Subtext explaining placeholder */}
                <p className="relative z-10 text-[10px] text-brand-ivory/50 mt-4 max-w-[260px]">
                  Professional Engineering Profile — Verified Official Details
                </p>
              </div>

              {/* Bottom Quick Contact Bar */}
              <div className="p-4 bg-white border-t border-brand-border flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-brand-darkTeal font-medium">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Ondipudur, Coimbatore</span>
                </div>
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="font-semibold text-brand-gold hover:text-brand-goldHover"
                >
                  {companyData.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Qualifications, Role & Professional Commitment (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Professional Credentials</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkTeal leading-tight">
                {companyData.engineer.fullNameWithPrefix}
              </h2>
              <p className="text-base font-semibold text-brand-gold mt-1">
                {companyData.engineer.qualifications.join(", ")} • {companyData.engineer.designation}
              </p>
            </div>

            <div className="space-y-4 text-brand-darkText/85 text-sm sm:text-base leading-relaxed">
              <p>
                {companyData.engineer.description}
              </p>
              <p>
                In an era where many construction decisions are left to uncertified intermediaries, Er. Naveen Kumar provides clients with the technical rigour of a qualified civil engineer. From checking structural feasibility under Tamil Nadu soil conditions to preparing statutory blueprints for the Coimbatore City Municipal Corporation (CCMC) and Town Panchayats, each consultation is delivered with registered engineering accountability.
              </p>
            </div>

            {/* Verified Credentials Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-brand-ivory border border-brand-border">
                <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm">
                  <FileBadge className="w-4 h-4 text-brand-gold" />
                  <span>Registered Engineer Grade II</span>
                </div>
                <p className="text-xs text-brand-mutedText mt-1">
                  Legally authorized to certify structural stability and statutory building plans under Tamil Nadu municipal bylaws.
                </p>
              </div>

              <div className="p-4 rounded bg-brand-ivory border border-brand-border">
                <div className="flex items-center gap-2 text-brand-darkTeal font-semibold text-sm">
                  <Award className="w-4 h-4 text-brand-gold" />
                  <span>B.E. (Civil), AMIE</span>
                </div>
                <p className="text-xs text-brand-mutedText mt-1">
                  Graduate Civil Engineer with Associate Membership of the Institution of Engineers (India).
                </p>
              </div>
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Call Engineer Directly</span>
              </a>

              <a
                href={companyData.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>WhatsApp Consultation</span>
              </a>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-darkTeal hover:text-brand-gold transition-colors ml-auto"
              >
                <span>Learn More About Our Practice</span>
                <span className="text-brand-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
