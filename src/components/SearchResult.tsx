import {
  ICastSearchResult,
  IMovieSearchResult,
  ITvSearchResult
} from '@/lib/types'
import { MovieCard } from './MovieCard'
import { getName } from '@/lib/utils'

interface IProps {
  data: (IMovieSearchResult | ICastSearchResult | ITvSearchResult)[]
}

export const SearchResult = ({ data }: IProps) => {
  if (data.length === 0) return <p>Không tìm thấy kết quả phù hợp</p>

  return (
    <section className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {data.map(res => {
        if ('profile_path' in res)
          return (
            <MovieCard
              key={res.id}
              title={res.name}
              filePath={res.profile_path}
              route="dien-vien"
              id={res.id}
            />
          )
        else
          return (
            <MovieCard
              key={res.id}
              id={res.id}
              title={getName(res)}
              filePath={res.poster_path || ''}
              route={res.media_type === 'movie' ? 'phim-le' : 'phim-bo'}
            />
          )
      })}
    </section>
  )
}
