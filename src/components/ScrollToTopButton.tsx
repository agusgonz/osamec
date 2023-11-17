"use client"
import { ChevronUp } from "lucide-react"
import { FC } from "react"

interface ScrollToTopButtonProps {}

const ScrollToTopButton: FC<
	ScrollToTopButtonProps
> = ({}) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<button
			onClick={scrollToTop}
			className="p-2 border border-gray-300"
		>
			<ChevronUp />
		</button>
	)
}
export default ScrollToTopButton
