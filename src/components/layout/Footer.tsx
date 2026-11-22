import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";
import Logo from "./Logo";
import { companyData } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darkTeal text-brand-ivory relative overflow-hidden border-t-4 border-brand-gold">
      {/* Subtle Architectural Drafting Grid Accent */}
      <div className="absolute inset-0 architectural-grid-dark opacity-40 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Profile & Engineer Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="dark" size="lg" />
            
            <p className="text-brand-ivory/80 text-sm leading-relaxed pr-2">
              Engineering expertise, thoughtful statutory planning, and professional guidance for homeowners, plot investors, and commercial developers in Coimbatore and across Tamil Nadu.
            </p>

            {/* Engineer Credential Card */}
            <div className="bg-brand-secondaryTeal/60 border border-brand-gold/25 p-4 rounded-md">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-brand-darkTeal border border-brand-gold/40 text-brand-gold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">
                    {companyData.engineer.fullNameWithPrefix}
                  </h4>
                  <p className="text-xs text-brand-goldLight font-medium">
                    {companyData.engineer.qualifications.join(", ")}
                  </p>
                  <p className="text-[11px] text-brand-ivory/70 mt-1 uppercase tracking-wider">
                    {companyData.engineer.designation}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <span className="text-[11px] uppercase tracking-widest text-brand-gold font-semibold block mb-1">
                Verified Services
              </span>
              <p className="text-xs text-brand-ivory/70">
                Engineers • Valuers • Plan Approval Works • DTCP & DTP Approval • Building Project Consulting
              </p>
            </div>
          </div>

          {/* Column 2: Core Verified Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold border-b border-brand-secondaryTeal pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyData.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-brand-ivory/80 hover:text-brand-gold transition-colors flex items-center gap-2 group text-xs sm:text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold/60 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-goldLight mb-2">
                Statutory Authorities Covered
              </h4>
              <ul className="text-xs text-brand-ivory/70 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                  <span>Coimbatore City Municipal Corporation</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                  <span>Directorate of Town & Country Planning (DTCP)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                  <span>Local Planning Authority (LPA)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                  <span>Town & Village Panchayats</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold border-b border-brand-secondaryTeal pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-xs sm:text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-xs sm:text-sm"
                >
                  About the Engineer
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-xs sm:text-sm"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-xs sm:text-sm"
                >
                  Project Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors text-xs sm:text-sm"
                >
                  Contact & Office
                </Link>
              </li>
              <li>
                <Link
                  href="/contact#enquiry-form"
                  className="text-brand-gold font-medium hover:text-brand-goldLight transition-colors text-xs sm:text-sm"
                >
                  Request Consultation →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold border-b border-brand-secondaryTeal pb-2">
              Office & Direct Contact
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <address className="not-italic text-brand-ivory/80 leading-snug">
                  {companyData.contact.address.street},<br />
                  {companyData.contact.address.area},<br />
                  {companyData.contact.address.city} – {companyData.contact.address.pincode},<br />
                  {companyData.contact.address.state}, {companyData.contact.address.country}.
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a
                  href={`tel:${companyData.contact.phoneRaw}`}
                  className="text-brand-ivory/90 hover:text-brand-gold transition-colors font-medium tracking-wide"
                >
                  {companyData.contact.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-brand-ivory/80 hover:text-brand-gold transition-colors break-all text-xs"
                >
                  {companyData.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-brand-ivory/70 pt-1">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{companyData.contact.workingHours}</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={companyData.contact.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                <span>WhatsApp the Engineer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-secondaryTeal/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-ivory/60">
          <div>
            <p>
              © {currentYear} {companyData.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-brand-ivory/50 mt-0.5">
              Er. A. Naveen Kumar, B.E. (Civil), AMIE — Registered Engineer Grade II.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>Coimbatore, Tamil Nadu</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">
              Locate Office
            </Link>
            <span>•</span>
            <a
              href="#top"
              className="text-brand-gold hover:text-brand-goldLight transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
