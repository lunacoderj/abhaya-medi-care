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
    image: "/images/Screenshot 2026-07-19 223849.png", // placeholder
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
    image: "/images/Screenshot 2026-07-19 223900.png",
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
    image: "/images/Screenshot 2026-07-19 223911.png",
    category: "Laboratory",
    accuracyRating: "99.9%"
  }
];
