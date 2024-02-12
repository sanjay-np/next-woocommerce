import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGallery(props) {
	const { gallery, featured } = props
	const images = []
	images.push(featured.mediaItemUrl)
	if (gallery) {
		gallery?.map((item, index) => {
			images.push(item?.mediaItemUrl)
		})
	}
	return (
		<div className='product-gallery '>
			<Carousel
				showIndicators={false}
				autoPlay={true}
				showStatus={false}
				infiniteLoop={true}
				thumbWidth={100}
				renderArrowPrev={(clickHandler, hasPrev) =>
					hasPrev && (
						<div onClick={clickHandler} className="slider-prev">
							<ChevronLeft size={48} strokeWidth={1.5} color="#666" />
						</div>
					)
				}

				renderArrowNext={(clickHandler, hasNext) =>
					hasNext && (
						<div onClick={clickHandler} className="slider-next">
							<ChevronRight size={48} strokeWidth={1.5} color="#666" />
						</div>
					)
				}
			>
				{images?.map((item, index) => (
					<div className="gallery-item" key={index}>
						<img src={item} alt='Product Image' />
					</div>
				))}
			</Carousel>
		</div>
	)
}
