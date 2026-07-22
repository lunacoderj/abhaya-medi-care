/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#EFEDE6',    // Cream (Main Background)
          charcoal: '#222022', // Dark Charcoal (Main Text)
          blue: '#F7B538',     // Gold (Primary Accents & Buttons)
          teal: '#02462E',     // Emerald (Secondary Accents & Headings for contrast)
          pale: '#EDF1F5',     // Light Grayish Blue (Card Backgrounds)
          light: '#F7F6F2',    // Softer Cream (Alternate Backgrounds)
          gray: '#222022',     // Muted Text (using Charcoal for visibility)
          gold: '#F7B538',     
          red: '#780116',      // Maroon
          green: '#02462E'     // Emerald
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Lora', 'serif'], // Added elegant serif
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.04)',
        'soft-xl': '0 20px 60px -15px rgba(0,0,0,0.06)',
        'clay-light': '0 4px 20px rgba(0,0,0,0.03)',
        'clay-card': '0 8px 30px rgba(0,0,0,0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(212,175,55,0.4)' },
          '50%': { 'box-shadow': '0 0 40px rgba(212,175,55,0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}
