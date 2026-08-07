// VYTAL HOUSE — MASTER SPECIFICATION DATA SOURCE
// Master Spec v1.0 · 2026-07-31

export const BRAND_TAGLINE = "THE RESTORATION HOUSE. PHYSICIAN-LED & SOCIAL LONGEVITY.";
export const BRAND_SUBTAGLINE = "Renew • Restore • Recharge";
export const BRAND_HERO_HEADLINE = "DESIGN YOUR BEST LIFE.";
export const BRAND_HERO = "RECOVER LIKE IT'S CLINICAL. BECAUSE IT IS.";
export const BRAND_MOTTO = "RITUALS ARE THE NEW ROUTINE.";
export const BRAND_CORE_PROMISE = "FUNCTIONAL WELLNESS. BACKED BY SCIENCE. DRIVEN BY PURPOSE.";
export const BRAND_MOAT_QUOTE = "WE DON'T JUST BUILD BRANDS. WE BUILD LEGACY SYSTEMS.";
export const BRAND_MISSION = "We exist to make optimal a measurable state — not a feeling. Self-care made social under physician leadership.";

export const MASTER_BRAND_OS_V1 = {
  version: "V1.0",
  status: "APPROVED MASTER DIRECTION",
  primaryBrand: "VYTAL HOUSE",
  primaryTagline: "Renew • Restore • Recharge",
  coreAttributes: [
    "Precise", "Scientific", "Disciplined", "Elevated", "Enduring", 
    "Premium", "Modern", "Intelligent", "Calm", "Transformational"
  ],
  colors: {
    obsidian: "#0B0C0E",        // Primary environment / background
    graphite: "#12161F",        // Near-black charcoal secondary surfaces
    titaniumSilver: "#B7BDC6",  // Typography / interface / detailing
    iridescentPlatinum: "linear-gradient(135deg, #FFFFFF 0%, #E2E8F0 40%, #CDB8FF 70%, #94A3B8 100%)",
    acidLime: "#C6FC06",        // Signal only (micro accents, CTA borders, active states)
    pearlLilac: "#CDB8FF",      // Reflection / supporting highlight only
  },
  logoConfigurations: [
    { id: "01", name: "Master V Monogram", usage: "3D architectural hero mark & app icon" },
    { id: "02", name: "VYTAL HOUSE Primary Wordmark", usage: "Master header & primary lockups" },
    { id: "03", name: "Horizontal Lockup", usage: "Header navigation & web banners" },
    { id: "04", name: "Stacked Lockup", usage: "Document covers & vertical signage" },
    { id: "05", name: "Circular Seal", usage: "Packaging seals & legal accreditation" },
    { id: "06", name: "App Icon", usage: "iOS/Android home screen & digital interfaces" },
    { id: "07", name: "Social Avatar", usage: "Instagram, LinkedIn, X profile media" },
    { id: "08", name: "Favicon", usage: "Browser tab 32x32 micro mark" },
    { id: "09", name: "Monogram Badge", usage: "Physical membership cards & hardware" },
    { id: "10", name: "Simplified Micro-Mark", usage: "Hairline UI badges & small viewports" },
    { id: "11", name: "Divider / Heartbeat Motif", usage: "Hairline section energy dividers" }
  ],
  materials: [
    "Black Architectural Stone", "Matte Obsidian", "Graphite", "Brushed Titanium",
    "Smoked Glass", "Soft-Touch Matte Black", "Iridescent Platinum", "Dark Stone with Veining"
  ],
  copyFramework: {
    approved: [
      "Renew. Restore. Recharge.",
      "Precision for better performance.",
      "Recovery designed with intention.",
      "Daily advantages that compound over time.",
      "Where recovery, performance and longevity connect.",
      "A better system for how you recover, perform and live.",
      "Science. Discipline. Longevity."
    ],
    prohibited: [
      "Change your life forever", "Reverse aging", "Cure", "Guaranteed", "Clinically proven without evidence"
    ]
  }
};

export const MASTER_OS_ASSETS = {
  overview: "/assets/brand/master-os/00-master-overview.jpg",
  brandBookCover: "/assets/brand/master-os/01-brand-book-cover.jpg",
  logoStandards: "/assets/brand/master-os/02-logo-standards.png",
  colorTypography: "/assets/brand/master-os/03-color-typography.png",
  iconLibrary: "/assets/brand/master-os/04-icon-library.png",
  productPackaging: "/assets/brand/master-os/07-product-packaging.png",
  digitalAppEcosystem: "/assets/brand/master-os/06-digital-app-ecosystem.png",
  environmentalSignage: "/assets/brand/master-os/08-environmental-signage.jpg",
  isolatedLogoAssets: "/assets/brand/master-os/01-isolated-logo-assets.png",
  isolatedIconFamily: "/assets/brand/master-os/04-isolated-icon-family.png"
};

