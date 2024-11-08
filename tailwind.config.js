/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "rgb(204, 213, 243)",      // Light background color for body
        textColor: "#CCD5F3",            // Text color for general use
        textAccent: "#7e92d9",           // Accent color for specific text
        secondaryCtaBg: "rgb(34, 40, 49)", // Background for secondary CTA
      },
      backgroundImage: {
        'heading-gradient': "linear-gradient(to top right, rgba(18, 55, 246, 1), rgba(9, 244, 244, 1))", // Gradient for headings
        'primary-cta-gradient': "linear-gradient(99.41deg, #002cc7 -39.51%, rgba(24, 185, 207, 0.9) 116.85%)", // Gradient for primary CTA
        'secondary-cta-border': "linear-gradient(180deg, rgba(24, 185, 207, 0.9) 0%, #3b53a8 100%)" // Border gradient for secondary CTA
      },
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      spacing: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
        40: '10rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
      },
      borderImage: {
        'secondary-cta': "linear-gradient(180deg, rgba(24, 185, 207, 0.9) 0%, #3b53a8 100%) 1"
      },
      borderWidth: {
        DEFAULT: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
      lineHeight: {
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
    },
  },
  plugins: [],
}
