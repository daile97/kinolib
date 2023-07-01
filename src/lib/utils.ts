import { cx } from 'class-variance-authority'
import { ClassValue } from 'class-variance-authority/dist/types'
import { twMerge } from 'tailwind-merge'
import {
  ICast,
  ICastSearchResult,
  IMovieBasicInfo,
  IMovieDetails,
  IMovieSearchResult,
  IResponses,
  ITVDetails,
  ITvBasicInfo,
  ITvSearchResult
} from './types'
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

export const getTrendingMovie = () =>
  fetcher<IResponses<IMovieBasicInfo>>(
    '/trending/movie/week',
    '?language=vi-VN'
  )

export const getTrendingTV = () =>
  fetcher<IResponses<ITvBasicInfo>>('/trending/tv/week', '?language=vi-VN')

export const getTopRatedMovie = () =>
  fetcher<IResponses<IMovieBasicInfo>>('/movie/top_rated', '?language=vi-VN')

export const getTopRatedTV = () =>
  fetcher<IResponses<IMovieBasicInfo>>('/tv/top_rated', '?language=vi-VN')

const getMovieByLang = (lang: string) =>
  fetcher<IResponses<IMovieBasicInfo>>(
    '/discover/movie',
    `?include_adult=false&include_video=false&language=vi-VN&page=1&sort_by=popularity.desc&with_original_language=${lang}`
  )

const getTVByLang = (lang: string) =>
  fetcher<IResponses<ITvBasicInfo>>(
    '/discover/tv',
    `?include_adult=false&include_video=false&language=vi-VN&page=1&sort_by=popularity.desc&with_original_language=${lang}`
  )

export const getVNMovie = () => getMovieByLang('vi')
export const getVNTV = () => getTVByLang('vi')

export const getCNMovie = () => getMovieByLang('cn')
export const getCNTV = () => getTVByLang('cn')

export const getKORMovie = () => getMovieByLang('ko')
export const getKORTV = () => getTVByLang('ko')

export const getMovieDetails = (id: string) =>
  fetcher<IMovieDetails>(
    `/movie/${id}`,
    '?append_to_response=videos,images,credits,recommendations&language=vi-VN,null'
  )

export const getTVDetails = (id: string) =>
  fetcher<ITVDetails>(
    `/tv/${id}`,
    '?append_to_response=videos,images,credits,recommendations&language=vi-VN,null'
  )

export const getAllMovie = () =>
  fetcher<IResponses<IMovieBasicInfo>>(
    '/discover/movie',
    '?include_adult=false&language=vi-VN&page=1&sort_by=popularity.desc'
  )
export const getDiscoveredMovie = (
  pageIndex: number,
  mediaType: string,
  sortOption: string
) =>
  fetcher<IResponses<IMovieBasicInfo | ITvBasicInfo>>(
    `/discover/${mediaType}`,
    `?include_adult=false&language=vi-VN&page=${pageIndex}&sort_by=popularity.desc${sortOption}`
  )

export const getSearchResult = (term: string) =>
  fetcher<IResponses<IMovieSearchResult | ITvSearchResult | ICastSearchResult>>(
    '/search/multi',
    `?query=${term}&include_adult=false&language=vi-VNpage=1`
  )
