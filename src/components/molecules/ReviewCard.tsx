import React from 'react';
import { Card } from '../atoms/Card';
import { Avatar } from '../atoms/Avatar';
import { Stars } from '../atoms/Stars';
import { Badge } from '../atoms/Badge';
import { CheckCircle2 } from 'lucide-react';
import { type Review } from '../../data/reviews';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="h-full flex flex-col group hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <Avatar src={review.avatar} fallback={review.name.charAt(0).toUpperCase()} />
        <div>
          <h5 className="font-semibold text-brand-charcoal leading-none mb-1">
            {review.name}
          </h5>
          <div className="flex items-center gap-2 text-xs text-brand-gray">
            <span>{review.date}</span>
            {review.verified && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle2 size={12} /> Verified Patient
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-3">
        <Stars rating={review.rating} />
      </div>
      
      <p className="text-brand-gray text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>
    </Card>
  );
}
