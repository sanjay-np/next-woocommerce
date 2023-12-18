import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductImageCarousel() {
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
				<div className="gallery-item">
					<img src='/assets/images/single/1-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/2-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/3-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/4-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/1-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/2-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/3-big.jpg' />
				</div>
				<div className="gallery-item">
					<img src='/assets/images/single/4-big.jpg' />
				</div>
			</Carousel>

		</div>
	)
}
