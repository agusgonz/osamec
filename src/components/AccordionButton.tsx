import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/Accordion"
import { FC, ReactNode } from "react"
import { item } from "./Navbar"

interface AccordionButtonProps {
	trigger: string | ReactNode
	body: string | ReactNode
}

const AccordionButton: FC<AccordionButtonProps> = ({
	trigger,
	body,
}) => {
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full"
		>
			<AccordionItem value="item-1">
				<AccordionTrigger className="w-full">
					{trigger}
				</AccordionTrigger>
				<AccordionContent>{body}</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
export default AccordionButton
