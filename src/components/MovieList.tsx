import { Carousel } from './ui/Carousel'
import { Slide } from './ui/Slide'
import Image from 'next/image'
import { IMovieList } from '@/lib/pageConfigs'
import { getImageUrl, getMediaType, getName } from '@/lib/utils'
import { imageConfigs } from '@/lib/tmdb'
import { Button } from './ui/Button'
import Link from 'next/link'

interface IProps extends IMovieList {
  vertical: boolean
}

export const MovieList = async ({ getData, title, vertical }: IProps) => {
  const data = await getData()
  const { backdrop, poster } = imageConfigs
  return (
    <div>
      <h3 className='px-5 mb-1 text-zinc-300 text-sm md:text-md lg:text-lg font-semibold'>{title}</h3>
      <Carousel>
        {data.results.map(movie => (
          <Slide
            key={movie.id}
            variant={vertical ? 'vertical' : 'horizontal'}
          >
            <Image
              src={getImageUrl(
                vertical ? poster.lg.route : backdrop.sm.route,
                vertical ? movie.poster_path || '' : movie.backdrop_path || ''
              )}
              width={vertical ? poster.lg.width : backdrop.sm.width}
              height={vertical ? poster.lg.height : backdrop.sm.height}
              alt="movie image"
              className="w-full block h-full rounded-md"
            />
            <div className="absolute w-full px-2 h-full rounded-md top-0 left-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm backdrop-saturate-200 flex flex-col items-center justify-center opacity-0 hover:opacity-100 gap-1">
              <h4 className="font-semibold text-sm text-center">{getName(movie)}</h4>
              <Button className="px-2 py-1 text-sm">
                <Link
                  href={`/${
                    getMediaType(movie) === 'Phim bộ' ? 'phim-bo' : 'phim-le'
                  }/${movie.id}`}
                >
                  Xem chi tiết
                </Link>
              </Button>
            </div>
          </Slide>
        ))}
      </Carousel>
    </div>
  )
}
