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
      screens: {
        'portrait': { 'raw': '(orientation: portrait)' },
        'landscape': { 'raw': '(orientation: landscape)' },
        // Small screens
        'sm-portrait': { 'raw': '(min-width: 640px) and (orientation: portrait)' },
        'sm-landscape': { 'raw': '(min-width: 640px) and (orientation: landscape)' },
        
        // Medium screens
        'md-portrait': { 'raw': '(min-width: 768px) and (orientation: portrait)' },
        'md-landscape': { 'raw': '(min-width: 768px) and (orientation: landscape)' },
        
        // Large screens
        'lg-portrait': { 'raw': '(min-width: 1024px) and (orientation: portrait)' },
        'lg-landscape': { 'raw': '(min-width: 1024px) and (orientation: landscape)' },
        
        // Extra large screens
        'xl-portrait': { 'raw': '(min-width: 1280px) and (orientation: portrait)' },
        'xl-landscape': { 'raw': '(min-width: 1280px) and (orientation: landscape)' },

        // 2x Extra large screens
        '2xl-portrait': { 'raw': '(min-width: 1536px) and (orientation: portrait)' },
        '2xl-landscape': { 'raw': '(min-width: 1536px) and (orientation: landscape)' },
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
      },
      backgroundImage: {
        'wavy-button': "url('https://assets.website-files.com/5d3c62cfb1eba4a73c190467/5d3c658c3dfa6674603df71b_wavy-btn-hover-border.svg')",
      }
    },
  },
  plugins: [],
}
