import { Discover } from '@/components/Discover'
import { Main } from '@/components/ui/Main'

const MoviePage = async () => {
  return (
    <Main>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mt-5">
        Phim lẻ
      </h1>
      <Discover mediaType="movie" />
    </Main>
  )
}

export default MoviePage
