import { Discover } from '@/components/Discover'
import { Main } from '@/components/ui/Main'

const MoviePage = async () => {
  return (
    <Main>
      <h1 className="font-bold text-xl md:text-2xl mt-3">Phim lẻ</h1>
      <Discover mediaType="movie" />
    </Main>
  )
}

export default MoviePage
