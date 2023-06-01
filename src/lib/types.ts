interface IImageConfig {
  route: string
  height: number
  width: number
}

export interface IImageConfigs {
  backdrop: {
    lg: IImageConfig
    sm: IImageConfig
  }
  poster: {
    lg: IImageConfig
    sm: IImageConfig
  }
}

export interface IBasicInfo {
  id: number
  overview: string
  backdrop_path: string | null
  poster_path: string | null
  vote_average: number
}

interface IGenre {
  id: number
  name: string
}

export interface IMovieBasicInfo extends IBasicInfo {
  title: string
}

export interface ITvBasicInfo extends IBasicInfo {
  name: string
}

export interface IMovieDetails extends IMovieBasicInfo {
  genres: IGenre[]
  release_date: string
  tagline: string
}

export interface IResponses<T> {
  results: T[]
}
