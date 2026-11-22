"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from "lucide-react";
import { companyData } from "@/data/company";

const serviceOptions = [
  "Engineering Services",
  "Valuation Services",
  "Plan Approval Works",
  "DTCP & DTP Approval",
  "Building Project Consulting",
  "Other / General Enquiry",
];

export default function EnquirySection({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceRequired: preselectedService || "Engineering Services",
    projectLocation: "",
    plotSize: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    // Phone number validation: Indian 10 digits
    const cleanedPhone = formData.phoneNumber.replace(/[\s-]/g, "");
    if (!cleanedPhone) {
      newErrors.phoneNumber = "Please enter your phone number";
    } else if (!/^(\+91|0)?[6-9]\d{9}$/.test(cleanedPhone)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Please specify project location (e.g., Ondipudur, Coimbatore)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief note about your requirement";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission handling ready for backend hookup
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="enquiry-form" className="py-24 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">
              <span className="w-8 h-[1px] bg-brand-gold" />
              <span>Direct Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-darkTeal leading-tight">
              Planning your next building project?
            </h2>

            <p className="text-brand-mutedText text-sm sm:text-base leading-relaxed">
              Connect with us to discuss your requirements and get professional guidance for your building project. Whether you need a DTCP layout verification, building plan approval, structural advice, or property valuation in Coimbatore, Er. A. Naveen Kumar is here to assist you.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              <a
                href={`tel:${companyData.contact.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-white border border-brand-border hover:border-brand-gold transition-colors group"
              >
                <div className="p-3 rounded bg-brand-ivory text-brand-gold group-hover:bg-brand-darkTeal group-hover:text-brand-gold transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-brand-mutedText font-semibold">
                    Direct Call Er. Naveen Kumar
                  </div>
                  <div className="text-sm font-bold text-brand-darkTeal font-sans">
                    {companyData.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-lg bg-white border border-brand-border hover:border-brand-gold transition-colors group"
              >
                <div className="p-3 rounded bg-brand-ivory text-brand-gold group-hover:bg-brand-darkTeal group-hover:text-brand-gold transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-brand-mutedText font-semibold">
                    Email Inquiry
                  </div>
                  <div className="text-xs font-bold text-brand-darkTeal font-sans break-all">
                    {companyData.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-white border border-brand-border">
                <div className="p-3 rounded bg-brand-ivory text-brand-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-brand-mutedText font-semibold">
                    Office Address
                  </div>
                  <address className="not-italic text-xs text-brand-darkText leading-relaxed mt-0.5">
                    {companyData.contact.address.full}
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Conversion Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-brand-border shadow-architectural">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-darkTeal">
                    Enquiry Received Successfully
                  </h3>
                  <p className="text-sm text-brand-mutedText max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Er. A. Naveen Kumar has received your details regarding <strong>{formData.serviceRequired}</strong>. We will review your requirements and connect with you shortly via phone or WhatsApp.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: "",
                          phoneNumber: "",
                          email: "",
                          serviceRequired: "Engineering Services",
                          projectLocation: "",
                          plotSize: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-2.5 rounded bg-brand-darkTeal text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-secondaryTeal transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-brand-border pb-4">
                    <h3 className="font-serif text-xl font-bold text-brand-darkTeal">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-brand-mutedText mt-1">
                      Fill out the form below. All initial consultation inquiries are answered directly by our engineering office.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                          errors.fullName
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-brand-gold"
                        } outline-none transition-colors`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                          errors.phoneNumber
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-brand-gold"
                        } outline-none transition-colors`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phoneNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                          errors.email
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-brand-gold"
                        } outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceRequired: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-brand-border bg-white focus:border-brand-gold outline-none transition-colors"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Location */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Project Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ondipudur / Ramanathapuram"
                        value={formData.projectLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, projectLocation: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                          errors.projectLocation
                            ? "border-red-500 bg-red-50/20"
                            : "border-brand-border focus:border-brand-gold"
                        } outline-none transition-colors`}
                      />
                      {errors.projectLocation && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.projectLocation}</span>
                        </p>
                      )}
                    </div>

                    {/* Plot Size (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                        Plot Size <span className="text-brand-mutedText font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1500 sq.ft / 3.5 cents"
                        value={formData.plotSize}
                        onChange={(e) =>
                          setFormData({ ...formData, plotSize: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm rounded border border-brand-border focus:border-brand-gold outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-brand-darkTeal uppercase tracking-wider mb-1">
                      Project Details / Query <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please tell us about your requirement (e.g., need house plan approval, land valuation for bank loan, or DTCP regularisation guidance)..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 text-sm rounded border ${
                        errors.message
                          ? "border-red-500 bg-red-50/20"
                          : "border-brand-border focus:border-brand-gold"
                      } outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded bg-brand-gold hover:bg-brand-goldHover text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all duration-300 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-brand-mutedText text-center mt-2">
                      Direct consultation with Registered Engineer Grade II • No spam guaranteed
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
