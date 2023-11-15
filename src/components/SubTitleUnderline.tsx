import { serpentine_icg } from "@/fonts"
import { FC, ReactNode } from "react"

interface SubTitleUnderlineProps {
	children: ReactNode
	isOrange?: boolean
	icon?: ReactNode
}

const SubTitleUnderline: FC<SubTitleUnderlineProps> = ({
	children,
	isOrange,
	icon,
}) => {
	return (
		<div className=" flex gap-2 flex-col">
			{icon && <div className="w-min mx-auto">{icon}</div>}
			<h3
				className={`${serpentine_icg.className} text-xl font-light`}
			>
				{children}
			</h3>
			<div
				className={`w-1/4 mx-auto border-t-2 ${
					isOrange ? "border-orange-osa" : "border-blue-osa"
				}`}
			></div>
		</div>
	)
}
export default SubTitleUnderline
