import { FC } from "react"
import { serpentine_icg } from "@/fonts"
import Button from "../Button"

interface PedirTurnoBannerProps {}

const PedirTurnoBanner: FC<
	PedirTurnoBannerProps
> = ({}) => {
	return (
		<section className=" bg-gray-osa py-12 px-6 flex flex-col md:flex-row justify-center items-center gap-4  relative">
			<h3 className="text-center font-bold uppercase  text-lg">
				Pedi un turno con nuestro formulario online
			</h3>
			<Button>Pedir turno</Button>
		</section>
	)
}
export default PedirTurnoBanner
