import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000E08',
        'accent-50': '#FFFBEC',
        'accent-100': '#FFF6D9',
        'secondary-100': '#8FE8C0',
        'secondary-300': '#48B986',
        'secondary-700': '#00532E',
        'secondary-850': '#002917',
        'secondary-950': '#000E08',
        'neutral-200': '#CCCBC5',
        'neutral-300': '#B3B0A9',
        'neutral-500': '#807C6F',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
