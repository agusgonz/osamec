import { FC } from "react"
import SubTitleUnderline from "../SubTitleUnderline"
import Button from "../Button"

interface NuestraMisionProps {}

const NuestraMision: FC<NuestraMisionProps> = ({}) => {
	return (
		<div className="flex flex-col gap-6">
			<div className="w-min ">
				<SubTitleUnderline
					toLeft
					smallUnderline
				>
					Nuestra Misión
				</SubTitleUnderline>
			</div>

			<p className="text-sm text-gray-500 font-light">
				We offer a full range of garage services to vehicle
				owners located in Tucson area. All mechanic services
				are performed by highly qualified mechanics. We can
				handle any car problem.
			</p>
			<p className="text-sm text-gray-500">
				We offer a full range of garage services to vehicle
				owners in Tucson. Our professionals know how to
				handle a wide range of car services. Whether you
				drive a passenger car or medium sized truck or SUV,
				our mechanics strive to ensure that your vehicle
				will be performing at its best before leaving our
				car shop.
			</p>

			<div>
				<Button>Leer más</Button>
			</div>
		</div>
	)
}
export default NuestraMision
