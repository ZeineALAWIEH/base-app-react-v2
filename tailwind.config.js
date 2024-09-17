/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ou 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        xs:'414px',
        md9: '900px'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'rdx-grayed': { //Radix Sand
          1: '#fdfdfc',
          2: '#f9f9f8',
          3: '#f1f0ef',
          4: '#e9e8e6',
          5: '#e2e1de',
          6: '#dad9d6',
          7: '#cfceca',
          8: '#bcbbb5',
          9: '#8d8d86',
          10: '#82827c',
          11: '#63635e',
          12: '#21201c',
        },
        'rdx-grayed-dark': { //Radix Sand Dark
          1: '#111110',
          2: '#191918',
          3: '#222221',
          4: '#2a2a28',
          5: '#31312e',
          6: '#3b3a37',
          7: '#494844',
          8: '#62605b',
          9: '#6f6d66',
          10: '#7c7b74',
          11: '#b5b3ad',
          12: '#eeeeec',
        },
        'rdx-brand': { //Radix Amber
          1: '#fefdfb',
          2: '#fefbe9',
          3: '#fff7c2',
          4: '#ffee9c',
          5: '#fbe577',
          6: '#f3d673',
          7: '#e9c162',
          8: '#e2a336',
          9: '#ffc53d',
          10: '#ffba18',
          11: '#ab6400',
          12: '#4f3422',
          13: '#372417', //www.color-hex.com/color/4f3422 -> 4ème color vers la droite
          14: '#271a11', //www.color-hex.com/color/4f3422 -> 6ème color vers la droite
        },
        'rdx-brand-dark': { //Radix Amber Dark
          1: '#16120c',
          2: '#1d180f',
          3: '#302008',
          4: '#3f2700',
          5: '#4d3000',
          6: '#5c3d05',
          7: '#714f19',
          8: '#8f6424',
          9: '#ffc53d',
          10: '#ffd60a',
          11: '#ffca16',
          12: '#ffe7b3',
        },
      },
    },
  },
  plugins: [],
}

