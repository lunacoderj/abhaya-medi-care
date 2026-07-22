export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon: string;
}

export const statsData: Stat[] = [
  {
    id: "s1",
    value: 50000,
    suffix: "+",
    label: "Happy Patients",
    icon: "Users"
  },
  {
    id: "s2",
    value: 15,
    suffix: "+",
    label: "Years of Trust",
    icon: "Award"
  },
  {
    id: "s3",
    value: 200,
    suffix: "+",
    label: "Daily Tests",
    icon: "Activity"
  },
  {
    id: "s4",
    value: 99.9,
    suffix: "%",
    label: "Accuracy Rate",
    icon: "CheckCircle"
  }
];