export const PRISM_SILVER_COLORS = {
  prismSilver: "#B7BDC6",
  acidLime: "#C6FC06",
  aquaEnergy: "#00F0FF",
  darkBase: "#0B0C0E",
};

export const PRISM_ASSETS = {
  digitalSamples: "/assets/brand/prism-silver/06-digital-samples.jpg",
  environmentalSamples: "/assets/brand/prism-silver/07-environmental-samples.jpg",
  ecosystemFlywheel: "/assets/brand/prism-silver/08-ecosystem-flywheel.jpg",
  webInvestorBanner: "/assets/brand/prism-silver/09-web-investor-banner.jpg",
  socialOohKeyArt: "/assets/brand/prism-silver/10-social-ooh-key-art.png",
  masterDesignSheet: "/assets/brand/vytal-design-system.png",
  nadSupportTin: "/assets/pouches/vytal-nad-support-tin.png",
  tidalTin: "/assets/pouches/vytal-tidal-tin.png",
  pouchesTrio: "/assets/pouches/vytal-trio.png",
};

export const FLYWHEEL_STEPS = [
  {
    id: 'rituals',
    title: 'VYTAL FUNCTIONAL RITUALS',
    category: 'DAILY ROUTINE',
    color: '#CCFF00',
    desc: 'Daily rituals and protocols engineered for real results.',
    icon: 'Sparkles'
  },
  {
    id: 'membership',
    title: 'VYTAL BLACK MEMBERSHIP',
    category: 'ELEVATED ACCESS',
    color: '#00F0FF',
    desc: 'Exclusive access, elevated experiences, and community that compounds.',
    icon: 'ShieldCheck'
  },
  {
    id: 'subscriptions',
    title: 'SUBSCRIPTIONS',
    category: 'ONGOING VALUE',
    color: '#38BDF8',
    desc: 'Curated products, digital experiences, and ongoing value delivery.',
    icon: 'RefreshCw'
  },
  {
    id: 'outcomes',
    title: 'CUSTOMER DATA + OUTCOMES',
    category: 'VALIDATION',
    color: '#84CC16',
    desc: 'Real-world data and outcomes fuel insights and validation.',
    icon: 'BarChart3'
  },
  {
    id: 'personalization',
    title: 'NEW PRODUCTS + PERSONALIZATION',
    category: 'INNOVATION',
    color: '#E2E8F0',
    desc: 'Smarter innovation and tailored experiences that anticipate needs.',
    icon: 'Box'
  },
  {
    id: 'protocols',
    title: 'VYTAL PROTOCOLS',
    category: 'FOUNDATION',
    color: '#A855F7',
    desc: 'The foundation—standards, safety, and structure that ensure consistency and trust.',
    icon: 'Layers'
  }
];

export const MEDICAL_DIRECTOR = {
  name: "Dr. Abasi Bomani, MD",
  title: "Medical Director & Principal PC Owner",
  credentials: "MD · Physician Owner of VYTAL House Medical, P.C.",
  bio: "Dr. Bomani leads all clinical protocols, diagnostic interpretations, and medical oversight at VYTAL House. Every blood panel, IV drip, and diagnostic readout is executed under direct physician authority.",
};

export const CPOM_ENTITIES = {
  pc: {
    name: "VYTAL HOUSE MEDICAL, P.C.",
    placeholder: "⚑ Name TBD",
    owner: "Abasi Bomani, MD (100% Owner)",
    entityType: "Clinical PC (Maryland CPOM Compliant)",
    delivers: ["IV Therapy", "Injectables", "180+ Biomarker Panels", "Peptides", "Medical Diagnostics", "Physician Readouts"],
    billing: "Billed directly as Clinical Medical Services",
  },
  mso: {
    name: "VYTAL HOUSE MANAGEMENT, LLC",
    placeholder: "⚑ Name TBD",
    owner: "Gardner Group Holdings LLC",
    entityType: "Management Services Organization (MSO)",
    delivers: ["Thermal Contrast Ritual", "Social Ice-Bath Suites", "Recovery Technology", "Lymphatic Compression", "Infrared Sauna & Cold Plunge", "Adaptogenic Tonic Bar", "Membership Tiers", "Private Events"],
    billing: "Billed as Wellness & Facilities Services",
  }
};

