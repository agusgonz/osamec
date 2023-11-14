import { serpentine_icg } from "@/fonts"
import { FC, ReactNode } from "react"

interface ButtonProps {
	children: ReactNode
	isSecondary?: boolean
	isOrange?: boolean
}

const Button: FC<ButtonProps> = ({
	children,
	isSecondary,
	isOrange,
}) => {
	return (
		<button
			className={`${serpentine_icg.className} 
			
			${
				isSecondary
					? `${
							isOrange
								? "text-orange-osa border-orange-osa"
								: "text-blue-osa border-blue-osa"
					  } border`
					: `${
							isOrange ? "bg-orange-osa" : "bg-blue-osa"
					  } text-white`
			}
			px-4 py-2 `}
		>
			{children}
		</button>
	)
}
export default Button
