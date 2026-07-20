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
      { name: "Blood Sugar (FBS)", description: "Measures blood glucose levels after an overnight fast. Crucial for diagnosing and monitoring diabetes." },
      { name: "Blood Sugar (PPBS)", description: "Measures blood glucose levels exactly 2 hours after a meal to see how the body handles carbohydrates." },
      { name: "Blood Sugar (RBS)", description: "Random blood sugar test taken at any time of day to check for severe diabetic fluctuations." },
      { name: "GTT", description: "Glucose Tolerance Test measures the body's response to sugar to diagnose prediabetes or gestational diabetes." },
      { name: "Fasting", description: "Baseline glucose reading before consuming the glucose drink for the GTT." },
      { name: "1st Hour", description: "Glucose reading taken one hour after consuming the glucose drink." },
      { name: "2nd Hour", description: "Glucose reading taken two hours after consuming the glucose drink to ensure insulin is working properly." },
      { name: "Serum Creatinine", description: "A key indicator of kidney function. High levels suggest the kidneys aren't filtering waste efficiently." },
      { name: "Blood Urea", description: "Measures the amount of urea nitrogen in your blood, another critical marker for kidney and liver health." }
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
      { name: "Serum Cholesterol", description: "Measures the total amount of cholesterol in your blood, giving a broad view of your lipid health." },
      { name: "Triglycerides", description: "Measures a type of fat in the blood. High levels can increase the risk of heart disease, especially in women." },
      { name: "HDL Cholesterol", description: "High-Density Lipoprotein, known as the 'good' cholesterol because it helps remove other forms of cholesterol from your bloodstream." },
      { name: "LDL Cholesterol", description: "Low-Density Lipoprotein, the 'bad' cholesterol that can build up in the walls of your blood vessels." },
      { name: "VLDL Cholesterol", description: "Very-Low-Density Lipoprotein, which primarily carries triglycerides. High levels are linked to plaque buildup in arteries." },
      { name: "Total Proteins", description: "Measures the total amount of two classes of proteins found in the fluid portion of your blood: albumin and globulin." },
      { name: "Serum Albumin", description: "A protein made by the liver. Low levels can indicate liver or kidney disease." },
      { name: "A/G Ratio", description: "The calculated ratio of albumin to globulin, used to detect liver disease, kidney disease, or immune disorders." }
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
      { name: "Total Bilirubin", description: "Measures all bilirubin in the blood. High levels cause jaundice and indicate liver or gallbladder issues." },
      { name: "Direct Bilirubin", description: "Measures conjugated bilirubin, which the liver has processed. Helps narrow down the cause of jaundice." },
      { name: "Indirect Bilirubin", description: "Unconjugated bilirubin that hasn't passed through the liver. Elevated levels can indicate red blood cell destruction." },
      { name: "SGPT", description: "Serum Glutamic Pyruvic Transaminase (ALT). An enzyme found mostly in the liver; high levels indicate liver damage." },
      { name: "SGOT", description: "Serum Glutamic Oxaloacetic Transaminase (AST). An enzyme found in the liver, heart, and muscles." },
      { name: "Alkaline Phosphatase", description: "An enzyme related to the bile ducts; elevated levels often suggest bile duct obstruction or bone disease." },
      { name: "Serum Uric Acid", description: "High levels can cause gout or kidney stones, reflecting poor purine metabolism." },
      { name: "Serum LDH", description: "Lactate Dehydrogenase is a marker of tissue damage occurring anywhere in the body." },
      { name: "CPK (MB)", description: "Creatine Phosphokinase-MB is an enzyme found primarily in heart muscle, used to detect heart attacks." },
      { name: "CPK (Total)", description: "Measures total CPK in the blood, indicating muscle damage or inflammation." },
      { name: "Serum Amylase", description: "An enzyme that helps digest carbohydrates. High levels indicate pancreatic inflammation (pancreatitis)." },
      { name: "Serum Lipase", description: "An enzyme that breaks down fats. It is a highly specific marker for acute pancreatitis." },
      { name: "Acid Phosphatase", description: "An enzyme used historically to detect prostate cancer, though now largely replaced by PSA testing." },
      { name: "Electrolytes (Na, K, Cl)", description: "Measures sodium, potassium, and chloride to assess hydration, kidney function, and blood pH." },
      { name: "Serum Calcium", description: "Measures calcium levels for bone health, kidney disease, or parathyroid gland function." },
      { name: "Serum Phosphorous", description: "Works with calcium to build strong bones. Imbalances indicate kidney or nutritional issues." },
      { name: "HbA1c", description: "Provides a 3-month average of blood sugar levels, the gold standard for long-term diabetes management." }
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
      { name: "Complete Blood Count (CBC)", description: "A broad screening panel that evaluates overall health and detects a wide range of disorders, including anemia and leukemia." },
      { name: "Hb%", description: "Hemoglobin level. Low levels indicate anemia, while high levels can suggest lung disease or dehydration." },
      { name: "TC", description: "Total Count of white blood cells. A high count usually indicates fighting an infection." },
      { name: "DC", description: "Differential Count breaks down the types of white blood cells (neutrophils, lymphocytes, etc.) to pinpoint infection types." },
      { name: "ESR", description: "Erythrocyte Sedimentation Rate is a non-specific test that helps detect inflammation associated with infections, cancers, and autoimmune diseases." },
      { name: "TRBC", description: "Total Red Blood Cell count. Measures the actual number of red blood cells in a given volume of blood." },
      { name: "AEC", description: "Absolute Eosinophil Count helps diagnose allergic diseases, parasitic infections, and certain medical conditions." },
      { name: "Platelet Count", description: "Measures the number of platelets, which are critical for blood clotting and wound healing." },
      { name: "PCV", description: "Packed Cell Volume (Hematocrit) measures the proportion of blood volume that is occupied by red blood cells." },
      { name: "MCV", description: "Mean Corpuscular Volume measures the average size of your red blood cells. Helps categorize types of anemia." },
      { name: "MCH", description: "Mean Corpuscular Hemoglobin measures the average amount of hemoglobin inside a single red blood cell." },
      { name: "MCHC", description: "Mean Corpuscular Hemoglobin Concentration measures the concentration of hemoglobin in a given volume of red blood cells." },
      { name: "BT", description: "Bleeding Time evaluates how fast small blood vessels in the skin close to stop bleeding." },
      { name: "CT", description: "Clotting Time measures how long it takes for your blood to form a clot." },
      { name: "LE Cell Phenomenon", description: "A historical test used to aid in the diagnosis of Systemic Lupus Erythematosus (SLE)." },
      { name: "Sickling Test", description: "Screens for Sickle Cell trait or disease by observing red blood cells under reduced oxygen tension." },
      { name: "Reticulocyte Count", description: "Measures the percentage of newly produced (immature) red blood cells, indicating how well bone marrow is functioning." }
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
      { name: "Peripheral Smear", description: "A manual microscopic examination of blood cells to check for abnormalities in size, shape, and color." },
      { name: "Coombs (Direct)", description: "Used to test for autoimmune hemolytic anemia, checking if antibodies are attached directly to red blood cells." },
      { name: "Coombs (Indirect/ICT)", description: "Checks for unattached antibodies in the bloodstream, often used in prenatal testing or before a blood transfusion." },
      { name: "Prothrombin Time (PT)-INR", description: "Measures how long it takes for blood to clot. Crucial for monitoring patients on blood-thinning medications like Warfarin." },
      { name: "APTT", description: "Activated Partial Thromboplastin Time evaluates the intrinsic coagulation pathway. Used to monitor Heparin therapy." },
      { name: "Smear for MP", description: "Microscopic examination of a blood smear specifically searching for Malaria Parasites." },
      { name: "Fibrinogen", description: "Measures a protein essential for blood clot formation. Abnormal levels can indicate bleeding or thrombotic disorders." },
      { name: "QBC for MP", description: "Quantitative Buffy Coat test is a highly sensitive fluorescent staining technique to rapidly detect Malaria." },
      { name: "QBC MF", description: "QBC test specifically looking for Microfilaria parasites in the blood." },
      { name: "Persiste \"F\"", description: "Measures fetal hemoglobin (HbF) levels, which can be elevated in conditions like Thalassemia." },
      { name: "Dengue Profile", description: "A comprehensive panel (NS1 Antigen, IgM, IgG) to detect and stage Dengue fever virus infection." }
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
      { name: "T3", description: "Triiodothyronine is a thyroid hormone that controls metabolism. Elevated levels suggest hyperthyroidism." },
      { name: "T4", description: "Thyroxine is the main hormone produced by the thyroid gland. Used to evaluate thyroid function." },
      { name: "TSH", description: "Thyroid Stimulating Hormone is produced by the pituitary gland to signal the thyroid. The most sensitive marker for thyroid screening." },
      { name: "Free T3", description: "Measures the unbound, active form of T3 in the blood for a more accurate assessment of thyroid function." },
      { name: "Free T4", description: "Measures the active form of T4, helping distinguish between true thyroid disease and protein-binding abnormalities." },
      { name: "FSH", description: "Follicle Stimulating Hormone controls the menstrual cycle in women and sperm production in men." },
      { name: "LH", description: "Luteinizing Hormone triggers ovulation in women and testosterone production in men." },
      { name: "Prolactin", description: "A hormone that stimulates milk production. High levels in non-pregnant individuals can indicate pituitary tumors." },
      { name: "Estradiol", description: "The most important form of estrogen. Measured to evaluate ovarian function and menopause." },
      { name: "Testosterone (Total/Free)", description: "The primary male sex hormone. Tested to evaluate erectile dysfunction, infertility, or PCOS in women." },
      { name: "Anti DS DNA", description: "An autoantibody test highly specific for diagnosing Systemic Lupus Erythematosus (SLE)." },
      { name: "HIV Western Blot", description: "A highly accurate confirmatory test for HIV following a positive screening test." },
      { name: "Vitamin B12 Levels", description: "Crucial for nerve function and DNA synthesis. Deficiency can cause irreversible neurological damage and anemia." },
      { name: "Vitamin D3 Levels", description: "Essential for bone health and immune function. Deficiency is extremely common due to low sun exposure." },
      { name: "Homocysteine", description: "An amino acid. High levels are a risk factor for cardiovascular disease and stroke." },
      { name: "Beta HCG Levels", description: "The pregnancy hormone. Quantitatively measures exact levels to monitor pregnancy viability or certain tumors." }
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
      { name: "Widal", description: "A traditional agglutination test used for the diagnosis of Enteric or Typhoid fever." },
      { name: "VDRL", description: "Venereal Disease Research Laboratory test, a screening tool for Syphilis." },
      { name: "Rheumatoid Factor", description: "Detects autoantibodies associated with Rheumatoid Arthritis and other autoimmune diseases." },
      { name: "ASO Titre", description: "Anti-Streptolysin O test checks for a recent infection with Group A Streptococcus bacteria." },
      { name: "CRP", description: "C-Reactive Protein is a highly sensitive marker for acute inflammation in the body." },
      { name: "Blood Group & RH Typing", description: "Determines your ABO blood type and Rh factor (positive or negative). Essential before surgeries or transfusions." },
      { name: "TPHA", description: "Treponema Pallidum Hemagglutination Assay is a specific confirmatory test for Syphilis." },
      { name: "HBsAg", description: "Hepatitis B Surface Antigen. A positive result indicates an active Hepatitis B virus infection." },
      { name: "HIV I & II Test", description: "Rapid screening test to detect antibodies against the Human Immunodeficiency Virus types 1 and 2." },
      { name: "Tri-dot (I & II)", description: "A rapid visual test for the differential detection of HIV-1 and HIV-2 antibodies." },
      { name: "NACO (I & II) Test", description: "Standardized HIV screening protocol adhering to the National AIDS Control Organisation guidelines." },
      { name: "ANA", description: "Antinuclear Antibodies test screens for autoimmune disorders like Lupus by detecting antibodies that attack the cell nucleus." },
      { name: "ANF", description: "Antinuclear Factor, largely synonymous with ANA, used to screen for systemic rheumatic diseases." },
      { name: "Anti HCV", description: "Detects antibodies against the Hepatitis C virus, indicating current or past infection." },
      { name: "Anti HAV", description: "Detects antibodies to Hepatitis A, distinguishing between acute infection (IgM) and past exposure/immunity (IgG)." }
    ]
  },
  {
    id: "mantoux-test",
    name: "Mantoux Test",
    iconName: "Syringe",
    description: "A screening tool for tuberculosis (TB) infection.",
    detailedOverview: "The Mantoux tuberculin skin test (TST) is the standard method of determining whether a person is infected with Mycobacterium tuberculosis. It measures the delayed hypersensitivity immune reaction of the skin.",
    preparation: "No preparation required. Ensure the testing area on the forearm is clean and free of lotions.",
    turnaroundTime: "48-72 hours (Requires a return visit for reading)",
    process: "A small amount of tuberculin purified protein derivative (PPD) is injected intradermally into the inner surface of the forearm. The patient must return in 48-72 hours to have a medical professional measure the induration (raised bump).",
    tests: [
      { name: "Mantoux Test", description: "The intradermal injection and subsequent physical measurement of the skin reaction to screen for latent or active Tuberculosis." }
    ]
  },
  {
    id: "fluid-analysis",
    name: "Fluid Analysis",
    iconName: "TestTube",
    description: "Analysis of various bodily fluids to diagnose infections, joint issues, or neural conditions.",
    detailedOverview: "Fluid analysis involves macroscopic, microscopic, and biochemical evaluation of specialized bodily fluids (other than blood or urine). These fluids act as protective cushions or lubricants, and analyzing them provides direct insight into local organ or joint pathologies.",
    preparation: "Preparation varies heavily by the specific fluid. Some require abstinence (semen), others require specialized clinical aspiration (CSF).",
    turnaroundTime: "24-48 hours",
    process: "Fluids are collected either by the patient (e.g., semen) or via a clinical aspiration procedure by a doctor (e.g., lumbar puncture, thoracentesis). The lab then analyzes cell counts, proteins, and cultures.",
    tests: [
      { name: "Semen Analysis", description: "Evaluates sperm count, motility, and morphology to assess male fertility." },
      { name: "Synovial Fluid Analysis", description: "Joint fluid analysis to diagnose the cause of joint inflammation, such as gout, infection, or arthritis." },
      { name: "CSF Fluid Analysis", description: "Cerebrospinal fluid analysis helps diagnose meningitis, encephalitis, or central nervous system bleeding." },
      { name: "Pleural Fluid Analysis", description: "Evaluates fluid accumulated around the lungs to determine if it is transudative (heart failure) or exudative (infection/cancer)." },
      { name: "Ascitic Fluid Analysis", description: "Evaluates fluid accumulated in the abdominal cavity, often used to diagnose cirrhosis complications or peritonitis." }
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
      { name: "Albumin", description: "Detects protein in the urine, an early sign of kidney damage, especially in diabetics." },
      { name: "Sugar (F)", description: "Checks for glucose in fasting urine, indicating high blood sugar spilling over." },
      { name: "Sugar (PP)", description: "Checks for glucose in post-prandial (after meal) urine." },
      { name: "Sugar (R)", description: "Checks for glucose in a random urine sample." },
      { name: "Microscopy", description: "Microscopic evaluation to detect red/white blood cells, epithelial cells, crystals, and bacteria." },
      { name: "Leucocytes", description: "Presence of white blood cells in urine, indicating urinary tract inflammation or infection." },
      { name: "Nitrate", description: "Many bacteria convert urinary nitrates to nitrites. A positive test strongly suggests a bacterial UTI." },
      { name: "pH", description: "Measures the acidity of urine. Abnormal pH can promote the formation of kidney stones." },
      { name: "Blood", description: "Detects hidden (occult) blood in the urine, which can result from stones, trauma, or tumors." },
      { name: "Specific Gravity", description: "Measures urine concentration, showing how well the kidneys are balancing water content." },
      { name: "Ketone Bodies", description: "Products of fat metabolism. Present during diabetic ketoacidosis or prolonged fasting." },
      { name: "Bile Salts", description: "Indicates liver disease or bile duct obstruction if found in urine." },
      { name: "Bile Pigments", description: "Presence of bilirubin in urine, an early indicator of liver dysfunction." },
      { name: "Urobilinogen", description: "Elevated levels can indicate liver diseases like hepatitis or hemolytic anemia." },
      { name: "Bence Jones Proteins", description: "Specific proteins found in urine that are highly indicative of Multiple Myeloma." },
      { name: "Pregnancy Test", description: "Detects the presence of Human Chorionic Gonadotropin (hCG) hormone in urine." },
      { name: "Chyle", description: "Tests for lymphatic fluid in urine, which makes it appear milky white." },
      { name: "Urine M/C", description: "Microscopy and Culture to precisely identify the bacteria causing a UTI and test antibiotic sensitivity." },
      { name: "Protein/Creatinine Ratio", description: "A spot urine test to estimate 24-hour protein excretion, used to monitor kidney disease." },
      { name: "24 Hrs Urine Proteins", description: "Requires collecting all urine over a 24-hour period to accurately quantify total protein loss." }
    ]
  },
  {
    id: "culture-sensitivity",
    name: "Culture & Sensitivity",
    iconName: "Microscope",
    description: "Microbial identification and antibiotic susceptibility testing to determine the most effective treatment.",
    detailedOverview: "Culture and sensitivity testing is the gold standard for diagnosing bacterial and fungal infections. The lab incubates the sample to grow the pathogen, identifies the specific organism, and then tests a panel of antibiotics against it to tell your doctor exactly which medicine will work best.",
    preparation: "Samples MUST be collected before starting any antibiotic therapy. Ensure sterile collection to avoid contamination.",
    turnaroundTime: "48-72 hours (Requires incubation time for bacterial growth)",
    process: "The sample is streaked onto agar plates and incubated at body temperature. Any growing colonies are identified using biochemical tests, and antibiotic discs are applied to determine susceptibility.",
    tests: [
      { name: "Urine Culture", description: "Identifies the specific bacteria causing a urinary tract infection and determines the best antibiotic." },
      { name: "Blood Culture (BB/HB)", description: "Detects severe systemic infections (septicemia) where bacteria have entered the bloodstream." },
      { name: "Aural Swab Culture", description: "Identifies pathogens causing ear infections from a swab of the ear canal." },
      { name: "Pus Culture", description: "Identifies the bacteria causing wound infections or abscesses." },
      { name: "Fluid Culture", description: "Culturing sterile body fluids (like CSF or pleural fluid) to detect severe deep-tissue infections." },
      { name: "Stool Culture", description: "Identifies pathogenic bacteria in the digestive tract causing severe diarrhea, such as Salmonella or Shigella." }
    ]
  },
  {
    id: "sputum",
    name: "Sputum",
    iconName: "TestTube",
    description: "Analysis of sputum to diagnose respiratory infections like Tuberculosis.",
    detailedOverview: "Sputum is the thick mucus coughed up from the lower respiratory tract (lungs and bronchi). Analyzing sputum helps diagnose bacterial pneumonias, bronchitis, and most importantly, pulmonary Tuberculosis.",
    preparation: "Rinse mouth with water before collection. Do not collect saliva; a deep cough from the lungs is required. Early morning samples are best.",
    turnaroundTime: "24-48 hours (TB cultures can take weeks)",
    process: "The patient coughs deeply into a sterile container. The lab performs various staining techniques to visually identify bacteria under a microscope, followed by culture.",
    tests: [
      { name: "AFB", description: "Acid-Fast Bacillus smear. A rapid microscopic staining test used to detect the bacteria that causes Tuberculosis." },
      { name: "Gram's Stain", description: "A fundamental staining method used to broadly categorize bacteria into Gram-positive or Gram-negative, guiding initial antibiotic choice." },
      { name: "Culture", description: "Growing the sputum sample on special media to definitively identify the respiratory pathogen and test antibiotic resistance." }
    ]
  },
  {
    id: "motion-tests",
    name: "Motion Tests",
    iconName: "ClipboardList",
    description: "Stool analysis to detect digestive tract health issues, infections, and parasites.",
    detailedOverview: "Also known as stool or feces tests, this panel evaluates the physical, chemical, and microscopic properties of stool. It is crucial for diagnosing gastrointestinal disorders, parasitic infections, poor nutrient absorption, and hidden bleeding in the digestive tract.",
    preparation: "Avoid taking antidiarrheal medications or barium before the test. Collect the sample in a clean, dry, leak-proof container without mixing it with urine.",
    turnaroundTime: "Same day (within 4-6 hours)",
    process: "The lab performs a gross visual inspection, chemical tests for blood or sugars, and a microscopic examination for parasite eggs or cysts.",
    tests: [
      { name: "Routine", description: "General macroscopic and microscopic evaluation of stool consistency, color, and presence of undigested food or cells." },
      { name: "Ova & Cysts", description: "Microscopic examination specifically searching for the eggs (ova) or cysts of intestinal parasites and worms." },
      { name: "Occult Blood", description: "Chemical test to detect hidden (occult) blood in the stool, a screening tool for colorectal cancer or gastrointestinal bleeding." },
      { name: "Reducing Substances", description: "Checks for unabsorbed sugars in the stool, helping diagnose conditions like lactose intolerance." }
    ]
  },
  {
    id: "imaging-cardiology",
    name: "ECG & X-Rays",
    iconName: "Bone",
    description: "Diagnostic imaging and cardiac activity monitoring.",
    detailedOverview: "This department handles foundational anatomical and physiological diagnostics. Electrocardiograms monitor the electrical rhythm of the heart, while X-Rays provide clear internal imaging of bones, lungs, and the chest cavity.",
    preparation: "For ECG: Wear loose clothing; avoid applying lotions to the chest. For X-Rays: You will need to remove metal objects, jewelry, and wear a hospital gown if necessary.",
    turnaroundTime: "Immediate (Films/Graphs provided within 30 minutes, Radiologist report later same day)",
    process: "For ECG, electrodes are painlessly attached to your chest and limbs. For X-Rays, you will be positioned by a technician between the X-ray machine and the film plate for a brief second.",
    tests: [
      { name: "ECG", description: "Electrocardiogram records the electrical signals in your heart. Used to detect arrhythmias, heart attacks, and blockages." },
      { name: "X-Rays", description: "Digital radiography used to diagnose bone fractures, lung infections (like pneumonia), and structural abnormalities." }
    ]
  }
];