export const OPEN_DECISIONS = [
  { id: "site_location", title: "Site Location", value: "Elkridge (6785 Business Parkway) vs. Chevy Chase (6807 Wisconsin Ave) vs. Both", status: "⚑ DECISION PENDING" },
  { id: "bomani_structure", title: "Dr. Bomani Compensation Structure", value: "Option 1 (MD Fee Only) vs. Option 2 (MD Fee + MSO Equity)", status: "⚑ DECISION PENDING" },
  { id: "pc_mso_names", title: "Entity Legal Names", value: "PC and MSO Exact Legal Entity Names", status: "⚑ DECISION PENDING" },
  { id: "eleve_tier", title: "ELEVE Equipment Tier", value: "Tier A ($18,440) / Tier B ($99,885) / Tier C ($521,870)", status: "⚑ DECISION PENDING" },
  { id: "pricing_comps", title: "Pricing Confirmation", value: "Final Maryland Comps Benchmark Verification", status: "⚑ DECISION PENDING" },
  { id: "founding_cap", title: "Launch Date & Founding Member Cap", value: "Launch Date & Founding Member Cap Quantity", status: "⚑ DECISION PENDING" },
  { id: "aesthetics_launch", title: "Aesthetics Launch Timeline", value: "Day-1 vs. Phase 2 Rollout", status: "⚑ DECISION PENDING" },
  { id: "emr_vendor", title: "EMR Platform Selection", value: "Boulevard vs. Nextech vs. Aesthetic Record (BAA Required)", status: "⚑ DECISION PENDING" },
  { id: "index_formula", title: "VYTAL Index Exact Formula", value: "Dr. Bomani Clinical Formula Sign-off", status: "⚑ DECISION PENDING" }
];

export const VYTAL_RESET_FLAGSHIP = {
  name: "THE VYTAL RESET",
  category: "FLAGSHIP",
  duration: "Approx. 3 Hours",
  price: 695,
  isPricePlaceholder: true,
  accessType: "By appointment only. No membership required.",
  description: "The single mandatory front door to VYTAL House. A 4-phase structured trajectory combining baseline metrics, contrast ritual, advanced recovery tech, and physician readout.",
  phases: [
    {
      phase: "01",
      name: "BASELINE",
      provider: "MSO (+ PC if blood draw)",
      details: "Body composition, hydration, grip strength, blood pressure, HRV, RMR. Optional full 180+ biomarker blood panel."
    },
    {
      phase: "02",
      name: "RITUAL",
      provider: "MSO",
      details: "Guided contrast — infrared sauna, sub-45°F cold immersion, and breathwork sequence in our social contrast lounge."
    },
    {
      phase: "03",
      name: "ELEVATE",
      provider: "MSO",
      details: "One advanced technology selected precisely to your baseline: HBOT, lymphatic compression, PEMF/vibroacoustic, or red light therapy."
    },
    {
      phase: "04",
      name: "READOUT ★",
      provider: "PC — Dr. Abasi Bomani, MD",
      details: "Physician-reviewed diagnostic interpretation. You leave with your initial VYTAL Index score and a written 30-day restoration protocol."
    }
  ],
  outcomes: [
    "Mental clarity",
    "Recovery and readiness",
    "Sustained energy",
    "Nervous-system regulation",
    "Restful sleep",
    "A measured baseline you can return to"
  ]
};

