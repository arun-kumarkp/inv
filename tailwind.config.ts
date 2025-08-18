import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      boxShadow: {
        'gold-glow': 'var(--shadow-gold-glow)',
        'soft': 'var(--shadow-soft)',
      },
      backgroundImage: {
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-shimmer': 'var(--gradient-shimmer)',
        'gradient-elegant': 'var(--gradient-elegant)',
        'gradient-overlay': 'var(--gradient-overlay)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'gentle-bounce': 'gentle-bounce 2.5s ease-in-out infinite',
      },
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
    },
  },
  plugins: [],
} satisfies Config;

