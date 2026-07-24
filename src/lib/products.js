// Central product data for Rushabh Enterprise.
// Image paths point to real product photography in /public/products/.

const GN_SHARED_THREADS = [
  { thread: "M6 x 1.0", type: "Metric (DIN 71412 / ISO 12996)", hex: "11 mm" },
  { thread: "1/8\" BSP", type: "BSP (BS 1486)", hex: "11 mm" },
  { thread: "1/4\" BSP", type: "BSP (BS 1486)", hex: "14 mm" },
];

const GN_SHARED_SPEC = {
  materials: ["Steel", "Stainless Steel (SS 304)", "Stainless Steel (SS 316)"],
  finishes: ["Zinc Plated", "Passivated"],
  workingPressure: "Up to 400 bar (5,800 PSI)",
  temperatureRange: "-30°C to +120°C",
  sealingType: "Ball check, spring loaded",
};

export const products = [
  {
    slug: "grease-nipples",
    name: "Grease Nipples",
    tagline: "Ball-check hydraulic fittings for every thread standard on earth.",
    intro:
      "The core of the Rushabh range. Spring-loaded ball-check fittings that accept grease under pressure and seal against contamination between service intervals, machined to Metric, BSP, and NPT standards from a single Rajkot facility. Select a type below to see its exact specification and photography.",
    industries: [
      { name: "Automotive", use: "Chassis pivots, suspension joints, and driveline U-joints on assembly and aftermarket service lines." },
      { name: "Construction", use: "Excavator bucket pins, boom joints, and articulation points exposed to dust and vibration." },
      { name: "Agriculture", use: "Tractor and implement pivot points serviced in the field, often with basic tooling." },
      { name: "Mining", use: "High-cycle lubrication points on crushers and conveyors, where BSP fittings dominate." },
      { name: "Marine", use: "Deck machinery and winch pivots, typically specified in stainless steel for corrosion resistance." },
      { name: "General Machinery", use: "Bearing housings and slideways across manufacturing and processing equipment." },
    ],
    ordering: { moq: "500 units per SKU", pack: "50 pcs polybag / 500 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "Every ball-check seat is machined and spring-tested to hold pressure and seal against contamination consistently, batch after batch. That is the detail that separates a fitting your maintenance team trusts from one they stop using.",
    variants: [
      {
        key: "straight",
        name: "Straight",
        angle: "0°",
        desc:
          "The standard in-line fitting for open, easily accessible lubrication points. The most commonly specified type across automotive and general machinery.",
        application:
          "Widely used in bearing housings, motors, gearboxes, pumps, fans, and general industrial machinery.",
        images: [
          "/products/grease-nipples/straight/1.png",
          "/products/grease-nipples/straight/2.png",
          "/products/grease-nipples/straight/spec-sheet.png",
        ],
        threadSizes: GN_SHARED_THREADS,
        dimensionNote: "Full dimensional drawing available on request from our export desk.",
        industries: [
          { name: "Manufacturing", use: "Used in conveyor systems, bearing housings, and general factory equipment." },
          { name: "Agriculture", use: "Ideal for tractors, harvesters, and other farm machinery with regular greasing needs." },
          { name: "Material Handling", use: "Suited to forklifts, conveyors, and warehouse handling equipment." },
          { name: "Pumps & Motors", use: "Standard lubrication point on pump and motor bearing housings." },
        ],
      },
      {
        key: "45-degree",
        name: "45° Angle",
        angle: "45°",
        desc:
          "For lubrication points partially obstructed by adjoining components, where a straight fitting cannot take a grease gun coupler squarely.",
        application:
          "Used in hard-to-reach areas where straight fittings are not accessible. Ideal for reducing stress on grease guns and hoses in angled lubrication points.",
        images: ["/products/grease-nipples/45-degree/1.png", "/products/grease-nipples/45-degree/spec-sheet.png"],
        threadSizes: GN_SHARED_THREADS,
        dimensions: {
          columns: ["Thread Size", "Thread Type", "A – Height", "B – Length", "C – Hex"],
          rows: [
            ["M6 x 1.0", "Metric", "22.0 mm", "12.5 mm", "11 mm"],
            ["1/8\" BSP", "BSP", "22.0 mm", "12.5 mm", "11 mm"],
            ["1/4\" BSP", "BSP", "25.0 mm", "13.5 mm", "14 mm"],
            ["M8 x 1.25", "Metric", "25.0 mm", "13.5 mm", "14 mm"],
          ],
        },
        industries: [
          { name: "Aviation", use: "Used in aircraft components such as landing gear, control linkages, and hinges." },
          { name: "Construction", use: "Used in excavators, loaders, and cranes for boom pivots, pins, and joints." },
          { name: "Automotive", use: "Ideal for chassis, suspension systems, and steering linkages in vehicles." },
        ],
      },
      {
        key: "90-degree",
        name: "90° Angle",
        angle: "90°",
        desc:
          "For tight, hard-to-reach mounting positions where the grease gun can only approach from the side. Ball head swivels for coupler access.",
        application:
          "Widely used in tight spaces and hard-to-reach areas in bearing housings, motors, gearboxes, pumps, fans, and general industrial machinery.",
        images: [
          "/products/grease-nipples/90-degree/1.png",
          "/products/grease-nipples/90-degree/2.png",
          "/products/grease-nipples/90-degree/3.png",
          "/products/grease-nipples/90-degree/spec-sheet.png",
        ],
        threadSizes: GN_SHARED_THREADS,
        dimensions: {
          columns: ["Thread Size", "Thread Type", "Hex Size", "Overall Height"],
          rows: [
            ["M6 x 1.0", "Metric", "11 mm", "22.0 mm"],
            ["1/8\" BSP", "BSP", "11 mm", "22.0 mm"],
            ["1/4\" BSP", "BSP", "14 mm", "25.0 mm"],
          ],
        },
        industries: [
          { name: "Manufacturing", use: "Used in conveyor systems, bearing housings, and general factory equipment." },
          { name: "Agriculture", use: "Ideal for tractors, harvesters, and other farm machinery with regular greasing needs." },
          { name: "Material Handling", use: "Suited to forklifts, conveyors, and warehouse handling equipment." },
          { name: "Pumps & Motors", use: "Standard lubrication point on pump and motor bearing housings." },
        ],
      },
      {
        key: "button-head",
        name: "Button Head",
        angle: "0°",
        desc:
          "A low-profile, broad-head fitting for recessed mounting positions where a standard ball head would be exposed to impact.",
        application:
          "Designed for easy-access lubrication points. The button head allows quick and secure greasing in confined or frequently serviced areas.",
        images: ["/products/grease-nipples/button-head/1.png", "/products/grease-nipples/button-head/2-sheet.png", "/products/grease-nipples/button-head/spec-sheet.png"],
        threadSizes: GN_SHARED_THREADS,
        dimensionNote: "Full dimensional drawing available on request from our export desk.",
        industries: [
          { name: "Manufacturing", use: "Used in conveyor systems, bearing housings, and factory equipment." },
          { name: "Agriculture", use: "Ideal for tractors, harvesters, and other farm machinery with regular greasing needs." },
          { name: "Automotive", use: "Useful in chassis, joints, suspension parts, and serviceable assemblies." },
          { name: "Marine", use: "Suitable for deck equipment, winches, and marine machinery." },
        ],
      },
      {
        key: "flush",
        name: "Flush Type",
        angle: "0°",
        desc:
          "The ball seats fully within a countersunk recess, sitting flush with the mounting face for maximum protection against impact and debris.",
        application:
          "Used in applications where a low-profile lubrication point is required. The flush design prevents snagging and damage, ideal for smooth surfaces and tight clearances.",
        images: ["/products/grease-nipples/flush/1.png", "/products/grease-nipples/flush/2-sheet.png", "/products/grease-nipples/flush/spec-sheet.png"],
        threadSizes: GN_SHARED_THREADS,
        dimensionNote: "Full dimensional drawing available on request from our export desk.",
        industries: [
          { name: "Aerospace", use: "Used in aircraft control systems, hinges, and access panels." },
          { name: "Railway", use: "Ideal for bogies, doors, couplers, and underframe components." },
          { name: "Industrial Machinery", use: "Used in automated equipment, conveyors, and precision machinery." },
          { name: "Food Processing", use: "Suitable for food-grade machinery with smooth, easy-to-clean surfaces." },
          { name: "Wind Energy", use: "Used in pitch systems, yaw drives, and main bearing assemblies." },
        ],
      },
      {
        key: "hydraulic",
        name: "Hydraulic",
        angle: "0°",
        desc:
          "A reinforced, compact body rated for high-pressure hydraulic greasing systems and automated lubrication lines.",
        application:
          "Designed for use in high-pressure hydraulic systems. The hydraulic grease nipple ensures reliable lubrication under extreme pressure, reducing wear and extending equipment life.",
        images: ["/products/grease-nipples/hydraulic/1.png", "/products/grease-nipples/hydraulic/2-sheet.png", "/products/grease-nipples/hydraulic/spec-sheet.png"],
        threadSizes: GN_SHARED_THREADS,
        dimensionNote: "Full dimensional drawing available on request from our export desk.",
        industries: [
          { name: "Construction", use: "Used in excavators, loaders, and other heavy equipment." },
          { name: "Agriculture", use: "Ideal for tractors, harvesters, and hydraulic implements." },
          { name: "Mining", use: "Suitable for drilling machines, haul trucks, and loaders." },
          { name: "Forestry", use: "Used in feller bunchers, skidders, and forestry equipment." },
          { name: "Material Handling", use: "Used in forklifts, hydraulic lifts, and handling systems." },
        ],
      },
    ],
    ...GN_SHARED_SPEC,
    threadOptions: [
      { standard: "Metric (DIN 71412 / ISO 12996)", sizes: "M6 x 1.0, M8 x 1.0, M8 x 1.25, M10 x 1.0, M10 x 1.5" },
      { standard: "BSP (BS 1486)", sizes: "1/8\" BSP, 1/4\" BSP" },
      { standard: "NPT (SAE J534)", sizes: "1/8\" NPT, 1/4\" NPT" },
    ],
    spec: {
      workingPressure: GN_SHARED_SPEC.workingPressure,
      temperatureRange: GN_SHARED_SPEC.temperatureRange,
      sealingType: GN_SHARED_SPEC.sealingType,
    },
    application:
      "Lubrication of joint bearings, pivot pins, and chassis fittings across automotive, construction, and agricultural equipment. Compatible with all standard grease gun couplers.",
  },
  {
    slug: "grease-nipple-caps",
    name: "Grease Nipple Caps",
    flagship: true,
    tagline: "Our flagship product: engineered PVC protection for every nipple in the range.",
    intro:
      "Rushabh's highest-volume, most-trusted product line. A precision-moulded PVC cap that seals over the grease nipple between service intervals, keeping dirt, dust, and moisture out of the ball-check seat and extending the working life of every fitting it protects. Moulded with an integrated pull-tab for fast, tool-free removal.",
    materialStory: {
      heading: "Why we build it in PVC",
      body:
        "We standardised this cap on PVC (polyvinyl chloride) rather than natural rubber for reasons that matter to a buyer running thousands of these in the field. PVC resists oil, grease, and a wide range of industrial chemicals without swelling or perishing, so the cap does not degrade from contact with the very lubricant it is protecting. It holds its colour and flexibility across long outdoor exposure, where natural rubber compounds tend to crack and stiffen with age and UV exposure. It moulds to a tighter, more consistent tolerance at high volume, which matters when a loose cap that falls off in transit defeats the purpose entirely. And it lets us hold a high-visibility red finish permanently, so a missing cap is obvious on inspection, not something a technician has to guess at. The result is a component that costs less to manufacture at scale without giving up sealing performance, which is why it has become our flagship line.",
    },
    industries: [
      { name: "Automotive", use: "Protecting chassis and driveline nipples during transit and storage before a vehicle reaches its dealer or fleet." },
      { name: "Oil & Gas", use: "Shielding valve and flange-mounted lubrication points on refinery and pipeline equipment." },
      { name: "Railway", use: "Fitted on bogie and undercarriage lubrication points exposed to track debris." },
      { name: "Construction", use: "Shielding exposed pivot fittings from concrete dust and grit between service intervals." },
      { name: "Material Handling", use: "Standard housekeeping practice on conveyor and pillow-block bearing points." },
      { name: "Agriculture", use: "Keeping field-exposed lubrication points clear of dirt and moisture between seasonal servicing." },
    ],
    variants: [
      {
        key: "pvc-cap",
        name: "PVC Cap",
        angle: "N/A",
        desc: "Precision-moulded PVC push-fit seal with an integrated pull-tab for fast, one-handed removal. Easy to fit and remove at frequent service points without tools, and built to outlast rubber in oil, grease, and UV exposure.",
      },
    ],
    images: [
      "/products/grease-nipple-caps/1.png",
      "/products/grease-nipple-caps/2-sheet.png",
      "/products/grease-nipple-caps/3.png",
      "/products/grease-nipple-caps/4.png",
      "/products/grease-nipple-caps/5.png",
      "/products/grease-nipple-caps/6.png",
    ],
    threadOptions: [
      { standard: "Metric (DIN 71412)", sizes: "M6, M8, M10" },
      { standard: "BSP (BS 1486)", sizes: "1/8\", 1/4\"" },
      { standard: "NPT (SAE J534)", sizes: "1/8\", 1/4\"" },
    ],
    materials: ["PVC (Polyvinyl Chloride)"],
    finishes: ["Red (high-visibility)", "Natural"],
    spec: {
      workingPressure: "N/A. Protective component only.",
      temperatureRange: "-15°C to +70°C",
      sealingType: "Push-fit compression seal",
    },
    application:
      "Fitted over grease nipples in maintenance-heavy environments to prevent contamination ingress during storage, transit, and between lubrication cycles. High-visibility red PVC finish makes a missing cap immediately obvious during inspection.",
    ordering: {
      moq: "8,000 units per SKU (1 master carton)",
      pack: "100 pcs polybag / 400 pcs box / 8,000 pcs master carton",
      leadTime: "21 working days from confirmed PO",
    },
    precisionNote:
      "Each cap is moulded to a consistent internal bore so it seats securely across its full thread-size range. A loose cap that falls off in transit defeats the purpose entirely.",
  },
  {
    slug: "oil-cups",
    name: "Oil Cups",
    tagline: "Metered oil delivery for machinery lubrication points.",
    intro:
      "Steel oil cups for lubrication points that run on oil rather than grease. A sealed reservoir with a positive-closing lid keeps the fill clean between top-ups and gives a maintenance technician an immediate visual check of oil presence.",
    industries: [
      { name: "General Machinery", use: "Bearing and slideway lubrication points on production equipment run on a scheduled top-up cycle." },
      { name: "Textile Machinery", use: "High-speed spindle and roller bearings that need frequent, small oil additions." },
      { name: "Industrial Equipment", use: "Gearcases and open bearings on processing lines where oil is specified over grease." },
    ],
    variants: [
      {
        key: "screw-type",
        name: "Screw Type",
        angle: "N/A",
        desc: "Positive-closing lid on a threaded body, sealing the reservoir against dust and splash between fills. Engraved for easy identification on a busy panel of fittings.",
      },
    ],
    images: ["/products/oil-cups/1.png", "/products/oil-cups/2-sheet.png"],
    threadOptions: [
      { standard: "Metric (DIN 71412)", sizes: "M6, M8, M10, M12" },
      { standard: "BSP (BS 1486)", sizes: "1/8\", 1/4\", 3/8\"" },
    ],
    materials: ["Mild Steel", "Zinc-Plated Steel"],
    finishes: ["Zinc Plated", "Nickel Plated"],
    spec: {
      workingPressure: "Gravity-fed, non-pressurised",
      temperatureRange: "-10°C to +90°C",
      sealingType: "Hinged lid closure with positive latch",
    },
    application:
      "Machinery lubrication points where oil, rather than grease, is the specified lubricant. Used on bearings, slideways, and gearcases on production and processing equipment.",
    ordering: { moq: "500 units per SKU", pack: "50 pcs polybag / 500 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "The lid latch is set to stay closed under vibration but open with one hand, so a technician on a moving line can top up without losing rhythm.",
  },
  {
    slug: "grease-cups",
    name: "Grease Cups",
    tagline: "Manual grease delivery, built for wear-heavy service points.",
    intro:
      "A screw-type grease cup engineered for manual, controlled grease delivery on equipment where automated fittings are impractical. A knurled cap gives hand grip and advances by thread to feed grease into the bearing at a controlled rate.",
    industries: [
      { name: "Mining", use: "Manually serviced bearing points on crushers and screens where automated lines aren't run." },
      { name: "Construction", use: "Heavy equipment pivot and bearing points serviced on a fixed maintenance schedule." },
      { name: "Textile Machinery", use: "Loom and spindle bearing points serviced by hand on a fixed rotation." },
      { name: "Marine", use: "Deck winch and wire-rope bearing points on marine equipment, greased manually during rounds." },
      { name: "Heavy Machinery", use: "Legacy equipment designed around manual grease cups rather than nipple-and-gun servicing." },
    ],
    variants: [
      {
        key: "screw-type",
        name: "Screw Type",
        angle: "N/A",
        desc: "Knurled cap threaded onto the body, advanced by hand to feed a metered, repeatable charge of grease into the bearing on each turn.",
      },
    ],
    images: [
      "/products/grease-cups/1.png",
      "/products/grease-cups/2-sheet.png",
      "/products/grease-cups/3.png",
      "/products/grease-cups/4.png",
      "/products/grease-cups/5.png",
    ],
    threadOptions: [
      { standard: "Metric (DIN 71412)", sizes: "M8, M10, M12" },
      { standard: "BSP (BS 1486)", sizes: "1/4\", 3/8\"" },
    ],
    materials: ["Mild Steel", "Brass"],
    finishes: ["Zinc Plated", "Natural Brass"],
    spec: {
      workingPressure: "Manual actuation",
      temperatureRange: "-10°C to +100°C",
      sealingType: "Threaded cap compression",
    },
    application:
      "Wear-heavy lubrication points on mining and heavy construction equipment where manual, on-demand grease delivery is preferred over cartridge or nipple systems.",
    ordering: { moq: "500 units per SKU", pack: "50 pcs polybag / 500 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "Thread engagement is held tight enough that the cap advances smoothly under hand pressure without cross-threading. That is a common failure point in lower-cost cast alternatives.",
  },
  {
    slug: "oil-level-indicators",
    name: "Aluminium Oil Level Indicators",
    tagline: "Leak-proof visibility into every gearbox and reservoir.",
    intro:
      "A cast hex-body oil level indicator with a clear sight window and a red float dot, giving a single-glance visual check of reservoir level on gearboxes and machinery housings. No dipstick and no shutdown required.",
    industries: [
      { name: "Gearboxes", use: "Direct-mount level monitoring on industrial gearboxes without needing to stop and dipstick-check." },
      { name: "Industrial Machinery", use: "Reservoir and sump level checks on production equipment during routine walkarounds." },
      { name: "Marine", use: "Engine and gearbox oil level monitoring in marine drivetrains, specified with corrosion-resistant sealing." },
    ],
    variants: [
      {
        key: "standard-sight-glass",
        name: "Standard Sight Glass",
        angle: "N/A",
        desc: "Hex-body indicator with a five-window sight glass and red centre float, gasket-sealed against leaks at the mounting face and around the window.",
      },
    ],
    images: ["/products/oil-level-indicators/1.png", "/products/oil-level-indicators/2-sheet.png"],
    threadOptions: [
      { standard: "Metric (DIN 71412)", sizes: "M12, M16, M20, M22" },
      { standard: "BSP (BS 1486)", sizes: "3/8\", 1/2\", 3/4\"" },
    ],
    materials: ["Aluminium (body)", "Toughened Glass / Polycarbonate (sight window)"],
    finishes: ["Natural Aluminium", "Anodised"],
    spec: {
      workingPressure: "Low-pressure reservoir mounting",
      temperatureRange: "-20°C to +110°C",
      sealingType: "Gasket-sealed, leak-proof",
    },
    application:
      "Direct visual monitoring of oil levels in gearboxes and machinery housings, reducing the need for dipstick checks and unplanned downtime from undetected low-oil conditions.",
    ordering: { moq: "250 units per SKU", pack: "25 pcs polybag / 250 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "The O-ring seal at the window and mounting face is fitted to hold under sustained oil contact and temperature cycling. A leaking indicator is worse than no indicator at all.",
  },
  {
    slug: "nylon-knobs",
    name: "Industrial Nylon Knobs",
    tagline: "Impact and heat-resistant control points for machine panels.",
    intro:
      "A moulded industrial nylon knob engineered for the repeated handling, heat exposure, and impact loads found on control panels and equipment adjustment points. A comfortable, durable grip point rated for continuous industrial use.",
    industries: [
      { name: "Automation", use: "Used in automation systems, jigs, fixtures, and conveyor setups." },
      { name: "Packaging", use: "Ideal for packaging machines and adjustable guides." },
      { name: "Food & Beverage", use: "Used in food processing equipment and bottling lines." },
      { name: "Textile Machinery", use: "Suitable for textile machines and tension adjustment systems." },
      { name: "Laboratory Equipment", use: "Used in laboratory instruments and adjustable fixtures." },
      { name: "Metal Fabrication", use: "Ideal for workholding fixtures and adjustable metalworking setups." },
    ],
    variants: [
      {
        key: "industrial-nylon-knob",
        name: "Industrial Nylon Knob",
        angle: "N/A",
        desc: "Moulded reinforced nylon knob on a full-length metal threaded shank, designed for manual clamping, tightening, and adjustment with a firm, ergonomic grip.",
      },
    ],
    images: [
      "/products/nylon-knobs/1.png",
      "/products/nylon-knobs/2-sheet.png",
      "/products/nylon-knobs/3.png",
      "/products/nylon-knobs/4.png",
    ],
    threadOptions: [{ standard: "Metric", sizes: "M6, M8, M10, M12, M16" }],
    materials: ["Reinforced Nylon (PA6)"],
    finishes: ["Black", "Matte"],
    spec: {
      workingPressure: "N/A. Manual handling component.",
      temperatureRange: "-20°C to +80°C",
      sealingType: "N/A",
    },
    application:
      "Designed for manual clamping, tightening, and adjustment in industrial machinery and equipment. The ergonomic design provides a firm grip for easy operation and secure fastening.",
    ordering: { moq: "1,000 units per SKU", pack: "100 pcs polybag / 1,000 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "Lightweight, corrosion-resistant, durable, and impact-resistant. Manufactured to RoHS compliance for buyers with restricted-substance requirements.",
  },
  {
    slug: "copper-rivets",
    name: "Copper Rivets",
    tagline: "Solid copper fastening for conductive and corrosion-critical joins.",
    intro:
      "Solid copper rivets manufactured to consistent head and shank tolerances for applications demanding electrical conductivity, corrosion resistance, or a non-sparking fastening solution.",
    industries: [
      { name: "Aerospace & Aviation", use: "Fuselage panel and structural fastening where consistent head profile matters." },
      { name: "Marine & Shipbuilding", use: "Deck fittings, winches, and hardware exposed to saltwater environments." },
      { name: "Electrical Industry", use: "Busbar and bonding joints where consistent conductivity matters as much as mechanical strength." },
      { name: "Automotive", use: "Brake lining and clutch facing rivets, and other friction-joint applications." },
      { name: "Railways", use: "Rolling stock body panels and undercarriage fastening." },
      { name: "Industrial Machinery", use: "Equipment housings and panel fastening in general fabrication." },
      { name: "Leather Goods", use: "Decorative and structural rivets on bags, belts, and leather hardware." },
      { name: "Architecture & Construction", use: "Copper roofing, cladding, and architectural sheet metal fastening." },
    ],
    variants: [
      {
        key: "round-head",
        name: "Round Head",
        angle: "N/A",
        desc: "Standard domed head for general-purpose fastening. The most widely specified copper rivet profile across electrical and fabrication use.",
      },
    ],
    images: [
      "/products/copper-rivets/1.png",
      "/products/copper-rivets/2-sheet.png",
      "/products/copper-rivets/3.png",
      "/products/copper-rivets/4.png",
    ],
    threadOptions: [
      { standard: "Diameter Range", sizes: "3mm to 10mm" },
      { standard: "Length Range", sizes: "8mm to 50mm (custom lengths on request)" },
    ],
    materials: ["Solid Copper (99.9%)"],
    finishes: ["Natural / Bright Finish"],
    spec: {
      workingPressure: "N/A. Mechanical fastener.",
      temperatureRange: "-40°C to +200°C",
      sealingType: "N/A",
    },
    application:
      "Electrical bonding joints, marine fittings, and corrosion-critical fabrication where a non-ferrous, conductive, solid-copper fastener is specified.",
    ordering: { moq: "5,000 units per size", pack: "1,000 pcs box / 5,000 pcs carton", leadTime: "21 working days from confirmed PO" },
    precisionNote:
      "Head height and shank diameter are held to a consistent tolerance across a production batch, so a batch of rivets seats and rolls uniformly on a fabrication line.",
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCoverImage(product) {
  return product.slug === "grease-nipples" ? product.variants[0].images[0] : product.images[0];
}
