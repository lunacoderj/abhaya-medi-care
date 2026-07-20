import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-brand-blue text-white hover:bg-brand-blue/80",
        secondary: "bg-brand-teal text-white hover:bg-brand-teal/80",
        outline: "text-brand-charcoal border border-brand-gray/20 hover:bg-brand-light",
        success: "bg-green-100 text-green-800 hover:bg-green-200",
        warning: "bg-amber-100 text-amber-800 hover:bg-amber-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
