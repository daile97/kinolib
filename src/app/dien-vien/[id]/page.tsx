import { Main } from '@/components/ui/Main'
import { imageConfigs } from '@/lib/tmdb'
import { getImageUrl, getPersonDetail } from '@/lib/utils'
import Image from 'next/image'
import fallback from '../../../../public/poster_fallback.png'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Carousel } from '@/components/ui/Carousel'
import { Slide } from '@/components/ui/Slide'
import backdropFallback from '../../../../public/backdrop_fallback.png'
import { blurDataUrl } from '@/lib/pageConfigs'
import { SlideHoverLayer } from '@/components/ui/SlideHoverLayer'

const PersonDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getPersonDetail(Number(params.id))
  const { profile, backdrop, poster } = imageConfigs
  return (
    <Main>
      <section className="mt-5 flex flex-col md:flex-row gap-3">
        <div className="w-[200px] rounded-md overflow-hidden">
          <Image
            src={
              getImageUrl(profile.lg.route, data.profile_path || '') || fallback
            }
            width={profile.lg.width}
            height={profile.lg.height}
            alt="profile"
            className="block w-full"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </div>
        <div>
          <h1 className="text-3xl xl:text-4xl xl:font-extrabold font-bold">
            {data.name}
          </h1>
          <ul className="font-semibold">
            <li>Ngày sinh: {new Date(data.birthday).toLocaleDateString()}</li>
            <li>Nơi sinh: {data.place_of_birth}</li>
            <li>
              Tiểu sử: <span>{data.biography || 'Đang cập nhật'}</span>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <SectionTitle className="mb-0">
          Phim có sự góp mặt của <span className='italic'>{data.name}</span>
        </SectionTitle>
        <h3 className='my-2 font-bold text-lg'>Phim lẻ</h3>
        <Carousel>
          {data.movie_credits.cast.map((movie, i) => (
            <Slide
              variant="horizontal"
              key={movie.id}
            >
              <Image
                src={
                  getImageUrl(backdrop.sm.route, movie.backdrop_path || '') ||
                  backdropFallback
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
                href={`/phim-le/${movie.id}`}
                title={movie.title}
              />
            </Slide>
          ))}
        </Carousel>
        <h3 className='my-2 font-bold text-lg'>Phim bộ</h3>
        <Carousel>
          {data.tv_credits.cast.map((movie, i) => (
            <Slide
              variant="vertical"
              key={movie.id}
            >
              <Image
                src={
                  getImageUrl(poster.sm.route, movie.poster_path || '') ||
                  fallback
                }
                alt="movie image"
                width={poster.sm.width}
                height={poster.sm.height}
                className="w-full h-full block rounded-md"
                priority={i === 0}
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
              <SlideHoverLayer
                href={`/phim-bo/${movie.id}`}
                title={movie.name}
              />
            </Slide>
          ))}
        </Carousel>
      </section>
    </Main>
  )
}
export default PersonDetailPage
