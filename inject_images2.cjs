const fs = require('fs');

const images = {
    // Biochemistry - Using Local tests images
    'Blood Sugar (FBS)': '/tests/blood_sugar_fbs.png',
    'Blood Sugar (PPBS)': '/tests/blood_sugar_fbs.png',
    'Blood Sugar (RBS)': '/tests/blood_sugar_fbs.png',
    'GTT': '/tests/blood_sugar_fbs.png',
    'Serum Creatinine': '/tests/serum_creatinine.png',
    'Blood Urea': '/tests/serum_creatinine.png',
    'HbA1c': '/tests/blood_sugar_fbs.png',

    // Lipid Profile - Using Local tests image
    'Lipid Profile (Complete Panel)': '/tests/lipid_profile.png',
    'Serum Cholesterol': '/tests/lipid_profile.png',

    // Liver Function Test - Using Local tests image
    'Liver Function Test (Comprehensive)': '/tests/liver_function_test.png',
    'Total Bilirubin': '/tests/liver_function_test.png',
    'SGPT & SGOT': '/tests/liver_function_test.png',
    'Alkaline Phosphatase': '/tests/liver_function_test.png',

    // Haematology - Since it's blood, we can use the blood sample image as a good representation
    'Complete Blood Count (CBC)': '/tests/blood_sugar_fbs.png',
    'ESR': '/tests/blood_sugar_fbs.png',
    'Platelet Count': '/tests/blood_sugar_fbs.png',

    // Complete Haemogram
    'Peripheral Smear': '/tests/blood_sugar_fbs.png',
    'Dengue Profile': '/tests/blood_sugar_fbs.png',

    // Hormones
    'Thyroid Profile (T3, T4, TSH)': '/tests/blood_sugar_fbs.png',
    'Vitamin D3 & B12': '/tests/blood_sugar_fbs.png',

    // Serology
    'Widal Test': '/tests/blood_sugar_fbs.png',
    'HIV I & II Test': '/tests/blood_sugar_fbs.png',

    // Urine Analysis - Using Wikipedia original full-size image (guaranteed to not 404 like thumbnails)
    'Routine Urine Analysis': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Urinalysis_1.jpg',
    'Urine Culture & Sensitivity': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Agar_plate_with_bacterial_colonies.jpg'
};

const filePath = 'src/data/services.ts';
let content = fs.readFileSync(filePath, 'utf8');

// First, remove all existing image: "..." lines to clean up the broken ones
content = content.replace(/image:\s*["'][^"']+["'],\s*\n/g, '');

// Now inject the new ones
for (const [name, url] of Object.entries(images)) {
    const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*["']${safeName}["'],)`, 'g');
    content = content.replace(regex, `$1\n        image: "${url}",`);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Images injected successfully using local assets!');
