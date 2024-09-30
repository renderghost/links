import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		colors: {
			neutral: {
				100: '#ffffff',
			},
			attention: {
				500: '#facc15',
			},
			brand: {
				50: '#F0F1FF',
				100: '#E5E7FF',
				200: '#C7CBFF',
				300: '#A3A9FF',
				400: '#757EFF',
				500: '#0011FF',
				600: '#000FE6',
				700: '#000ED1',
				800: '#000BA8',
				900: '#00098A',
				950: '#000661',
			},
		},
		// fontFamily: {
		// 	sans: ['DM Sans', 'sans-serif'],
		// 	serif: ['DM Serif Display', 'serif'],
		// },
	},
	plugins: [],
	darkMode: 'media',
};

export default config;
