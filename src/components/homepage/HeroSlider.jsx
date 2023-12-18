'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlider() {
    return (
        <div className="intro-slider">
            <Carousel
                showThumbs={false}
                showIndicators={false}
                autoPlay={true}
                showStatus={false}
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
                <div className="slider-item">
                    <img src="/assets/images/slider/slide-1.jpg" />
                </div>
                <div className="slider-item">
                    <img src="/assets/images/slider/slide-2.jpg" />
                </div>
                <div className="slider-item">
                    <img src="/assets/images/slider/slide-3.jpg" />
                </div>
            </Carousel>
        </div>
    )
}
