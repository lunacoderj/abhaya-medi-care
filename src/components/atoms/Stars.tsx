import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StarsProps {
  rating: number;
  maxStars?: number;
  className?: string;
  size?: number;
}

export const Stars: React.FC<StarsProps> = ({ 
  rating, 
  maxStars = 5, 
  className,
  size = 16
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(maxStars)].map((_, i) => {
        const starValue = i + 1;
        if (starValue <= rating) {
          return <Star key={i} size={size} className="fill-brand-orange text-brand-orange" />;
        } else if (starValue - 0.5 <= rating) {
          return (
            <div key={i} className="relative">
              <Star size={size} className="text-brand-orange" />
              <div className="absolute top-0 left-0 overflow-hidden w-[50%]">
                <Star size={size} className="fill-brand-orange text-brand-orange" />
              </div>
            </div>
          );
        }
        return <Star key={i} size={size} className="text-gray-300" />;
      })}
    </div>
  );
};
