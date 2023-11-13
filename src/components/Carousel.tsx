"use client"
import { FC, ReactNode } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CarouselProps {
	slides: ReactNode[]
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 6000,
		autoplaySpeed: 0,
		cssEase: "linear",
	}
	return (
		<div>
			<Slider {...settings}>
				{slides.map(slide => {
					return <div key={Math.random()}>{slide}</div>
				})}
			</Slider>
		</div>
	)
}
export default Carousel
