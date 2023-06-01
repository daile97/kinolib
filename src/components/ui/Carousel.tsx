'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { FC, HTMLAttributes, useCallback, useEffect, useState } from 'react'
import { Button } from './Button'
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx'

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export const Carousel: FC<IProps> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    slidesToScroll: 'auto' 
  })
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false)
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollNext(emblaApi.canScrollNext())
    setCanScrollPrev(emblaApi.canScrollPrev())
    console.log(emblaApi.selectedScrollSnap(), emblaApi.slidesInView())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setCanScrollNext(emblaApi.canScrollNext())
    setCanScrollPrev(emblaApi.canScrollPrev())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden group relative"
    >
      <div className="flex gap-2">{children}</div>
      {canScrollPrev && (
        <Button
          onClick={scrollPrev}
          variant="icon"
          className="absolute rounded-full left-5 top-1/2 -translate-y-[calc(50%+20px)] opacity-0 group-hover:opacity-100"
        >
          <RxChevronLeft />
        </Button>
      )}
      {canScrollNext && (
        <Button
          onClick={scrollNext}
          variant="icon"
          className="absolute rounded-full right-5 top-1/2 -translate-y-[calc(50%+20px)] opacity-0 group-hover:opacity-100"
        >
          <RxChevronRight />
        </Button>
      )}
    </div>
  )
}
