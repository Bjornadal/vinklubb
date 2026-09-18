/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fbe6e9',
          200: '#f7ced6',
          300: '#f0a5b6',
          400: '#e5728d',
          500: '#d44368',
          600: '#b82950',
          700: '#9b1e3f',
          800: '#811c37',
          900: '#4a0d1e',
          950: '#1f040b',
        },
        gold: {
          50: '#fbf9f0',
          100: '#f7f1dc',
          200: '#eee0b6',
          300: '#e3ca89',
          400: '#d7b05a',
          500: '#c59b38',
          600: '#a77a29',
          700: '#7f5922',
          800: '#674720',
          900: '#553a1e',
        },
        velvet: {
          900: '#141419',
          950: '#0c0c0f',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
