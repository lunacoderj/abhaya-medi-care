import React from 'react';
import { cn } from '../../lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-shimmer bg-gradient-to-r from-brand-gray/5 via-brand-gray/10 to-brand-gray/5 bg-[length:1000px_100%] rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
