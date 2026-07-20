import React from 'react';
import { Input, Textarea, type InputProps, type TextareaProps } from '../atoms/Input';
import { cn } from '../../lib/utils';

interface FormFieldBaseProps {
  label: string;
  name: string;
  error?: string;
  className?: string;
}

export type FormFieldProps = FormFieldBaseProps & 
  (
    | ({ as?: 'input' } & InputProps)
    | ({ as: 'textarea' } & TextareaProps)
  );

export const FormField = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, name, error, className, as = 'input', ...props }, ref) => {
    return (
      <div className={cn("space-y-2", className)}>
        <label htmlFor={name} className="text-sm font-medium text-brand-charcoal">
          {label}
        </label>
        {as === 'textarea' ? (
          <Textarea 
            id={name} 
            name={name} 
            error={error} 
            ref={ref as React.Ref<HTMLTextAreaElement>} 
            {...(props as TextareaProps)} 
          />
        ) : (
          <Input 
            id={name} 
            name={name} 
            error={error} 
            ref={ref as React.Ref<HTMLInputElement>} 
            {...(props as InputProps)} 
          />
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";
