/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#C8191A',
          bright: '#E8201F',
          dark: '#8B0000',
        },
        gold: {
          DEFAULT: '#FFB800',
          light: '#FFD700',
        },
        gray: {
          dark: '#111111',
          mid: '#1A1A1A',
          light: '#2A2A2A',
        },
        'off-white': '#F0EDE8',
        muted: '#9A9A9A',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
