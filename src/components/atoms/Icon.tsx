import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const iconVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      animation: {
        none: "",
        pulse: "animate-pulse-subtle",
        rotate: "hover:rotate-[360deg] duration-700",
        bounce: "hover:scale-125 duration-300",
        float: "animate-float",
      },
    },
    defaultVariants: {
      animation: "none",
    },
  }
);

export type IconName = keyof typeof LucideIcons;

export interface IconProps extends Omit<LucideIcons.LucideProps, 'animation'>, VariantProps<typeof iconVariants> {
  name: string;
}

export const Icon = ({ name, className, animation, ...props }: IconProps) => {
  const LucideIcon = LucideIcons[name as IconName] as React.ElementType;

  if (!LucideIcon) {
    return <LucideIcons.HelpCircle className={cn("text-red-500", className)} {...props} />;
  }

  return <LucideIcon className={cn(iconVariants({ animation }), className)} {...props} />;
};
