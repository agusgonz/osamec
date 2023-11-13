"use client"
import React, { ReactNode } from "react"
import PreNavbar from "./PreNavbar"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "../../public/images/logo/logo-resumido-color.svg"
import NavigationButton from "./NavigationButton"
import useWindowSize from "@/hooks/useWindowSize"
import AccordionButton from "./AccordionButton"
import { AlignJustify, ChevronDown } from "lucide-react"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { navigationMenuTriggerStyle } from "./ui/NavigationMenu"

export type item = {
	text: string | ReactNode
	href: string
	subItems?: {
		text: string
		href: string
	}[]
}

const navItems: item[] = [
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
	const { width, height } = useWindowSize()

	return (
		<div className="bg-white">
			<PreNavbar />
			<div className="container mx-auto text-lg py-4 px-3 sm:px-0 text-gray-600">
				{width <= 500 ? (
					<AccordionButton
						trigger={
							<div className="w-full flex justify-end ">
								<AlignJustify />
							</div>
						}
						body={
							<ul className="flex flex-col gap-4  mt-4">
								{navItems.map((navItem, navItemIndex) => {
									return (
										<li
											className="hover:text-gray-900"
											key={navItem.href}
										>
											{navItem.subItems ? (
												<AccordionButton
													trigger={
														<div className="w-min flex items-center">
															<div>{navItem.text}</div>
															<ChevronDown className="ml-1 h-3 w-3" />
														</div>
													}
													body={
														<ul className="text-base px-3 flex flex-col gap-3 pt-4">
															{navItem.subItems.map(
																subItem => {
																	return (
																		<li
																			key={subItem.text}
																			className="text-gray-600  hover:text-gray-900"
																		>
																			<Link
																				key={subItem.text}
																				href={subItem.href}
																			>
																				{subItem.text}
																			</Link>
																		</li>
																	)
																}
															)}
														</ul>
													}
												/>
											) : (
												<Link href={navItem.href}>
													{navItem.text}
												</Link>
											)}
										</li>
									)
								})}
							</ul>
						}
					/>
				) : (
					<ul className="flex gap-4 items-center">
						{navItems.map((navItem, navItemIndex) => {
							return (
								<li
									className="hover:text-gray-900"
									key={navItem.href}
								>
									{navItem.subItems ? (
										<NavigationButton item={navItem} />
									) : (
										<Link href={navItem.href}>
											{navItem.text}
										</Link>
									)}
								</li>
							)
						})}
					</ul>
				)}
			</div>
		</div>
	)
}
