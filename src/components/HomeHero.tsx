import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getMediaType, getName, getTrending } from '@/lib/utils'
import Image from 'next/image'
import { Carousel } from './ui/Carousel'
import { Slide } from './ui/Slide'
import { Button } from './ui/Button'
import { RxStar } from 'react-icons/rx'

export const HomeHero = async () => {

  const { results: movies } = await getTrending()

  return (
    <section className="mt-5">
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
              alt="backdrop"
              className="w-full h-full block"
            />
            <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)]" />
            <div className="absolute px-5 top-1/2 left-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                {getName(movie)}
              </h2>
              <h3 className="flex gap-2 mb-1">
                <span>
                  {getMediaType(movie)}
                </span>
                <span className='flex items-center gap-1 text-yellow-400 font-semibold'>
                  <RxStar />
                  {movie.vote_average.toFixed(1)}
                </span>
              </h3>
              <Button
                variant="primary"
                className="px-3 py-1"
              >
                Xem chi tiết
              </Button>
            </div>
          </Slide>
        ))}
      </Carousel>
    </section>
  )
}
