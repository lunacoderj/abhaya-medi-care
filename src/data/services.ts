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
  description: string;
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
        purpose: [
          "Detect prediabetes and diabetes.",
          "Monitor blood sugar control.",
          "Evaluate diabetes treatment."
        ],
        sampleRequired: "Blood",
        preparation: "Fast strictly (water only) for 8-12 hours.",
        recommendedFor: [
          "Family history of diabetes.",
          "Experiencing extreme thirst or frequent urination.",
          "Routine health checks over age 35."
        ],
        reportTime: "Same Day"
      },
      { 
        name: "Blood Sugar (PPBS)", 
        description: "Measures blood glucose levels exactly 2 hours after a meal to see how the body handles carbohydrates.",
        purpose: ["Assess post-meal glucose spikes.", "Check if insulin response is adequate."],
        sampleRequired: "Blood",
        preparation: "Test exactly 2 hours after finishing a meal.",
        recommendedFor: ["Diabetic patients.", "Pregnant women screening for gestational diabetes."],
        reportTime: "Same Day"
      },
      { 
        name: "Blood Sugar (RBS)", 
        description: "Random blood sugar test taken at any time of day to check for severe diabetic fluctuations.",
        purpose: ["Quick screen for severe hyperglycemia.", "Emergency evaluation."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with sudden diabetic symptoms.", "Emergency room checks."],
        reportTime: "Same Day"
      },
      { 
        name: "GTT", 
        description: "Glucose Tolerance Test measures the body's response to sugar to diagnose prediabetes or gestational diabetes.",
        purpose: ["Confirm diabetes diagnosis.", "Diagnose gestational diabetes."],
        sampleRequired: "Blood",
        preparation: "Fasting required; will consume a glucose drink during the test.",
        recommendedFor: ["Pregnant women at 24-28 weeks.", "Patients with borderline FBS results."],
        reportTime: "Same Day"
      },
      { 
        name: "Serum Creatinine", 
        description: "Measures creatinine levels in the blood. A key indicator of kidney health and filtration efficiency.",
        purpose: [
          "Evaluate overall kidney function.",
          "Monitor existing kidney disease.",
          "Detect kidney damage early."
        ],
        sampleRequired: "Blood",
        preparation: "No fasting required.",
        recommendedFor: [
          "Patients with high blood pressure or diabetes.",
          "Individuals taking kidney-impacting medications.",
          "Routine wellness screening."
        ],
        reportTime: "Same Day"
      },
      { 
        name: "Blood Urea", 
        description: "Measures the amount of urea nitrogen in your blood, another critical marker for kidney and liver health.",
        purpose: ["Evaluate kidney function.", "Check for dehydration.", "Assess liver protein metabolism."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with kidney disease.", "Individuals with heart failure or dehydration."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile",
    iconName: "HeartPulse",
    description: "Comprehensive cholesterol check to assess cardiovascular risk.",
    detailedOverview: "A lipid profile is a broad panel of blood tests that serves as an initial screening tool for abnormalities in lipids, such as cholesterol and triglycerides. These measurements are vital in evaluating your risk of cardiovascular diseases like heart attacks and strokes.",
    clinicalInsight: "The 2026 ACC/AHA guidelines introduced the PREVENT™ equations for lifetime ASCVD risk assessment and highlight advanced markers like Apolipoprotein B (ApoB) and Lipoprotein(a) for identifying 'residual risk' in patients.",
    preparation: "Strict fasting of 10-12 hours is mandatory. Do not consume alcohol for 24 hours prior.",
    turnaroundTime: "Same day (within 6 hours)",
    process: "Blood sample is drawn from a vein. The sample is then centrifuged to extract serum for lipid quantification.",
    tests: [
      { 
        name: "Lipid Profile (Complete Panel)", 
        description: "A complete panel measuring cholesterol and triglycerides. Used to assess cardiovascular disease risk.",
        purpose: [
          "Measure Total, HDL, LDL cholesterol, and Triglycerides.",
          "Evaluate heart attack and stroke risk.",
          "Monitor effectiveness of cholesterol medications."
        ],
        sampleRequired: "Blood",
        preparation: "Strict fasting for 10-12 hours; no alcohol for 24 hours.",
        recommendedFor: [
          "Routine heart health screening (Age 20+).",
          "Family history of heart disease or obesity.",
          "Patients managing high cholesterol."
        ],
        reportTime: "Same Day"
      },
      { 
        name: "Serum Cholesterol", 
        description: "Measures the total amount of cholesterol in your blood, giving a broad view of your lipid health.",
        purpose: ["Baseline assessment of total blood fat."],
        sampleRequired: "Blood",
        preparation: "Strict fasting for 10-12 hours.",
        recommendedFor: ["Routine heart health screening.", "Monitoring dietary changes."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "liver-function-test",
    name: "Liver Function Test",
    iconName: "Activity",
    description: "Evaluates liver health and detects liver diseases or infections.",
    detailedOverview: "Liver function tests (LFTs) are blood tests used to help diagnose and monitor liver disease or damage. The tests measure the levels of certain enzymes and proteins in your blood, assessing how well the liver is performing its normal functions of clearing waste and synthesizing proteins.",
    preparation: "Fasting is not strictly required, but a 10-12 hour fast is generally preferred for the most accurate baseline.",
    turnaroundTime: "Same day (within 6 hours)",
    process: "A standard venous blood draw is performed. The serum is analyzed using advanced photometric biochemistry analyzers.",
    tests: [
      { 
        name: "Liver Function Test (Comprehensive)", 
        description: "Measures liver enzymes, proteins, and bilirubin. Evaluates how well the liver is clearing waste and functioning.",
        purpose: [
          "Screen for liver infections like Hepatitis.",
          "Monitor liver diseases (e.g., fatty liver).",
          "Assess liver damage from medications or toxins."
        ],
        sampleRequired: "Blood",
        preparation: "No strict fasting, but 10-12 hours preferred.",
        recommendedFor: [
          "Experiencing jaundice, fatigue, or abdominal pain.",
          "Heavy alcohol users.",
          "Patients on long-term medications."
        ],
        reportTime: "Same Day"
      },
      { 
        name: "Total Bilirubin", 
        description: "Measures all bilirubin in the blood. High levels cause jaundice and indicate liver or gallbladder issues.",
        purpose: ["Diagnose jaundice.", "Monitor progression of liver disease."],
        sampleRequired: "Blood",
        preparation: "No strict fasting required.",
        recommendedFor: ["Patients with yellowing of skin or eyes."],
        reportTime: "Same Day"
      },
      { 
        name: "SGPT & SGOT", 
        description: "Liver enzymes (ALT and AST). High levels strongly indicate active liver inflammation or damage.",
        purpose: ["Detect acute liver damage.", "Monitor chronic hepatitis or cirrhosis."],
        sampleRequired: "Blood",
        preparation: "No strict fasting required.",
        recommendedFor: ["Patients on liver-taxing medications.", "Heavy alcohol users."],
        reportTime: "Same Day"
      },
      { 
        name: "Alkaline Phosphatase", 
        description: "An enzyme related to the bile ducts; elevated levels often suggest bile duct obstruction or bone disease.",
        purpose: ["Detect blocked bile ducts.", "Screen for bone disorders."],
        sampleRequired: "Blood",
        preparation: "No strict fasting required.",
        recommendedFor: ["Patients with severe abdominal pain or bone pain."],
        reportTime: "Same Day"
      },
      { 
        name: "HbA1c", 
        description: "Provides a 3-month average of blood sugar levels, the gold standard for long-term diabetes management.",
        purpose: ["Monitor long-term diabetes control.", "Screen for prediabetes."],
        sampleRequired: "Blood",
        preparation: "No fasting required.",
        recommendedFor: ["All diabetic patients.", "Routine health screenings."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "haematology",
    name: "Haematology",
    iconName: "Droplets",
    description: "Evaluates the cells that circulate in blood to detect anemia, infections, and bleeding disorders.",
    detailedOverview: "Haematology testing looks at the cellular components of your blood. By analyzing red blood cells, white blood cells, and platelets, we can diagnose a vast array of conditions ranging from simple vitamin deficiencies and bacterial infections to complex blood disorders.",
    preparation: "No special preparation or fasting is required.",
    turnaroundTime: "Same day (within 2-4 hours)",
    process: "Blood is drawn from a vein using an EDTA tube to prevent clotting, then analyzed using automated cell counters.",
    tests: [
      { 
        name: "Complete Blood Count (CBC)", 
        description: "A broad screening panel that evaluates overall health and detects a wide range of disorders, including anemia and leukemia.",
        purpose: ["Diagnose anemia.", "Detect infections.", "Monitor blood disorders."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Routine checkups.", "Patients with fatigue or fever."],
        reportTime: "Same Day"
      },
      { 
        name: "ESR", 
        description: "Erythrocyte Sedimentation Rate is a non-specific test that helps detect inflammation associated with infections, cancers, and autoimmune diseases.",
        purpose: ["Detect acute or chronic inflammation.", "Monitor autoimmune diseases."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with joint pain or unexplained fevers."],
        reportTime: "Same Day"
      },
      { 
        name: "Platelet Count", 
        description: "Measures the number of platelets, which are critical for blood clotting and wound healing.",
        purpose: ["Diagnose bleeding disorders.", "Monitor dengue fever recovery."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with unexplained bruising.", "Dengue suspects."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "complete-haemogram",
    name: "Complete Haemogram",
    iconName: "Activity",
    description: "An advanced blood profile providing deeper insights into blood disorders and infections like Dengue.",
    detailedOverview: "A step beyond a basic CBC, the Complete Haemogram includes specialized assays and smear reviews to deeply investigate blood morphology, coagulation pathways, and specific endemic infections like Malaria and Dengue.",
    preparation: "No fasting required unless combined with biochemical tests.",
    turnaroundTime: "Same day (within 6-8 hours)",
    process: "Involves both automated analysis and manual microscopic review of a stained blood smear by a pathologist.",
    tests: [
      { 
        name: "Peripheral Smear", 
        description: "A manual microscopic examination of blood cells to check for abnormalities in size, shape, and color.",
        purpose: ["Investigate unexplained anemia.", "Diagnose blood cancers."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with abnormal CBC results."],
        reportTime: "Same Day"
      },
      { 
        name: "Dengue Profile", 
        description: "A comprehensive panel (NS1 Antigen, IgM, IgG) to detect and stage Dengue fever virus infection.",
        purpose: ["Confirm Dengue fever.", "Determine if infection is recent or past."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with high fever, body aches, and rash.", "Endemic outbreak screenings."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "hormones",
    name: "Hormones",
    iconName: "Dna",
    description: "Advanced testing for Thyroid and Fertility hormones, as well as essential Vitamins.",
    detailedOverview: "Endocrinology and hormone testing measure the chemical messengers in your body. Imbalances in thyroid hormones, reproductive hormones, or essential vitamins can cause a myriad of symptoms from fatigue and weight gain to infertility and mood swings.",
    preparation: "Early morning fasting samples (before 9 AM) are strongly recommended as hormone levels fluctuate throughout the day.",
    turnaroundTime: "Next day (within 24-36 hours)",
    process: "Blood is drawn into serum separator tubes. Specialized chemiluminescence immunoassays (CLIA) are used for highly sensitive detection.",
    tests: [
      { 
        name: "Thyroid Profile (T3, T4, TSH)", 
        description: "Comprehensive thyroid function evaluation.",
        purpose: ["Diagnose hypothyroidism and hyperthyroidism.", "Monitor thyroid medication dosage."],
        sampleRequired: "Blood",
        preparation: "Morning fasting sample preferred.",
        recommendedFor: ["Patients with unexplained weight changes.", "Fatigue and hair loss sufferers."],
        reportTime: "Next Day"
      },
      { 
        name: "Vitamin D3 & B12", 
        description: "Essential vitamins for bone health and nerve function.",
        purpose: ["Detect vitamin deficiencies.", "Assess cause of neuropathy or fatigue."],
        sampleRequired: "Blood",
        preparation: "Fasting preferred.",
        recommendedFor: ["Individuals with low sun exposure.", "Vegans and vegetarians."],
        reportTime: "Next Day"
      }
    ]
  },
  {
    id: "serology-tests",
    name: "Serology Tests",
    iconName: "Microscope",
    description: "Infectious disease and immunology screening to detect antibodies and autoimmune conditions.",
    detailedOverview: "Serology involves the study of blood serum to detect antibodies generated by the immune system in response to infections or, mistakenly, against the body's own tissues. These tests are essential for diagnosing viral and bacterial diseases.",
    preparation: "No special preparation is required.",
    turnaroundTime: "Same day (within 4-8 hours)",
    process: "Blood is collected in a plain tube, clotted, and centrifuged. The clear serum is then reacted with specific antigens to detect antibodies.",
    tests: [
      { 
        name: "Widal Test", 
        description: "A traditional agglutination test used for the diagnosis of Enteric or Typhoid fever.",
        purpose: ["Diagnose Typhoid fever.", "Determine severity of infection."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Patients with prolonged high fever and abdominal pain."],
        reportTime: "Same Day"
      },
      { 
        name: "HIV I & II Test", 
        description: "Rapid screening test to detect antibodies against the Human Immunodeficiency Virus types 1 and 2.",
        purpose: ["Screen for HIV infection.", "Pre-surgical screening."],
        sampleRequired: "Blood",
        preparation: "No preparation required.",
        recommendedFor: ["Routine STD screening.", "Pre-employment or pre-surgical requirements."],
        reportTime: "Same Day"
      }
    ]
  },
  {
    id: "urine-analysis",
    name: "Urine Analysis",
    iconName: "ClipboardList",
    description: "Comprehensive testing of urine to detect urinary tract infections and kidney issues.",
    detailedOverview: "Urinalysis is a non-invasive, highly informative panel of physical, chemical, and microscopic tests. It is used to detect and manage a wide range of disorders, such as urinary tract infections, kidney disease, and diabetes.",
    preparation: "No fasting required. An early morning mid-stream urine sample provides the most concentrated and accurate results.",
    turnaroundTime: "Same day (within 2-4 hours)",
    process: "You will provide a mid-stream urine sample in a sterile container. The lab performs a dipstick chemical analysis followed by microscopic examination of the sediment.",
    tests: [
      { 
        name: "Routine Urine Analysis", 
        description: "Detects UTIs, kidney disease, and diabetes through urine chemistry and microscopy.",
        purpose: ["Screen for urinary tract infections.", "Detect kidney problems early.", "Check for sugar in urine."],
        sampleRequired: "Urine",
        preparation: "Collect early morning mid-stream sample.",
        recommendedFor: ["Patients with burning sensation during urination.", "Diabetics."],
        reportTime: "Same Day"
      },
      { 
        name: "Urine Culture & Sensitivity", 
        description: "Precisely identifies the bacteria causing a UTI and tests antibiotic sensitivity.",
        purpose: ["Identify specific infection-causing bacteria.", "Determine effective antibiotics."],
        sampleRequired: "Urine",
        preparation: "Sterile container required. Collect mid-stream.",
        recommendedFor: ["Patients with recurrent UTIs.", "Individuals not responding to standard antibiotics."],
        reportTime: "48-72 Hours"
      }
    ]
  }
];
