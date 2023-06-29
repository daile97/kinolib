import { IMovieBasicInfo, ITvBasicInfo } from '@/lib/types'
import { Carousel } from './ui/Carousel'
import { FC } from 'react'
import { Slide } from './ui/Slide'
import Image from 'next/image'
import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getMediaType, getName } from '@/lib/utils'
import { SlideHoverLayer } from './ui/SlideHoverLayer'

interface IProps {
  movies: IMovieBasicInfo[] | ITvBasicInfo[]
}

export const Recommendations: FC<IProps> = ({ movies }) => {
  const { backdrop } = imageConfigs
  return (
    <section>
      <h2 className="font-bold text-xl mb-2">Phim đề xuất</h2>
      <Carousel>
        {movies.map(movie => (
          <Slide
            key={movie.id}
            variant="horizontal"
          >
            <Image
              src={getImageUrl(backdrop.sm.route, movie.backdrop_path || '')}
              alt="movie image"
              width={backdrop.sm.width}
              height={backdrop.sm.height}
              className="w-full h-full block rounded-md"
            />
            <SlideHoverLayer
              href={`/${getMediaType(movie) === 'Phim bộ' ? 'phim-bo' : 'phim-le'}/${movie.id}`}
              title={getName(movie)}
            />
          </Slide>
        ))}
      </Carousel>
    </section>
  )
}
