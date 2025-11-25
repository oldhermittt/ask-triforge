import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
      // Keyframes for glows and mesh effect
      keyframes: {
        'glow-light': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        'pulse-slow-1': { 
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.08' },
          '50%': { transform: 'scale(1.05) translate(10px, 5px)', opacity: '0.12' },
        },
        'pulse-slow-2': { 
          '0%, 100%': { transform: 'scale(1) translate(0, 0)', opacity: '0.08' },
          '50%': { transform: 'scale(1.05) translate(-10px, -5px)', opacity: '0.12' },
        },
        'spin-slow': { 
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // MESH GRADIENT KEYFRAMES
        'mesh-glow-1': {
          '0%, 100%': { transform: 'scale(1.1) translate(0%, 0%)', opacity: '0.5' },
          '25%': { transform: 'scale(1.15) translate(5%, -5%)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2) translate(0%, 5%)', opacity: '0.55' },
          '75%': { transform: 'scale(1.1) translate(-5%, -5%)', opacity: '0.6' },
        },
        'mesh-glow-2': {
          '0%, 100%': { transform: 'scale(1) translate(0%, 0%)', opacity: '0.5' },
          '25%': { transform: 'scale(1.05) translate(-5%, 5%)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1) translate(0%, -5%)', opacity: '0.55' },
          '75%': { transform: 'scale(1.05) translate(5%, 5%)', opacity: '0.6' },
        },
        'mesh-glow-3': {
          '0%, 100%': { transform: 'scale(1) translate(0%, 0%)', opacity: '0.5' },
          '25%': { transform: 'scale(1.03) translate(3%, 3%)', opacity: '0.55' },
          '50%': { transform: 'scale(1.06) translate(-3%, -3%)', opacity: '0.6' },
          '75%': { transform: 'scale(1.03) translate(3%, -3%)', opacity: '0.55' },
        },
      },

      // Custom animations
      animation: {
        'glow-light': 'glow-light 4s infinite ease-in-out',
        'pulse-slow-1': 'pulse-slow-1 12s infinite ease-in-out', 
        'pulse-slow-2': 'pulse-slow-2 14s infinite ease-in-out', 
        'spin-slow': 'spin-slow 30s linear infinite',
        // MESH GRADIENT ANIMATIONS
        'mesh-glow-1': 'mesh-glow-1 20s infinite ease-in-out alternate',
        'mesh-glow-2': 'mesh-glow-2 18s infinite ease-in-out alternate-reverse',
        'mesh-glow-3': 'mesh-glow-3 22s infinite ease-in-out alternate',
      },

      fontFamily: {
        mono: ['"Fira Code"', 'monospace'], 
      },
    },
  },
  
  // Required Plugins for Typography and Animate
  plugins: [
    require('@tailwindcss/typography'), 
    require('tailwindcss-animate'),
  ],
};

export default config;
