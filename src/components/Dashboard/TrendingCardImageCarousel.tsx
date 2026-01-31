"use client"
import { useCallback, useEffect } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './CarouselDotButtons'
import Image, { StaticImageData } from 'next/image'

type item = string | StaticImageData

type PropType = {
    slides: item[]
}

const TrendingCardImageCarousel = (props: PropType) => {
    const { slides } = props
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        autoplay.stop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
    )

    //   useEffect(() => {
    //     if (!emblaApi) return
    //     const autoplay = emblaApi?.plugins()?.autoplay
    //     if (!autoplay) return

    //     autoplay.play()
    //   }, [emblaApi])

    return (
        <div className="">
            <div className="" ref={emblaRef}>
                <div className="">
                    {slides.map((item, index) => (
                        <div className="" key={index}>
                            <Image src={item} alt="img" />
                        </div>
                    ))}
                </div>
            </div>

            <div className=" absolute bottom-2 w-full z-20 flex">
                <div className="flex gap-2 m-auto">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`transition-all duration-300 ease-linear ${selectedIndex === index ? "border border-[#E5E5E5]  bg-white" : " bg-white/50"}  rounded-full size-[6.63px]`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrendingCardImageCarousel
