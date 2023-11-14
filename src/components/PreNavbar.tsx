import {
	Clock,
	Facebook,
	Instagram,
	Mail,
	Phone,
	Search,
} from "lucide-react"
import Link from "next/link"
import React, { ReactNode } from "react"

interface itemInfoType {
	icon: React.JSX.Element
	text: string
	smText?: string
	href?: string
	name?: string
}

const itemsInfo: itemInfoType[] = [
	{
		icon: <Clock className="w-4" />,
		text: "Lun a Vie: 8:30 - 12:30, 13:30 - 17:30",
		smText: "Lunes a Viernes",
	},
	{
		icon: <Phone className="w-4" />,
		text: "261273612",
		href: "tel:261273612",
		name: "Llamar al teléfono de osamec",
	},
	{
		icon: <Mail className="w-4 pt-[2px]" />,
		text: "email@email.com",
		href: "mailto:email@email.com",
		name: "Enviar un email a osamec",
	},
]

const itemsSocial = [
	{
		icon: <Instagram className="w-4" />,
		href: "http://localhost:3000/",
		name: "Instagram de osamec",
	},
	{
		icon: <Facebook className="w-4" />,
		href: "http://localhost:3000/",
		name: "Facebook de osamec",
	},
]

export default function PreNavbar() {
	return (
		<div className="bg-gray-osa text-sm leading-6 text-gray-500">
			<div
				className={`container mx-auto flex justify-between sm:px-6`}
			>
				<ul className=" flex whitespace-nowrap">
					{itemsInfo.map((itemInfo, itemInfoIndex) => {
						return (
							<li
								key={itemInfo.text}
								className={`py-2 px-3 border-r border-gray-300 ${
									itemInfoIndex == 0 && "border-l flex-grow"
								}`}
							>
								{itemInfo.href ? (
									<Link
										href={itemInfo.href}
										className="flex hover:underline group"
									>
										<div className="group-hover:text-gray-700">
											{itemInfo.icon}
										</div>

										<div className="ml-1 hidden sm:block">
											{itemInfo.text}
										</div>
										{itemInfo.smText && (
											<div className="ml-1  sm:hidden">
												{itemInfo.smText}
											</div>
										)}
									</Link>
								) : (
									<div className="flex">
										{itemInfo.icon}
										<div className="ml-1 hidden sm:block">
											{itemInfo.text}
										</div>
										<div className="ml-1  sm:hidden">
											{itemInfo.smText}
										</div>
									</div>
								)}
							</li>
						)
					})}
				</ul>
				<ul className=" flex">
					{/* {itemsSocial.map(
						(itemSocial, itemSocialIndex) => {
							return (
								<li
									key={itemSocial.name}
									className={`py-2 px-3 border-r border-gray-300 ${
										itemSocialIndex == 0 &&
										"border-l flex-grow"
									}`}
								>
									<Link
										href={itemSocial.href}
										className="flex hover:text-gray-700 "
									>
										{itemSocial.icon}
									</Link>
								</li>
							)
						}
					)} */}
					<li className="py-2 px-3 border-x border-gray-300">
						<Search className="w-4 " />
					</li>
				</ul>
			</div>
		</div>
	)
}
