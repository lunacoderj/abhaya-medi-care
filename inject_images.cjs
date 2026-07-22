const fs = require('fs');

const images = {
    'Blood Sugar (FBS)': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Blausen_0089_BloodGlucoseTesting.png',
    'Blood Sugar (PPBS)': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Blausen_0089_BloodGlucoseTesting.png',
    'Blood Sugar (RBS)': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Blausen_0089_BloodGlucoseTesting.png',
    'GTT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Oral_glucose_tolerance_test.png/800px-Oral_glucose_tolerance_test.png',
    'Serum Creatinine': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kidney_Cross_Section.png/800px-Kidney_Cross_Section.png',
    'Blood Urea': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Kidney_Cross_Section.png/800px-Kidney_Cross_Section.png',
    'Lipid Profile (Complete Panel)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Atherosclerosis%2C_artery_disease_illustration.jpg/800px-Atherosclerosis%2C_artery_disease_illustration.jpg',
    'Serum Cholesterol': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Atherosclerosis%2C_artery_disease_illustration.jpg/800px-Atherosclerosis%2C_artery_disease_illustration.jpg',
    'Liver Function Test (Comprehensive)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Liver_Anatomy.png/800px-Liver_Anatomy.png',
    'Total Bilirubin': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jaundice_eye.jpg/800px-Jaundice_eye.jpg',
    'SGPT & SGOT': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Liver_Anatomy.png/800px-Liver_Anatomy.png',
    'Alkaline Phosphatase': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Gallbladder_and_bile_ducts.png/800px-Gallbladder_and_bile_ducts.png',
    'HbA1c': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Blausen_0089_BloodGlucoseTesting.png',
    'Complete Blood Count (CBC)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Erythrocyte_deoxy.jpg/800px-Erythrocyte_deoxy.jpg',
    'ESR': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Blood_samples_in_tubes.jpg/800px-Blood_samples_in_tubes.jpg',
    'Platelet Count': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Platelets.png/800px-Platelets.png',
    'Peripheral Smear': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Blood_smear_with_malaria_parasite.jpg/800px-Blood_smear_with_malaria_parasite.jpg',
    'Dengue Profile': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Dengue_virus_virion.png/800px-Dengue_virus_virion.png',
    'Thyroid Profile (T3, T4, TSH)': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Thyroid_system.png/800px-Thyroid_system.png',
    'Vitamin D3 & B12': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vitamins.jpg/800px-Vitamins.jpg',
    'Widal Test': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Salmonella_typhi_Typhoid_fever_01.png/800px-Salmonella_typhi_Typhoid_fever_01.png',
    'HIV I & II Test': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Rapid_diagnostic_test_for_HIV.jpg/800px-Rapid_diagnostic_test_for_HIV.jpg',
    'Routine Urine Analysis': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Urinalysis_1.jpg/800px-Urinalysis_1.jpg',
    'Urine Culture & Sensitivity': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Agar_plate_with_bacterial_colonies.jpg/800px-Agar_plate_with_bacterial_colonies.jpg'
};

const filePath = 'src/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

for (const [name, url] of Object.entries(images)) {
    if (!content.includes(url)) {
        const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(name:\\s*["']${safeName}["'],)`, 'g');
        content = content.replace(regex, `$1\n        image: "${url}",`);
    }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Images injected successfully!');
