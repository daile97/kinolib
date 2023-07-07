import { AdditionalInfo } from '@/components/AdditionalInfo'
import { Cast } from '@/components/Cast'
import { Collection } from '@/components/Collection'
import { DetailHero } from '@/components/DetailHero'
import { Info } from '@/components/Info'
import { MovieImage } from '@/components/MovieImage'
import { Recommendations } from '@/components/Recommendations'
import { getMovieDetails } from '@/lib/utils'

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getMovieDetails(params.id)
  const trailer = data.videos.results.find(
    video =>
      video.site === 'YouTube' &&
      (video.type === 'Trailer' || video.type === 'Teaser')
  )
  return (
    <main className="px-5 md:px-12 lg:px-40 flex flex-col gap-3">
      <DetailHero
        video={
          trailer
            ? `https://www.youtube.com/embed/${trailer?.key}?controls=0`
            : null
        }
        filePath={data.backdrop_path || ''}
      />
      <Info
        title={data.title}
        overview={data.overview}
        tagline={data.tagline}
        rating={data.vote_average}
        genres={data.genres}
      />
      <Cast casts={data.credits.cast.slice(0, 8)} />
      <AdditionalInfo
        originalTitle={data.original_title}
        releaseDate={data.release_date}
        runtime={data.runtime}
      />
      {data.belongs_to_collection && (
        <Collection collection={data.belongs_to_collection} />
      )}
      <MovieImage images={data.images.backdrops} />
      {data.recommendations.results.length > 0 && (
        <Recommendations movies={data.recommendations.results} />
      )}
    </main>
  )
}

export default MovieDetailPage
