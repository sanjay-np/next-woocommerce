'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider(props) {
    const {items} = props
    return (
        <div className="slider-wrapper">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                showStatus={false}
                interval={5000}
                infiniteLoop={true}
                renderArrowPrev={(clickHandler, hasPrev) =>
                    hasPrev && (
                        <div onClick={clickHandler} className="slider-prev">
                            <ChevronLeft size={48} strokeWidth={1.5} color="#fff" />
                        </div>
                    )
                }

                renderArrowNext={(clickHandler, hasNext) =>
                    hasNext && (
                        <div onClick={clickHandler} className="slider-next">
                            <ChevronRight size={48} strokeWidth={1.5} color="#fff" />
                        </div>
                    )
                }
            >
                {items.map((item, index) => (
                    <div className="slider-item" key={index}>
                        <img src={item?.bannerImage.mediaItemUrl} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}