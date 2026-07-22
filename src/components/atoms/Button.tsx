import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold disabled:pointer-events-none disabled:opacity-50 group tracking-wide",
  {
    variants: {
      variant: {
        primary: "bg-brand-charcoal text-white hover:bg-brand-charcoal/90 hover:shadow-soft-xl border border-transparent",
        secondary: "bg-brand-blue text-white hover:bg-brand-blue/90 hover:shadow-soft-xl border border-transparent",
        ghost: "bg-transparent text-brand-charcoal border border-brand-gray/30 hover:border-brand-gold hover:text-brand-gold shadow-none",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 hover:shadow-soft-xl border border-red-100",
        outline: "bg-transparent text-brand-charcoal border border-brand-charcoal/20 hover:border-brand-charcoal hover:bg-brand-charcoal/5",
      },
      size: {
        default: "h-12 px-8 text-sm rounded-full",
        sm: "h-10 px-6 text-xs rounded-full",
        lg: "h-14 px-10 text-base rounded-full",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, icon, iconPosition = 'left', children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && icon && iconPosition === 'left' && (
          <span className="mr-2 group-hover:scale-110 transition-transform">{icon}</span>
        )}
        {children}
        {!isLoading && icon && iconPosition === 'right' && (
          <span className="ml-2 group-hover:scale-110 transition-transform">{icon}</span>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
