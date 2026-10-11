/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#10243A',
          50: '#F0F4F8',
          100: '#D9E3EC',
          200: '#B3C7D9',
          300: '#8DAAC6',
          400: '#547B9F',
          500: '#2E5A84',
          600: '#1F4265',
          700: '#17334F',
          800: '#10243A', // Primary Deep Navy
          900: '#0B1827',
          950: '#060D15',
        },
        teal: {
          DEFAULT: '#087F8C',
          50: '#EDF9FA',
          100: '#D5F1F4',
          200: '#ADE4E9',
          300: '#75CFD9',
          400: '#3AB5C4',
          500: '#087F8C', // Primary Medical Teal
          600: '#066B77',
          700: '#055660',
          800: '#04424A',
          900: '#033036',
        },
        mint: {
          DEFAULT: '#DDF4EC',
          50: '#F5FCF9',
          100: '#EAF8F3',
          200: '#DDF4EC', // Soft Mint
          300: '#BEE7D8',
          400: '#94D4BD',
          500: '#64BCA0',
        },
        warm: {
          white: '#FCFDFB',
        },
        slate: {
          text: '#536273',
          muted: '#7B8A9A',
          light: '#9EACB9',
        },
        gold: {
          DEFAULT: '#D7B56D',
          light: '#F3E5C2',
          dark: '#B08E45',
        },
        surface: {
          light: '#F3F7F8',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(16, 36, 58, 0.05), 0 1px 4px -1px rgba(16, 36, 58, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(16, 36, 58, 0.07), 0 4px 12px -2px rgba(16, 36, 58, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(16, 36, 58, 0.09), 0 8px 18px -4px rgba(16, 36, 58, 0.05)',
        'soft-xl': '0 24px 48px -12px rgba(16, 36, 58, 0.12), 0 12px 24px -6px rgba(16, 36, 58, 0.06)',
        'teal-glow': '0 0 25px -5px rgba(8, 127, 140, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
