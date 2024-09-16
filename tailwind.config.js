/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': {
          "DEFAULT": '#2B2B2B',
          'secondary': '#3B3B3B',
        },
        'caption': '#858584',
        'text': '#FFFFFF',
        'calltoaction': '#A259FF',
        'blueaccent': '#377DF7',
        'redaccent': '#FF7262',
      },
      fontFamily: {
        "space": ["Space Mono", "sans-serif"],
        "workSans": ["Work Sans", "sans-serif"],
      },
      spacing: {
        '17': '4.5rem',
      },
      fontSize: {
        'h1-space': ['4.1875rem', { fontFamily: 'space', lineHeight: '110%' }],
        'h2-space': ['3.25rem', { fontFamily: 'space', lineHeight: '110%' }],
        'h3-space': ['2.375rem', { fontFamily: 'space', lineHeight: '120%' }],
        'h4-space': ['1.75rem', { fontFamily: 'space', lineHeight: '140%' }],
        'h5-space': ['1.375rem', { fontFamily: 'space', lineHeight: '160%' }],
        'body-workSans': ['1.375rem', { fontFamily: 'workSans', lineHeight: '160%' }],
        'base-space': ['1rem', { fontFamily: 'space', lineHeight: '140%' }],
        'base-workSans': ['1rem', { fontFamily: 'workSans', lineHeight: '140%' }],
        'button': ['1rem', { fontFamily: 'workSans', lineHeight: '0', letterSpacing: '10%' }],
        'caption': ['0.75rem', { fontFamily: 'workSans', lineHeight: '110%' }],
        'h1-workSans': ['4.1875rem', { fontFamily: 'workSans', lineHeight: '110%' }],
        'h2-workSans': ['3.25rem', { fontFamily: 'workSans', lineHeight: '110%' }],
        'h3-workSans': ['2.375rem', { fontFamily: 'workSans', lineHeight: '120%' }],
        'h4-workSans': ['1.75rem', { fontFamily: 'workSans', lineHeight: '140%' }],
        'h5-workSans': ['1.375rem', { fontFamily: 'space', lineHeight: '160%' }],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    }),
  ],
};
