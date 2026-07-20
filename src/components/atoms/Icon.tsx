import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends LucideIcons.LucideProps {
  name: string;
}

export const Icon = ({ name, className, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name as IconName] as React.ElementType;

  if (!LucideIcon) {
    return <LucideIcons.HelpCircle className={cn("text-red-500", className)} {...props} />;
  }

  return <LucideIcon className={className} {...props} />;
};
