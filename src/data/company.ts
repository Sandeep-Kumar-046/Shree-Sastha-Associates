export interface CompanyInfo {
  name: string;
  tagline: string;
  engineer: {
    name: string;
    prefix: string;
    fullNameWithPrefix: string;
    qualifications: string[];
    designation: string;
    roleTitle: string;
    description: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    phoneRaw: string;
    email: string;
    address: {
      street: string;
      area: string;
      city: string;
      pincode: string;
      state: string;
      country: string;
      full: string;
    };
    workingHours: string;
    mapQuery: string;
    mapEmbedUrl: string;
    whatsapp: {
      number: string;
      defaultMessage: string;
      link: string;
    };
  };
  services: {
    title: string;
    slug: string;
    shortDesc: string;
  }[];
}

export const companyData: CompanyInfo = {
  name: "SHREE SASTHA ASSOCIATES",
  tagline: "Building with Vision. Engineering with Trust.",
  engineer: {
    name: "A. Naveen Kumar",
    prefix: "Er.",
    fullNameWithPrefix: "Er. A. Naveen Kumar",
    qualifications: ["B.E. (Civil)", "AMIE"],
    designation: "Registered Engineer Grade II",
    roleTitle: "Consulting Civil Engineer & Registered Valuer",
    description:
      "Er. A. Naveen Kumar holds a Bachelor of Engineering in Civil Engineering and is an Associate Member of the Institution of Engineers (AMIE). As a Registered Engineer Grade II, he provides professional civil engineering guidance, statutory plan approval facilitation, property valuation, and technical building consultancy in Coimbatore and surrounding districts.",
  },
  contact: {
    phone: "+91 81100 71178",
    phoneFormatted: "+91 81100 71178",
    phoneRaw: "+918110071178",
    email: "shreesasthaassociatescbe@gmail.com",
    address: {
      street: "34/36, Ramachandra Naidu Street",
      area: "Ondipudur",
      city: "Coimbatore",
      pincode: "641016",
      state: "Tamil Nadu",
      country: "India",
      full: "34/36, Ramachandra Naidu Street, Ondipudur, Coimbatore – 641016, Tamil Nadu, India.",
    },
    workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM",
    mapQuery: "34/36, Ramachandra Naidu Street, Ondipudur, Coimbatore, Tamil Nadu 641016",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.486241285265!2d77.02705177488583!3d11.002078689160914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85750058e5781%3A0xe5aa6eb862b53e82!2sOndipudur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    whatsapp: {
      number: "918110071178",
      defaultMessage:
        "Hello Shree Sastha Associates, I would like to enquire about your building and engineering services.",
      get link() {
        return `https://wa.me/${this.number}?text=${encodeURIComponent(
          this.defaultMessage
        )}`;
      },
    },
  },
  services: [
    {
      title: "Engineering Services",
      slug: "engineering-services",
      shortDesc:
        "Comprehensive civil engineering solutions, structural design coordination, site feasibility assessments, and technical construction supervision.",
    },
    {
      title: "Valuation Services",
      slug: "valuation-services",
      shortDesc:
        "Professional property, land, and building valuation reports for bank loan documentation, legal assessment, asset verification, and stamp duty purposes.",
    },
    {
      title: "Plan Approval Works",
      slug: "plan-approval-works",
      shortDesc:
        "Preparation of architectural submission drawings, Coimbatore Corporation, Municipal, and Village Panchayat building plan sanction assistance.",
    },
    {
      title: "DTCP & DTP Approval",
      slug: "dtcp-dtp-approval",
      shortDesc:
        "Guidance and technical documentation for Directorate of Town and Country Planning (DTCP) layout regularisation, building sanctions, and DTP approvals.",
    },
    {
      title: "Building Project Consulting",
      slug: "building-project-consulting",
      shortDesc:
        "End-to-end guidance for landowners and prospective homebuilders—from site soil condition reviews and material vetting to contractor liaison and milestone tracking.",
    },
  ],
};
