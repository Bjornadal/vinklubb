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
          700: '#8e1b3c',
          800: '#6b122c',
          900: '#380c19',
          950: '#1c050c',
        },
        brass: {
          100: '#faf6eb',
          200: '#ede1c8',
          300: '#dfcba5',
          400: '#d8b776',
          500: '#c5a059',
          600: '#ab8240',
          700: '#8c6530',
          800: '#6a4a24',
          900: '#4a3318',
        },
        velvet: {
          850: '#1b171c',
          900: '#141015',
          950: '#0a080c',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Italiana"', '"Cormorant Garamond"', 'serif'],
        editorial: ['"Marcellus"', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-editorial': '0.35em',
        'super-wide': '0.5em',
      }
    },
  },
  plugins: [],
}
