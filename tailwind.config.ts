import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	darkMode: 'class', // Add this line
};

export default config;
