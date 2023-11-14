import { FC } from "react"
import TitleUnderline from "../TitleUnderline"
import { User, Award, Wrench } from "lucide-react"
import SubTitleUnderline from "../SubTitleUnderline"
import Button from "../Button"

interface PorQueNosotrosProps {}

const PorQueNosotros: FC<PorQueNosotrosProps> = ({}) => {
	return (
		<div className=" mx-auto flex justify-center items-center flex-col gap-12 px-6 ">
			<div className=" max-w-[500px] flex justify-center items-center flex-col gap-6">
				<TitleUnderline>¿Por qué nosotros?</TitleUnderline>
				<p className="text-center text-gray-400">
					We are one of the leading auto repair shops
					serving customers in Tucson. All mechanic services
					are performed by highly qualified mechanics.
				</p>
			</div>
			<div className="max-w-[500px] md:max-w-none flex flex-col gap-8 md:grid grid-cols-3 ">
				{/* TRABAJO */}
				<div className="flex flex-col items-center text-center gap-4">
					<SubTitleUnderline
						icon={
							<User className="text-blue-osa w-8 h-8" />
						}
					>
						Cada trabajo es personal
					</SubTitleUnderline>
					<p className="text-gray-500 ">
						If you want the quality you would expect from
						the dealership, but with a more personal and
						friendly atmosphere, you have found it.
					</p>
				</div>
				{/* ESTANDARES */}
				<div className="flex flex-col items-center text-center gap-4">
					<SubTitleUnderline
						icon={
							<Award className="text-blue-osa w-8 h-8" />
						}
					>
						Estándares Profesionales
					</SubTitleUnderline>
					<p className="text-gray-500 ">
						Our auto repair shop is capable of servicing a
						variety of models. We only do the work that is
						needed to fix your problem.
					</p>
				</div>

				{/* MATERIALES */}
				<div className="flex flex-col items-center text-center gap-4">
					<SubTitleUnderline
						icon={
							<Wrench className="text-blue-osa w-8 h-8" />
						}
					>
						La Mejor Maquinaria
					</SubTitleUnderline>
					<p className="text-gray-500 ">
						We have invested in all the latest specialist
						tools and diagnostic software that is
						specifically tailored for the software in your
						vehicle.
					</p>
				</div>
			</div>
			<Button>Leer mas</Button>
		</div>
	)
}
export default PorQueNosotros
