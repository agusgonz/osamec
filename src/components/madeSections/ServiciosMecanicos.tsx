import { FC, ReactElement } from "react"
import TitleUnderline from "../TitleUnderline"
import Image, { StaticImageData } from "next/image"
import image3 from "../../../public/images/image-3.jpg"
import image4 from "../../../public/images/image-4.jpg"
import image5 from "../../../public/images/image-5.jpg"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { serpentine_icg } from "@/fonts"
import Button from "../Button"

const items = [
	{
		text: "Diagnostico de Motor",
		href: "",
		image: image3,
	},
	{
		text: "Aceite y Filtros",
		href: "",
		image: image4,
	},
	{
		text: "Control de frenos",
		href: "",
		image: image5,
	},
]

interface CardProps
	extends React.HTMLAttributes<HTMLDivElement> {
	src: StaticImageData
	alt: string
	text: string
	link: string
	isLastElement?: boolean
}

const Card: FC<CardProps> = ({
	className,
	src,
	alt,
	text,
	link,
	isLastElement,
}) => {
	return (
		<Link
			href={link}
			className={cn(className, "")}
		>
			<div className="relative h-[150px]">
				<Image
					fill
					sizes="30vw"
					placeholder="blur"
					src={src}
					alt={alt}
					className="object-cover"
				/>
			</div>

			<div
				className={`bg-gray-osa flex justify-between px-4 py-2  border-gray-300 ${
					!isLastElement && "sm:border-r"
				}`}
			>
				<p className={`${serpentine_icg.className}`}>
					{text}
				</p>
				<ChevronRight className="text-blue-osa" />
			</div>
		</Link>
	)
}

interface ServiciosMecanicosProps {}

const ServiciosMecanicos: FC<
	ServiciosMecanicosProps
> = ({}) => {
	return (
		<div className="mx-auto flex justify-center items-center flex-col gap-12 px-6 ">
			<div className="max-w-[500px]  flex flex-col gap-6 items-center mx-auto">
				<TitleUnderline>Servicios Mecánicos</TitleUnderline>
				<p className="text-center text-gray-400">
					We offer a full range of garage services to
					vehicle owners located in Tucson area. Our
					professinals know how to handle a wide range of
					car services.
				</p>
			</div>

			<div className="w-full md:max-w-none flex flex-col sm:grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-0">
				{items.map((item, itemIndex) => {
					return (
						<Card
							key={item.text}
							src={item.image}
							alt={item.text}
							text={item.text}
							link={item.href}
							isLastElement={
								itemIndex + 1 == items.length ? true : false
							}
						/>
					)
				})}
			</div>

			<Button>Conoce más</Button>
		</div>
	)
}
export default ServiciosMecanicos
