/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  primary: '#016878',
  primaryDark: '#76FFFF',
  bgDark: '#253237',
  codeBg: '#f2f2f2',
  codeBgDark: '#0e1e25',
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Encode Sans Variable', ...defaultTheme.fontFamily.sans],
      },
      colors,
      dropShadow: {
        primary: `0 2px 2px ${colors.primary}40`,
        primaryDark: `0 2px 2px ${colors.primaryDark}4D`,
      },
      boxShadow: {
        primary: `0px 0px 8px ${colors.primary}1A`,
        primaryDark: `0px 0px 8px ${colors.primaryDark}1A`,
      },
    },
  },
  plugins: [],
}
