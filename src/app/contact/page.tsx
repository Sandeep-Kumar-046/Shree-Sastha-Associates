import React from "react";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  Building,
  Navigation,
} from "lucide-react";
import { companyData } from "@/data/company";
import EnquirySection from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: `Contact Us | ${companyData.name} — Er. A. Naveen Kumar, Coimbatore`,
  description:
    "Contact Shree Sastha Associates in Ondipudur, Coimbatore. Phone: +91 81100 71178. Civil Engineering, Property Valuation, DTCP & Building Plan Approvals.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ service?: string }>;
}) {
  return (
    <div className="w-full bg-brand-surface">
      {/* Editorial Header */}
      <section className="bg-brand-darkTeal text-brand-ivory py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Contact & Office Location</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Let&apos;s discuss your building project.
            </h1>
            <p className="text-brand-ivory/80 text-base sm:text-lg leading-relaxed pt-2">
              Connect directly with Er. A. Naveen Kumar for professional civil engineering, DTCP/Corporation plan approvals, property valuation, or building project consulting in Coimbatore.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Contact Details Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Phone */}
          <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm hover:border-brand-gold hover:shadow-architectural transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-brand-ivory text-brand-gold flex items-center justify-center group-hover:bg-brand-darkTeal group-hover:text-brand-gold transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-mutedText block">
                  Direct Phone Call
                </span>
                <h3 className="font-serif text-lg font-bold text-brand-darkTeal mt-1">
                  {companyData.contact.phone}
                </h3>
                <p className="text-xs text-brand-mutedText mt-1">
                  Direct line to Er. A. Naveen Kumar for urgent inquiries.
                </p>
              </div>
            </div>
            <a
              href={`tel:${companyData.contact.phoneRaw}`}
              className="inline-flex items-center justify-center py-2 px-3 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Call Engineer Now
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm hover:border-[#25D366] hover:shadow-architectural transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-mutedText block">
                  Instant WhatsApp
                </span>
                <h3 className="font-serif text-lg font-bold text-brand-darkTeal mt-1">
                  {companyData.contact.phone}
                </h3>
                <p className="text-xs text-brand-mutedText mt-1">
                  Send sketches, plot survey copies, or ask quick approval questions.
                </p>
              </div>
            </div>
            <a
              href={companyData.contact.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-2 px-3 rounded bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Card 3: Official Email */}
          <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm hover:border-brand-gold hover:shadow-architectural transition-all flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-brand-ivory text-brand-gold flex items-center justify-center group-hover:bg-brand-darkTeal group-hover:text-brand-gold transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-mutedText block">
                  Official Email
                </span>
                <h3 className="font-serif text-sm font-bold text-brand-darkTeal mt-1 break-all">
                  {companyData.contact.email}
                </h3>
                <p className="text-xs text-brand-mutedText mt-1">
                  Send formal RFP documents, valuation requests, and legal deeds.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${companyData.contact.email}`}
              className="inline-flex items-center justify-center py-2 px-3 rounded bg-brand-ivory text-brand-darkTeal border border-brand-border hover:bg-brand-gold hover:text-white hover:border-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors text-center"
            >
              Send Email
            </a>
          </div>

          {/* Card 4: Office Working Hours */}
          <div className="p-6 rounded-lg bg-white border border-brand-border shadow-sm hover:border-brand-gold hover:shadow-architectural transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded bg-brand-ivory text-brand-gold flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-mutedText block">
                  Consultation Timings
                </span>
                <h3 className="font-serif text-sm font-bold text-brand-darkTeal mt-1">
                  {companyData.contact.workingHours}
                </h3>
                <p className="text-xs text-brand-mutedText mt-1">
                  Sunday: Prior Appointment Only. On-site inspections arranged upon notice.
                </p>
              </div>
            </div>
            <div className="text-[11px] text-brand-mutedText bg-brand-ivory/60 p-2 rounded text-center">
              Office Visits Welcome
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps & Office Location Details */}
      <section className="py-12 bg-brand-ivory border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Office Description (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Our Ondipudur Office</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkTeal leading-tight">
                {companyData.name}
              </h2>
              <div className="p-4 bg-white rounded border border-brand-border">
                <div className="text-xs font-semibold text-brand-darkTeal mb-1">
                  {companyData.engineer.fullNameWithPrefix} ({companyData.engineer.qualifications.join(", ")})
                </div>
                <div className="text-xs text-brand-gold font-medium">
                  {companyData.engineer.designation}
                </div>
              </div>

              <div className="space-y-2 text-sm text-brand-darkText">
                <div className="font-semibold text-brand-darkTeal">Official Address:</div>
                <address className="not-italic text-brand-mutedText leading-relaxed">
                  {companyData.contact.address.street},<br />
                  {companyData.contact.address.area},<br />
                  {companyData.contact.address.city} – {companyData.contact.address.pincode},<br />
                  {companyData.contact.address.state}, {companyData.contact.address.country}.
                </address>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    companyData.contact.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2.5 px-5 rounded bg-brand-darkTeal hover:bg-brand-secondaryTeal text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>

            {/* Interactive Embedded Google Maps (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative h-[380px] sm:h-[420px] w-full rounded-lg overflow-hidden border border-brand-border shadow-architectural bg-brand-darkTeal">
                <iframe
                  title="Shree Sastha Associates Office Location Ondipudur Coimbatore"
                  src={companyData.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-brand-mutedText mt-2 px-1">
                <span>Location: Ondipudur, Coimbatore (Trichy Road Corridor)</span>
                <span className="font-medium text-brand-darkTeal">Pin: 641016</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <EnquirySection />
    </div>
  );
}
