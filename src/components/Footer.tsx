import {
	ChevronUp,
	Mail,
	MapPinned,
	Phone,
} from "lucide-react"
import React from "react"
import SubTitleUnderline from "./SubTitleUnderline"
import ScrollToTopButton from "./ScrollToTopButton"

const items = [
	{
		text: "Ramírez 2664, Mendoza",
		icon: <MapPinned className="w-6 h-6" />,
	},
	{
		text: "261273612",
		icon: <Phone className="w-6 h-6" />,
	},
	{
		text: "email@email.com",
		icon: <Mail className="w-6 h-6" />,
	},
]

const days = [
	{
		name: "Lunes: ",
		hour: "8:30 - 12:30, 13:30 - 17:30",
	},
	{
		name: "Martes: ",
		hour: "8:30 - 12:30, 13:30 - 17:30",
	},
	{
		name: "Miércoles: ",
		hour: "8:30 - 12:30, 13:30 - 17:30",
	},
	{
		name: "Jueves: ",
		hour: "8:30 - 12:30, 13:30 - 17:30",
	},
	{
		name: "Viernes: ",
		hour: "8:30 - 12:30, 13:30 - 17:30",
	},
	{
		name: "Sábado: ",
		hour: "Cerrado",
	},
	{
		name: "Domingo: ",
		hour: "Cerrado",
	},
]

export default function Footer() {
	return (
		<div className="bg-black text-gray-osa ">
			<div className="relative container mx-auto py-6 px-6 overflow-hidden">
				<div className="flex flex-col gap-6">
					<div className=" grid sm:grid-cols-3 gap-4">
						{items.map(item => {
							return (
								<div
									key={item.text}
									className="flex gap-2  sm:justify-center"
								>
									<div className="w-6 h-6">{item.icon}</div>
									<p>{item.text}</p>
								</div>
							)
						})}
					</div>
					<hr className="border-gray-300" />
					<div className="flex flex-wrap gap-6 md:gap-12">
						<div className="flex flex-col gap-4">
							<SubTitleUnderline
								smallUnderline
								toLeft
								isGray
								smallText
							>
								Sobre el taller
							</SubTitleUnderline>
							<div className="text-sm text-gray-300">
								<p>Tucson, Arizona 80210</p>
								<p>501 Archwood Lane</p>
								<div className="flex gap-4">
									<p>Mobile:</p>
									<p>{"(520) 577 2710"}</p>
								</div>
								<div className="flex gap-4">
									<p>Mobile:</p>
									<p>{"(520) 577 2710"}</p>
								</div>
								<div className="flex gap-4">
									<p>Email:</p>
									<p>email@email.com</p>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-4">
							<SubTitleUnderline
								smallUnderline
								toLeft
								isGray
								smallText
							>
								Nuestros servicios
							</SubTitleUnderline>
							<div className="text-sm text-gray-300">
								<p>Tucson, Arizona 80210</p>
								<p>501 Archwood Lane</p>
								<div className="flex gap-4">
									<p>Mobile:</p>
									<p>{"(520) 577 2710"}</p>
								</div>
								<div className="flex gap-4">
									<p>Mobile:</p>
									<p>{"(520) 577 2710"}</p>
								</div>
								<div className="flex gap-4">
									<p>Email:</p>
									<p>email@email.com</p>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<SubTitleUnderline
								smallUnderline
								toLeft
								isGray
								smallText
							>
								Horarios
							</SubTitleUnderline>
							<table className="text-start text-sm text-gray-300">
								{days.map(day => {
									return (
										<tr
											className=""
											key={day.name}
										>
											<th>
												<p className="text-start">
													{day.name}
												</p>
											</th>
											<th className="text-start pl-4">
												{" "}
												{day.hour}
											</th>
										</tr>
									)
								})}
							</table>
						</div>
					</div>
				</div>
				{/* Scroll to top button */}
				<div className="w-full absolute left-0 -translate-y-full flex justify-end ">
					<div className="px-6">
						<ScrollToTopButton />
					</div>
				</div>
			</div>
		</div>
	)
}
