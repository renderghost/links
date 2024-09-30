import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['DM Sans', 'sans-serif'],
			serif: ['DM Serif Display', 'serif'],
		},
	},
	plugins: [],
	darkMode: 'media',
};

export default config;
