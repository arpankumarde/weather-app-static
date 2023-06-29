/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
      colors: {
        'blue': {
          light: '#E4F1FF',
          dark: '#5C9CE5'
        },
        'gray': {
          light: '#DCDCDC',
          dark: '#646464'
        }
      }
    },
  },
  plugins: [],
}