export const RESTORATIONS_LIST = [
  VYTAL_RESET_FLAGSHIP,
  {
    slug: "origin",
    name: "ORIGIN",
    subtitle: "Full Diagnostics + Physician Readout",
    duration: "90 min",
    price: 595,
    isPricePlaceholder: true,
    engine: "Baseline Measurement + Physician Diagnostics",
    entity: "PC / MSO",
    description: "Deep quantitative baseline evaluation measuring body composition, RMR, HRV, cardiovascular metrics, and physician readout."
  },
  {
    slug: "charge",
    name: "CHARGE",
    subtitle: "Hyperbaric Oxygen Chamber Protocol",
    durationVariants: ["30 min", "50 min", "80 min"],
    priceVariants: [395, 495, 595],
    price: 395,
    isPricePlaceholder: true,
    engine: "Hyperbaric Oxygen (HBOT)",
    entity: "MSO",
    description: "Pressurized 100% cellular oxygen infusion designed to promote systemic tissue repair and cognitive sharpening."
  },
  {
    slug: "flow",
    name: "FLOW",
    subtitle: "Lymphatic Compression Chamber",
    durationVariants: ["25 min", "50 min"],
    priceVariants: [395, 495],
    price: 395,
    isPricePlaceholder: true,
    engine: "Medical Compression Technology",
    entity: "MSO",
    description: "Sequential pneumatic gradient compression flush to accelerate metabolic waste clearance and reduce inflammation."
  },
  {
    slug: "resonance",
    name: "RESONANCE",
    subtitle: "Vibroacoustic + PEMF Neural Entrainment",
    durationVariants: ["25 min", "50 min"],
    priceVariants: [395, 495],
    price: 395,
    isPricePlaceholder: true,
    engine: "PEMF & Vibroacoustic Sound Technology",
    entity: "MSO",
    description: "Pulsed electromagnetic field technology combined with low-frequency acoustic vibrations for deep nervous-system resetting."
  },
  {
    slug: "ground",
    name: "GROUND",
    subtitle: "Thermal Ritual + Targeted Bodywork",
    durationVariants: ["50 min", "80 min"],
    priceVariants: [495, 595],
    price: 495,
    isPricePlaceholder: true,
    engine: "Contrast Plunge + Therapeutic Manual Therapy",
    entity: "MSO",
    description: "Infrared hyperthermic contrast combined with deep tissue structural bodywork to restore range of motion and decrease somatic tension."
  },
  {
    slug: "forge",
    name: "FORGE",
    subtitle: "Cryo + Contrast Plunge + Compression",
    duration: "45 min",
    price: 495,
    isPricePlaceholder: true,
    engine: "Whole-Body Cryo & Contrast Chamber",
    entity: "MSO",
    description: "Extreme temperature adaptation protocol designed to trigger mitochondrial biogenesis and anti-inflammatory signaling."
  },
  {
    slug: "glow",
    name: "GLOW",
    subtitle: "Medical-Grade Facial Protocol",
    duration: "60 min",
    price: 495,
    isPricePlaceholder: true,
    engine: "Advanced Dermal & Micro-Current Tech",
    entity: "MSO",
    description: "Clinical-grade dermal cellular exfoliation and micro-current stimulation for skin barrier longevity."
  },
  {
    slug: "ritual",
    name: "THE RITUAL",
    subtitle: "Sauna + Cold Immersion + Breath Sequence",
    duration: "60 min",
    price: 220,
    isPricePlaceholder: true,
    engine: "Guided Thermal Contrast",
    entity: "MSO",
    description: "The core thermal contrast experience: high-heat infrared sauna followed by sub-45°F cold immersion and guided breathwork."
  }
];

export const RAW_MODALITIES = [
  { name: "Hyperbaric Oxygen (HBOT)", category: "Cellular & Oxygenation", entity: "MSO" },
  { name: "Cryotherapy", category: "Thermal Contrast", entity: "MSO" },
  { name: "Social Contrast Plunge Suite", category: "Social Contrast", entity: "MSO" },
  { name: "Infrared Sauna Suite", category: "Thermal Contrast", entity: "MSO" },
  { name: "Lymphatic Compression", category: "Circulatory & Flush", entity: "MSO" },
  { name: "PEMF / Vibroacoustic", category: "Neurological & PEMF", entity: "MSO" },
  { name: "Red Light Therapy", category: "Photobiomodulation", entity: "MSO" },
  { name: "Hydrogen Inhalation", category: "Cellular Antioxidant", entity: "MSO" },
  { name: "Therapeutic Bodywork", category: "Structural Bodywork", entity: "MSO" },
  { name: "Medical Facial", category: "Dermal Longevity", entity: "MSO" },
  { name: "Body Composition (DEXA/BIA)", category: "Diagnostics", entity: "MSO" },
  { name: "Resting Metabolic Rate (RMR)", category: "Diagnostics", entity: "MSO" },
  { name: "Adaptogenic Tonic Bar & Lounge", category: "Social Wellness", entity: "MSO" },
  { name: "Acupuncture & Cupping", category: "Holistic Recovery", entity: "MSO" },
];

