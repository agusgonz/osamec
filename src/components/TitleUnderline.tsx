import { serpentine_icg } from "@/fonts"
import { FC, ReactNode } from "react"

interface TitleUnderlineProps {
	children: ReactNode
}

const TitleUnderline: FC<TitleUnderlineProps> = ({
	children,
}) => {
	return (
		<div className="w-min whitespace-nowrap flex gap-3 flex-col">
			<h2
				className={`${serpentine_icg.className} text-3xl font-light`}
			>
				{children}
			</h2>
			<div className="w-1/2 mx-auto border-t-2 border-orange-osa"></div>
		</div>
	)
}
export default TitleUnderline
