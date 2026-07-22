import React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ElementType;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, error, ...props }, ref) => {
    return (
      <div className="w-full relative group">
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-brand-gray/40 group-focus-within:text-brand-teal transition-colors">
              <Icon size={20} />
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex h-14 w-full rounded-xl border border-brand-gray/20 bg-transparent px-4 py-2 text-base text-brand-charcoal transition-all duration-300 ease-out file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-brand-gray/40 hover:bg-white/50 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/20 focus-visible:border-brand-teal disabled:cursor-not-allowed disabled:opacity-50",
              Icon && "pl-11",
              error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500 hover:border-red-500 bg-red-50/50",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-red-500 font-medium px-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full group">
        <textarea
          className={cn(
            "flex min-h-[140px] w-full rounded-xl border border-brand-gray/20 bg-transparent px-4 py-4 text-base text-brand-charcoal transition-all duration-300 ease-out placeholder:text-brand-gray/40 hover:bg-white/50 focus-visible:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/20 focus-visible:border-brand-teal disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500 hover:border-red-500 bg-red-50/50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-red-500 font-medium px-1">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
