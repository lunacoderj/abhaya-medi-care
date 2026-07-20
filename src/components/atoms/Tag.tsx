import React from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  onRemove?: () => void;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, children, onRemove, variant = 'default', ...props }, ref) => {
    
    const variants = {
      default: 'bg-brand-light text-brand-charcoal hover:bg-brand-gray/10',
      primary: 'bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20',
      secondary: 'bg-brand-teal/10 text-brand-teal hover:bg-brand-teal/20',
      outline: 'border border-brand-gray/20 text-brand-charcoal hover:bg-brand-light',
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-sm font-medium transition-colors",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onRemove();
            }}
            className="hover:bg-black/10 rounded-full p-0.5 transition-colors focus:outline-none"
          >
            <X size={14} />
          </button>
        )}
      </span>
    );
  }
);
Tag.displayName = "Tag";
