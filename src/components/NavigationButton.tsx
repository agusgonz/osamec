"use client"

import * as React from "react"
import Link from "next/link"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/NavigationMenu"

import { FC } from "react"
import { item } from "./Navbar"

interface NavigationButtonProps {
	item: item
}

const NavigationButton: FC<NavigationButtonProps> = ({
	item,
}) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-none">
						{item.text}
					</NavigationMenuTrigger>
					<NavigationMenuContent className=" min-w-[160px] border border-gray-300 p-4 flex flex-col bg-gray-osa mt-2 gap-2">
						{item.subItems?.map(item => {
							return (
								<Link
									key={item.text}
									href={item.href}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()} text-gray-600  hover:text-gray-900`}
									>
										{item.text}
									</NavigationMenuLink>
								</Link>
							)
						})}
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

export default NavigationButton
