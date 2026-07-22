import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  animateOnScroll?: boolean;
  duration?: number;
  className?: string;
}

export function StatCounter({ 
  value, 
  suffix = '', 
  prefix = '', 
  label, 
  animateOnScroll = true, 
  duration = 2,
  className = ''
}: StatCounterProps) {
  const counterRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current || !numberRef.current) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      
      const tl = gsap.timeline({
        scrollTrigger: animateOnScroll ? {
          trigger: counterRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        } : undefined
      });

      tl.to(obj, {
        val: value,
        duration: duration,
        ease: "power2.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = Math.floor(obj.val).toLocaleString();
          }
        }
      });
    }, counterRef);

    return () => ctx.revert();
  }, [value, animateOnScroll, duration]);

  return (
    <div ref={counterRef} className={`flex flex-col ${className}`}>
      <div className="text-4xl md:text-5xl font-extrabold text-brand-gold font-mono tracking-tight flex items-center justify-center lg:justify-start">
        {prefix && <span>{prefix}</span>}
        <span ref={numberRef}>0</span>
        {suffix && <span className="text-brand-teal ml-1">{suffix}</span>}
      </div>
      <p className="text-sm md:text-base font-bold text-brand-charcoal uppercase tracking-wider mt-2">
        {label}
      </p>
    </div>
  );
}
