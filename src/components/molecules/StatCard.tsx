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
    <Card variant="elevated" ref={ref} className="text-center group hover:-translate-y-2 transition-transform duration-300">
      <div className="flex justify-center mb-6">
        <div className="bg-brand-light text-brand-blue p-4 rounded-full group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-glow-blue">
          <Icon name={iconName} size={36} />
        </div>
      </div>
      <h3 className="text-4xl font-extrabold text-brand-charcoal mb-2 tracking-tight">
        {new Intl.NumberFormat('en-IN').format(count)}{suffix}
      </h3>
      <p className="text-brand-charcoal font-medium">{label}</p>
    </Card>
  );
}
