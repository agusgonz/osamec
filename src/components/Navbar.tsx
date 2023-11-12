import React from "react"
import PreNavbar from "./PreNavbar"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "../../public/images/logo/logo-resumido-color.svg"
import NavigationButton from "./NavigationButton"

export type navItem = {
	text: string
	href: string
	subItems?: {
		text: string
		href: string
	}[]
}

const navItems: navItem[] = [
	{
		text: "Inicio",
		href: "/",
	},
	{
		text: "Servicios",
		href: "/servicios",
		subItems: [
			{
				text: "Diagnostico de Motor",
				href: "/servicios/diagnostico-de-motor",
			},
			{
				text: "Aceite y filtros",
				href: "/servicios/diagnostico-de-motor",
			},
			{
				text: "Control de frenos",
				href: "/servicios/diagnostico-de-motor",
			},
			{
				text: "Servis",
				href: "/servicios/diagnostico-de-motor",
			},
		],
	},
	{
		text: "Galería",
		href: "/galeria",
	},
	{
		text: "Nosotros",
		href: "/nosotros",
	},
	{
		text: "Contáctanos",
		href: "/contacto",
	},
]

export default function Navbar() {
	return (
		<div className="bg-white">
			<PreNavbar />
			<div className="container mx-auto text-lg py-4 px-3 sm:px-0 text-gray-600">
				<ul className="flex gap-4 items-center">
					{navItems.map((navItem, navItemIndex) => {
						return (
							<li
								className={``}
								key={navItem.text}
							>
								{navItem.subItems ? (
									<NavigationButton navItem={navItem} />
								) : (
									<Link href={navItem.href}>
										{navItem.text}
									</Link>
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}
