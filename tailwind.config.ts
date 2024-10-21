import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: 'var(--white)',
				background: 'var(--background)',
				container: '#1D1825',
				purple: '#9E78CF',
				midnight: '#15101C',
				done: '#78CFB0',
				'gray-text': '#777777',
			},
		},
	},
	plugins: [],
}
export default config
