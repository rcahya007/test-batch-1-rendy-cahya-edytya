import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
  ],

  theme: {
    extend: {
      keyframes: {
        slider: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        slider: 'slider 50s infinite linear',
      },
      boxShadow: {
        'my-shadow': '4px 4px 0px 1px rgba(30,30,30,100)',
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        raleway: ['Raleway', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      orange: {
        65: '#FF8D4C',
        70: '#FF9E66',
        75: '#FFAE80',
        80: '#FFBE99',
        90: '#FFDECC',
        95: '#FFEFE5',
        97: '#FFF5F0',
        99: '#FFFCFA',
      },
      grey: {
        10: '#191919',
        15: '#262626',
        20: '#333333',
        30: '#4C4C4D',
        35: '#59595A',
        40: '#656567',
        60: '#98989A',
        70: '#B3B3B3',
      },
    },
  },

  plugins: [forms],
};
