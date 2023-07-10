import { IMovieBasicInfo, ITvBasicInfo } from '@/lib/types'
import { Carousel } from './ui/Carousel'
import { FC } from 'react'
import { Slide } from './ui/Slide'
import Image from 'next/image'
import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getMediaType, getName } from '@/lib/utils'
import { SlideHoverLayer } from './ui/SlideHoverLayer'
import fallback from '../../public/backdrop_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'
import { SectionTitle } from './ui/SectionTitle'

interface IProps {
  movies: IMovieBasicInfo[] | ITvBasicInfo[]
}

export const Recommendations: FC<IProps> = ({ movies }) => {
  const { backdrop } = imageConfigs
  return (
    <section>
      <SectionTitle>Phim đề xuất</SectionTitle>
      <Carousel>
        {movies.map((movie, i) => (
          <Slide
            key={movie.id}
            variant="horizontal"
          >
            <Image
              src={
                getImageUrl(backdrop.sm.route, movie.backdrop_path || '') ||
                fallback
              }
              alt="movie image"
              width={backdrop.sm.width}
              height={backdrop.sm.height}
              className="w-full h-full block rounded-md"
              priority={i === 0}
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
            <SlideHoverLayer
              href={`/${
                getMediaType(movie) === 'Phim bộ' ? 'phim-bo' : 'phim-le'
              }/${movie.id}`}
              title={getName(movie)}
            />
          </Slide>
        ))}
      </Carousel>
    </section>
  )
}
