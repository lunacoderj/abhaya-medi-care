import React from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "rounded-3xl overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-white shadow-soft border border-brand-gray/10",
        elevated: "bg-white shadow-float border border-brand-gray/10",
        clay: "bg-white shadow-soft border border-brand-gray/10", // Kept class name for compatibility, updated style
        glass: "glass",
        glassDark: "glass-dark",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
