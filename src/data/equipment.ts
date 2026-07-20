export interface EquipmentDetailed {
  id: string;
  name: string;
  image: string;
  overview: string;
  purpose?: string;
  howItWorks?: string;
  commonUses: string[];
  benefits: string[];
}

export const equipmentData: EquipmentDetailed[] = [
  {
    id: "digital-xray",
    name: "Digital X-Ray Machine",
    image: "/equipments/Screenshot 2026-07-20 225536.png",
    overview: "Our Digital X-Ray Machine provides fast, accurate, and high-quality diagnostic images to help doctors identify injuries and medical conditions. Unlike traditional film X-rays, digital technology produces clearer images with lower radiation exposure and delivers reports much faster.",
    purpose: "The Digital X-Ray Machine is used to examine the internal structures of the body, including bones, joints, chest, abdomen, and spine.",
    howItWorks: "The machine emits a controlled amount of X-ray radiation that passes through the body. Different tissues absorb different amounts of radiation, creating a detailed digital image that can be viewed instantly by doctors.",
    commonUses: ["Bone fractures", "Joint injuries", "Chest infections", "Pneumonia", "Tuberculosis (TB)", "Arthritis", "Spine problems", "Dental abnormalities", "Kidney stones"],
    benefits: ["High-quality digital images", "Quick examination", "Instant image processing", "Lower radiation exposure", "Easy image storage", "Faster diagnosis", "Better patient care", "Modern digital imaging technology", "Experienced radiology professionals", "Fast reporting", "Accurate diagnosis"]
  },
  {
    id: "xray-tube",
    name: "X-Ray Tube & Vertical Stand",
    image: "/equipments/Screenshot 2026-07-20 225549.png",
    overview: "The X-Ray Tube and Vertical Stand form the core imaging system responsible for producing precise X-ray images. The adjustable stand allows imaging from multiple angles for various body parts.",
    purpose: "To position patients correctly and generate accurate X-ray images safely.",
    howItWorks: "The X-ray tube produces controlled X-rays, while the vertical stand adjusts the position according to the body part being examined.",
    commonUses: ["Chest X-Ray", "Spine X-Ray", "Shoulder X-Ray", "Knee X-Ray", "Skull X-Ray", "Limb X-Ray", "Standing Chest Imaging"],
    benefits: ["Precise positioning", "Comfortable examination", "Better image quality", "Improved diagnostic accuracy", "Safe imaging process"]
  },
  {
    id: "cr-image-reader",
    name: "CR (Computed Radiography) Image Reader",
    image: "/equipments/Screenshot 2026-07-20 225559.png",
    overview: "The Computed Radiography (CR) Image Reader converts X-ray images into digital format, allowing doctors to review images instantly with enhanced clarity.",
    purpose: "To digitize X-ray images for faster diagnosis and electronic storage.",
    howItWorks: "After an X-ray is taken, the imaging plate is inserted into the CR reader. The machine scans the plate and converts it into a high-resolution digital image.",
    commonUses: ["Digital Chest X-Ray", "Bone Imaging", "Orthopedic Diagnosis", "Medical Record Storage", "Image Enhancement"],
    benefits: ["Instant image viewing", "Better image quality", "Digital storage", "Easy sharing with specialists", "Environment-friendly (No film processing)"]
  },
  {
    id: "hematology-analyzer",
    name: "Automated Hematology Analyzer (CBC Machine)",
    image: "/equipments/Screenshot 2026-07-20 225606.png",
    overview: "The Hematology Analyzer is an advanced laboratory instrument that performs Complete Blood Count (CBC) tests quickly and accurately.",
    purpose: "To evaluate the health of blood cells and detect infections, anemia, blood disorders, and other medical conditions.",
    howItWorks: "A small blood sample is placed inside the analyzer, which automatically measures different blood components within minutes.",
    commonUses: ["Complete Blood Count (CBC)", "Anemia diagnosis", "Infection detection", "Dengue monitoring", "Leukemia screening", "Routine health checkups"],
    benefits: ["Fast results", "High accuracy", "Minimal blood sample", "Automated analysis", "Reliable reporting"]
  },
  {
    id: "biochemistry-analyzer",
    name: "Semi-Automatic Biochemistry Analyzer",
    image: "/equipments/Screenshot 2026-07-20 225822.png",
    overview: "The Semi-Automatic Biochemistry Analyzer performs various blood chemistry tests essential for evaluating organ function and overall health.",
    purpose: "To measure chemical substances in blood and body fluids.",
    howItWorks: "The analyzer mixes blood serum with specific reagents and measures color changes to calculate accurate results.",
    commonUses: ["Blood Sugar", "Liver Function Test (LFT)", "Kidney Function Test (KFT)", "Lipid Profile", "Uric Acid", "Calcium", "Total Protein", "Albumin", "Bilirubin", "Cholesterol"],
    benefits: ["Accurate measurements", "Fast processing", "Cost-effective testing", "Reliable reports"]
  },
  {
    id: "electrolyte-analyzer",
    name: "Electrolyte Analyzer",
    image: "/equipments/Screenshot 2026-07-20 225829.png",
    overview: "The Electrolyte Analyzer measures essential minerals that maintain the body's fluid balance and nerve function.",
    purpose: "To monitor electrolyte balance and diagnose metabolic disorders.",
    howItWorks: "A blood sample is analyzed using Ion Selective Electrode (ISE) technology.",
    commonUses: ["Kidney disease", "Dehydration", "Hypertension", "Heart disorders", "ICU monitoring", "Emergency medicine"],
    benefits: ["Rapid testing", "High precision", "Essential for critical care", "Supports emergency diagnosis"]
  },
  {
    id: "centrifuge",
    name: "Laboratory Centrifuge",
    image: "/equipments/Screenshot 2026-07-20 225837.png",
    overview: "A Laboratory Centrifuge separates different components of blood and other body fluids by spinning them at high speed.",
    purpose: "To obtain serum or plasma for laboratory testing.",
    howItWorks: "The machine spins blood samples rapidly, causing heavier cells to settle while plasma or serum remains on top.",
    commonUses: ["Blood sample preparation", "Serum separation", "Plasma separation", "Diagnostic laboratory testing"],
    benefits: ["Faster sample preparation", "Improved test accuracy", "Consistent laboratory results"]
  },
  {
    id: "microscope",
    name: "Binocular Laboratory Microscope",
    image: "/equipments/Screenshot 2026-07-20 225845.png",
    overview: "The Binocular Microscope allows laboratory experts to examine microscopic organisms, cells, parasites, and blood samples.",
    purpose: "To detect infections and study cells that cannot be seen with the naked eye.",
    howItWorks: "Uses a series of lenses to magnify biological samples for visual inspection.",
    commonUses: ["Blood smear examination", "Urine microscopy", "Stool examination", "Parasite detection", "Cell morphology", "Bacterial observation"],
    benefits: ["High magnification", "Clear visualization", "Accurate diagnosis", "Essential pathology tool"]
  },
  {
    id: "incubator",
    name: "Laboratory Incubator",
    image: "/equipments/Screenshot 2026-07-20 230008.png",
    overview: "A Laboratory Incubator maintains a controlled temperature to support the growth of microorganisms and biological samples.",
    purpose: "To grow bacterial cultures under ideal conditions.",
    howItWorks: "Provides a controlled, temperature-stable environment suitable for microbial cultivation.",
    commonUses: ["Microbiology", "Bacterial culture", "Sample preservation", "Diagnostic testing"],
    benefits: ["Stable temperature", "Reliable culture growth", "Accurate microbiological results"]
  },
  {
    id: "hot-air-oven",
    name: "Hot Air Oven",
    image: "/equipments/Screenshot 2026-07-20 230013.png",
    overview: "The Hot Air Oven sterilizes laboratory instruments using dry heat, eliminating harmful microorganisms.",
    purpose: "To maintain sterile laboratory conditions.",
    howItWorks: "Uses dry heat at high temperatures to kill bacteria, viruses, and spores on laboratory equipment.",
    commonUses: ["Sterilization of glassware", "Laboratory instruments", "Metal equipment"],
    benefits: ["Effective sterilization", "Infection prevention", "Safe laboratory environment"]
  },
  {
    id: "weighing-balance",
    name: "Electronic Laboratory Weighing Balance",
    image: "/equipments/Screenshot 2026-07-20 230019.png",
    overview: "This precision balance accurately measures chemicals and laboratory samples.",
    purpose: "To ensure correct reagent preparation and testing accuracy.",
    howItWorks: "Uses highly sensitive electronic load cells to measure mass with extreme precision.",
    commonUses: ["Chemical preparation", "Sample weighing", "Laboratory measurements"],
    benefits: ["High precision", "Consistent measurements", "Improved laboratory accuracy"]
  },
  {
    id: "micropipettes",
    name: "Micropipettes",
    image: "/equipments/Screenshot 2026-07-20 230026.png",
    overview: "Micropipettes are precision laboratory instruments used to transfer extremely small volumes of liquids accurately.",
    purpose: "To handle precise liquid volumes during laboratory testing.",
    howItWorks: "Uses a piston-driven air displacement mechanism to suck and dispense microscopic amounts of liquid.",
    commonUses: ["Biochemistry tests", "Hematology", "Microbiology", "Reagent preparation"],
    benefits: ["Highly accurate", "Easy handling", "Prevents measurement errors"]
  },
  {
    id: "test-tube-rack",
    name: "Test Tube Rack (with Vacutainers)",
    image: "/equipments/Screenshot 2026-07-20 230212.png",
    overview: "Test tube racks securely hold blood collection tubes during sample processing and laboratory testing.",
    purpose: "To organize and protect patient samples.",
    howItWorks: "Provides stable, upright storage slots to prevent spilling and confusion of samples.",
    commonUses: ["Blood sample collection", "Sample storage", "Laboratory workflow"],
    benefits: ["Organized workspace", "Reduced contamination", "Improved efficiency"]
  },
  {
    id: "pipette-tip-box",
    name: "Pipette Tip Box (Tip Rack)",
    image: "/equipments/Screenshot 2026-07-20 230220.png",
    overview: "Pipette tip boxes contain sterile disposable tips used with micropipettes.",
    purpose: "To maintain accuracy and prevent contamination.",
    howItWorks: "Holds disposable tips upright so they can be easily attached to a micropipette without hand contact.",
    commonUses: ["Laboratory testing", "Sample transfer", "Reagent dispensing"],
    benefits: ["Sterile handling", "Improved precision", "Infection control"]
  },
  {
    id: "reagent-bottles",
    name: "Reagent Bottles",
    image: "/equipments/Screenshot 2026-07-20 230229.png",
    overview: "Reagent bottles store chemicals and diagnostic solutions required for laboratory analysis.",
    purpose: "To safely preserve laboratory reagents.",
    howItWorks: "Made of specialized glass or plastic to prevent chemical reactions and degradation from light or air.",
    commonUses: ["Biochemistry testing", "Chemical storage", "Diagnostic assays"],
    benefits: ["Safe storage", "Prevents contamination", "Extends reagent life"]
  },
  {
    id: "sample-tray",
    name: "Sample Tray / Microplate",
    image: "/equipments/Screenshot 2026-07-20 230235.png",
    overview: "Sample trays and microplates hold multiple patient samples, allowing efficient and organized testing.",
    purpose: "To simplify high-volume laboratory testing.",
    howItWorks: "Contains dozens of tiny wells that hold small amounts of samples and reagents for simultaneous testing.",
    commonUses: ["Sample organization", "Biochemistry assays", "Laboratory automation"],
    benefits: ["Faster workflow", "Better organization", "Supports multiple tests simultaneously"]
  }
];
