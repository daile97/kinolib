'use client'

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType
} from 'embla-carousel-react'
import { FC, HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { Button } from './Button'
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx'

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const options: EmblaOptionsType = {
  align: 'start',
  dragFree: false,
  duration: 35
}

export const Carousel: FC<IProps> = ({ children }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const [canScrollNext, setCanScrollNext] = useState<boolean>(false)
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
  const [slides, setSlides] = useState<number>(0)
  const [index, setIndex] = useState<number>(0)

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return
    setSlides(emblaApi.slidesInView().length)
    setIndex(emblaApi.selectedScrollSnap())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return
    setCanScrollNext(emblaApi.canScrollNext())
    setCanScrollPrev(emblaApi.canScrollPrev())
  }, [])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollTo(index - slides)
    setIndex(emblaApi.selectedScrollSnap())
  }, [index, slides, emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollTo(index + slides)
    setIndex(emblaApi.selectedScrollSnap())
  }, [index, slides, emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.on('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect, onInit])

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden rounded-md group relative"
    >
      <div className="flex gap-3">{children}</div>
      {canScrollPrev && (
        <Button
          onClick={scrollPrev}
          variant="icon"
          className="absolute rounded-full w-8 h-8 left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        >
          <RxChevronLeft strokeWidth={0.8} />
        </Button>
      )}
      {canScrollNext && (
        <Button
          onClick={scrollNext}
          variant="icon"
          className="absolute rounded-full w-8 h-8 right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        >
          <RxChevronRight strokeWidth={0.8} />
        </Button>
      )}
    </div>
  )
}
