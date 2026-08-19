/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14130F',      // near-black, warm — primary text / dark sections
        bone: '#EDEAE2',     // warm off-white — page background
        bone2: '#E3DFD4',    // slightly deeper bone for section contrast
        oxblood: '#6E2A32',  // deep wine accent — CTAs, hover states
        taupe: '#8F8571',    // muted secondary text / captions
        hairline: '#B7A57A', // thin gold divider lines
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}
