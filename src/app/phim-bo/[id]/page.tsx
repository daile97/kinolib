import { Cast } from '@/components/Cast'
import { DetailHero } from '@/components/DetailHero'
import { Info } from '@/components/Info'
import { MovieImage } from '@/components/MovieImage'
import { Recommendations } from '@/components/Recommendations'
import { Seasons } from '@/components/Seasons'
import { Main } from '@/components/ui/Main'
import { origin } from '@/lib/pageConfigs'
import { getTVDetails } from '@/lib/utils'

const TVDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getTVDetails(params.id)
  const trailer = data.videos.results.find(
    video =>
      video.site === 'YouTube' &&
      (video.type === 'Trailer' || video.type === 'Teaser')
  )
  return (
    <Main>
      <DetailHero
        video={
          trailer
            ? `https://www.youtube.com/embed/${trailer?.key}?controls=0&origin=${origin}`
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
      {data.recommendations.results.length > 0 && (
        <Recommendations movies={data.recommendations.results} />
      )}
    </Main>
  )
}

export default TVDetailPage
