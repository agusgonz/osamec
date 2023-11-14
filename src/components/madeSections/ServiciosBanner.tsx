import Image from "next/image"
import { FC } from "react"
import image1 from "../../../public/images/image-2.jpg"
import TitleUnderline from "../TitleUnderline"
import ListItem from "../ListItem"
import Button from "../Button"

interface ServiciosBannerProps {}

const ServiciosBanner: FC<ServiciosBannerProps> = ({}) => {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-2 bg-gray-osa ">
			<div className="relative w-full min-h-[250px]">
				<Image
					src={image1}
					fill
					placeholder="blur"
					className="object-cover"
					alt={
						"Imagen repesentativa inflando rueda de auto"
					}
				/>
			</div>

			<div className="max-w-[500px] mx-auto flex flex-col items-center gap-6 p-6">
				<TitleUnderline>Servicios</TitleUnderline>
				<p className="text-center text-gray-400">
					We provide top notch maintenance service for all
					types of vehicles. We are certified to service and
					repair the following makes:
				</p>
				<ul className="grid grid-cols-3 gap-x-2 gap-y-1 text-gray-500">
					<ListItem>General Motors</ListItem>
					<ListItem>Land Rover</ListItem>
					<ListItem>Mercedes</ListItem>
					<ListItem>Nissan</ListItem>
					<ListItem>Saab</ListItem>
					<ListItem>Renault</ListItem>
					<ListItem>Nissan</ListItem>
					<ListItem>Saab</ListItem>
					<ListItem>Renault</ListItem>
				</ul>
				<Button isSecondary>Ver lista completa</Button>
			</div>
		</div>
	)
}
export default ServiciosBanner
