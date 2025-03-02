/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'bruce' : ['BruceForever'],
        montserrat: ["Montserrat", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
      },
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "Lime": "hsl(61, 70%, 52%)",
        "Red": "hsl(4, 69%, 50%)",
        "slate-blue": "hsl(228, 45%, 44%)",
        "theme": "#202434",
        "Light-Black": "#181e2a",
      },
    },
  },
  plugins: [],
};


