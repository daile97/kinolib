import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getMediaType, getName, getTrending } from '@/lib/utils'
import Image from 'next/image'
import { Carousel } from './ui/Carousel'
import { Slide } from './ui/Slide'
import { Button } from './ui/Button'
import { RxStarFilled } from 'react-icons/rx'
import Link from 'next/link'

export const HomeHero = async () => {
  const { results: movies } = await getTrending()

  return (
    <section className="mt-5 w-full aspect-video">
      <Carousel>
        {movies.map(movie => (
          <Slide
            key={movie.id}
            variant="full"
          >
            <Image
              src={getImageUrl(
                imageConfigs.backdrop.lg.route,
                movie.backdrop_path || ''
              )}
              width={imageConfigs.backdrop.lg.width}
              height={imageConfigs.backdrop.lg.height}
              alt="movie backdrop"
              className="w-full h-full block rounded-md"
            />
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)]" />
            <div className="absolute px-5 py-3 top-1/2 left-0">
              <h2 className="text-md md:text-lg lg:text-2xl font-bold">
                {getName(movie)}
              </h2>
              <h3 className="flex gap-2 mb-1">
                <span className="text-sm md:text-md">
                  {getMediaType(movie)}
                </span>
                <span className="flex items-center gap-1 text-yellow-400 font-semibold text-sm md:text-md">
                  <RxStarFilled/>
                  {movie.vote_average.toFixed(1)}
                </span>
              </h3>
              <Button
                variant="primary"
                className="px-2 md:px-3 py-1 text-sm font-semibold"
              >
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
    </section>
  )
}
