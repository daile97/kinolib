import { Cast } from '@/components/Cast'
import { DetailHero } from '@/components/DetailHero'
import { Info } from '@/components/Info'
import { MovieImage } from '@/components/MovieImage'
import { Recommendations } from '@/components/Recommendations'
import { Seasons } from '@/components/Seasons'
import { getTVDetails } from '@/lib/utils'

const TVDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTVDetails(params.id)
  const trailer = data.videos.results.find(
    video =>
      video.site === 'YouTube' &&
      (video.type === 'Trailer' || video.type === 'Teaser')
  )
  return (
    <main className="px-5 md:px-10 lg:px-40 flex flex-col gap-3">
      <DetailHero
        video={
          trailer
            ? `https://www.youtube.com/embed/${trailer?.key}?controls=0`
            : null
        }
        filePath={data.backdrop_path || ''}
      />
      <Info
        title={data.name}
        overview={data.overview}
        tagline={data.tagline}
        rating={data.vote_average}
        genres={data.genres}
      />
      <Cast casts={data.credits.cast.slice(0, 8)} />
      <Seasons seasons={data.seasons} />
      <MovieImage images={data.images.backdrops} />
      <Recommendations movies={data.recommendations.results} />
    </main>
  )
}

export default TVDetailPage
