import tailBreeze from '@killoblanco/tail-breeze'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [
    tailBreeze({
      colors: {
        neutral: colors.slate[500],
        primary: colors.blue[500],
        secondary: colors.pink[500],
        accent: colors.violet[500],
        success: colors.lime[500],
        info: colors.cyan[500],
        warning: colors.amber[500],
        error: colors.red[500]
      }
    })
  ],
}
