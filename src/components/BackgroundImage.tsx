import Image, { StaticImageData } from "next/image"
import { FC } from "react"

interface BackgroundImageProps {
	src: StaticImageData
}

const BackgroundImage: FC<BackgroundImageProps> = ({
	src,
}) => {
	return (
		<Image
			className="-z-10 brightness-75"
			alt="Mountains"
			src={src}
			placeholder="blur"
			quality={100}
			fill
			sizes="100vw"
			style={{
				objectFit: "cover",
			}}
		/>
	)
}
export default BackgroundImage
