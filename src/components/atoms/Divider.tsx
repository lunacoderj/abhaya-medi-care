import React from 'react';
import { cn } from '../../lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ className, orientation = 'horizontal', ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "shrink-0 bg-brand-gray/10 border-0",
        orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}
