export interface Equipment {
  id: string;
  name: string;
  manufacturer: string;
  model: string;
  description: string;
  specs: Record<string, string>;
  benefits: string[];
  testsPerformed: string[];
  image: string;
  category: string;
  accuracyRating: string;
}

export const equipmentData: Equipment[] = [
  {
    id: "mri-scanner",
    name: "High-Field MRI Scanner",
    manufacturer: "Siemens Healthineers",
    model: "MAGNETOM Series",
    description: "Advanced magnetic resonance imaging system delivering high-resolution images with maximum patient comfort.",
    specs: {
      "Field Strength": "1.5 Tesla",
      "Bore Size": "70 cm (Wide Bore)",
      "Scan Speed": "Ultra-fast",
    },
    benefits: [
      "Exceptional image quality for accurate diagnosis",
      "Reduced scan times",
      "Accommodates patients of all sizes comfortably",
      "Quiet operation"
    ],
    testsPerformed: ["Brain MRI", "Spine MRI", "Joints & MSK MRI", "Abdomen & Pelvis MRI"],
    image: "/equipments/Screenshot 2026-07-20 225536.png",
    category: "Radiology",
    accuracyRating: "99.9%"
  },
  {
    id: "ct-scanner",
    name: "256-Slice CT Scanner",
    manufacturer: "GE Healthcare",
    model: "Revolution CT",
    description: "State-of-the-art computed tomography scanner providing detailed cross-sectional images with minimal radiation dose.",
    specs: {
      "Slices": "256",
      "Rotation Time": "0.28 seconds",
      "Dose Reduction": "Up to 82%",
    },
    benefits: [
      "Extremely fast scanning",
      "Significantly lower radiation exposure",
      "High-definition cardiac imaging",
      "Ideal for trauma and pediatric patients"
    ],
    testsPerformed: ["CT Angiography", "HRCT Chest", "CT Brain", "CT Abdomen"],
    image: "/equipments/Screenshot 2026-07-20 225549.png",
    category: "Radiology",
    accuracyRating: "99.8%"
  },
  {
    id: "auto-analyzer",
    name: "Automated Biochemistry Analyzer",
    manufacturer: "Roche Diagnostics",
    model: "Cobas Series",
    description: "Fully automated system for high-throughput and precise clinical chemistry analysis.",
    specs: {
      "Throughput": "Up to 1000 tests/hour",
      "Sample Capacity": "150 samples continuously",
      "Calibration": "Automated",
    },
    benefits: [
      "Highly accurate and reproducible results",
      "Rapid turnaround times",
      "Eliminates manual errors",
      "Broad test menu capability"
    ],
    testsPerformed: ["Lipid Profile", "Liver Function Tests", "Kidney Function Tests", "Blood Glucose"],
    image: "/equipments/Screenshot 2026-07-20 225559.png",
    category: "Laboratory",
    accuracyRating: "99.9%"
  },
  {
    id: "hematology-analyzer",
    name: "Auto Hematology Analyzer",
    manufacturer: "Sysmex",
    model: "XN-Series",
    description: "Advanced hematology analyzer providing fast and highly accurate complete blood counts.",
    specs: {
      "Throughput": "Up to 100 samples/hour",
      "Parameters": "Over 30 reportable parameters",
      "Sample Volume": "Minimal blood required"
    },
    benefits: [
      "Fast results",
      "High accuracy",
      "Minimal blood sample",
      "Automated analysis",
      "Reliable reporting"
    ],
    testsPerformed: ["Complete Blood Count (CBC)", "Anemia diagnosis", "Infection detection", "Dengue monitoring"],
    image: "/equipments/Screenshot 2026-07-20 225606.png",
    category: "Laboratory",
    accuracyRating: "99.9%"
  },
  {
    id: "semi-auto-biochemistry",
    name: "Semi-Automatic Biochemistry Analyzer",
    manufacturer: "Erba",
    model: "Chem 5X",
    description: "The Semi-Automatic Biochemistry Analyzer performs various blood chemistry tests essential for evaluating organ function and overall health.",
    specs: {
      "Test Method": "Photometric",
      "Incubator": "Built-in",
      "Display": "Touch screen"
    },
    benefits: [
      "Accurate measurements",
      "Fast processing",
      "Cost-effective testing",
      "Reliable reports"
    ],
    testsPerformed: ["Blood Sugar", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Lipid Profile"],
    image: "/equipments/Screenshot 2026-07-20 225822.png",
    category: "Laboratory",
    accuracyRating: "99.5%"
  },
  {
    id: "electrolyte-analyzer",
    name: "Electrolyte Analyzer",
    manufacturer: "Medica",
    model: "EasyLyte",
    description: "The Electrolyte Analyzer measures essential minerals that maintain the body's fluid balance and nerve function using Ion Selective Electrode (ISE) technology.",
    specs: {
      "Method": "ISE Technology",
      "Speed": "Results in 60 seconds",
      "Sample Type": "Whole blood, serum, plasma"
    },
    benefits: [
      "Rapid testing",
      "High precision",
      "Essential for critical care",
      "Supports emergency diagnosis"
    ],
    testsPerformed: ["Kidney disease", "Dehydration", "Hypertension", "Heart disorders"],
    image: "/equipments/Screenshot 2026-07-20 225829.png",
    category: "Laboratory",
    accuracyRating: "99.8%"
  },
  {
    id: "centrifuge",
    name: "Laboratory Centrifuge",
    manufacturer: "Remi",
    model: "R-8C",
    description: "A Laboratory Centrifuge separates different components of blood and other body fluids by spinning them at high speed.",
    specs: {
      "Max Speed": "6000 RPM",
      "Capacity": "12 x 15ml",
      "Timer": "0-60 minutes"
    },
    benefits: [
      "Faster sample preparation",
      "Improved test accuracy",
      "Consistent laboratory results",
      "Safe operation"
    ],
    testsPerformed: ["Blood sample preparation", "Serum separation", "Plasma separation"],
    image: "/equipments/Screenshot 2026-07-20 225837.png",
    category: "Laboratory Equipment",
    accuracyRating: "N/A"
  },
  {
    id: "microscope",
    name: "Binocular Laboratory Microscope",
    manufacturer: "Olympus",
    model: "CX23",
    description: "The Binocular Microscope allows laboratory experts to examine microscopic organisms, cells, parasites, and blood samples with high clarity.",
    specs: {
      "Magnification": "Up to 1000x",
      "Illumination": "LED",
      "Objective Lenses": "4x, 10x, 40x, 100x"
    },
    benefits: [
      "High magnification",
      "Clear visualization",
      "Accurate diagnosis",
      "Essential pathology tool"
    ],
    testsPerformed: ["Blood smear examination", "Urine microscopy", "Stool examination", "Parasite detection"],
    image: "/equipments/Screenshot 2026-07-20 225845.png",
    category: "Pathology",
    accuracyRating: "99.9%"
  },
  {
    id: "incubator",
    name: "Laboratory Incubator",
    manufacturer: "Thermo Fisher",
    model: "Heratherm",
    description: "A Laboratory Incubator maintains a controlled temperature to support the growth of microorganisms and biological samples.",
    specs: {
      "Temperature Range": "Ambient +5 to 70°C",
      "Capacity": "60 Liters",
      "Control": "Microprocessor"
    },
    benefits: [
      "Stable temperature",
      "Reliable culture growth",
      "Accurate microbiological results",
      "Energy efficient"
    ],
    testsPerformed: ["Microbiology", "Bacterial culture", "Sample preservation"],
    image: "/equipments/Screenshot 2026-07-20 230008.png",
    category: "Microbiology",
    accuracyRating: "N/A"
  },
  {
    id: "hot-air-oven",
    name: "Hot Air Oven",
    manufacturer: "Labline",
    model: "Sterilizer Pro",
    description: "The Hot Air Oven sterilizes laboratory instruments using dry heat, eliminating harmful microorganisms.",
    specs: {
      "Max Temperature": "250°C",
      "Material": "Stainless Steel",
      "Safety": "Over-temperature protection"
    },
    benefits: [
      "Effective sterilization",
      "Infection prevention",
      "Safe laboratory environment",
      "Durable construction"
    ],
    testsPerformed: ["Sterilization of glassware", "Laboratory instruments sterilization"],
    image: "/equipments/Screenshot 2026-07-20 230013.png",
    category: "Sterilization",
    accuracyRating: "N/A"
  },
  {
    id: "weighing-balance",
    name: "Electronic Weighing Balance",
    manufacturer: "Sartorius",
    model: "Entris II",
    description: "This precision balance accurately measures chemicals and laboratory samples to ensure correct reagent preparation.",
    specs: {
      "Capacity": "220g",
      "Readability": "0.1mg",
      "Calibration": "Internal"
    },
    benefits: [
      "High precision",
      "Consistent measurements",
      "Improved laboratory accuracy",
      "Easy leveling"
    ],
    testsPerformed: ["Chemical preparation", "Sample weighing", "Laboratory measurements"],
    image: "/equipments/Screenshot 2026-07-20 230019.png",
    category: "Laboratory Equipment",
    accuracyRating: "99.99%"
  },
  {
    id: "micropipettes",
    name: "Precision Micropipettes",
    manufacturer: "Eppendorf",
    model: "Research plus",
    description: "Micropipettes are precision laboratory instruments used to transfer extremely small volumes of liquids accurately.",
    specs: {
      "Volume Range": "0.1 µL to 10 mL",
      "Operation": "Manual/Electronic",
      "Autoclavable": "Fully"
    },
    benefits: [
      "Highly accurate",
      "Easy handling",
      "Prevents measurement errors",
      "Ergonomic design"
    ],
    testsPerformed: ["Biochemistry tests", "Hematology", "Microbiology", "Reagent preparation"],
    image: "/equipments/Screenshot 2026-07-20 230026.png",
    category: "Laboratory Tools",
    accuracyRating: "99.9%"
  },
  {
    id: "test-tube-rack",
    name: "Test Tube Rack",
    manufacturer: "Generic",
    model: "Standard",
    description: "Test tube racks securely hold blood collection tubes during sample processing and laboratory testing.",
    specs: {
      "Material": "Polycarbonate",
      "Capacity": "72 Tubes",
      "Autoclavable": "Yes"
    },
    benefits: [
      "Organized workspace",
      "Reduced contamination",
      "Improved efficiency",
      "Durable"
    ],
    testsPerformed: ["Blood sample collection", "Sample storage", "Laboratory workflow"],
    image: "/equipments/Screenshot 2026-07-20 230212.png",
    category: "Laboratory Accessories",
    accuracyRating: "N/A"
  },
  {
    id: "pipette-tip-box",
    name: "Pipette Tip Rack",
    manufacturer: "Generic",
    model: "Standard",
    description: "Pipette tip boxes contain sterile disposable tips used with micropipettes to maintain accuracy.",
    specs: {
      "Material": "Polypropylene",
      "Capacity": "96 Tips",
      "Sterile": "Yes"
    },
    benefits: [
      "Sterile handling",
      "Improved precision",
      "Infection control",
      "Easy loading"
    ],
    testsPerformed: ["Laboratory testing", "Sample transfer", "Reagent dispensing"],
    image: "/equipments/Screenshot 2026-07-20 230220.png",
    category: "Laboratory Accessories",
    accuracyRating: "N/A"
  },
  {
    id: "reagent-bottles",
    name: "Reagent Storage Bottles",
    manufacturer: "Borosil",
    model: "Amber Glass",
    description: "Reagent bottles store chemicals and diagnostic solutions safely, preventing degradation from light or air.",
    specs: {
      "Material": "Borosilicate Glass",
      "Volume": "100ml - 1000ml",
      "Cap": "Screw cap with pour ring"
    },
    benefits: [
      "Safe storage",
      "Prevents contamination",
      "Extends reagent life",
      "Chemical resistant"
    ],
    testsPerformed: ["Biochemistry testing", "Chemical storage", "Diagnostic assays"],
    image: "/equipments/Screenshot 2026-07-20 230229.png",
    category: "Laboratory Accessories",
    accuracyRating: "N/A"
  },
  {
    id: "sample-tray",
    name: "Sample Microplate",
    manufacturer: "Corning",
    model: "96-Well",
    description: "Sample trays and microplates hold multiple patient samples, allowing efficient and organized high-volume testing.",
    specs: {
      "Wells": "96",
      "Material": "Polystyrene",
      "Format": "Standard SBS"
    },
    benefits: [
      "Faster workflow",
      "Better organization",
      "Supports multiple tests simultaneously",
      "Automation compatible"
    ],
    testsPerformed: ["Sample organization", "Biochemistry assays", "Laboratory automation"],
    image: "/equipments/Screenshot 2026-07-20 230235.png",
    category: "Laboratory Accessories",
    accuracyRating: "N/A"
  }
];
