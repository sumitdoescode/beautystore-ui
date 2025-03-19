module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      pop: ['Poppins', 'sans-serif']
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    colors: {
      white: '#FFFFFF',
      orange: {
        100: '#FEEDD3',
        200: '#FE7865',
        300: '#E6604D',
        400: '#F55C46'
      },
      blue: {
        100: '#F5F8FC',
        200: '#EFEDFE',
        300: '#5BD5E6'
      },
      green: {
        100: '#FFFBF8',
        200: '#E8FBF7',
        300: '#5BE6B0'
      },
      gray: {
        100: '#ECECEE',
        200: '#DFDAFE',
        300: '#83838B'
      },
      pink: {
        100: '#FEDAE8'
      },
      black: {
        100: '#2C2E3F',
        200: '#141517',
        300: '#2C2E3F',
        400: '#1D2539'
      },
      yellow: {
        100: '#F55C46'
      }
    },

    extend: {
      width: {
        '61w': '61%',
        '62w': '62%',
        '63w': '63%',
        '64w': '64%',
        '65w': '65%',
        '66w': '66%',
      },

      fontSize: {
         '5.1xl': '3.1rem',
         '5.2xl': '3.2rem',
         '5.3xl': '3.3rem',
         '5.4xl': '3.4rem',
         '5.5xl': '3.5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
