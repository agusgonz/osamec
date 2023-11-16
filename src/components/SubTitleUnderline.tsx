import { serpentine_icg } from "@/fonts"
import { FC, ReactNode } from "react"

interface SubTitleUnderlineProps {
	children: ReactNode
	isOrange?: boolean
	icon?: ReactNode
	toLeft?: boolean
	smallUnderline?: boolean
}

const SubTitleUnderline: FC<SubTitleUnderlineProps> = ({
	children,
	isOrange,
	icon,
	toLeft,
	smallUnderline,
}) => {
	return (
		<div className=" flex gap-2 flex-col">
			{icon && <div className="w-min mx-auto">{icon}</div>}
			<h3
				className={`${serpentine_icg.className} text-xl font-light whitespace-nowrap`}
			>
				{children}
			</h3>
			<div
				className={`  border-t-2 ${
					isOrange ? "border-orange-osa" : "border-blue-osa"
				}
				${!toLeft && "mx-auto "}
				${smallUnderline ? ` w-[30px]` : "w-1/4"}
				`}
			></div>
		</div>
	)
}
export default SubTitleUnderline
