import { IMovieBasicInfo, IResponses, ITvBasicInfo } from './types'
import {
  getCNMovie,
  getCNTV,
  getKORMovie,
  getKORTV,
  getTopRatedMovie,
  getTopRatedTV,
  getTrendingMovie,
  getTrendingTV,
  getVNMovie,
  getVNTV
} from './utils'

export const blurDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAARCAYAAADkIz3lAAAAGElEQVR42mNkY5Q/yEAEYBxVOKpwECkEAP7jD2ldWTIFAAAAAElFTkSuQmCC"

interface INavItem {
  title: string
  id: number
  route: string
}

export interface IMovieList {
  title: string
  getData: () => Promise<IResponses<IMovieBasicInfo | ITvBasicInfo>>
}

export interface ISection {
  title: string
  lists: IMovieList[]
}

interface IHomeConfigs {
  sections: ISection[]
}

export const navItems: INavItem[] = [
  {
    title: 'Phim lẻ',
    route: '/phim-le',
    id: 1
  },
  {
    title: 'Phim bộ',
    route: '/phim-bo',
    id: 2
  },
  {
    title: 'Diễn viên',
    route: '/dien-vien',
    id: 3
  }
]

export const homeConfigs: IHomeConfigs = {
  sections: [
    {
      title: 'Phim lẻ',
      lists: [
        {
          title: 'Thịnh hành',
          getData: getTrendingMovie
        },
        {
          title: 'Đánh giá cao nhất',
          getData: getTopRatedMovie
        },
        {
          title: 'Phim Việt Nam',
          getData: getVNMovie
        },
        {
          title: 'Phim Hàn Quốc',
          getData: getKORMovie
        },
        {
          title: 'Phim Hoa ngữ',
          getData: getCNMovie
        }
      ]
    },
    {
      title: 'Phim bộ',
      lists: [
        {
          title: 'Thịnh hành',
          getData: getTrendingTV
        },
        {
          title: 'Đánh giá cao nhất',
          getData: getTopRatedTV
        },
        {
          title: 'Phim Việt Nam',
          getData: getVNTV
        },
        {
          title: 'Phim Hàn Quốc',
          getData: getKORTV
        },
        {
          title: 'Phim Hoa ngữ',
          getData: getCNTV
        }
      ]
    }
  ]
}
