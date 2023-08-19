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

        // TODO: color setting
        black: '#1a1a1a',
        white: '#ffffff',

        gray5: '#262a2f',
        gray4: '#424851',
        gray3: '#6d7684',
        gray2: '#adb3be',
        gray1: '#e5e7ec',
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

        // TODO: font setting
        '.font-r-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 400 },
        '.font-r-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 400 },
        '.font-r-16': { fontSize: '16px', lineHeight: '24px', fontWeight: 400 },
        '.font-r-24': { fontSize: '24px', lineHeight: '32px', fontWeight: 400 },
        '.font-r-28': { fontSize: '28px', lineHeight: '38px', fontWeight: 400 },

        '.font-sb-12': { fontSize: '12px', lineHeight: '20px', fontWeight: 600 },
        '.font-sb-14': { fontSize: '14px', lineHeight: '22px', fontWeight: 600 },
        '.font-sb-18': { fontSize: '18px', lineHeight: '26px', fontWeight: 600 },
        '.font-sb-20': { fontSize: '20px', lineHeight: '28px', fontWeight: 600 },
        '.font-sb-28': { fontSize: '28px', lineHeight: '38px', fontWeight: 600 },
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
