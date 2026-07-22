import React from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  "rounded-xl overflow-hidden transition-all duration-500 bg-white",
  {
    variants: {
      variant: {
        default: "shadow-clay-light border border-black/5",
        elevated: "shadow-soft border border-black/5",
        gradient: "bg-gradient-to-br from-brand-light to-white border border-brand-gold/20",
        glass: "glass",
        glassDark: "glass-dark",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
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
    VariantProps<typeof cardVariants> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding }), 
          hover && (variant === 'glass' ? 'glass-hover' : 'hover:-translate-y-1 hover:shadow-soft-xl border border-transparent hover:border-brand-gold/20'),
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
