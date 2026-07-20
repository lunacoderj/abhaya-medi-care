import { 
  TestTube, 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Microscope,
  Droplets,
  ClipboardList,
  Syringe,
  Dna,
  Bone
} from "lucide-react";

export interface ServiceTest {
  name: string;
}

export interface Service {
  id: string;
  name: string;
  iconName: string; 
  description: string;
  tests: ServiceTest[];
  process: string;
}

export const servicesData: Service[] = [
  {
    id: "biochemistry",
    name: "Biochemistry",
    iconName: "TestTube",
    description: "Essential blood chemistry analysis to monitor metabolic function and diabetes.",
    process: "Blood sample is collected from a vein in your arm. Fasting may be required for certain tests like FBS.",
    tests: [
      { name: "Blood Sugar (FBS)" },
      { name: "Blood Sugar (PPBS)" },
      { name: "Blood Sugar (RBS)" },
      { name: "GTT" },
      { name: "Fasting" },
      { name: "1st Hour" },
      { name: "2nd Hour" },
      { name: "Serum Creatinine" },
      { name: "Blood Urea" }
    ]
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile",
    iconName: "HeartPulse",
    description: "Comprehensive cholesterol check to assess cardiovascular risk.",
    process: "Blood sample is drawn. Strict fasting of 10-12 hours is usually required before the test.",
    tests: [
      { name: "Serum Cholesterol" },
      { name: "Triglycerides" },
      { name: "HDL Cholesterol" },
      { name: "LDL Cholesterol" },
      { name: "VLDL Cholesterol" },
      { name: "Total Proteins" },
      { name: "Serum Albumin" },
      { name: "A/G Ratio" }
    ]
  },
  {
    id: "liver-function-test",
    name: "Liver Function Test",
    iconName: "Activity",
    description: "Evaluates liver health and detects liver diseases or infections.",
    process: "A standard blood draw is performed. No specific fasting is required, but preferred on an empty stomach.",
    tests: [
      { name: "Total Bilirubin" },
      { name: "Direct Bilirubin" },
      { name: "Indirect Bilirubin" },
      { name: "SGPT" },
      { name: "SGOT" },
      { name: "Alkaline Phosphatase" },
      { name: "Serum Uric Acid" },
      { name: "Serum LDH" },
      { name: "CPK (MB)" },
      { name: "CPK (Total)" },
      { name: "Serum Amylase" },
      { name: "Serum Lipase" },
      { name: "Acid Phosphatase" },
      { name: "Electrolytes (Na, K, Cl)" },
      { name: "Serum Calcium" },
      { name: "Serum Phosphorous" },
      { name: "HbA1c" }
    ]
  },
  {
    id: "haematology",
    name: "Haematology",
    iconName: "Droplets",
    description: "Evaluates the cells that circulate in blood to detect anemia, infections, and bleeding disorders.",
    process: "Blood is drawn from a vein. No special preparation is needed.",
    tests: [
      { name: "Complete Blood Count (CBC)" },
      { name: "Hb%" },
      { name: "TC" },
      { name: "DC" },
      { name: "ESR" },
      { name: "TRBC" },
      { name: "AEC" },
      { name: "Platelet Count" },
      { name: "PCV" },
      { name: "MCV" },
      { name: "MCH" },
      { name: "MCHC" },
      { name: "BT" },
      { name: "CT" },
      { name: "LE Cell Phenomenon" },
      { name: "Sickling Test" },
      { name: "Reticulocyte Count" }
    ]
  },
  {
    id: "complete-haemogram",
    name: "Complete Haemogram",
    iconName: "Activity",
    description: "An advanced blood profile providing deeper insights into blood disorders and infections like Dengue.",
    process: "A blood sample is taken. No fasting required unless combined with other specific tests.",
    tests: [
      { name: "Peripheral Smear" },
      { name: "Coombs (Direct)" },
      { name: "Coombs (Indirect/ICT)" },
      { name: "Prothrombin Time (PT)-INR" },
      { name: "APTT" },
      { name: "Smear for MP" },
      { name: "Fibrinogen" },
      { name: "QBC for MP" },
      { name: "QBC MF" },
      { name: "Persiste \"F\"" },
      { name: "Dengue Profile" }
    ]
  },
  {
    id: "hormones",
    name: "Hormones",
    iconName: "Dna",
    description: "Advanced testing for Thyroid and Fertility hormones, as well as essential Vitamins.",
    process: "Blood test. Fasting may be required for vitamins, and early morning samples are preferred for most hormones.",
    tests: [
      { name: "T3" },
      { name: "T4" },
      { name: "TSH" },
      { name: "Free T3" },
      { name: "Free T4" },
      { name: "FSH" },
      { name: "LH" },
      { name: "Prolactin" },
      { name: "Estradiol" },
      { name: "Testosterone (Total/Free)" },
      { name: "Anti DS DNA" },
      { name: "HIV Western Blot" },
      { name: "Vitamin B12 Levels" },
      { name: "Vitamin D3 Levels" },
      { name: "Homocysteine" },
      { name: "Beta HCG Levels" }
    ]
  },
  {
    id: "serology-tests",
    name: "Serology Tests",
    iconName: "Microscope",
    description: "Infectious disease and immunology screening to detect antibodies and autoimmune conditions.",
    process: "Blood sample is collected. No special preparation is needed.",
    tests: [
      { name: "Widal" },
      { name: "VDRL" },
      { name: "Rheumatoid Factor" },
      { name: "ASO Titre" },
      { name: "CRP" },
      { name: "Blood Group & RH Typing" },
      { name: "TPHA" },
      { name: "HBsAg" },
      { name: "HIV I & II Test" },
      { name: "Tri-dot (I & II)" },
      { name: "NACO (I & II) Test" },
      { name: "ANA" },
      { name: "ANF" },
      { name: "Anti HCV" },
      { name: "Anti HAV" }
    ]
  },
  {
    id: "mantoux-test",
    name: "Mantoux Test",
    iconName: "Syringe",
    description: "A screening tool for tuberculosis (TB).",
    process: "A small amount of fluid is injected just below the skin of the forearm. You must return in 48-72 hours to have the reaction read.",
    tests: [
      { name: "Mantoux Test" }
    ]
  },
  {
    id: "fluid-analysis",
    name: "Fluid Analysis",
    iconName: "TestTube",
    description: "Analysis of various bodily fluids to diagnose infections, joint issues, or neural conditions.",
    process: "Fluid is collected via specialized aspiration or sample collection depending on the fluid type.",
    tests: [
      { name: "Semen Analysis" },
      { name: "Synovial Fluid Analysis" },
      { name: "CSF Fluid Analysis" },
      { name: "Pleural Fluid Analysis" },
      { name: "Ascitic Fluid Analysis" }
    ]
  },
  {
    id: "urine-analysis",
    name: "Urine Analysis",
    iconName: "ClipboardList",
    description: "Comprehensive testing of urine to detect urinary tract infections and kidney issues.",
    process: "An early morning mid-stream urine sample is typically required in a sterile container.",
    tests: [
      { name: "Albumin" },
      { name: "Sugar (F)" },
      { name: "Sugar (PP)" },
      { name: "Sugar (R)" },
      { name: "Microscopy" },
      { name: "Leucocytes" },
      { name: "Nitrate" },
      { name: "pH" },
      { name: "Blood" },
      { name: "Specific Gravity" },
      { name: "Ketone Bodies" },
      { name: "Bile Salts" },
      { name: "Bile Pigments" },
      { name: "Urobilinogen" },
      { name: "Bence Jones Proteins" },
      { name: "Pregnancy Test" },
      { name: "Chyle" },
      { name: "Urine M/C" },
      { name: "Protein/Creatinine Ratio" },
      { name: "24 Hrs Urine Proteins" }
    ]
  },
  {
    id: "culture-sensitivity",
    name: "Culture & Sensitivity",
    iconName: "Microscope",
    description: "Microbial identification and antibiotic susceptibility testing to determine the most effective treatment.",
    process: "Sterile sample collection is required before starting any antibiotics. Results take 48-72 hours.",
    tests: [
      { name: "Urine Culture" },
      { name: "Blood Culture (BB/HB)" },
      { name: "Aural Swab Culture" },
      { name: "Pus Culture" },
      { name: "Fluid Culture" },
      { name: "Stool Culture" }
    ]
  },
  {
    id: "sputum",
    name: "Sputum",
    iconName: "TestTube",
    description: "Analysis of sputum to diagnose respiratory infections like Tuberculosis.",
    process: "A deep cough sample is collected in a sterile container, usually early in the morning.",
    tests: [
      { name: "AFB" },
      { name: "Gram's Stain" },
      { name: "Culture" }
    ]
  },
  {
    id: "motion-tests",
    name: "Motion Tests",
    iconName: "ClipboardList",
    description: "Stool analysis to detect digestive tract health issues, infections, and parasites.",
    process: "A small stool sample is collected in a clean, dry container.",
    tests: [
      { name: "Routine" },
      { name: "Ova & Cysts" },
      { name: "Occult Blood" },
      { name: "Reducing Substances" }
    ]
  },
  {
    id: "imaging-cardiology",
    name: "ECG & X-Rays",
    iconName: "Bone",
    description: "Diagnostic imaging and cardiac activity monitoring.",
    process: "Non-invasive procedures. For X-Rays, you may be asked to remove jewelry or metal objects.",
    tests: [
      { name: "ECG" },
      { name: "X-Rays" }
    ]
  }
];
