import logo from "../../public/images/logo/logo-completo-color.svg"
import { rotis_sans_serif, serpentine_icg } from "@/fonts"

import Image from "next/image"
import PorQueNosotros from "@/components/madeSections/PorQueNosotros"
import PedirTurnoBanner from "@/components/madeSections/PedirTurnoBanner"

export default function Page() {
	return (
		<div className="text-gray-600 ">
			<div className="max-w-[500px] lg:h-[250px] flex justify-center sm:my-4 px-6 mx-auto">
				<Image
					src={logo}
					alt={""}
					className="w-full h-full object-contain"
				/>
			</div>

			<PedirTurnoBanner />
			<div className="container mx-auto">
				<PorQueNosotros />
			</div>
			<div className="h-[200px]">a</div>
		</div>
	)
}
