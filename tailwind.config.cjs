/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,cjs,mjs}'],
  theme: {
    extend: {
      dropShadow: {
        'sharp/25': '1px 1px 0 rgba(0, 0, 0, 0.25)',
        'sharp/50': '1px 1px 0 rgba(0, 0, 0, 0.5)',
        'sharp/75': '1px 1px 0 rgba(0, 0, 0, 0.75)',
        sharp: '1px 1px 0 rgb(0, 0, 0)',
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwindcss-radix')()],
}
