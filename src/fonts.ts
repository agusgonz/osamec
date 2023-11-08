import localFont from "next/font/local"

export const rotis_sans_serif = localFont({
	src: [
		{
			path: "../public/fonts/rotis-sans-serif.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/rotis-sans-serif-bold.otf",
			weight: "700",
		},
		{
			path: "../public/fonts/rotis-sans-serif-italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/rotis-sans-serif-light.ttf",
			weight: "300",
		},
	],
})
export const serpentine_icg = localFont({
	src: [
		{
			path: "../public/fonts/serpentine-icg.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/serpentine-icg-bold.ttf",
			weight: "700",
		},
		{
			path: "../public/fonts/serpentine-icg-light.ttf",
			weight: "300",
		},
	],
})
