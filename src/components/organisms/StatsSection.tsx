import React from 'react';
import { StatCard } from '../molecules/StatCard';
import { clinicData } from '../../data/clinic';

export function StatsSection() {
  const stats = [
    {
      endValue: clinicData.stats.patientsServed,
      suffix: "+",
      label: "Patients Served",
      iconName: "Users"
    },
    {
      endValue: clinicData.stats.testsAvailable,
      suffix: "+",
      label: "Diagnostic Tests",
      iconName: "TestTube"
    },
    {
      endValue: clinicData.stats.yearsExperience,
      suffix: "+",
      label: "Years Experience",
      iconName: "Award"
    },
    {
      endValue: clinicData.stats.googleRating,
      suffix: "★",
      label: "Google Rating",
      iconName: "Star"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              iconName={stat.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
