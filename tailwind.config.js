/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        'omni-blue': '#003593',
        'omni-dark-blue': '#001f5c',
        'omni-darker-blue': '#00338D',
        'omni-light': '#F8F9FD',
        'omni-gray': '#CDD7E9',
      },
      fontFamily: {
        'afacad': ['Afacad', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'omni-gradient': 'conic-gradient(from -18deg at 66.74% 52.08%, #00338D 151.2deg, #F8F9FD 328.69deg)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
