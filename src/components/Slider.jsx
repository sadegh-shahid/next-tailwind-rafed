import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionBigBox } from "@/components/ExportComponents";
import 'swiper/swiper-bundle.css';
export default function Slider() {

    const [emblaRef] = useEmblaCarousel({ loop: false })

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>

        </div>
    )
}
