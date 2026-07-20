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
          blue: '#4facfe',
          teal: '#00f2fe',
          orange: '#ff0844',
          charcoal: '#334155', // Softer charcoal for better clay contrast
          gray: '#64748b',
          light: '#f8fafc',
          pale: '#e2e8f0', // Slightly darker pale for inset shadows to pop
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'clay': '8px 8px 16px #cbd5e1, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.5), inset -2px -2px 4px rgba(0, 0, 0, 0.05)',
        'clay-card': '12px 12px 24px #cbd5e1, -12px -12px 24px #ffffff, inset 2px 2px 4px rgba(255,255,255,0.7), inset -2px -2px 4px rgba(0,0,0,0.03)',
        'clay-btn': '6px 6px 12px #cbd5e1, -6px -6px 12px #ffffff, inset 1px 1px 2px rgba(255,255,255,0.8), inset -1px -1px 2px rgba(0,0,0,0.1)',
        'clay-btn-active': 'inset 6px 6px 12px #cbd5e1, inset -6px -6px 12px #ffffff',
        'clay-dark': '8px 8px 16px #0f172a, -8px -8px 16px #334155, inset 2px 2px 4px rgba(255, 255, 255, 0.1), inset -2px -2px 4px rgba(0, 0, 0, 0.3)',
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
