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
import { navItem } from "./Navbar"

interface NavigationButtonProps {
	navItem: navItem
}

const NavigationButton: FC<NavigationButtonProps> = ({
	navItem,
}) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-none">
						{navItem.text}
					</NavigationMenuTrigger>
					<NavigationMenuContent className=" min-w-[160px] border border-gray-300 p-4 flex flex-col bg-gray-osa mt-2 gap-2">
						{navItem.subItems?.map(item => {
							return (
								<Link
									href={item.href}
									legacyBehavior
									passHref
								>
									<NavigationMenuLink
										className={`${navigationMenuTriggerStyle()}  hover:underline`}
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
