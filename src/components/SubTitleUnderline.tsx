import { serpentine_icg } from "@/fonts"
import { FC, ReactNode } from "react"

interface SubTitleUnderlineProps {
	children: ReactNode
	icon?: ReactNode
}

const SubTitleUnderline: FC<SubTitleUnderlineProps> = ({
	children,
	icon,
}) => {
	return (
		<div className=" flex gap-2 flex-col">
			{icon && <div className="w-min mx-auto">{icon}</div>}
			<h2
				className={`${serpentine_icg.className} text-xl font-light`}
			>
				{children}
			</h2>
			<div className="w-1/4 mx-auto border-t-2 border-orange-osa"></div>
		</div>
	)
}
export default SubTitleUnderline
