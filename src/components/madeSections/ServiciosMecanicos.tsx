import { FC } from "react"
import TitleUnderline from "../TitleUnderline"

interface ServiciosMecanicosProps {}

const ServiciosMecanicos: FC<
	ServiciosMecanicosProps
> = ({}) => {
	return (
		<div className="max-w-[500px] flex flex-col gap-6 items-center mx-auto">
			<TitleUnderline>Servicios Mecánicos</TitleUnderline>
			<p className="text-center text-gray-400">
				We offer a full range of garage services to vehicle
				owners located in Tucson area. Our professinals know
				how to handle a wide range of car services.
			</p>
		</div>
	)
}
export default ServiciosMecanicos
