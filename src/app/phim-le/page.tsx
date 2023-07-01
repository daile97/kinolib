import { Discover } from '@/components/Discover'

const MoviePage = async () => {
  return (
    <main className='px-5 md:px-12 lg:px-40 mt-5'>
      <Discover mediaType='movie' />
    </main>
  )
}

export default MoviePage
