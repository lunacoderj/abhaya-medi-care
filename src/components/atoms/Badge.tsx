import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium tracking-wide transition-all duration-300 border",
  {
    variants: {
      variant: {
        primary: "bg-brand-gold/10 text-brand-gold border-brand-gold/20",
        success: "bg-green-50 text-green-700 border-green-200",
        info: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
        warning: "bg-orange-50 text-orange-700 border-orange-200",
        outline: "text-brand-charcoal border-brand-gray/20 hover:bg-brand-light",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  animated?: boolean;
  icon?: React.ReactNode;
}

function Badge({ className, variant, animated = false, icon, children, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        badgeVariants({ variant }), 
        animated && "animate-pulse-subtle shadow-soft",
        "group",
        className
      )} 
      {...props}
    >
      {icon && (
        <span className="mr-1.5 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}

export { Badge, badgeVariants };
