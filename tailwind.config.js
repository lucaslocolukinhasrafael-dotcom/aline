/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aline: {
          dark: '#4d3621',
          light: '#bd9f57',
          bg: '#F5F3EF', // Reference beige, very elegant
          bgDark: '#EBE8E0', // Slightly darker beige
        }
      },
      fontFamily: {
        title: ['"Cinzel"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
