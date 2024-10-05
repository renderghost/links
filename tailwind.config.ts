import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		colors: {
			transparent: 'transparent',
			neutral: {
				100: '#ffffff',
				0: '#000000',
			},
			attention: {
				500: '#facc15',
			},
			brand: {
				50: '#F6F6FE',
				100: '#E9E7FD',
				200: '#CCCAFC',
				300: '#AEABFC',
				400: '#7F7DFC',
				500: '#0000FF',
				600: '#0805E6',
				700: '#0D07C0',
				800: '#1009A5',
				900: '#0C075A',
				950: '#0F0958',
			},
		},
		// fontFamily: {
		// 	sans: ['DM Sans', 'sans-serif'],
		// 	serif: ['DM Serif', 'serif'],
		// },
	},
	plugins: [],
	darkMode: 'media',
};

export default config;
