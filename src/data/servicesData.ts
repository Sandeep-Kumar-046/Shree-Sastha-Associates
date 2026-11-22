export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  keyHighlights: string[];
  processSteps: { step: string; title: string; desc: string }[];
  documentsRequired: string[];
  whoNeedsThis: string[];
  image: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "engineering-services",
    slug: "engineering-services",
    title: "Engineering Services",
    category: "Civil & Structural Engineering",
    tagline: "Sound engineering foundations for durable and compliant structures",
    shortDescription:
      "Professional civil engineering advisory, structural coordination, construction methodology guidance, and site inspection services tailored for Coimbatore's climatic and geotechnical conditions.",
    fullDescription: [
      "Civil engineering is the backbone of any enduring construction. At Shree Sastha Associates, our engineering services are supervised by Er. A. Naveen Kumar (B.E. Civil, AMIE, Registered Engineer Grade II), providing homebuilders and commercial developers with rigorous technical backing.",
      "We bridge the gap between creative architectural design and structural safety. From initial soil and site geometry assessment to foundation recommendations, load path analysis, and quality compliance during critical casting phases, our civil engineering consultations ensure your building stands resilient for generations.",
      "Whether you are constructing a contemporary independent residence in Ondipudur, an extended family villa in Ramanathapuram, or a commercial space in Coimbatore, our engineering consultations offer clarity, precision, and adherence to Indian Standard (IS) codes."
    ],
    keyHighlights: [
      "Civil Engineering consultation by a Registered Engineer Grade II",
      "Foundation recommendations aligned with local Coimbatore soil strata",
      "Structural reinforcement coordination and site validation",
      "Bill of Quantities (BOQ) review and material grade guidance",
      "Periodic structural milestone reviews during construction"
    ],
    processSteps: [
      {
        step: "01",
        title: "Site & Soil Study",
        desc: "Initial inspection of the plot, topographical factors, neighboring structures, and soil characteristics."
      },
      {
        step: "02",
        title: "Engineering Analysis",
        desc: "Reviewing spatial floor plans and determining appropriate load paths, beam-column grids, and foundation types."
      },
      {
        step: "03",
        title: "Technical Documentation",
        desc: "Detailed civil engineering advisory specifications aligned with applicable Indian Standard codes."
      },
      {
        step: "04",
        title: "Milestone Guidance",
        desc: "On-site visits during crucial construction milestones (foundation, plinth, lintel, and roof slab casting)."
      }
    ],
    documentsRequired: [
      "Plot survey sketch / FMB copy",
      "Architectural conceptual floor plans (if already drawn)",
      "Soil test reports (if available)",
      "Site location and road width particulars"
    ],
    whoNeedsThis: [
      "Homeowners building an independent house or villa",
      "Plot owners requiring structural feasibility validation",
      "Building contractors seeking registered engineer technical consultation",
      "Commercial developers seeking structural compliance"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "valuation-services",
    slug: "valuation-services",
    title: "Valuation Services",
    category: "Property & Asset Valuation",
    tagline: "Accurate, legally compliant valuation reports for property decisions and bank financing",
    shortDescription:
      "Professional real estate and building valuation for bank loan approvals, mortgage assessments, capital gains, asset division, and official legal documentation.",
    fullDescription: [
      "Property valuation demands a disciplined blend of technical civil engineering knowledge, deep acquaintance with local land rates, Tamil Nadu guideline values, and depreciated replacement cost methods for building superstructures.",
      "Shree Sastha Associates offers reliable property valuation services across Coimbatore. Our valuation reports are meticulously crafted with verified calculations, physical site measurements, photographic documentation, and realistic market factor evaluations.",
      "Whether you are securing a housing loan from a nationalized or private bank, settling familial partitions, calculating capital gains, or verifying fair market value prior to a real estate transaction, our valuation documentation provides sound, defensible clarity."
    ],
    keyHighlights: [
      "Physical site inspection and precise measurement verification",
      "Tamil Nadu Guideline Value vs. prevailing market rate analysis",
      "Depreciated Replacement Cost (DRC) computation for building structures",
      "Comprehensive reports prepared in accordance with institutional norms",
      "Expedited turnaround for urgent banking and legal submissions"
    ],
    processSteps: [
      {
        step: "01",
        title: "Document Scrutiny",
        desc: "Verification of title deed copies, parent documents, approved plans, and tax receipts."
      },
      {
        step: "02",
        title: "Physical Site Inspection",
        desc: "Actual physical measurement of plot boundaries, built-up areas, structural condition, and neighborhood infrastructure."
      },
      {
        step: "03",
        title: "Valuation Assessment",
        desc: "Calculating land value using guideline and realistic market rates; computing building value using standard depreciation formulae."
      },
      {
        step: "04",
        title: "Report Issuance",
        desc: "Delivering the formal valuation report complete with plans, calculations, photos, and engineer certification."
      }
    ],
    documentsRequired: [
      "Copy of Sale Deed / Title Deed",
      "Parent document / Patta copy",
      "Approved building plan copy (for existing buildings)",
      "Latest property tax and water tax receipts",
      "Field Measurement Book (FMB) sketch"
    ],
    whoNeedsThis: [
      "Individuals applying for housing, mortgage, or business loans",
      "Property buyers and sellers seeking fair market valuation",
      "NRIs and families managing property partition or estate settlement",
      "Chartered Accountants and legal advisors requiring technical asset valuation"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "plan-approval-works",
    slug: "plan-approval-works",
    title: "Plan Approval Works",
    category: "Statutory Sanctions",
    tagline: "Smooth regulatory compliance for your building plan sanctions",
    shortDescription:
      "Preparation of regulatory submission drawings, Tamil Nadu Combined Development and Building Rules (TNCDBR) compliance checks, and local municipal/corporation approval assistance.",
    fullDescription: [
      "Navigating building regulations requires exact adherence to building bylaws, setbacks, Floor Space Index (FSI), coverage ratios, parking norms, and rainwater harvesting mandates. A small discrepancy can lead to application delays or rejection.",
      "Shree Sastha Associates assists homeowners and commercial builders in Coimbatore with end-to-end plan approval works. We prepare statutory submission blue-prints, color-coded zoning drawings, and structural stability undertakings strictly aligned with Tamil Nadu Combined Development and Building Rules (TNCDBR).",
      "We guide you through Coimbatore City Municipal Corporation (CCMC), Town Panchayats, and Village Panchayat building permit workflows, ensuring your construction commences with clean, verifiable legal authorizations."
    ],
    keyHighlights: [
      "Drawings prepared in strict accordance with TNCDBR rules",
      "Accurate setback, FSI, road width, and coverage calculations",
      "Coimbatore Municipal Corporation & Panchayat approval liaison",
      "Registered Engineer Grade II certification and stability declarations",
      "Transparent step-by-step guidance preventing avoidable re-submissions"
    ],
    processSteps: [
      {
        step: "01",
        title: "Site & Document Audit",
        desc: "Checking patta, deed, road width, and boundary dimensions to verify sanction eligibility."
      },
      {
        step: "02",
        title: "Approval Drawing Drafting",
        desc: "Drafting standardized municipal drawings showing site plan, key plan, service plan, sections, and elevation."
      },
      {
        step: "03",
        title: "Online / Single-Window Submission",
        desc: "Assisting with submission through Tamil Nadu single-window portal or local civic body office."
      },
      {
        step: "04",
        title: "Inspection & Sanction Order",
        desc: "Coordinating site inspection queries from municipal authorities until the official sanction order is issued."
      }
    ],
    documentsRequired: [
      "Registered Sale Deed & Encumbrance Certificate (EC)",
      "Patta / Chitta in owner's name",
      "Field Measurement Book (FMB) sketch",
      "Land tax receipt and property tax receipts (if redevelopment)",
      "Identity and address proofs of all legal owners"
    ],
    whoNeedsThis: [
      "Individuals planning to start residential house construction",
      "Commercial plot owners developing shops, offices, or warehouses",
      "Homeowners adding additional floors or structural extensions",
      "Civil contractors needing registered engineer approval drawings"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "dtcp-dtp-approval",
    slug: "dtcp-dtp-approval",
    title: "DTCP & DTP Approval",
    category: "Town Planning & Layout Regularisation",
    tagline: "Expert technical guidance through Directorate of Town and Country Planning procedures",
    shortDescription:
      "Comprehensive assistance for DTCP layout regularisation, conversion guidance, unapproved plot regularisation (under applicable TN schemes), and commercial master plan compliance.",
    fullDescription: [
      "In Tamil Nadu, building on a plot or developing a residential layout demands strict compliance with the Directorate of Town and Country Planning (DTCP / DTP). Constructing on unapproved or non-regularised land can lead to disconnection of utilities and denial of building permits.",
      "Shree Sastha Associates provides technical clarity on DTCP regulations in Coimbatore and neighboring districts. We assist clients in evaluating layout approval status, applying for plot regularisation under government circulars, and assembling the necessary revenue records, survey sketches, and OSR (Open Space Reservation) compliance.",
      "Our role as consulting engineers ensures you understand your land’s legal zoning (residential, mixed, commercial, agricultural) before committing major capital to building or purchasing."
    ],
    keyHighlights: [
      "Verification of DTCP layout approval status and authenticity",
      "Assistance with Tamil Nadu Plot Regularisation Scheme documentation",
      "Master Plan zoning and land use verification (Coimbatore LPA)",
      "Layout boundary reconciliation with revenue records and FMB",
      "Guidance on road widening, buffer zones, and waterbody setbacks"
    ],
    processSteps: [
      {
        step: "01",
        title: "Zoning & Status Check",
        desc: "Examining whether the land falls under DTCP jurisdiction, LPA boundaries, or agricultural conservation zones."
      },
      {
        step: "02",
        title: "Scheme Eligibility Assessment",
        desc: "Evaluating the plot against valid government regularisation cut-off dates and guidelines."
      },
      {
        step: "03",
        title: "Dossier & Drawing Compilation",
        desc: "Preparing required layout key plans, road connectivity details, and NOC documentation."
      },
      {
        step: "04",
        title: "Departmental Liaison Support",
        desc: "Guiding the client through the formal review, scrutinization fee calculation, and certificate issuance."
      }
    ],
    documentsRequired: [
      "Parent title deeds showing registration prior to cut-off dates",
      "Revenue Patta / Chitta extract",
      "Layout sketch with surrounding plot numbers and access roads",
      "Encumbrance Certificate (EC) for minimum 13 to 30 years",
      "Aadhaar and PAN of the applicant"
    ],
    whoNeedsThis: [
      "Buyers holding unapproved layout plots seeking legal regularisation",
      "Layout promoters creating new residential plotted developments",
      "Commercial entities seeking land use change (CLU) approval",
      "Families inheriting ancestral lands needing clear planning clearances"
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "building-project-consulting",
    slug: "building-project-consulting",
    title: "Building Project Consulting",
    category: "End-to-End Building Advisory",
    tagline: "Empowering homeowners with professional oversight, budget clarity, and technical peace of mind",
    shortDescription:
      "Independent technical consultancy for private homebuilders. We act as your knowledgeable advisor—assisting with material selection, contract reviews, cost estimation, and construction quality monitoring.",
    fullDescription: [
      "Building your dream house in Coimbatore is often one of life’s most significant financial and emotional investments. Yet, many homeowners struggle with contractor delays, ambiguous cost estimates, substandard materials, and confusing technical jargon.",
      "Shree Sastha Associates acts as your dedicated, independent technical consultant. We represent your interests, not the contractor’s. Er. A. Naveen Kumar brings professional engineering oversight to your project, ensuring every rupee invested translates to structural integrity and architectural finesse.",
      "From drafting realistic construction schedules and vetting contractor agreements to checking steel bar tying, concrete mix ratios, and plumbing provisions, our consulting gives you absolute peace of mind from ground-breaking to housewarming."
    ],
    keyHighlights: [
      "Independent, unbiased representation protecting the homeowner",
      "Transparent Bill of Quantities (BOQ) and cost estimation",
      "Contractor quote review to avoid hidden escalation clauses",
      "Quality assurance visits for concrete, reinforcement, and brickwork",
      "Material vetting (cement brands, steel grades, waterproofing systems)"
    ],
    processSteps: [
      {
        step: "01",
        title: "Requirements & Budget Discovery",
        desc: "Deep-dive session to understand your lifestyle, family needs, aesthetic preferences, and realistic budget."
      },
      {
        step: "02",
        title: "Cost & Material Roadmap",
        desc: "Formulating a transparent BOQ with recommended construction specifications suited for Coimbatore's climate."
      },
      {
        step: "03",
        title: "Contractor Evaluation",
        desc: "Reviewing contractor agreements, payment milestone schedules, and scope-of-work documentation."
      },
      {
        step: "04",
        title: "Site Quality Audits",
        desc: "Periodic technical site visits at key stages to verify structural execution matches engineering drawings."
      }
    ],
    documentsRequired: [
      "Site location and dimensions",
      "Draft floor plans or concept sketches",
      "Contractor quotations or draft contracts (if already engaged)",
      "Target completion schedule and budget boundaries"
    ],
    whoNeedsThis: [
      "First-time homebuilders seeking experienced technical guidance",
      "NRIs and out-of-town owners building a property in Coimbatore",
      "Families wanting independent quality control without conflict of interest",
      "Renovation and structural remodeling projects"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  }
];
