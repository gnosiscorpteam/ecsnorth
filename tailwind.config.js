/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      md: ['22px', '30px'],
      lg: ['30px', '38px'],
      xl: ['60px', '68px'],
      '2xl':['64px', '70px'],
      '3xl' : ['68px', '80px']
    },
    colors: {
      primary: '#368CC9',
      secondary: '#E7F1F9',
      darkblue: '#13416B',
      special: '#BD1E51',
      white : '#FFFFFF'
    },
    screens: {
      'xs' :'570px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

