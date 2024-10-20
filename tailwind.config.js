/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082',
        accent: '#FFD700',
        background: '#1A1A1A',
        offWhite: '#E0E0E0',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

