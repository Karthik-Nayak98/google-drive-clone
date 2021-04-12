module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: '#282846',
      slate: '#E5E5E5',
      light: '#CCD6F6',
      primary: '#FF9F1C',
      secondary: '#FAF0CA',
      pale: '#f3f169',
    },

    extend: {
      fill: ['hover', 'focus'],
      backgroundImage: {
        tictactoe: "url('https://i.imgur.com/O2yxB88.png')",
      },
      animation: {
        fade: 'fade 1.5s ease-in-out infinite',
        move: 'move 1s ease-in-out infinite',
        beat: 'beat 1s ease-in-out infinite',
      },
      keyframes: {
        fade: {
          '0%': { transform: 'translate(0,0)', opacity: '1' },
          '100%': { transform: 'translate(0,20px)', opacity: '0' },
        },
        move: {
          '0%': { transform: 'translate(0,0) rotate(45deg)', opacity: '1' },
          '100%': {
            transform: 'translate(0,20px) rotate(45deg)',
            opacity: '0',
          },
        },
        beat: {
          '0%': { transform: 'translate(0,0) rotate(-45deg)', opacity: '1' },
          '100%': {
            transform: 'translate(0,20px) rotate(-45deg)',
            opacity: '0',
          },
        },
      },
    },
  },

  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      blur: ['hover', 'focus'],
      filter: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
};
