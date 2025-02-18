import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"gray-900": "#262626",
				"gray-800": "#404040",
				"gray-700": "#595959",
				"gray-600": "#737373",
				"gray-500": "#A6A6A6",
				"gray-400": "#DDDDDD",
				"yellow-300": "#FFEE4C",
				"yellow-400": "#FFE700",
				"yellow-500": "#CCB900",
				"red-400": "#ff6467",
				"red-500": "#fb2c36",
				"green-400": "#05df72",
				"green-500": "#00c951",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
