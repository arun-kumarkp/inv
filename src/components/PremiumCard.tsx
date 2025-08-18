import { ReactNode } from 'react';

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elegant' | 'highlight';
}

const PremiumCard = ({ children, className = '', variant = 'default' }: PremiumCardProps) => {
  const variants = {
    default: 'premium-card p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl mx-2 sm:mx-4',
    elegant: 'premium-card elegant-border p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl gold-glow mx-2 sm:mx-4',
    highlight: 'premium-card elegant-border p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl gold-glow animate-pulse-gold mx-2 sm:mx-4'
  };

  return (
    <div className={`scroll-reveal ${variants[variant]} ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PremiumCard;