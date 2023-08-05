/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        roboto: ['var(--font-roboto)'],
        handwritten: ['var(--font-handwritten)'],
      },
      colors: {
        'darkest-dark': '#202124',
        'accent': '#3682fd',
        'almost-white': '#f0eff5'
      },
      width: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      },
      fontSize: {
        '10xl': ['10rem', {
          lineHeight: '8rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '11xl': ['11rem', {
          lineHeight: '9rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        '12xl': ['12rem', {
          lineHeight: '10rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'banner': ['15vw', {
          lineHeight: '10rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'banner-mobile': ['20vw', {
          lineHeight: '23vw',
          letterSpacing: '0',
          fontWeight: '500',
        }],
        'banner-desktop': ['11vw', {
          lineHeight: '12vw',
          letterSpacing: '0',
          fontWeight: '500',
        }],
      }
    },
  },
  plugins: [],
}
