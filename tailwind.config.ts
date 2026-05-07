import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velvet Hour
        'velvet-black': '#0E0E0E',
        'velvet-oxblood': '#5C1A1B',
        'velvet-ivory': '#F4ECD8',
        'velvet-brass': '#C9A961',
        // Field Notes
        'field-oat': '#EDE4D2',
        'field-forest': '#3F5641',
        'field-terracotta': '#C4623E',
        'field-umber': '#2A1F18',
        'field-sage': '#8FA876',
        // Sunday Bright
        'sunday-cream': '#FBF7F2',
        'sunday-peach': '#F5C9A8',
        'sunday-coral': '#E07856',
        'sunday-mint': '#B8D0BD',
        'sunday-butter': '#F2D88E',
        'sunday-black': '#1B1B1B',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)'],
        sans: ['var(--font-inter)'],
        mono: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
};
export default config;
