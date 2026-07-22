export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    role: "Patient",
    comment: "The level of professionalism and care at Abhaya Medicare is outstanding. My reports were delivered exactly when promised, and the staff made sure I was comfortable throughout the process.",
    rating: 5
  },
  {
    id: "t2",
    name: "Dr. Anjali Sharma",
    role: "Referring Physician",
    comment: "I have been referring my patients to Abhaya Medicare for over 3 years now. Their diagnostic accuracy is unparalleled, and the comprehensive reports make my job much easier.",
    rating: 5
  },
  {
    id: "t3",
    name: "Meera Reddy",
    role: "Patient",
    comment: "The home collection service was a blessing for my elderly father. The phlebotomist was incredibly gentle and hygienic. Highly recommend their services.",
    rating: 4.5
  },
  {
    id: "t4",
    name: "Vikram Singh",
    role: "Patient",
    comment: "State-of-the-art facility! You can literally see the advanced machines they use. It gave me a lot of confidence in the test results. Very clean and modern clinic.",
    rating: 5
  }
];
