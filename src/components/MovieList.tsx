import { Carousel } from './ui/Carousel'
import { Slide } from './ui/Slide'
import Image from 'next/image'
import { IMovieList, blurDataUrl } from '@/lib/pageConfigs'
import { getImageUrl, getMediaType, getName } from '@/lib/utils'
import { imageConfigs } from '@/lib/tmdb'
import { SlideHoverLayer } from './ui/SlideHoverLayer'
import backdropFallback from '../../public/backdrop_fallback.png'
import posterFallback from '../../public/poster_fallback.png'

interface IProps extends IMovieList {
  vertical: boolean
}

export const MovieList = async ({ getData, title, vertical }: IProps) => {
  const data = await getData()
  const { backdrop, poster } = imageConfigs
  return (
    <div>
      <h3 className="px-5 mb-2 text-zinc-300 text-md font-semibold">
        {title}
      </h3>
      <Carousel>
        {data.results.map((movie, i) => (
          <Slide
            key={movie.id}
            variant={vertical ? 'vertical' : 'horizontal'}
          >
            <Image
              src={
                getImageUrl(
                  vertical ? poster.sm.route : backdrop.sm.route,
                  vertical ? movie.poster_path || '' : movie.backdrop_path || ''
                ) || (vertical ? posterFallback : backdropFallback)
              }
              width={vertical ? poster.sm.width : backdrop.sm.width}
              height={vertical ? poster.sm.height : backdrop.sm.height}
              alt="movie image"
              className="w-full block h-full rounded-md"
              priority={i === 0}
              placeholder='blur'
              blurDataURL={blurDataUrl}
            />
            <SlideHoverLayer
              title={getName(movie)}
              href={`/${
                getMediaType(movie) === 'Phim bộ' ? 'phim-bo' : 'phim-le'
              }/${movie.id}`}
            />
          </Slide>
        ))}
      </Carousel>
    </div>
  )
}
