export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const timelineData: TimelineEvent[] = [
  {
    id: "tl1",
    year: "2010",
    title: "The Beginning",
    description: "Abhaya Medicare was founded with a single automated hematology analyzer and a vision to provide accurate, affordable diagnostics to the local community in MVP Colony.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tl2",
    year: "2014",
    title: "Digital Integration",
    description: "Introduced a fully integrated LIS (Laboratory Information System), digitizing our entire workflow from sample collection to report generation, reducing turnaround time by 40%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tl3",
    year: "2018",
    title: "Advanced Imaging Addition",
    description: "Expanded our diagnostic capabilities by introducing high-resolution digital X-ray and 4D ultrasound services, transforming into a comprehensive diagnostic center.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tl4",
    year: "2022",
    title: "Quality Accreditation",
    description: "Achieved prestigious quality accreditations, cementing our commitment to uncompromising accuracy and adopting global best practices in clinical pathology.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tl5",
    year: "2024",
    title: "Premium Experience Hub",
    description: "Unveiled our fully redesigned, patient-centric premium facility with home collection networks and advanced preventive health packages.",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];
