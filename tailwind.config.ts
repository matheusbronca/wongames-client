import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#F231A5',
      secondary: '#3CD3C1',
      mainBg: '#06092B',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#EAEAEA',
      gray: '#8F8F8F',
      darkGray: '#2E2F42'
    },
    extend: {
      keyframes: {
        hoverAnimation: {
          from: {
            width: '0',
            left: '50%'
          },
          to: {
            width: '100%',
            left: '0'
          }
        }
      },
      animation: {
        hoverAnimation: 'hoverAnimation .2s forwards'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      spacing: {
        xxsm: '0.5rem',
        xsm: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xlg: '3rem',
        xxlg: '3.5rem'
      }
    }
  },
  plugins: []
}
export default config
