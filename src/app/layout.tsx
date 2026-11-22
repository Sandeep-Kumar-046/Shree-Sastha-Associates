import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/common/WhatsAppFloating";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: `${companyData.name} | Civil Engineers, Valuers & Plan Approvals | Coimbatore`,
  description:
    "Shree Sastha Associates: Premier Civil Engineering, Property Valuation, DTCP & Municipal Plan Approval Works, and Building Project Consulting in Ondipudur, Coimbatore, Tamil Nadu. Er. A. Naveen Kumar, B.E. (Civil), AMIE, Registered Engineer Grade II.",
  keywords: [
    "Civil engineer in Coimbatore",
    "Building consultancy in Coimbatore",
    "House construction consultancy",
    "Building plan approval Coimbatore",
    "DTCP approval assistance Coimbatore",
    "DTP approval Tamil Nadu",
    "Engineering services Ondipudur",
    "Valuation services Coimbatore",
    "Building project consultancy",
    "Registered Engineer Grade II",
    "Er A Naveen Kumar",
    "Shree Sastha Associates",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  openGraph: {
    title: `${companyData.name} | Civil Engineering & Plan Approval Works`,
    description:
      "Engineering expertise, thoughtful planning, and professional guidance for your building journey in Coimbatore. Er. A. Naveen Kumar, B.E. (Civil), AMIE, Registered Engineer Grade II.",
    url: "https://shreesasthaassociates.com",
    siteName: companyData.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema structured data for local SEO in Coimbatore
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: companyData.name,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    telephone: companyData.contact.phone,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.contact.address.street,
      addressLocality: companyData.contact.address.area,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "11.002078",
      longitude: "77.027051",
    },
    founder: {
      "@type": "Person",
      name: companyData.engineer.fullNameWithPrefix,
      jobTitle: companyData.engineer.designation,
      alumniOf: "B.E. (Civil), AMIE",
    },
    areaServed: [
      "Coimbatore",
      "Ondipudur",
      "Singanallur",
      "Ramanathapuram",
      "Sulur",
      "Pollachi",
      "Tiruppur",
      "Tamil Nadu",
    ],
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-ivory text-brand-darkText antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-brand-gold text-white px-4 py-2 rounded shadow-lg text-xs uppercase tracking-wider font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  );
}
