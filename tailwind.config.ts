import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          white: '#F5F5F5',
          blue: '#0070FF',
          darkBlue: '#0040A0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1.2s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(3px, 2px) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-3px, -2px) skew(0deg)' },
          '62%': { transform: 'translate(0, 0) skew(5deg)' },
        },
      },
    }
  },
  plugins: [],
} satisfies Config;
