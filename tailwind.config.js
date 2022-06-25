/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'yellow': {
        900: '#ffd300'
      },
      'tangerine': {
        900: '#ff9200'
      },
      'cloudy-blue': {
        900: '#cad7dd'
      },
      'blue-green': {
        900: '#49c8a8'
      },
      'pale-grey': {
        900: '#f5f8f9'
      },
      'charcoal-grey': {
        900: '#373d40'
      },
      'slate': {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      'white': {
        100: '#ffffff',
      }
    }
  },
  plugins: [],
}
