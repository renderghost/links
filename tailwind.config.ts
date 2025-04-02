import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {},
		colors: {
			bones: {
				// Monos
				white: 'white',
				whitesmoke: 'color(display-p3 0.929412 0.92549 0.898039/1)',
				gray: 'gray',
				dimgray: 'dimgray',
				slategray: 'slategray',
				gainsboro: 'gainsboro',
				black: 'black',
				// Yellows
				yellow: 'yellow',
				gold: 'color(display-p3 0.964706 0.823529 0/1)',
				goldenrod: 'goldenrod',
				// Blues
				cyan: 'cyan',
				blue: 'blue',
				mediumblue: 'mediumblue',
				midnightblue: 'midnightblue',
				// Reds
				red: 'red',
				firebrick: 'firebrick',
				darkred: 'darkred',
				// Purples
				magenta: 'magenta',
				rebeccapurple: 'rebeccapurple',
				indigo: 'indigo',
				// Utilities
				transparent: 'transparent',
			},
		},
		// fontFamily: {
		// 	sans: ['DM Sans', 'sans-serif'],
		// 	serif: ['DM Serif', 'serif'],
		// },
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.cardRack': {
					'@apply grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-px':
						{},
				},
				'.card': {
					'@apply bg-bones-white dark:bg-bones-midnightblue flex flex-col flex-grow justify-between gap-8 p-8':
						{},
				},
			});
		}),
	],
	darkMode: 'media',
};

export default config;
