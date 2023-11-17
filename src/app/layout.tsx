import "@/global.css"
import { rotis_sans_serif } from "@/fonts"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="es"
			className="scroll-smooth"
		>
			<body className={`${rotis_sans_serif.className} `}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
