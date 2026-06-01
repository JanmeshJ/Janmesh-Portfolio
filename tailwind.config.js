/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        void: '#090909',
        surface: '#111111',
        'surface-2': '#161616',
        ink: '#f0eeea',
        muted: '#8a8780',
        faint: '#4a4844',
        line: '#2a2926',
        accent: '#c9b896',
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
