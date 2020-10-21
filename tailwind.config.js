const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    // Theme breakpoints - includes defaults plus additions.
    screens: {
      xs: '375px',
      ...screens,
      'until-xs': { max: '374px' },
      'until-sm': { max: '639px' },
      'until-md': { max: '767px' },
      'until-lg': { max: '1023px' },
      'until-xl': { max: '1279px' },
    },
    fontSize: {
      h1: '8rem',
      h2: '4.8rem',
      h3: '3.6rem',
      h4: '2.4rem',
      h5: '2.2rem',
      h6: '2rem',
      base: '2rem',
      sm: '1.6rem',
      xs: '1.4rem',
      xxs: '1rem',
    },
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  future: {
    /**
     * @see https://tailwindcss.com/docs/upcoming-changes
     */
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addUtilities, config }) {
      addUtilities({
        '.container': {
          width: '100%',
          maxWidth: config('theme.screens.lg'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: config('theme.padding.8'),
          paddingRight: config('theme.padding.8'),
        },
      })
    },
  ],
}
