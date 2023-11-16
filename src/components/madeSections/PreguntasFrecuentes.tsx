import { FC } from "react"
import SubTitleUnderline from "../SubTitleUnderline"
import AccordionButton from "../AccordionButton"
import { ChevronDownCircle } from "lucide-react"

const questionsAndAnswers = [
	{
		question:
			"Should I consider using synthetic motor oil?",
		answer:
			"Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.",
	},
	{
		question:
			"What parts should be replaced at what intervals?",
		answer:
			"Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.",
	},
	{
		question: "How do I keep track of routine maintenance?",
		answer:
			"Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.",
	},
]

interface PreguntasFrecuentesProps {}

const PreguntasFrecuentes: FC<
	PreguntasFrecuentesProps
> = ({}) => {
	return (
		<div>
			<div className="flex flex-col gap-6 text-sm">
				<SubTitleUnderline
					toLeft
					smallUnderline
				>
					Preguntas Frecuentes
				</SubTitleUnderline>
				<div className="flex flex-col">
					{questionsAndAnswers.map((item, itemIndex) => {
						return (
							<div
								className={`border-x-2 border-b-2 border-gray-osa px-4 py-4 ${
									itemIndex == 0 && "border-t-2"
								}`}
							>
								<AccordionButton
									trigger={
										<div className="w-full text-gray-500 text-start flex gap-2">
											<ChevronDownCircle className="w-5 text-blue-osa" />
											<p className="leading-6">
												{item.question}
											</p>
										</div>
									}
									body={
										<div className="pt-8">
											{item.answer}
										</div>
									}
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
export default PreguntasFrecuentes
