/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: { 950: '#07080d', 900: '#0b0d14', 800: '#12151f', 700: '#1a1e2b' },
        mint: { 300: '#7cf5d0', 400: '#3ee6b3', 500: '#14c99a', 700: '#0b7a5e', 800: '#08634c' },
        // /business page (light, warm). All text pairs below pass WCAG AA on sand-100.
        sand: { 50: '#fbf8f2', 100: '#f6f1e8', 200: '#ece4d6', 300: '#ddd2bf' },
        ink: { 900: '#15161b', 700: '#33363e', 600: '#4b4f58' },
        clay: { 600: '#c2562b', 700: '#a8461f' },
        // /business page, dark + gold. On coal-950: cream 19:1, taupe 8.8:1, gold-400 7.7:1.
        coal: { 950: '#060508', 900: '#0b0a0c', 800: '#141214', 700: '#1c1a1b', 600: '#262323' },
        gold: { 200: '#ecd3a6', 300: '#e0b878', 400: '#cb964d', 600: '#9b692e', 800: '#4f3316' },
        taupe: '#b5ad9b',
        cream: '#fcfafa',
        sky: { 400: '#5cc8ff', 500: '#2fa8f5' },
        amber: { 300: '#ffd27a', 400: '#ffbe3d' },
      },
      fontFamily: {
        sans: ['Cairo', 'Tahoma', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-40px,30px) scale(1.1)' } },
        shine: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
        spin: { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 16s ease-in-out infinite',
        'float-slow': 'float 24s ease-in-out infinite reverse',
        shine: 'shine 6s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}
