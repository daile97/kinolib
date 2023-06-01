import { cx } from 'class-variance-authority'
import { ClassValue } from 'class-variance-authority/dist/types'
import { twMerge } from 'tailwind-merge'
import { IMovieBasicInfo, IResponses, ITvBasicInfo } from './types'
import { baseUrl, fetchOptions, imageBaseUrl } from './tmdb'

// According to the cva docs, the library still has a small margin of error
// wrap the cva components with twMerge to avoid styling conflicts

export const mcn = (...classes: ClassValue[]) => twMerge(cx(...classes))

export const getName = (movie: IMovieBasicInfo | ITvBasicInfo) =>
  'title' in movie ? movie.title : movie.name

export const getMediaType = (movie: IMovieBasicInfo | ITvBasicInfo) =>
  'title' in movie ? 'Phim lẻ' : 'Phim bộ'

export const getImageUrl = (route: string, filePath: string) =>
  `${imageBaseUrl}${route}${filePath}`

export const fetcher = async <T>(route: string, query: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${route}${query}`, fetchOptions)
  if (res.ok) return res.json()
  throw new Error('Failed to fetch data')
}

export const getTrending = () =>
  fetcher<IResponses<IMovieBasicInfo | ITvBasicInfo>>(
    '/trending/all/day',
    '?language=vi-VN'
  )
