/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vami: {
          dark: "#141210", // Warm Dark Roast Hintergrund
          primary: "#FF5722", // Beanie Flame Orange Akzent
          secondary: "#25211D", // Warm Mocha Sekundärfarbe
          glass: "rgba(255, 255, 255, 0.08)", // Glassmorphism
        },
        beanie: {
          dark: "#141210",
          espresso: "#24120A",
          mocha: "#32170D",
          amber: "#D97706",
          caramel: "#FBDBB0",
          cream: "#FBF9F1",
          gold: "#FFC800",
          orange: "#FF5722",
          green: "#58CC02",
          surface: "#1B1815",
          border: "#3E332B"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
