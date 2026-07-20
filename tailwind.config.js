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
          blue: '#2563EB',     // Vibrant royal blue (Primary)
          teal: '#0D9488',     // Deep, rich teal (Secondary)
          orange: '#F97316',   // Bright, energetic orange (Accent)
          charcoal: '#1E293B', // Dark slate for strong contrast
          gray: '#64748B',     // Standard neutral gray
          light: '#F8FAFC',    // Very light gray/blue for backgrounds
          pale: '#F1F5F9',     // Slightly darker background for contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Modern, refined shadows
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'float': '0 20px 40px -20px rgba(0,0,0,0.1)',
        'glow-blue': '0 0 20px rgba(37, 99, 235, 0.4)',
        'glow-teal': '0 0 20px rgba(13, 148, 136, 0.4)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}
