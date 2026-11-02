/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: { 950: '#07080d', 900: '#0b0d14', 800: '#12151f', 700: '#1a1e2b' },
        mint: { 300: '#7cf5d0', 400: '#3ee6b3', 500: '#14c99a' },
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
