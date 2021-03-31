module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: '#282846',
      light: '#E5E5E5',
      primary: '#FF9F1C',
      secondary: '#FAF0CA',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
