import React, { useEffect, useState, useRef } from 'react';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { useInView } from 'framer-motion';

interface StatCardProps {
  endValue: number;
  suffix?: string;
  label: string;
  iconName: string;
  duration?: number;
}

export function StatCard({ endValue, suffix = "", label, iconName, duration = 2 }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * endValue));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(endValue);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, endValue, duration]);

  return (
    <Card variant="clay" ref={ref} className="text-center group hover:-translate-y-1 transition-transform">
      <div className="flex justify-center mb-4">
        <div className="bg-brand-pale text-brand-teal p-4 rounded-2xl group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
          <Icon name={iconName} size={32} />
        </div>
      </div>
      <h3 className="text-4xl font-bold text-brand-blue mb-2">
        {new Intl.NumberFormat('en-IN').format(count)}{suffix}
      </h3>
      <p className="text-brand-charcoal font-medium">{label}</p>
    </Card>
  );
}
