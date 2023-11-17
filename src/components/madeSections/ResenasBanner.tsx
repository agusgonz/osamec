import { PencilLine } from "lucide-react"
import { FC } from "react"

interface ReseñasBannerProps {}

const ReseñasBanner: FC<ReseñasBannerProps> = ({}) => {
	return (
		<div className="relative">
			<div className="w-full h-full absolute bg-[url('/images/image-6.jpg')] bg-fixed bg-cover -z-10 ">
				<div className="w-full h-full bg-[rgba(0,0,0,0.7)] "></div>
			</div>

			<div className="container mx-auto flex flex-col text-center items-center  px-6 gap-6 italic  text-white  py-12">
				<PencilLine className="w-12 h-12  " />

				<p>
					"Un lujo el Taller, en todo sentido, tanto en lo
					técnico como en lo humano. Nos hicieron una
					atención especial por ser viajeros. Súper
					agradecido al Sr. Miguel y a todo su equipo de
					trabajo. Altamente recomendable 👌"
				</p>

				<div className=" flex gap-2 flex-col">
					<div
						className={`w-1/4 mx-auto border-t-2 
				`}
					></div>

					<p className={` text-sm font-light`}>
						Guillermo Mastroianni
					</p>
				</div>
			</div>
		</div>
	)
}
export default ReseñasBanner
