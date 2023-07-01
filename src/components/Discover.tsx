'use client'

import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { IMovieBasicInfo, IResponses, ITvBasicInfo } from '@/lib/types'
import { getDiscoveredMovie, getMediaType, getName } from '@/lib/utils'
import { genres } from '@/lib/tmdb'

interface IProps {
  mediaType: string
}

export const Discover = ({ mediaType }: IProps) => {
  const [data, setData] = useState<IResponses<IMovieBasicInfo | ITvBasicInfo>>()
  const [pageIndex, setPageIndex] = useState<number>(1)
  const [genre, setGenre] = useState('')
  const getMovie = useCallback(async () => {
    const data = await getDiscoveredMovie(
      pageIndex,
      mediaType,
      genre !== '' ? `&with_genres=${genre}` : ''
    )
    setData(data)
  }, [pageIndex, mediaType, genre])
  const onSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value)
  }, [])
  useEffect(() => {
    const controller = new AbortController()
    getMovie()
    return () => controller.abort()
  }, [getMovie])
  return (
    <div>
      <select
        className="bg-transparent text-sm mb-5 border-[1px] rounded-md"
        value={genre}
        onChange={onSelect}
      >
        {genres.map(genre => (
          <option
            value={genre.id}
            key={genre.id}
            className="text-black bg-[rgba(255,255,255,0.0)]"
          >
            {genre.name}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5">
        {data &&
          data.results.map(movie => (
            <MovieCard
              id={movie.id}
              filePath={movie.poster_path || ''}
              title={getName(movie)}
              key={movie.id}
              route={getMediaType(movie) === 'Phim bộ' ? 'phim-bo' : 'phim-le'}
            />
          ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <button onClick={() => setPageIndex(prev => prev - 1)}>Prev</button>
        <span>{pageIndex}</span>
        <button onClick={() => setPageIndex(prev => prev + 1)}>Next</button>
      </div>
    </div>
  )
}
