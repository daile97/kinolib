import { CastCard } from '@/components/CastCard'
import { DetailHero } from '@/components/DetailHero'
import { Info } from '@/components/Info'
import { getMovieDetails } from '@/lib/utils'

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const data = await getMovieDetails(params.id)
  return (
    <main className="px-5 md:px-12 lg:px-40">
      <DetailHero filePath={data.backdrop_path || ''} />
      <Info
        title={data.title}
        overview={data.overview}
        tagline={data.tagline}
      />
      <div className="grid grid-cols-4 w-1/3 mx-auto">
        {data.credits.cast.slice(0, 8).map(cast => (
          <CastCard
            key={cast.id}
            filePath={cast.profile_path}
            name={cast.name}
          />
        ))}
      </div>
    </main>
  )
}

export default MovieDetailPage
