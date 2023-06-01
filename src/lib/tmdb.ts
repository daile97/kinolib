import { IImageConfigs } from "./types"

const accessToken = process.env.ACCESS_TOKEN

export const baseUrl = 'https://api.themoviedb.org/3'

export const imageBaseUrl = 'https://image.tmdb.org/t/p'

export const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`
  }
}

export const imageConfigs: IImageConfigs = {
  backdrop: {
    lg: {
      route: '/original',
      height: 810,
      width: 1440
    },
    sm: {
      route: '/w780',
      height: 438.75,
      width: 780
    }
  },
  poster: {
    lg: {
      route: '/original',
      height: 1170,
      width: 780
    },
    sm: {
      route: '/w500',
      height: 750,
      width: 500
    }
  }
}
