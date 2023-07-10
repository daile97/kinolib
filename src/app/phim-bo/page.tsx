import { Discover } from '@/components/Discover'
import { Main } from '@/components/ui/Main'

const TVPage = () => {
  return (
    <Main>
      <h1 className="text-xl md:text-2xl font-bold mt-3">Phim bộ</h1>
      <Discover mediaType="tv" />
    </Main>
  )
}

export default TVPage
