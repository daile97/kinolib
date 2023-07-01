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
  },
  profile: {
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

export interface IGenre {
  id: number
  name: string
}

export interface IColection {
  id: number
  name: string
  backdrop_path: string
  poster_path: string
}

export interface ICast {
  id: number
  name: string
  character: string
  popularity: number
  profile_path: string
}

export interface ICastSearchResult extends ICast {
  media_type: string
}

export interface IImage {
  aspect_ratio: number
  height: number
  file_path: string
  width: number
}

export interface IVideos {
  id: string
  iso_639_1: string
  type: string
  site: string
  key: string
}

export interface ISeason {
  id: number
  episode_count: number
  season_number: number
  name: string
  poster_path: string
}

export interface IMovieBasicInfo extends IBasicInfo {
  title: string
}

export interface IMovieSearchResult extends IMovieBasicInfo {
  media_type: string
}

export interface ITvBasicInfo extends IBasicInfo {
  name: string
}

export interface ITvSearchResult extends ITvBasicInfo {
  media_type: string
}

export interface IMovieDetails extends IMovieBasicInfo {
  original_title: string
  genres: IGenre[]
  release_date: string
  tagline: string
  runtime: number
  credits: {
    cast: ICast[]
  }
  belongs_to_collection: IColection
  images: {
    backdrops: IImage[]
  }
  recommendations: {
    results: IMovieBasicInfo[]
  }
  videos: {
    results: IVideos[]
  }
}

export interface ITVDetails extends ITvBasicInfo {
  genres: IGenre[]
  tagline: string
  credits: {
    cast: ICast[]
  }
  images: {
    backdrops: IImage[]
  }
  recommendations: {
    results: ITvBasicInfo[]
  }
  seasons: ISeason[]
  videos: {
    results: IVideos[]
  }
}

export interface IResponses<T> {
  results: T[]
  total_pages: number
}
