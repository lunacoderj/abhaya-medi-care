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
  description?: string;
  image?: string;
  purpose?: string[];
  sampleRequired?: string;
  preparation?: string;
  recommendedFor?: string[];
  reportTime?: string;
}

export interface Service {
  id: string;
  name: string;
  iconName: string; 
  image?: string;
  description: string;
  detailedOverview: string;
  preparation: string;
  turnaroundTime: string;
  tests: ServiceTest[];
  process: string;
  clinicalInsight?: string;
}

export const servicesData: Service[] = [
  {
    id: "biochemistry",
    name: "Biochemistry",
    iconName: "TestTube",
    image: "/services/category_1_blood_sugar_1784702756724.png",
    description: "Essential blood chemistry analysis to monitor metabolic function and diabetes.",
    detailedOverview: "Clinical biochemistry involves the biochemical analysis of bodily fluids to determine the health of various organs, assess blood sugar regulation, and monitor kidney function. These tests are the foundation of routine health checkups and disease management.",
    clinicalInsight: "Latest WHO guidelines emphasize the importance of HbA1c for long-term diabetes management, providing a 3-month average of blood glucose, independent of fasting status.",
    preparation: "Fasting of 8-12 hours is strictly required for accurate blood sugar evaluation. Only water is permitted.",
    turnaroundTime: "Same day (within 4-6 hours)",
    process: "A standard venous blood sample is collected from your arm by our trained phlebotomists. The process is quick and minimally invasive.",
    tests: [
      { 
        name: "Blood Sugar (FBS)",
        description: "Measures fasting blood glucose levels. Essential for screening and diagnosing diabetes.",
        purpose: ["Detect prediabetes and diabetes.", "Monitor blood sugar control.", "Evaluate diabetes treatment."],
        sampleRequired: "Blood",
        preparation: "Fast strictly (water only) for 8-12 hours.",
        recommendedFor: ["Family history of diabetes.", "Experiencing extreme thirst or frequent urination.", "Routine health checks over age 35."],
        reportTime: "Same Day"
      },
      { name: "Blood Sugar (PPBS)" },
      { name: "Blood Sugar (RBS)" },
      { name: "GTT" },
      { name: "Serum Creatinine" },
      { name: "Blood Urea" }
    ]
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile",
    iconName: "HeartPulse",
    image: "/services/category_2_lipid_profile_1784702769518.png",
    description: "Comprehensive cholesterol check to assess cardiovascular risk.",
    detailedOverview: "A lipid profile is a broad panel of blood tests that serves as an initial screening tool for abnormalities in lipids, such as cholesterol and triglycerides. These measurements are vital in evaluating your risk of cardiovascular diseases like heart attacks and strokes.",
    clinicalInsight: "The 2026 ACC/AHA guidelines introduced the PREVENT™ equations for lifetime ASCVD risk assessment and highlight advanced markers like Apolipoprotein B (ApoB) and Lipoprotein(a) for identifying 'residual risk' in patients.",
    preparation: "Strict fasting of 10-12 hours is mandatory. Do not consume alcohol for 24 hours prior.",
    turnaroundTime: "Same day (within 6 hours)",
    process: "Blood sample is drawn from a vein. The sample is then centrifuged to extract serum for lipid quantification.",
    tests: [
      { name: "Lipid Profile (Complete Panel)" },
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
    image: "/services/category_3_liver_function_1784702779200.png",
    description: "Evaluates liver health and detects liver diseases or infections.",
    detailedOverview: "Liver function tests (LFTs) are blood tests used to help diagnose and monitor liver disease or damage. The tests measure the levels of certain enzymes and proteins in your blood, assessing how well the liver is performing its normal functions of clearing waste and synthesizing proteins.",
    preparation: "Fasting is not strictly required, but a 10-12 hour fast is generally preferred for the most accurate baseline.",
    turnaroundTime: "Same day (within 6 hours)",
    process: "A standard venous blood draw is performed. The serum is analyzed using advanced photometric biochemistry analyzers.",
    tests: [
      { name: "Liver Function Test (Comprehensive)" },
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
    image: "/services/category_4_haematology_1784702790705.png",
    description: "Evaluates the cells that circulate in blood to detect anemia, infections, and bleeding disorders.",
    detailedOverview: "Haematology involves the diagnosis, treatment, and overall management of people with blood disorders ranging from anemia to blood cancers.",
    preparation: "No special preparation is needed for most haematology tests.",
    turnaroundTime: "Same day (within 2-4 hours)",
    process: "Blood is drawn from a vein and analyzed in automated hematology analyzers.",
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
    image: "/services/category_5_complete_haemogram_1784702826069.png",
    description: "An advanced blood profile providing deeper insights into blood disorders and infections like Dengue.",
    detailedOverview: "A complete haemogram goes beyond a standard CBC to look at specific cellular components and clotting factors.",
    preparation: "No special preparation is required.",
    turnaroundTime: "Same day",
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
    image: "/services/category_6_hormones_1784702836967.png",
    description: "Advanced testing for Thyroid and Fertility hormones, as well as essential Vitamins.",
    detailedOverview: "Endocrinology and hormone testing measure the chemical messengers in your body. Imbalances in thyroid hormones, reproductive hormones, or essential vitamins can cause a myriad of symptoms from fatigue and weight gain to infertility and mood swings.",
    preparation: "Early morning fasting samples (before 9 AM) are strongly recommended as hormone levels fluctuate throughout the day.",
    turnaroundTime: "Next day (within 24-36 hours)",
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
    image: "/services/category_7_serology_1784702848932.png",
    description: "Infectious disease and immunology screening to detect antibodies and autoimmune conditions.",
    detailedOverview: "Serology involves the study of blood serum to detect antibodies generated by the immune system in response to infections or, mistakenly, against the body's own tissues. These tests are essential for diagnosing viral and bacterial diseases.",
    preparation: "No special preparation is required.",
    turnaroundTime: "Same day (within 4-8 hours)",
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
    image: "/services/category_7_serology_1784702848932.png",
    description: "A screening tool for tuberculosis (TB).",
    detailedOverview: "The Mantoux tuberculin skin test (TST) is one method of determining whether a person is infected with Mycobacterium tuberculosis.",
    preparation: "No special preparation.",
    turnaroundTime: "48-72 hours",
    process: "A small amount of fluid is injected just below the skin of the forearm. You must return in 48-72 hours to have the reaction read.",
    tests: [
      { name: "Mantoux Test" }
    ]
  },
  {
    id: "fluid-analysis",
    name: "Fluid Analysis",
    iconName: "TestTube",
    image: "/services/category_9_culture_1784702879845.png",
    description: "Analysis of various bodily fluids to diagnose infections, joint issues, or neural conditions.",
    detailedOverview: "Fluid analysis evaluates the cellular and chemical composition of specific body fluids to diagnose infections, inflammation, or malignancies.",
    preparation: "Preparation varies based on the specific fluid being collected.",
    turnaroundTime: "24-48 hours",
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
    image: "/services/category_8_urine_analysis_1784702859980.png",
    description: "Comprehensive testing of urine to detect urinary tract infections and kidney issues.",
    detailedOverview: "Urinalysis is a non-invasive, highly informative panel of physical, chemical, and microscopic tests. It is used to detect and manage a wide range of disorders, such as urinary tract infections, kidney disease, and diabetes.",
    preparation: "No fasting required. An early morning mid-stream urine sample provides the most concentrated and accurate results.",
    turnaroundTime: "Same day (within 2-4 hours)",
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
    image: "/services/category_9_culture_1784702879845.png",
    description: "Microbial identification and antibiotic susceptibility testing to determine the most effective treatment.",
    detailedOverview: "Culture tests are used to find bacteria or fungi that can cause an infection. Sensitivity testing checks to see what kind of medicine, such as an antibiotic, will work best to treat the illness.",
    preparation: "Sample must be collected before starting antibiotics.",
    turnaroundTime: "48-72 hours",
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
    image: "/services/category_10_sputum_1784702937265.png",
    description: "Analysis of sputum to diagnose respiratory infections like Tuberculosis.",
    detailedOverview: "Sputum analysis is crucial for diagnosing bacterial pneumonia, tuberculosis, and other lower respiratory tract infections.",
    preparation: "Early morning sample is best. Rinse mouth with water before collection.",
    turnaroundTime: "24-48 hours",
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
    image: "/services/category_11_stool_1784702893121.png",
    description: "Stool analysis to detect digestive tract health issues, infections, and parasites.",
    detailedOverview: "Motion tests evaluate stool for occult blood, fat, meat fibers, white blood cells, and sugars to help diagnose conditions affecting the digestive tract.",
    preparation: "No special preparation.",
    turnaroundTime: "Same day",
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
    image: "/services/category_12_ecg_1784702907747.png",
    description: "Diagnostic imaging and cardiac activity monitoring.",
    detailedOverview: "Non-invasive tests for evaluating structural and functional abnormalities of the heart, lungs, and skeletal system.",
    preparation: "Wear comfortable clothing. You may be asked to remove jewelry for X-Rays.",
    turnaroundTime: "Immediate",
    process: "Non-invasive procedures. For X-Rays, you may be asked to remove jewelry or metal objects.",
    tests: [
      { name: "ECG" },
      { name: "X-Rays" }
    ]
  }
];
