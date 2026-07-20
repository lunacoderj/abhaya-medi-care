export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export const reviewsData: Review[] = [
  {
    id: "1",
    name: "janapati srinivas",
    rating: 5,
    text: "Beat place to get all ur blood tests accurate results",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "2",
    name: "Madhavi Dalai",
    rating: 5,
    text: "Excellent report good service",
    date: "7 months ago",
    verified: true,
  },
  {
    id: "3",
    name: "KOTTAKOTA HINDU",
    rating: 5,
    text: "Good results and on time reporting",
    date: "7 months ago",
    verified: true,
  },
  {
    id: "4",
    name: "Suresh Kumar",
    rating: 5,
    text: "Very professional staff and clean environment. The MRI scan was done quickly and the reports were detailed.",
    date: "2 months ago",
    verified: true,
  },
  {
    id: "5",
    name: "Priya Reddy",
    rating: 4,
    text: "Advanced equipment and friendly technicians. Overall a very smooth experience.",
    date: "3 months ago",
    verified: true,
  }
];
