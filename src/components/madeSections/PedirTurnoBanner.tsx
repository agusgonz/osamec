import { FC } from "react"
import { serpentine_icg } from "@/fonts"

interface PedirTurnoBannerProps {}

const PedirTurnoBanner: FC<
	PedirTurnoBannerProps
> = ({}) => {
	return (
		<section className=" bg-gray-osa my-16 py-12 px-3 flex flex-col md:flex-row justify-center items-center gap-4  text-lg relative">
			<h3 className="text-center font-bold uppercase ">
				Pedi un turno con nuestro formulario online
			</h3>
			<button
				className={`${serpentine_icg.className} bg-blue-osa px-4 py-2 text-white `}
			>
				pedir un turno
			</button>
		</section>
	)
}
export default PedirTurnoBanner
