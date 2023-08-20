const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

// TODO: 개발하면서 spacing 추가
const spacing = [...[...Array(1001).keys()]];

const convertSpacing = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}px`;
    return res;
  }, {});
const convertSpacingWithoutPx = spacing =>
  [...new Set(spacing)].reduce((res, space) => {
    res[space] = `${space}`;
    return res;
  }, {});

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    // TODO: 반응형 break point에 맞게 설정. sm은 항상 0
    screens: {
      sm: '0px',
      md: '848px',
      lg: '1280px',
    },

    extend: {
      colors: {
        ...defaultTheme.colors,

        black: '#000000',
        white: '#ffffff',

        purple3:'#847794'
        purple2:'#6F5A7E'
        purple1:'#4A2961'

        gray2: '#333D4B',
        gray1: '#EAECEF',
      },

      fontFamily: {
        sans: ['Pretendard', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        ...convertSpacing([...Array(101).keys()]),
      },

      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      spacing: {
        ...defaultTheme.spacing,
        ...convertSpacing(spacing),
      },

      width: theme => ({ ...defaultTheme.width, ...theme('spacing') }),
      height: theme => ({ ...defaultTheme.height, ...theme('spacing') }),

      minWidth: theme => ({ ...defaultTheme.minWidth, ...theme('spacing') }),
      maxWidth: theme => ({ ...defaultTheme.maxWidth, ...theme('spacing') }),

      minHeight: theme => ({ ...defaultTheme.minHeight, ...theme('spacing') }),
      maxHeight: theme => ({ ...defaultTheme.maxHeight, ...theme('spacing') }),

      lineHeight: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),

      borderRadius: theme => ({
        ...defaultTheme.lineHeight,
        ...convertSpacing([...Array(101).keys()]),
      }),
      borderWidth: theme => ({
        ...defaultTheme.borderWidth,
        ...convertSpacing([...Array(21).keys()]),
      }),

      animation: theme => ({
        ...defaultTheme.animation,
      }),
      keyframes: theme => ({
        ...defaultTheme.keyframes,
      }),

      boxShadow: theme => ({
        ...defaultTheme.boxShadow,
      }),

      zIndex: theme => ({
        ...defaultTheme.zIndex,
        ...convertSpacingWithoutPx([...Array(101).keys()]),
      }),
    },
  },
  truncate: {
    lines: { 2: '2', 3: '3', 4: '4' },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled', 'active'],
      borderColor: ['disabled', 'active'],
      textColor: ['disabled', 'active'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({});
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.absolute-center': {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.absolute-center-x': {
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.absolute-center-y': {
          top: '50%',
          transform: 'translateY(-50%)',
        },

        '.clickable': {
          cursor: 'pointer',
        },
        '.non-clickable': {
          cursor: 'not-allowed',
          userSelect: 'none',
        },

        '.transition-color': {
          transitionProperty: 'background-color,border-color,color,fill,stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '150ms',
        },

        '.font-r-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 500 },
        '.font-r-18': { fontSize: '18px', lineHeight: '26px', fontWeight: 500 },
        '.font-r-24': { fontSize: '24px', lineHeight: '30px', fontWeight: 500 },
        '.font-r-28': { fontSize: '28px', lineHeight: '32px', fontWeight: 500 },

        '.font-b-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 700 },
        '.font-b-18': { fontSize: '18px', lineHeight: '26px', fontWeight: 700 },
        '.font-b-24': { fontSize: '20px', lineHeight: '30px', fontWeight: 700 },
        '.font-b-28': { fontSize: '28px', lineHeight: '32px', fontWeight: 700 },
      });

      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    }),
  ],
};
