import { Discover } from '@/components/Discover'
import { Main } from '@/components/ui/Main'

const TVPage = () => {
  return (
    <Main>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5">Phim bộ</h1>
      <Discover mediaType="tv" />
    </Main>
  )
}

export default TVPage
