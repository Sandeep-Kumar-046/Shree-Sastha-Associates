export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Modern Homes" | "Ongoing";
  location: string;
  area: string;
  year: string;
  scope: string;
  image: string;
  gallery: string[];
  description: string;
  architecturalFeatures: string[];
  engineeringHighlights: string[];
  isConceptShowcase: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "the-monolith-villa",
    slug: "the-monolith-villa",
    title: "The Courtyard Residence",
    category: "Residential",
    location: "Coimbatore, Tamil Nadu",
    area: "3,850 sq.ft",
    year: "Representative Work",
    scope: "Structural Engineering Coordination & Plan Approval Advisory",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A contemporary two-level residence crafted with an internal double-height courtyard, passive thermal buffering, and cantilevered sunshades suited for Tamil Nadu's tropical climate. Illustrates our engineering approach towards wide column-free living spans and seamless indoor-outdoor connectivity.",
    architecturalFeatures: [
      "Double-height landscaped central courtyard for stack ventilation",
      "Deep terracotta louvers reducing western solar heat gain",
      "Vastu-compliant spatial zoning with natural cross-ventilation",
      "Rainwater harvesting collection cistern integrated into landscape"
    ],
    engineeringHighlights: [
      "Optimum isolated footing design adapted for black cotton soil strata",
      "Post-tensioned cantilevered portico slab with minimal deflection",
      "Strict compliance with Tamil Nadu Combined Development & Building Rules (TNCDBR)",
      "Concealed electrical and plumbing chases cast directly in structural shafts"
    ],
    isConceptShowcase: true
  },
  {
    id: "serene-living-villa",
    slug: "serene-living-villa",
    title: "Vannamayil Contemporary Home",
    category: "Modern Homes",
    location: "Ondipudur, Coimbatore",
    area: "2,400 sq.ft",
    year: "Representative Work",
    scope: "Building Plan Approval & Civil Consulting",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A compact yet expansive modern family home designed for an urban plot. Demonstrates how thoughtful engineering and regulatory approval navigation can maximize usable floor space while maintaining strict compliance with local civic setbacks.",
    architecturalFeatures: [
      "Clean geometric massing with natural stone cladding accents",
      "Open-concept living and dining flowing into a private rear green pocket",
      "Pergola-shaded terrace garden for evening relaxation",
      "Skylit central stairwell bathing all interior zones in daylight"
    ],
    engineeringHighlights: [
      "Optimized structural frame saving 12% in steel consumption",
      "Clear FSI utilization matching maximum allowable municipal limits",
      "Integrated solar PV panel mounting frames directly into roof slab",
      "Complete drainage gradient planning preventing monsoon water stagnation"
    ],
    isConceptShowcase: true
  },
  {
    id: "apex-commercial-complex",
    slug: "apex-commercial-complex",
    title: "Apex Urban Hub",
    category: "Commercial",
    location: "Trichy Road, Coimbatore",
    area: "7,200 sq.ft",
    year: "Representative Work",
    scope: "DTCP Approval Documentation & Structural Review",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A G+3 commercial mixed-use facility planned for retail showrooms on lower levels and corporate consultancies above. Showcases DTCP highway setback compliance, fire safety egress design, and multi-vehicle stilt parking layout.",
    architecturalFeatures: [
      "Double-glazed high performance curtain wall facade",
      "Stilt level mechanized and standard vehicular parking bays",
      "Universal accessibility ramps and dual stretcher-accessible elevator shafts",
      "Rooftop service yard concealing HVAC chillers and backup gensets"
    ],
    engineeringHighlights: [
      "Heavy-load commercial framing with earthquake resistant ductile detailing",
      "Directorate of Town and Country Planning (DTCP) layout verification",
      "Detailed storm-water discharge balancing calculations",
      "Comprehensive structural stability certification by Registered Engineer Grade II"
    ],
    isConceptShowcase: true
  },
  {
    id: "cascade-residence-ongoing",
    slug: "cascade-residence-ongoing",
    title: "The Terraced Villa",
    category: "Ongoing",
    location: "Ramanathapuram, Coimbatore",
    area: "3,200 sq.ft",
    year: "In Progress",
    scope: "Site Quality Audits & Project Advisory",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Currently undergoing construction supervision and milestone quality reviews. Features stepped green terraces that descend naturally with the site contour, prioritizing natural light and privacy in a dense residential neighborhood.",
    architecturalFeatures: [
      "Stepped terrace architecture with integrated drip irrigation",
      "Veneer-clad timber ceilings contrasting exposed polished concrete finishes",
      "Large-format sliding acoustic glass doors overlooking private water element",
      "Acoustically isolated home theater and study suite"
    ],
    engineeringHighlights: [
      "Continuous site inspection during raft and column casting",
      "Verification of M25 concrete cube test compressive strengths",
      "Waterproofing protocol supervision for terraced garden slabs",
      "Bill verification preventing contractor billing discrepancies"
    ],
    isConceptShowcase: true
  },
  {
    id: "heritage-modern-bungalow",
    slug: "heritage-modern-bungalow",
    title: "The Chettinad-Modern Haven",
    category: "Modern Homes",
    location: "Singanallur, Coimbatore",
    area: "4,100 sq.ft",
    year: "Representative Work",
    scope: "Plan Approval Works & Structural Design Guidance",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "Blending traditional Tamil architectural motifs—such as pillared thinnai verandas and pitched Mangalore tiled eaves—with clean European minimalist structural geometry and expansive glass fenestrations.",
    architecturalFeatures: [
      "Contemporary adaptation of the classical thinnai front veranda",
      "Pitched roof geometry with concealed internal drainage gutters",
      "Athi-maram (carved wood) accents paired with sleek steel portal frames",
      "Central air-cooling water cascade courtyard"
    ],
    engineeringHighlights: [
      "Hybrid structural system combining load-bearing columns with slender steel framing",
      "TNCDBR compliance for height-to-setback ratio on suburban road",
      "Thermal insulation layer in roof slab keeping interior temperature 4°C lower",
      "Certified valuation dossier prepared for construction stage disbursement"
    ],
    isConceptShowcase: true
  },
  {
    id: "industrial-warehouse-complex",
    slug: "industrial-warehouse-complex",
    title: "Ondipudur Logistics Facility",
    category: "Commercial",
    location: "Ondipudur, Coimbatore",
    area: "14,500 sq.ft",
    year: "Representative Work",
    scope: "DTP Layout & Fire Safety Sanction Assistance",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    description:
      "A pre-engineered building (PEB) storage and dispatch center with high-bay clearance, heavy-duty tremix industrial flooring, and streamlined container turning radiuses.",
    architecturalFeatures: [
      "Clear 9-meter internal eaves height for multi-tier pallet racking",
      "Heavy vehicle turning apron compliant with logistics safety standards",
      "Polycarbonate daylighting roof bands reducing daytime energy consumption",
      "Administrative office wing integrated into front facade"
    ],
    engineeringHighlights: [
      "DTP industrial layout zoning validation and clearance paperwork",
      "Vetted sub-grade preparation preventing floor slab cracking under 20-ton axle loads",
      "Rainwater harvesting collection ponds meeting municipal groundwater recharge targets",
      "Fire hydrant system pipe network schematic review"
    ],
    isConceptShowcase: true
  }
];
