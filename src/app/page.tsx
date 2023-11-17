import logo from "../../public/images/logo/logo-completo-color.svg"
import { rotis_sans_serif, serpentine_icg } from "@/fonts"

import Image from "next/image"
import PorQueNosotros from "@/components/madeSections/PorQueNosotros"
import PedirTurnoBanner from "@/components/madeSections/PedirTurnoBanner"
import ServiciosBanner from "@/components/madeSections/ServiciosBanner"
import ServiciosMecanicos from "@/components/madeSections/ServiciosMecanicos"
import ReseñasBanner from "@/components/madeSections/ResenasBanner"
import NuestraMision from "@/components/madeSections/NuestraMision"
import PreguntasFrecuentes from "@/components/madeSections/PreguntasFrecuentes"

export default function Page() {
	return (
		<div className="text-gray-600 ">
			<div className="max-w-[500px] lg:h-[250px] flex justify-center  mx-auto mt-2 mb-16 px-6">
				<Image
					src={logo}
					alt={""}
					className="w-full h-full object-contain"
				/>
			</div>

			<div className="mb-16">
				<PedirTurnoBanner />
			</div>

			<div className="container mx-auto mb-16">
				<PorQueNosotros />
			</div>

			<div className="mb-16">
				<ServiciosBanner />
			</div>

			<div className="container mx-auto mb-16">
				<ServiciosMecanicos />
			</div>

			<div className="mb-16">
				<ReseñasBanner />
				<PedirTurnoBanner />
			</div>

			<div className="container mx-auto grid sm:grid-cols-2 px-6 gap-6 mb-16">
				<NuestraMision />
				<PreguntasFrecuentes />
			</div>
		</div>
	)
}
