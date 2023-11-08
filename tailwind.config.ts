import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"blue-osa": "#00587C",
				"orange-osa": "#FF8200",
				"gray-osa": "#F5F5F5",
			},
		},
	},
	plugins: [],
}
export default config
