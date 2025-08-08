/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {

    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },


    extend: {
       animation: {
          marquee: 'marquee 25s linear infinite',
          marquee2: 'marquee2 25s linear infinite',
          scroller3: 'scroller3 25s linear infinite',
          'spin-slow': 'spin 4s linear infinite',
          'spin-slower': 'spin 6s linear infinite',
          'spin-reverse': 'spin-reverse 1s linear infinite',
          'spin-reverse-slow': 'spin-reverse 4s linear infinite',
          'spin-reverse-slower': 'spin-reverse 6s linear infinite',
          scroller: 'scroller 15s linear infinite',
          scroller2: 'scroller2 20s linear infinite',
          'fade-in': 'fade-in 0.5s linear forwards',
        },
        keyframes: {
          marquee: {
            '0%': {
              transform: 'translateX(0%)'
            },
            '100%': {
              transform: 'translateX(-100%)'
            },
          },
          marquee2: {
            '0%': {
              transform: 'translateX(100%)'
            },
            '100%': {
              transform: 'translateX(0%)'
            },
          },
          scroller: {
            '0%': {
              transform: 'translateY(10em)'
            },
            '100%': {
              transform: 'translateY(-14em)'
            },
          },
          scroller2: {
            '0%': {
              transform: 'translateY(10em)'
            },
            '100%': {
              transform: 'translateY(-14em)'
            },
          },
          'fade-in': {
            from: {
              opacity: 0,
            },
            to: {
              opacity: 1,
            },
          },
          scroller3: {
            '100%': {
              transform: 'translateY(-50%)',
            },
          },
          'spin-reverse': {
            to: {
              transform: 'rotate(-360deg)',
            },
          },
        },
      boxShadow: {

        small: "-3px 3px",
        medium: "-5px 5px",
        large: "-10px 10px",
      },
      colors: {

  green: {
    '50': 'hsl(120, 29%, 97%)',
    '100': 'hsl(120, 32%, 93%)',
    '200': 'hsl(120, 29%, 85%)',
    '300': 'hsl(118, 27%, 73%)',
    '400': 'hsl(120, 24%, 58%)',
    '500': 'hsl(120, 25%, 49%)',
    '600': 'hsl(120, 26%, 36%)',
    '700': 'hsl(120, 25%, 29%)',
    '800': 'hsl(120, 22%, 24%)',
    '900': 'hsl(123, 22%, 20%)',
    '950': 'hsl(120, 29%, 10%)',
        },
       pink: {
   '50': 'hsl(324, 33%, 97%)',
    '100': 'hsl(322, 41%, 95%)',
    '200': 'hsl(322, 42%, 90%)',
    '300': 'hsl(322, 42%, 78%)',
    '400': 'hsl(323, 42%, 70%)',
    '500': 'hsl(324, 40%, 60%)',
    '600': 'hsl(328, 35%, 51%)',
    '700': 'hsl(329, 37%, 42%)',
    '800': 'hsl(330, 37%, 35%)',
    '900': 'hsl(331, 34%, 30%)',
    '950': 'hsl(331, 40%, 17%)',
},

        yellow: {
  '50': 'hsl(49, 80%, 96%)',
    '100': 'hsl(49, 75%, 89%)',
    '200': 'hsl(49, 77%, 71%)',
    '300': 'hsl(47, 77%, 65%)',
    '400': 'hsl(44, 77%, 56%)',
    '500': 'hsl(38, 73%, 50%)',
    '600': 'hsl(32, 76%, 44%)',
    '700': 'hsl(26, 72%, 37%)',
    '800': 'hsl(23, 66%, 31%)',
    '900': 'hsl(22, 61%, 26%)',
    '950': 'hsl(21, 72%, 14%)',
},

               blue: {
  '50': 'hsl(233, 100%, 97%)',
    '100': 'hsl(234, 100%, 94%)',
    '200': 'hsl(235, 93%, 89%)',
    '300': 'hsl(236, 91%, 82%)',
    '400': 'hsl(242, 88%, 74%)',
    '500': 'hsl(246, 81%, 67%)',
    '600': 'hsl(250, 74%, 60%)',
    '700': 'hsl(252, 56%, 51%)',
    '800': 'hsl(251, 54%, 41%)',
    '900': 'hsl(249, 46%, 34%)',
    '950': 'hsl(250, 45%, 20%)',
},
      },
      fontFamily: {
        display: ["Love Ya Like A Sister", ...defaultTheme.fontFamily.sans],
         sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["Azaret Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/aspect-ratio')
  ],
}
