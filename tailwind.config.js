/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-light-pink': '#FDEBED',
        'brand-accent-pink': '#F5D6D9',
        'brand-gold': '#D7A867',
        'brand-dark-mauve': '#A16973',
        'brand-off-white': '#FEFDFB',
        'cream': '#F9EDD9',
      },
      fontFamily: {
        script: ['Pinyon Script', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