export const MEDICAL_SERVICES = {
  ivShots: [
    { name: "IMMUNITY", price: 145, details: "High-dose Vitamin C + Zinc + Glutathione booster" },
    { name: "METABOLISM", price: 145, details: "MIC/B12 + L-Carnitine cellular lipotropic infusion" },
    { name: "FOCUS", price: 145, details: "B-Complex + Taurine + NAD+ co-factors" },
    { name: "RECOVERY", price: 145, details: "Amino acid matrix + Magnesium chloride" },
    { name: "VITAMIN D3", price: 145, details: "50,000 IU Intramuscular Vitamin D3 injection" },
    { name: "LIPO-B", price: 145, details: "Methionine + Inositol + Choline + B12" }
  ],
  ivDrips: [
    { name: "REHYDRATE", price: 295, details: "1000ml Balanced Electrolyte Matrix + B-Complex + Minerals" },
    { name: "REINFORCE", price: 295, details: "High-concentration Vitamin C + Glutathione + Zinc + Trace Elements" },
    { name: "RADIATE", price: 295, details: "Glutathione 2000mg + Biotin + Vitamin C Dermal Infusion" },
    { name: "REBUILD", price: 295, details: "Full Essential Amino Acids + Magnesium + B12 + Taurine" }
  ],
  premiumIv: [
    { name: "NAD+ RECHARGE", price: 795, details: "500mg Pure Cellular NAD+ Infusion (Physician Monitored)" },
    { name: "NAD+ OPTIMIZE", price: 795, details: "750mg High-Dose Cellular NAD+ + Glutathione Push" }
  ],
  bloodwork: {
    name: "VYTAL 180+ BIOMARKER PANEL",
    price: 995,
    details: "Comprehensive 180+ biomarker blood analysis covering metabolic, cardiovascular, inflammatory, hormonal, and micronutrient profiles + biological age assessment + 45-min Dr. Bomani readout session."
  },
  aesthetics: {
    status: "Phase 2 ⚑ (Pending Launch)",
    items: [
      { name: "Neuromodulator Therapy", priceLabel: "Per Unit ⚑", provider: "Dr. Abasi Bomani, MD" },
      { name: "Dermal Filler Protocol", priceLabel: "Per Syringe ⚑", provider: "Dr. Abasi Bomani, MD" }
    ]
  }
};

export const MEMBERSHIP_TIERS = [
  {
    name: "CHARTER",
    price: 349,
    isPricePlaceholder: true,
    cadence: "month",
    includes: [
      "4 Restorations per month",
      "Unlimited THE RITUAL & Social Contrast access",
      "Exclusive Member Hours access (7am – 9pm, Mon–Sat)",
      "Access to Adaptogenic Tonic Bar & Social Lounge",
      "15% discount on all Clinical Medical Services"
    ]
  },
  {
    name: "RESIDENT",
    price: 649,
    isPricePlaceholder: true,
    cadence: "month",
    isPopular: true,
    includes: [
      "8 Restorations per month",
      "Unlimited THE RITUAL & Social Contrast access",
      "Quarterly VYTAL Index re-testing & diagnostic review",
      "20% discount on all Clinical Medical Services",
      "1 Complimentary IV Drip per month ($295 value)",
      "Complimentary Tonic Bar elixirs during visits"
    ]
  },
  {
    name: "PRINCIPAL",
    price: 1249,
    isPricePlaceholder: true,
    cadence: "month",
    includes: [
      "Unlimited Restorations",
      "Monthly physician consultation & protocol review with Dr. Bomani",
      "Full quarterly 180+ biomarker bloodwork included ($995 value)",
      "25% discount on all Clinical Medical Services",
      "4 Complimentary Guest Passes per month for social sessions",
      "Priority reservation for Social Lounge & private suites"
    ]
  }
];

export const ACCESS_SCHEDULE = {
  members: "7:00 AM – 9:00 PM (Monday – Saturday)",
  nonMembers: "12:00 PM – 5:00 PM (Monday – Friday)",
  rule: "Access scarcity is the product. THE VYTAL RESET is the only way for non-members to enter the house outside public hours."
};

export const VYTAL_INDEX_DOMAINS = [
  { name: "Metabolic", weight: 20, inputs: "RMR, Body Composition, HbA1c, Fasting Glucose, Lipid Sub-fractions", color: "#F59E0B" },
  { name: "Cardiovascular", weight: 20, inputs: "Blood Pressure, Resting HR, HRV (rMSSD), VO₂ Max Proxy", color: "#3B82F6" },
  { name: "Inflammatory", weight: 15, inputs: "hs-CRP, Homocysteine, Ferritin, Erythrocyte Sedimentation Rate", color: "#EF4444" },
  { name: "Recovery", weight: 20, inputs: "HRV 7-day Trend, Sleep Architecture, Session Cadence", color: "#10B981" },
  { name: "Hormonal", weight: 15, inputs: "Free/Total Testosterone, Estradiol, Thyroid Panel, Cortisol, DHEA-S", color: "#8B5CF6" },
  { name: "Nutritional", weight: 10, inputs: "Vitamin D3, B12, Serum Magnesium, Omega-3 Index, Hydration Score", color: "#EC4899" }
];
