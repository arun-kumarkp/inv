import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from './utils';

export interface UIButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const base = 'inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
const variants: Record<string, string> = {
  default: 'bg-primary text-primary-foreground hover:opacity-90',
  outline: 'border border-border text-foreground hover:bg-secondary',
};
const sizes: Record<string, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const Button = forwardRef<HTMLButtonElement, UIButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  }
);

Button.displayName = 'Button';

export default Button;

